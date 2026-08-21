"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Cta } from "@/components/cta";
import { loadCompleted, type CompletedOrder } from "@/lib/order";
import { ADDONS, TIERS, calculatePrice, formatUsd } from "@/lib/pricing";

export function OrderDone() {
  const [order, setOrder] = useState<CompletedOrder | null | undefined>(
    undefined,
  );

  useEffect(() => {
    setOrder(loadCompleted());
  }, []);

  if (order === undefined) {
    return <p className="text-[0.95rem] text-ink/60">Loading summary…</p>;
  }

  if (!order) {
    return (
      <>
        <p className="text-[0.7rem] uppercase tracking-[0.16em] text-ink/45">
          Order
        </p>
        <h1 className="mt-4 font-display max-w-[14ch] text-[clamp(2.75rem,7vw,5.75rem)] leading-[0.92] tracking-tight">
          No summary in this browser.
        </h1>
        <p className="mt-8 max-w-md text-[1.05rem] leading-relaxed text-ink/70">
          Complete the demo checkout to see a receipt. Nothing is stored after
          the tab is cleared.
        </p>
        <div className="mt-10">
          <Cta href="/order">Start an order</Cta>
        </div>
      </>
    );
  }

  const price = calculatePrice({
    tier: order.tier,
    pages: order.pages,
    documents: order.documents,
    addons: order.addons,
  });

  return (
    <>
      <p className="text-[0.7rem] uppercase tracking-[0.16em] text-ink/45">
        Demo confirmation
      </p>
      <h1 className="mt-4 font-display max-w-[14ch] text-[clamp(2.75rem,7vw,5.75rem)] leading-[0.92] tracking-tight">
        Nothing was charged.
      </h1>
      <p className="mt-8 max-w-md text-[1.05rem] leading-relaxed text-ink/70">
        Reference {order.id}. This is a summary of what you entered. No card
        was collected. No document was stored.
      </p>

      <dl className="mt-16 max-w-xl divide-y divide-hairline border-y border-hairline text-[0.95rem]">
        <Line k="Service" v={TIERS[order.tier].name} />
        <Line
          k="Languages"
          v={`${order.sourceLanguage} → ${order.targetLanguage}`}
        />
        <Line k="Document" v={order.documentType} />
        <Line k="Pages" v={String(order.pages)} />
        <Line
          k="Turnaround"
          v={
            order.turnaround === "rush"
              ? "Rush — same day"
              : "Standard — next business day"
          }
        />
        <Line
          k="Files"
          v={
            order.files.length
              ? order.files.map((f) => f.name).join(", ")
              : "None listed"
          }
        />
        <Line
          k="Add-ons"
          v={
            Object.entries(order.addons)
              .filter(([, on]) => on)
              .map(([id]) => ADDONS[id as keyof typeof ADDONS].name)
              .join(", ") || "None"
          }
        />
        <Line k="Name" v={order.name} />
        <Line k="Email" v={order.email} />
        <Line
          k="Pages subtotal"
          v={`${order.pages} × ${formatUsd(price.pageRate)} = ${formatUsd(price.pageSubtotal)}`}
        />
        {price.addonLines.map((line) => (
          <Line key={line.id} k={line.label} v={formatUsd(line.amount)} />
        ))}
        <Line k="Total" v={formatUsd(price.total)} />
      </dl>

      <p className="mt-10 max-w-md text-[0.95rem] text-ink/60">
        Lookup from another session will not find this.{" "}
        <Link href="/find-order" className="copper-underline">
          Find an order
        </Link>{" "}
        always reports no match.
      </p>
      <div className="mt-10 flex flex-wrap gap-6">
        <Cta href="/order">Place another demo order</Cta>
        <Link href="/quote" className="self-center copper-underline">
          Request a quote
        </Link>
      </div>
    </>
  );
}

function Line({ k, v }: { k: string; v: string }) {
  return (
    <div className="grid gap-1 py-4 sm:grid-cols-[10rem_minmax(0,1fr)]">
      <dt className="text-ink/50">{k}</dt>
      <dd>{v}</dd>
    </div>
  );
}
