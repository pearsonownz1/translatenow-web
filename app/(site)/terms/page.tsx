import type { Metadata } from "next";
import { PageShell } from "@/components/page-shell";

export const metadata: Metadata = {
  title: "Terms",
  description:
    "Demo terms for the TranslateNow storefront. No real orders, payments, or document processing.",
};

export default function TermsPage() {
  return (
    <PageShell
      kicker="Terms"
      title="A demonstration, not a contract for work."
      lede="These pages describe a product. They do not accept a paid engagement. Nothing you submit here creates a translation job."
    >
      <div className="mt-16 max-w-xl space-y-6 text-[1.02rem] leading-relaxed text-ink/70">
        <p>
          Checkout totals are illustrations. The pay control does not collect
          a card and does not charge. File controls accept a name and size
          only. Contents are not read, uploaded, or stored.
        </p>
        <p>
          Copy on USCIS and IRCC pages is informational. Those agencies do
          not endorse this site. A live service, if one existed, would still
          be subject to the source document and the receiving office.
        </p>
        <p>
          Do not send original records, card numbers, or government
          identifiers to this demo. There is no one on the other end of the
          form.
        </p>
      </div>
    </PageShell>
  );
}
