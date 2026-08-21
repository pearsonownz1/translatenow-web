import type { Metadata } from "next";
import Link from "next/link";
import { DualCta, Sections } from "@/components/article-blocks";
import { PageShell } from "@/components/page-shell";

export const metadata: Metadata = {
  title: "Transcript translation",
  description: "Certified translation of academic transcripts. Courses, credits, marks. No GPA conversion.",
};

export default function Page() {
  return (
    <PageShell kicker="Documents" title="Courses, credits, terms." lede="This is where page counts grow. We follow the source table. We do not invent an American GPA.">
      <Sections
        items={[
        { title: "What we translate", body: "Header, student as printed, course titles, hours or credits, marks, terms, and any printed scale." },
        { title: "Marks", body: "A 17/20 stays 17/20. A note can explain a printed scale. That note is not an evaluation." },
        { title: "Usual tier", body: "Certified Detailed. Send every page, including the key." },
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
