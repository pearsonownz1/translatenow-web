import type { Metadata } from "next";
import Link from "next/link";
import { Cta } from "@/components/cta";
import { PageShell } from "@/components/page-shell";
import { LANGUAGES } from "@/lib/languages";

export const metadata: Metadata = {
  title: "Languages",
  description: `TranslateNow handles ${LANGUAGES.length} language names as source or target. Most US filings go into English.`,
};

export default function LanguagesPage() {
  return (
    <PageShell
      kicker="Languages"
      title={`${LANGUAGES.length} names on the list.`}
      lede="Common civil and court pairs. Source or target. If a language is not listed, write it on the quote form — do not invent a pair in checkout."
    >
      <p className="mt-8 max-w-md text-[0.95rem] text-ink/60">
        English is included. Most USCIS packets need a foreign-language source
        into English.
      </p>
      <ul className="mt-12 columns-2 gap-x-10 sm:columns-3 md:columns-4">
        {LANGUAGES.map((lang) => (
          <li
            key={lang}
            className="break-inside-avoid border-b border-hairline py-2 text-[0.95rem]"
          >
            {lang}
          </li>
        ))}
      </ul>
      <p className="mt-10 max-w-md text-[0.95rem] leading-relaxed text-ink/60">
        Pair availability depends on the document, not just the language. A
        handwritten rural register is slower than a typed municipal form.{" "}
        <Link href="/quote" className="copper-underline">
          Ask first
        </Link>{" "}
        if the scan is poor.
      </p>
      <div className="mt-10">
        <Cta href="/order">Start an order</Cta>
      </div>
    </PageShell>
  );
}
