import type { Metadata } from "next";
import Link from "next/link";
import { FindOrderForm } from "@/components/find-order-form";
import { PageShell } from "@/components/page-shell";

export const metadata: Metadata = {
  title: "Find an order",
  description:
    "Look up a demo order by number and email. This storefront has no ledger, so the result is always no match.",
};

export default function FindOrderPage() {
  return (
    <PageShell
      kicker="Find an order"
      title="A lookup with no ledger."
      lede="Enter an order number and email. This demo never finds a match — nothing is stored after you leave the confirmation page."
    >
      <FindOrderForm />
      <p className="mt-10 text-[0.95rem] text-ink/60">
        Start over?{" "}
        <Link href="/order" className="copper-underline">
          Start an order
        </Link>{" "}
        or{" "}
        <Link href="/quote" className="copper-underline">
          request a quote
        </Link>
        .
      </p>
    </PageShell>
  );
}
