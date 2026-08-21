"use client";

import { useRouter } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { Button, Field, SelectInput, TextArea, TextInput } from "@/components/field";
import { ORDER_DOCUMENT_OPTIONS } from "@/lib/documents";
import { LANGUAGES } from "@/lib/languages";
import {
  ORDER_EMAIL_KEY,
  defaultDraft,
  formatBytes,
  loadDraft,
  saveCompleted,
  saveDraft,
  type FileMeta,
  type OrderDraft,
} from "@/lib/order";
import {
  ADDONS,
  TIERS,
  calculatePrice,
  formatUsd,
  type TierId,
} from "@/lib/pricing";

const STEPS = [
  "Service",
  "Languages",
  "Document",
  "Files",
  "Add-ons",
  "Details",
  "Review",
] as const;

function applyService(draft: OrderDraft, service: "certified" | "standard"): OrderDraft {
  if (service === "standard") {
    return { ...draft, service, tier: "standard" };
  }
  const tier = draft.tier === "standard" ? "professional" : draft.tier;
  return { ...draft, service, tier };
}

export function OrderFlow() {
  const router = useRouter();
  const [step, setStep] = useState(0);
  const [draft, setDraft] = useState<OrderDraft | null>(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const existing = loadDraft();
    const email =
      existing?.email || sessionStorage.getItem(ORDER_EMAIL_KEY) || "";
    const next = existing ?? defaultDraft(email);
    if (email && !next.email) next.email = email;
    setDraft(next);
  }, []);

  useEffect(() => {
    if (draft) saveDraft(draft);
  }, [draft]);

  const price = useMemo(() => {
    if (!draft) return null;
    return calculatePrice({
      tier: draft.tier,
      pages: draft.pages,
      documents: draft.documents,
      addons: draft.addons,
    });
  }, [draft]);

  if (!draft || !price) {
    return (
      <p className="mt-12 text-[0.95rem] text-ink/60">Loading the order form…</p>
    );
  }

  const patch = (partial: Partial<OrderDraft>) =>
    setDraft((current) => (current ? { ...current, ...partial } : current));

  const validate = (): string => {
    if (step === 1) {
      if (!draft.sourceLanguage) return "Choose a source language.";
      if (!draft.targetLanguage) return "Choose a target language.";
      if (draft.sourceLanguage === draft.targetLanguage) {
        return "Source and target should differ.";
      }
    }
    if (step === 2) {
      if (!draft.documentType) return "Name the document type.";
      if (draft.pages < 1) return "Page count must be at least 1.";
    }
    if (step === 5) {
      if (!draft.name.trim()) return "Name is required.";
      if (!draft.email.trim()) return "Email is required.";
    }
    return "";
  };

  const next = () => {
    const message = validate();
    if (message) {
      setError(message);
      return;
    }
    setError("");
    setStep((n) => Math.min(n + 1, STEPS.length - 1));
  };

  const back = () => {
    setError("");
    setStep((n) => Math.max(n - 1, 0));
  };

  const pay = () => {
    const completed = {
      ...draft,
      id: `TN-DEMO-${Date.now().toString(36).toUpperCase()}`,
      placedAt: new Date().toISOString(),
      total: price.total,
    };
    saveCompleted(completed);
    router.push("/order/done");
  };

  return (
    <div className="mt-12 grid gap-12 lg:grid-cols-[minmax(0,1fr)_16rem]">
      <div>
        <ol className="font-stamp flex flex-wrap gap-x-4 gap-y-2 text-ink/45">
          {STEPS.map((label, i) => (
            <li key={label}>
              <button
                type="button"
                onClick={() => {
                  setError("");
                  setStep(i);
                }}
                className={i === step ? "text-ink" : "hover:text-ink/70"}
              >
                {i + 1} {label}
              </button>
            </li>
          ))}
        </ol>
        <hr className="rule mt-4" />
        <p className="font-stamp mt-6 text-ink/45">
          Step {step + 1} of {STEPS.length}
        </p>
        <h2 className="mt-2 font-display text-3xl">
          {STEPS[step]}
        </h2>

        <div className="mt-8 max-w-lg">
          {step === 0 ? <ServiceStep draft={draft} patch={patch} /> : null}
          {step === 1 ? <LanguageStep draft={draft} patch={patch} /> : null}
          {step === 2 ? <DocumentStep draft={draft} patch={patch} /> : null}
          {step === 3 ? <FilesStep draft={draft} patch={patch} /> : null}
          {step === 4 ? <AddonsStep draft={draft} patch={patch} /> : null}
          {step === 5 ? <DetailsStep draft={draft} patch={patch} /> : null}
          {step === 6 ? <ReviewStep draft={draft} /> : null}
        </div>

        {error ? (
          <p className="mt-6 text-[0.95rem] text-copper">{error}</p>
        ) : null}

        <div className="mt-10 flex flex-wrap gap-4">
          {step > 0 ? (
            <Button tone="ghost" onClick={back}>
              Back
            </Button>
          ) : null}
          {step < STEPS.length - 1 ? (
            <Button onClick={next}>Continue</Button>
          ) : (
            <Button onClick={pay}>Pay — nothing is charged</Button>
          )}
        </div>
        {step === 6 ? (
          <p className="mt-4 max-w-md text-[0.8rem] leading-relaxed text-ink/50">
            Demo payment. No card field. No charge. You will see a summary
            next.
          </p>
        ) : null}
      </div>

      <aside className="h-fit border border-hairline p-5">
        <p className="font-stamp text-ink/45">
          Running total
        </p>
        <dl className="mt-4 space-y-2 text-[0.9rem]">
          <div className="flex justify-between gap-4">
            <dt>
              {draft.pages} page{draft.pages === 1 ? "" : "s"} ×{" "}
              {formatUsd(price.pageRate)}
            </dt>
            <dd>{formatUsd(price.pageSubtotal)}</dd>
          </div>
          {price.addonLines.map((line) => (
            <div key={line.id} className="flex justify-between gap-4">
              <dt>{line.label}</dt>
              <dd>{formatUsd(line.amount)}</dd>
            </div>
          ))}
        </dl>
        <hr className="rule my-4" />
        <p className="flex justify-between font-medium">
          <span>Total</span>
          <span>{formatUsd(price.total)}</span>
        </p>
        <p className="mt-3 text-[0.75rem] leading-relaxed text-ink/50">
          Same rates as the pricing page. Nothing is charged.
        </p>
      </aside>
    </div>
  );
}
