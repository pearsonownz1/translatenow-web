import type { Metadata } from "next";
import Link from "next/link";
import { DualCta, Sections } from "@/components/article-blocks";
import { PageShell } from "@/components/page-shell";

export const metadata: Metadata = {
  title: "Divorce decree translation",
  description: "Certified translation of divorce judgments and decrees. Counted by words.",
};

export default function Page() {
  return (
    <PageShell kicker="Documents" title="The caption and the order." lede="Decrees are longer than certificates. Two to eight pages is ordinary. We translate operative clauses, not a summary.">
      <Sections
        items={[
        { title: "What we translate", body: "Court caption, parties, date of judgment, findings if printed, and the order itself." },
        { title: "Redactions", body: "If the source is redacted, the translation says so. We do not restore omitted text." },
        { title: "Usual tier", body: "Certified Detailed. Expert if the instrument is dense or highly formal." },
        ]}
      />
      <p className="mt-10 text-[0.95rem] text-ink/60">
        <Link href="/documents" className="copper-underline">
          All document types
        </Link>
      </p>
      <DualCta />
    </PageShell>
  );
}
