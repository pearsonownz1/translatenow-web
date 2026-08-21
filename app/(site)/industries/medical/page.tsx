import type { Metadata } from "next";
import { DualCta, Sections } from "@/components/article-blocks";
import { PageShell } from "@/components/page-shell";

export const metadata: Metadata = {
  title: "Medical translations",
  description: "Human translation of printed medical records and immunization cards. Not clinical advice.",
};

export default function Page() {
  return (
    <PageShell kicker="Industries" title="The chart as printed." lede="Discharge summaries, clinic notes, and immunization cards. We translate text. We do not diagnose, code, or advise treatment.">
      <Sections
        items={[
        { title: "Typical sources", body: "Clinic printouts, vaccination cards, imaging reports if they are text, referral letters." },
        { title: "Handwriting", body: "Illegible lines stay illegible. We do not complete a missing dose date." },
        { title: "Tier", body: "Certified Detailed for narrative notes. Professional for a short card. This is for an office that asked for a translation — not for a bedside." },
        ]}
      />
      
      <DualCta />
    </PageShell>
  );
}
