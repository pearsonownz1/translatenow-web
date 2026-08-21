import type { Metadata } from "next";
import Link from "next/link";
import { DualCta, Sections } from "@/components/article-blocks";
import { PageShell } from "@/components/page-shell";

export const metadata: Metadata = {
  title: "Diploma translation",
  description: "Certified translation of diplomas and degree certificates. Seals noted, not redrawn.",
};

export default function Page() {
  return (
    <PageShell kicker="Documents" title="Institution, degree, date." lede="A single sheet is usually one page. A cover leaf with a motto still counts if it has words.">
      <Sections
        items={[
        { title: "What we translate", body: "School, title, field if stated, date, honors, signatories, and any printed formula." },
        { title: "Seals", body: "Noted in words. Embossing that cannot be read is marked illegible, not guessed." },
        { title: "Usual tier", body: "Certified Professional. Detailed if the text is dense or highly formal." },
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
