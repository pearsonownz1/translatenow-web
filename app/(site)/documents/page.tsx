import type { Metadata } from "next";
import Link from "next/link";
import { Cta } from "@/components/cta";
import { PageShell } from "@/components/page-shell";
import { FEATURED_DOCUMENTS, OTHER_DOCUMENTS } from "@/lib/documents";

export const metadata: Metadata = {
  title: "Documents",
  description:
    "Birth and marriage certificates, diplomas, transcripts, passports, and other civil records. Typical page counts included.",
};

export default function DocumentsPage() {
  return (
    <PageShell
      kicker="Documents"
      title="Name the paper. Count the words."
      lede="These are the records people file most often. Typical length is a hint, not a quote. The source decides the page count."
    >
      <ul className="mt-16 max-w-2xl divide-y divide-hairline border-y border-hairline">
        {FEATURED_DOCUMENTS.map((doc) => (
          <li key={doc.slug} className="py-8">
            <Link href={`/documents/${doc.slug}`} className="group block">
              <div className="flex flex-wrap items-baseline justify-between gap-4">
                <h2 className="font-display text-3xl tracking-tight group-hover:text-copper">
                  {doc.name}
                </h2>
                <p className="text-[0.8rem] text-ink/50">{doc.typicalPages}</p>
              </div>
              <p className="mt-3 max-w-lg text-[1.02rem] leading-relaxed text-ink/70">
                {doc.summary}
              </p>
            </Link>
          </li>
        ))}
      </ul>

      <h2 className="mt-16 font-display text-3xl tracking-tight">Also common</h2>
      <ul className="mt-6 max-w-xl columns-2 gap-x-10">
        {OTHER_DOCUMENTS.map((name) => (
          <li
            key={name}
            className="break-inside-avoid border-b border-hairline py-2 text-[0.95rem]"
          >
            {name}
          </li>
        ))}
      </ul>
      <p className="mt-8 max-w-md text-[0.95rem] text-ink/60">
        Choose “Other” on the order form if the type is not listed. Describe it
        in the notes.
      </p>
      <div className="mt-10">
        <Cta href="/order">Start an order</Cta>
      </div>
    </PageShell>
  );
}
