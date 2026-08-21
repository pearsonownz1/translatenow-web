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

function ServiceStep({
  draft,
  patch,
}: {
  draft: OrderDraft;
  patch: (p: Partial<OrderDraft>) => void;
}) {
  return (
    <div className="space-y-8">
      <fieldset className="space-y-3">
        <legend className="text-[0.85rem] text-ink/80">Service</legend>
        {(
          [
            ["certified", "Certified — includes a signed accuracy statement"],
            ["standard", "Standard — translation only, no statement"],
          ] as const
        ).map(([value, label]) => (
          <label key={value} className="flex items-start gap-3">
            <input
              type="radio"
              name="service"
              checked={draft.service === value}
              onChange={() => patch(applyService(draft, value))}
              className="mt-1"
            />
            <span>{label}</span>
          </label>
        ))}
      </fieldset>

      {draft.service === "certified" ? (
        <fieldset className="space-y-3">
          <legend className="text-[0.85rem] text-ink/80">Tier</legend>
          {(["professional", "detailed", "expert"] as TierId[]).map((id) => (
            <label key={id} className="flex items-start gap-3">
              <input
                type="radio"
                name="tier"
                checked={draft.tier === id}
                onChange={() => patch({ tier: id })}
                className="mt-1"
              />
              <span>
                {TIERS[id].name} — {formatUsd(TIERS[id].price)}/page
                <span className="mt-1 block text-[0.8rem] text-ink/50">
                  {TIERS[id].blurb}
                </span>
              </span>
            </label>
          ))}
        </fieldset>
      ) : (
        <p className="text-[0.95rem] text-ink/70">
          Standard is {formatUsd(TIERS.standard.price)} per page.
        </p>
      )}

      <fieldset className="space-y-3">
        <legend className="text-[0.85rem] text-ink/80">Turnaround</legend>
        <label className="flex items-start gap-3">
          <input
            type="radio"
            name="turnaround"
            checked={draft.turnaround === "standard"}
            onChange={() => patch({ turnaround: "standard" })}
            className="mt-1"
          />
          <span>Standard — next business day</span>
        </label>
        <label className="flex items-start gap-3">
          <input
            type="radio"
            name="turnaround"
            checked={draft.turnaround === "rush"}
            onChange={() => patch({ turnaround: "rush" })}
            className="mt-1"
          />
          <span>Rush — same day (demo; published rates unchanged)</span>
        </label>
      </fieldset>
    </div>
  );
}

function LanguageStep({
  draft,
  patch,
}: {
  draft: OrderDraft;
  patch: (p: Partial<OrderDraft>) => void;
}) {
  return (
    <div className="space-y-5">
      <Field label="Source language">
        <SelectInput
          value={draft.sourceLanguage}
          onChange={(e) => patch({ sourceLanguage: e.target.value })}
        >
          <option value="">Select</option>
          {LANGUAGES.map((lang) => (
            <option key={lang} value={lang}>
              {lang}
            </option>
          ))}
        </SelectInput>
      </Field>
      <Field label="Target language">
        <SelectInput
          value={draft.targetLanguage}
          onChange={(e) => patch({ targetLanguage: e.target.value })}
        >
          <option value="">Select</option>
          {LANGUAGES.map((lang) => (
            <option key={`t-${lang}`} value={lang}>
              {lang}
            </option>
          ))}
        </SelectInput>
      </Field>
    </div>
  );
}

function DocumentStep({
  draft,
  patch,
}: {
  draft: OrderDraft;
  patch: (p: Partial<OrderDraft>) => void;
}) {
  return (
    <div className="space-y-5">
      <Field label="Document type">
        <SelectInput
          value={draft.documentType}
          onChange={(e) => patch({ documentType: e.target.value })}
        >
          {ORDER_DOCUMENT_OPTIONS.map((name) => (
            <option key={name} value={name}>
              {name}
            </option>
          ))}
        </SelectInput>
      </Field>
      <Field
        label="Page count"
        hint="A page is 250 words of source text."
      >
        <TextInput
          type="number"
          min={1}
          step={1}
          value={draft.pages}
          onChange={(e) =>
            patch({ pages: Math.max(1, Number(e.target.value) || 1) })
          }
        />
      </Field>
      <Field
        label="Documents (for apostille)"
        hint="Used only if you add an apostille later. Default is 1."
      >
        <TextInput
          type="number"
          min={1}
          step={1}
          value={draft.documents}
          onChange={(e) =>
            patch({ documents: Math.max(1, Number(e.target.value) || 1) })
          }
        />
      </Field>
    </div>
  );
}

