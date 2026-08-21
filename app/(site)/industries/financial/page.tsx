import type { Metadata } from "next";
import { DualCta, Sections } from "@/components/article-blocks";
import { PageShell } from "@/components/page-shell";

export const metadata: Metadata = {
  title: "Financial translations",
  description: "Translation of bank letters and printed statements. Figures as printed. Not an audit.",
};

export default function Page() {
  return (
    <PageShell kicker="Industries" title="The figures stay the figures." lede="Bank letters, statements, and employment-income letters. We do not certify that a balance is true — only that the printed text was translated.">
      <Sections
        items={[
        { title: "Typical sources", body: "Bank reference letters, printed statements, tax extracts, employment letters used in a filing." },
        { title: "Currency note", body: "An optional $12/page note converting printed amounts to USD. It is arithmetic on the page, not a valuation." },
        { title: "Tier", body: "Certified Professional for a short letter. Detailed for multi-page statements. We are not your accountant." },
        ]}
      />
      
      <DualCta />
    </PageShell>
  );
}
