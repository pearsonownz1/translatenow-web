import type { Metadata } from "next";
import { DualCta, Sections } from "@/components/article-blocks";
import { PageShell } from "@/components/page-shell";

export const metadata: Metadata = {
  title: "Legal translations",
  description: "Human translation of decrees, orders, and pleadings. Certified when a clerk asked for a statement.",
};

export default function Page() {
  return (
    <PageShell kicker="Industries" title="The caption stays the caption." lede="Court paper is counted by words. We translate what is on the page. We do not summarize a judgment into a letter.">
      <Sections
        items={[
        { title: "Typical sources", body: "Divorce decrees, custody orders, criminal dispositions, contracts annexed to a filing." },
        { title: "Tier", body: "Certified Detailed or Expert. Notarization if the clerk’s instruction says so. Apostille only for use abroad." },
        { title: "Limits", body: "This is not legal advice and not a court filing service. Counsel still owns the case." },
        ]}
      />
      
      <DualCta />
    </PageShell>
  );
}
