import type { Metadata } from "next";
import Link from "next/link";
import { Cta } from "@/components/cta";
import { PageShell } from "@/components/page-shell";
import { TIERS, formatUsd } from "@/lib/pricing";

export const metadata: Metadata = {
  title: "Standard translation",
  description:
    "Human translation without a certification statement. $18 per 250-word page. For reading, not filing.",
};

export default function StandardPage() {
  return (
    <PageShell
      kicker="Standard"
      title="The words. No statement."
      lede={`${formatUsd(TIERS.standard.price)} a page. Same human translators. No signed accuracy statement, no notary block. Use this when you need to read the document, not attach it to a government form.`}
    >
      <div className="mt-16 max-w-2xl divide-y divide-hairline border-y border-hairline">
        <section className="grid gap-4 py-10 md:grid-cols-2">
          <h2 className="font-display text-3xl tracking-tight">When it fits</h2>
          <p className="text-[1.02rem] leading-relaxed text-ink/70">
            A letter you want to understand. A web printout. A draft before
            you decide to file. If an officer or clerk asked for a certified
            translation, do not use this.
          </p>
        </section>
        <section className="grid gap-4 py-10 md:grid-cols-2">
          <h2 className="font-display text-3xl tracking-tight">
            What you receive
          </h2>
          <p className="text-[1.02rem] leading-relaxed text-ink/70">
            A PDF of the target text. Layout follows the source where it can.
            No certification page. You can upgrade a later order to certified
            if the office asks.
          </p>
        </section>
      </div>
      <div className="mt-12 flex flex-wrap gap-6">
        <Cta href="/order">Start an order</Cta>
        <Link href="/certified-translation" className="self-center copper-underline">
          Certified instead
        </Link>
      </div>
    </PageShell>
  );
}
