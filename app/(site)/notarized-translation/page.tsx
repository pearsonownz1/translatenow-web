import type { Metadata } from "next";
import { DualCta, Sections } from "@/components/article-blocks";
import { PageShell } from "@/components/page-shell";

export const metadata: Metadata = {
  title: "Notarized translation",
  description: "Notary acknowledges the translator’s signature. $19 per order. Not an apostille. USCIS does not require it.",
};

export default function Page() {
  return (
    <PageShell kicker="Notarized" title="A notary, if someone asked." lede="Notarization is an add-on: $19 per order. A notary acknowledges the translator’s signature. It is not a second translation and not an apostille.">
      <Sections
        items={[
        { title: "When it is useful", body: "Some state courts, some foreign consulates, and some employers ask for a notarized certification. The federal USCIS regulation does not." },
        { title: "What it is not", body: "Not an apostille. An apostille is a separate $165-per-document step on the notarial certificate, used for Hague countries." },
        { title: "How to add it", body: "Check the box on the order form. The running total uses the same figure as the pricing page." },
        ]}
      />
      
      <DualCta />
    </PageShell>
  );
}