function FilesStep({
  draft,
  patch,
}: {
  draft: OrderDraft;
  patch: (p: Partial<OrderDraft>) => void;
}) {
  const add = (list: FileList | null) => {
    if (!list) return;
    const next: FileMeta[] = [
      ...draft.files,
      ...Array.from(list).map((file) => ({ name: file.name, size: file.size })),
    ];
    patch({ files: next });
  };

  return (
    <div className="space-y-5">
      <Field
        label="Files"
        hint="Filenames and sizes only. Contents are not read, uploaded, or stored."
      >
        <input
          type="file"
          multiple
          className="mt-2 block w-full text-[0.9rem]"
          onChange={(e) => {
            add(e.target.files);
            e.currentTarget.value = "";
          }}
        />
      </Field>
      {draft.files.length === 0 ? (
        <p className="text-[0.95rem] text-ink/60">
          No files listed. You can continue without one in this demo.
        </p>
      ) : (
        <ul className="divide-y divide-hairline border-y border-hairline">
          {draft.files.map((file, i) => (
            <li
              key={`${file.name}-${i}`}
              className="flex items-baseline justify-between gap-4 py-3 text-[0.95rem]"
            >
              <span>
                {file.name}{" "}
                <span className="text-ink/45">{formatBytes(file.size)}</span>
              </span>
              <button
                type="button"
                className="text-[0.8rem] text-ink/50 hover:text-copper"
                onClick={() =>
                  patch({ files: draft.files.filter((_, j) => j !== i) })
                }
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

function AddonsStep({
  draft,
  patch,
}: {
  draft: OrderDraft;
  patch: (p: Partial<OrderDraft>) => void;
}) {
  const toggle = (id: keyof typeof draft.addons) =>
    patch({ addons: { ...draft.addons, [id]: !draft.addons[id] } });

  return (
    <fieldset className="space-y-5">
      <legend className="sr-only">Add-ons</legend>
      {(
        [
          ["notarization", `${formatUsd(ADDONS.notarization.price)}/order`],
          ["hardCopy", `${formatUsd(ADDONS.hardCopy.price)}/order`],
          ["apostille", `${formatUsd(ADDONS.apostille.price)}/document`],
          ["currencyNote", `${formatUsd(ADDONS.currencyNote.price)}/page`],
        ] as const
      ).map(([id, price]) => (
        <label key={id} className="flex items-start gap-3">
          <input
            type="checkbox"
            checked={draft.addons[id]}
            onChange={() => toggle(id)}
            className="mt-1"
          />
          <span>
            {ADDONS[id].name} — {price}
            <span className="mt-1 block text-[0.8rem] text-ink/50">
              {ADDONS[id].blurb}
            </span>
          </span>
        </label>
      ))}
    </fieldset>
  );
}

function DetailsStep({
  draft,
  patch,
}: {
  draft: OrderDraft;
  patch: (p: Partial<OrderDraft>) => void;
}) {
  return (
    <div className="space-y-5">
      <Field label="Name">
        <TextInput
          required
          value={draft.name}
          onChange={(e) => patch({ name: e.target.value })}
          autoComplete="name"
        />
      </Field>
      <Field label="Email">
        <TextInput
          required
          type="email"
          value={draft.email}
          onChange={(e) => patch({ email: e.target.value })}
          autoComplete="email"
        />
      </Field>
      <Field label="Phone (optional)">
        <TextInput
          type="tel"
          value={draft.phone}
          onChange={(e) => patch({ phone: e.target.value })}
          autoComplete="tel"
        />
      </Field>
      <Field label="Notes (optional)">
        <TextArea
          rows={4}
          value={draft.notes}
          onChange={(e) => patch({ notes: e.target.value })}
        />
      </Field>
    </div>
  );
}

function ReviewStep({ draft }: { draft: OrderDraft }) {
  return (
    <dl className="divide-y divide-hairline border-y border-hairline text-[0.95rem]">
      <Row label="Service" value={TIERS[draft.tier].name} />
      <Row
        label="Languages"
        value={`${draft.sourceLanguage} → ${draft.targetLanguage}`}
      />
      <Row label="Document" value={draft.documentType} />
      <Row
        label="Pages"
        value={`${draft.pages} (250 words each)`}
      />
      <Row
        label="Turnaround"
        value={
          draft.turnaround === "rush"
            ? "Rush — same day"
            : "Standard — next business day"
        }
      />
      <Row
        label="Files"
        value={
          draft.files.length
            ? draft.files.map((f) => f.name).join(", ")
            : "None listed"
        }
      />
      <Row
        label="Add-ons"
        value={
          Object.entries(draft.addons)
            .filter(([, on]) => on)
            .map(([id]) => ADDONS[id as keyof typeof ADDONS].name)
            .join(", ") || "None"
        }
      />
      <Row label="Name" value={draft.name} />
      <Row label="Email" value={draft.email} />
    </dl>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="grid gap-1 py-4 sm:grid-cols-[8rem_minmax(0,1fr)]">
      <dt className="text-ink/50">{label}</dt>
      <dd>{value}</dd>
    </div>
  );
}
