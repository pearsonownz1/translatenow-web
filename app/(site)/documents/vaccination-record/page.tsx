import type { Metadata } from "next";
import Link from "next/link";
import { DualCta, Sections } from "@/components/article-blocks";
import { PageShell } from "@/components/page-shell";

export const metadata: Metadata = {
  title: "Vaccination record translation",
  description: "Certified translation of immunization cards and clinic printouts. Names and dates as printed.",
};

export default function Page() {
  return (
    <PageShell kicker="Documents" title="The card as printed." lede="A folded card is often one or two pages. Clinic printouts are counted by words. This is not medical advice.">
      <Sections
        items={[
        { title: "What we translate", body: "Product names, dates, lot numbers if printed, clinic or clinician marks, and any printed legend." },
        { title: "Handwriting", body: "Illegible lines are marked as such. We do not complete a missing date." },
        { title: "Usual tier", body: "Certified Professional. Schools and some consulates ask for this; a physician does not." },
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
