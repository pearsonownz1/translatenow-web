import type { Metadata } from "next";
import Link from "next/link";
import { DualCta, Sections } from "@/components/article-blocks";
import { PageShell } from "@/components/page-shell";

export const metadata: Metadata = {
  title: "Passport translation",
  description: "Certified translation of a travel-document identity page. Extra pages only if counted.",
};

export default function Page() {
  return (
    <PageShell kicker="Documents" title="The identity page." lede="Most orders are one page. Additional stamp pages are translated only if they are in the file list and the count.">
      <Sections
        items={[
        { title: "What we translate", body: "The printed identity fields and machine-readable lines as they appear." },
        { title: "Extra pages", body: "Visas and stamps are optional. Include them in the page count if you need them." },
        { title: "Usual tier", body: "Certified Professional for a single identity page. Read the form instruction first — some offices want a copy, not a translation." },
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
