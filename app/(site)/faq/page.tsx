import type { Metadata } from "next";
import { DualCta } from "@/components/article-blocks";
import { Faq } from "@/components/faq";
import { PageShell } from "@/components/page-shell";
import { PAGE_WORDS, TIERS, formatUsd } from "@/lib/pricing";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Pages, certification, USCIS, IRCC, notarization, apostille, turnaround, and this demo checkout.",
};

export default function FaqPage() {
  return (
    <PageShell
      kicker="FAQ"
      title="Short answers."
      lede="If the receiving office printed an instruction, that instruction wins."
    >
      <div className="mt-16 max-w-xl">
        <Faq
          items={[
            {
              q: "What is a page?",
              a: `Up to ${PAGE_WORDS} words in the source. A sparse civil extract is usually one page. A transcript is not.`,
            },
            {
              q: "Certified or standard?",
              a: "Certified includes a signed accuracy statement. Standard is the translation only. If an office asked for a certified translation, use certified.",
            },
            {
              q: "Does USCIS approve you?",
              a: "No. USCIS does not approve or endorse translation vendors. We supply a statement written to the style of 8 CFR 103.2(b)(3). Acceptance still depends on the source.",
            },
            {
              q: "Does IRCC approve you?",
              a: "No. IRCC does not approve or endorse vendors either. Canadian filings get a complete translation and a translator certification as the instruction describes.",
            },
            {
              q: "Do I need a notary?",
              a: "Only if something in writing asked for one. The federal USCIS regulation does not. Notarization is $19 per order.",
            },
            {
              q: "What is an apostille?",
              a: "A Hague certificate on the notarial paper, used when a foreign office asked for one. $165 per document. It is not a translation.",
            },
            {
              q: "How fast?",
              a: "Standard is the next business day. Rush is same day, offered as a checkbox. Published page rates do not change for rush in this demo.",
            },
            {
              q: "Which languages?",
              a: "Seventy-plus names on the languages page. If yours is missing, use the quote form.",
            },
            {
              q: "Do you store my files?",
              a: "Not in this demo. The order form keeps filename and size in the browser only. Nothing is uploaded.",
            },
            {
              q: "Will I be charged?",
              a: "No. The pay button does not collect a card and does not charge. The total is so you can see the math.",
            },
            {
              q: "What does Certified Professional cost?",
              a: `${formatUsd(TIERS.professional.price)} per page. Detailed is ${formatUsd(TIERS.detailed.price)}. Expert is ${formatUsd(TIERS.expert.price)}. Standard is ${formatUsd(TIERS.standard.price)}.`,
            },
          ]}
        />
      </div>
      <DualCta />
    </PageShell>
  );
}
