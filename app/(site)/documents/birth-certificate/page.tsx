import type { Metadata } from "next";
import Link from "next/link";
import { DualCta, Sections } from "@/components/article-blocks";
import { PageShell } from "@/components/page-shell";

export const metadata: Metadata = {
  title: "Birth certificate translation",
  description: "Certified translation of civil birth records. Usually one page. Seals described, not redrawn.",
};

export default function Page() {
  return (
    <PageShell kicker="Documents" title="Names, date, place, seals." lede="A municipal extract is usually one billable page. Long-form records with notes in the margin run longer.">
      <Sections
        items={[
        { title: "What we translate", body: "The printed fields: child, parents, date and place, registration number, issuing office. Stamps are described in words." },
        { title: "What to send", body: "The whole sheet, including the reverse if it has text. A crop that hides a registrar block is incomplete." },
        { title: "Usual tier", body: "Certified Professional. Add notarization only if the receiving office asked for it." },
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
