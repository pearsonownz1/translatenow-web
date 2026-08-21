import type { Metadata } from "next";
import Link from "next/link";
import { DualCta, Sections } from "@/components/article-blocks";
import { PageShell } from "@/components/page-shell";

export const metadata: Metadata = {
  title: "Death certificate translation",
  description: "Certified translation of civil death records. Usually one page.",
};

export default function Page() {
  return (
    <PageShell kicker="Documents" title="The record as issued." lede="A civil death extract is usually one page. Hospital attachments or autopsy sheets are extra pages if you include them.">
      <Sections
        items={[
        { title: "What we translate", body: "Decedent as named, dates, place, informant if printed, cause if the form states it, and the issuing office." },
        { title: "Cause of death", body: "Translated only if it appears on the source. We do not add a medical opinion." },
        { title: "Usual tier", body: "Certified Professional. Courts and estates sometimes ask for notarization." },
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
