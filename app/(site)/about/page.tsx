import type { Metadata } from "next";
import { DualCta } from "@/components/article-blocks";
import { PageShell } from "@/components/page-shell";

export const metadata: Metadata = {
  title: "About",
  description:
    "TranslateNow is a translation desk for people who have a packet to file. This site is a demo storefront.",
};

export default function AboutPage() {
  return (
    <PageShell
      kicker="About"
      title="A desk for the packet."
      lede="TranslateNow is for people who already have a document and a receiving office. We translate the paper. We do not interpret the law."
    >
      <div className="mt-16 max-w-xl space-y-6 text-[1.02rem] leading-relaxed text-ink/70">
        <p>
          The work is human translation. Certified orders include a signed
          accuracy statement. Standard orders do not. Pricing is per 250-word
          page, published on one page, used by the order form.
        </p>
        <p>
          This website is a demonstration storefront. There is no account
          database, no card processor, and no document store. Filenames stay
          in your browser. The pay button does not charge.
        </p>
        <p>
          We do not invent review scores or customer photographs. If you want
          a number, use the quote form or walk the order steps.
        </p>
      </div>
      <DualCta />
    </PageShell>
  );
}
