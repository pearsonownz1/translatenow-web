import type { Metadata } from "next";
import Link from "next/link";
import { Cta } from "@/components/cta";
import { PageShell } from "@/components/page-shell";

export const metadata: Metadata = {
  title: "USCIS translations",
  description:
    "Translations include a signed accuracy statement intended to meet 8 CFR 103.2(b)(3) style requirements. USCIS does not endorse vendors.",
};

export default function UscisPage() {
  return (
    <PageShell
      kicker="USCIS"
      title="The regulation is 8 CFR 103.2(b)(3)."
      lede="It asks for a full English translation of any foreign-language document submitted, and a certification that the translator is competent and that the translation is complete and accurate."
      wide
    >
      <div className="mt-16 max-w-2xl space-y-10">
        <section>
          <h2 className="font-display text-3xl tracking-tight">
            What we put on the statement
          </h2>
          <p className="mt-4 text-[1.02rem] leading-relaxed text-ink/70">
            The translator’s name, a statement of competence in the source and
            target languages, a statement that the translation is complete and
            accurate, a date, and a signature. That is the style the
            regulation describes. It is not a government form.
          </p>
        </section>
        <section>
          <h2 className="font-display text-3xl tracking-tight">
            What we do not claim
          </h2>
          <p className="mt-4 text-[1.02rem] leading-relaxed text-ink/70">
            USCIS does not approve, certify, or endorse translation companies.
            No vendor can promise that a particular filing will be accepted.
            Acceptance depends on the source document — complete, legible,
            unaltered — as much as on the translation.
          </p>
        </section>
        <section>
          <h2 className="font-display text-3xl tracking-tight">
            Common attachments
          </h2>
          <p className="mt-4 text-[1.02rem] leading-relaxed text-ink/70">
            Birth and marriage certificates, divorce decrees, police
            clearances, passports, diplomas, and transcripts. See the{" "}
            <Link href="/documents" className="copper-underline">
              document index
            </Link>
            . If a form instruction names a document, send that document, not a
            summary.
          </p>
        </section>
        <section>
          <h2 className="font-display text-3xl tracking-tight">Notarization</h2>
          <p className="mt-4 text-[1.02rem] leading-relaxed text-ink/70">
            The federal regulation does not require a notary. Some local
            offices and some foreign uses do. Add it only if something in
            writing asked for it. Apostille is a different step.
          </p>
        </section>
      </div>
      <div className="mt-12">
        <Cta href="/order">Start a certified order</Cta>
      </div>
    </PageShell>
  );
}
