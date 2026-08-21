import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/page-shell";
import { QuoteForm } from "@/components/quote-form";

export const metadata: Metadata = {
  title: "Request a quote",
  description:
    "Name, email, languages, and notes. This demo shows a thank-you and does not open a job.",
};

export default function QuotePage() {
  return (
    <PageShell
      kicker="Quote"
      title="If the scan is messy, ask first."
      lede="Name, email, the language pair, and a note. No file is uploaded. For a straightforward certificate, you can skip this and start an order."
    >
      <QuoteForm />
      <p className="mt-10 text-[0.95rem] text-ink/60">
        Prefer the calculator?{" "}
        <Link href="/order" className="copper-underline">
          Start an order
        </Link>
        .
      </p>
    </PageShell>
  );
}
