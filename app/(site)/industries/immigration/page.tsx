import type { Metadata } from "next";
import { DualCta, Sections } from "@/components/article-blocks";
import { PageShell } from "@/components/page-shell";

export const metadata: Metadata = {
  title: "Immigration translations",
  description: "Certified translations for USCIS and IRCC packets. Civil records, clearances, identity pages.",
};

export default function Page() {
  return (
    <PageShell kicker="Industries" title="The packet, not the case." lede="We translate the attachments. We do not file forms, interpret eligibility, or sit between you and counsel.">
      <Sections
        items={[
        { title: "Typical sources", body: "Birth and marriage records, divorce decrees, police clearances, identity pages, diplomas." },
        { title: "Which statement", body: "U.S. filings use a statement written to the style of 8 CFR 103.2(b)(3). Canadian filings follow IRCC’s instruction. Neither agency endorses vendors." },
        { title: "Path", body: "Most people start an order. If the scan is poor or the pair is unusual, request a quote first." },
        ]}
      />
      
      <DualCta />
    </PageShell>
  );
}
