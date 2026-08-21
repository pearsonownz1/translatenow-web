import type { Metadata } from "next";
import { DualCta, Sections } from "@/components/article-blocks";
import { PageShell } from "@/components/page-shell";

export const metadata: Metadata = {
  title: "IRCC translations (Canada)",
  description: "Certified translations for IRCC filings. IRCC does not approve or endorse translation vendors.",
};

export default function Page() {
  return (
    <PageShell kicker="IRCC" title="Canada has its own desk." lede="IRCC asks for a complete translation and a translator certification when a document is not in English or French. IRCC does not approve, certify, or endorse vendors.">
      <Sections
        items={[
        { title: "What we supply", body: "A full translation into English or French and a signed statement of competence and accuracy. That is the paper the instruction describes. It is not a government form." },
        { title: "What we do not claim", body: "IRCC does not maintain an approved-vendor list for this work. No company can promise a particular application will be accepted. The source still has to be complete and readable." },
        { title: "Common records", body: "Civil certificates, police clearances, diplomas, and transcripts. Use Certified Professional or Detailed by length. Notarization only if a specific office asked." },
        ]}
      />
      
      <DualCta />
    </PageShell>
  );
}
