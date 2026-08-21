import type { Metadata } from "next";
import Link from "next/link";
import { DualCta, Sections } from "@/components/article-blocks";
import { PageShell } from "@/components/page-shell";

export const metadata: Metadata = {
  title: "Marriage certificate translation",
  description: "Certified translation of civil marriage records. Parties, date, place, officiant.",
};

export default function Page() {
  return (
    <PageShell kicker="Documents" title="The parties and the date." lede="Most civil extracts fit one page. Booklets with a printed liturgy are counted by words.">
      <Sections
        items={[
        { title: "What we translate", body: "Names as printed, date and place, officiant, witnesses if listed, and registry identifiers." },
        { title: "Spellings", body: "Source spellings stay on the page. We do not silently match a later identity document." },
        { title: "Usual tier", body: "Certified Professional unless the record is long or heavily annotated." },
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
