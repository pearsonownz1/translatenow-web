import type { Metadata } from "next";
import Link from "next/link";
import { Cta } from "@/components/cta";
import { PageShell } from "@/components/page-shell";
import { TIERS, formatUsd } from "@/lib/pricing";

export const metadata: Metadata = {
  title: "Certified translation",
  description:
    "Human translation plus a signed accuracy statement for USCIS, courts, and schools. Three tiers. A page is 250 words.",
};

export default function CertifiedPage() {
  return (
    <PageShell
      kicker="Certified"
      title="A translation with a statement."
      lede="The PDF includes the English (or target) text and a signed certification that the translator is competent in both languages and that the translation is complete and accurate."
    >
      <div className="mt-16 max-w-2xl divide-y divide-hairline border-y border-hairline">
        <section className="grid gap-4 py-10 md:grid-cols-2">
          <h2 className="font-display text-3xl tracking-tight">
            Who asks for it
          </h2>
          <p className="text-[1.02rem] leading-relaxed text-ink/70">
            USCIS, many state courts, some vital-records offices, and schools
            evaluating foreign credentials. If the instruction says
            “certified translation,” this is the product.{" "}
            <Link href="/uscis" className="copper-underline">
              USCIS notes
            </Link>
          </p>
        </section>
        <section className="grid gap-4 py-10 md:grid-cols-2">
          <h2 className="font-display text-3xl tracking-tight">Three tiers</h2>
          <p className="text-[1.02rem] leading-relaxed text-ink/70">
            Professional {formatUsd(TIERS.professional.price)} — civil
            certificates. Detailed {formatUsd(TIERS.detailed.price)} — longer
            records. Expert {formatUsd(TIERS.expert.price)} — legal and
            technical. Same statement on all three.{" "}
            <Link href="/pricing" className="copper-underline">
              Pricing
            </Link>
          </p>
        </section>
        <section className="grid gap-4 py-10 md:grid-cols-2">
          <h2 className="font-display text-3xl tracking-tight">
            What it is not
          </h2>
          <p className="text-[1.02rem] leading-relaxed text-ink/70">
            Not a government stamp. Not an apostille unless you add one. Not
            legal advice. USCIS does not endorse vendors. Acceptance depends
            on the source as well as the translation.
          </p>
        </section>
      </div>
      <div className="mt-12 flex flex-wrap gap-6">
        <Cta href="/order">Start an order</Cta>
        <Link href="/standard-translation" className="self-center copper-underline">
          Need standard instead
        </Link>
      </div>
    </PageShell>
  );
}
