import type { Metadata } from "next";
import { DualCta, Sections } from "@/components/article-blocks";
import { PageShell } from "@/components/page-shell";

export const metadata: Metadata = {
  title: "Academic translations",
  description: "Diplomas and transcripts for schools and licensing boards. Marks left in the source scale.",
};

export default function Page() {
  return (
    <PageShell kicker="Industries" title="The table, not a GPA." lede="Schools want the record as issued. We do not convert marks into a 4.0 or evaluate an institution.">
      <Sections
        items={[
        { title: "Typical sources", body: "Diplomas, transcripts, enrollment letters, course descriptions printed by the school." },
        { title: "Tier", body: "Professional for a single diploma. Detailed for multi-page transcripts." },
        { title: "Evaluations", body: "A credential evaluation is a different product, sold by other offices. We translate; they opine." },
        ]}
      />
      
      <DualCta />
    </PageShell>
  );
}
