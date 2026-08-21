import type { Metadata } from "next";
import Link from "next/link";
import { Cta } from "@/components/cta";
import { PAGE_WORDS, TIERS } from "@/lib/pricing";

export const metadata: Metadata = {
  title: "TranslateNow — Certified translations for the filing.",
  description:
    "Human certified and standard translation for USCIS, courts, and schools. A signed accuracy statement. A page is 250 words.",
};

const steps = [
  {
    n: "01",
    title: "The document",
    body: "A scan or photo of the source. We count words, not sheets. A page is 250 words.",
  },
  {
    n: "02",
    title: "The pair",
    body: "Name the source language and the target. Most filings go into English. The reverse is fine.",
  },
  {
    n: "03",
    title: "The statement",
    body: "Certified orders include a signed accuracy statement written to the style of 8 CFR 103.2(b)(3). Standard orders do not.",
  },
];

export default function HomePage() {
  return (
    <>
      <section className="px-6 pb-20 pt-10 md:px-12 lg:px-16 md:pt-16 md:pb-28">
        <h1 className="font-display max-w-[14ch] text-[clamp(3.25rem,9vw,8rem)] leading-[0.92] tracking-tight">
          Certified translations for the filing.
        </h1>
        <p className="mt-10 max-w-md text-[1.05rem] leading-relaxed text-ink/70">
          A human translator. A signed statement when you need one. A PDF you
          attach to the packet. USCIS, courts, schools.
        </p>
        <div className="mt-10 flex flex-wrap items-center gap-6">
          <Cta href="/order">Start an order</Cta>
          <Link href="/pricing" className="text-[0.95rem] copper-underline">
            {`Certified from $${TIERS.professional.price}/page`}
          </Link>
        </div>
      </section>

      <section className="px-6 md:px-12 lg:px-16">
        <hr className="rule" />
        <ol className="divide-y divide-hairline">
          {steps.map((item) => (
            <li
              key={item.n}
              className="grid gap-4 py-12 md:grid-cols-[6rem_minmax(0,18rem)_minmax(0,32rem)] md:gap-10 md:py-16"
            >
              <p className="font-display text-3xl leading-none text-ink/35">
                {item.n}
              </p>
              <h2 className="font-display text-3xl leading-tight tracking-tight md:text-4xl">
                {item.title}
              </h2>
              <p className="max-w-md text-[1.02rem] leading-relaxed text-ink/70 md:pt-2">
                {item.body}
              </p>
            </li>
          ))}
        </ol>
        <hr className="rule" />
      </section>

      <section className="px-6 py-20 md:px-12 lg:px-16">
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <p className="text-[0.7rem] uppercase tracking-[0.16em] text-ink/45">
              Two services
            </p>
            <h2 className="mt-4 font-display text-4xl tracking-tight">
              Certified or standard.
            </h2>
            <p className="mt-6 max-w-md text-[1.02rem] leading-relaxed text-ink/70">
              Certified is for an office that asked for a translation with a
              statement of accuracy. Standard is for reading. Same translators.
              Different paper at the end.
            </p>
            <p className="mt-6 text-[0.95rem]">
              <Link href="/certified-translation" className="copper-underline">
                Certified
              </Link>
              <span className="mx-3 text-ink/30">/</span>
              <Link href="/standard-translation" className="copper-underline">
                Standard
              </Link>
            </p>
          </div>
          <div>
            <p className="text-[0.7rem] uppercase tracking-[0.16em] text-ink/45">
              A page
            </p>
            <h2 className="mt-4 font-display text-4xl tracking-tight">
              {PAGE_WORDS} words. Not a sheet.
            </h2>
            <p className="mt-6 max-w-md text-[1.02rem] leading-relaxed text-ink/70">
              We count the source. A one-page birth certificate is usually one
              billable page. A six-page transcript is not.{" "}
              <Link href="/pricing" className="copper-underline">
                See the rates
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 pb-24 md:px-12 lg:px-16">
        <hr className="rule" />
        <div className="mx-auto max-w-xl py-16 md:py-20">
          <p className="text-[0.7rem] uppercase tracking-[0.16em] text-ink/45">
            A short note
          </p>
          <p className="mt-6 font-display text-[1.65rem] leading-snug tracking-tight md:text-[1.9rem]">
            USCIS does not approve translation companies. The regulation asks
            for a complete English translation and a certification of
            competence and accuracy. We supply that statement. The source still
            has to be readable.
          </p>
          <p className="mt-8 text-[1.02rem] leading-relaxed text-ink/70">
            No invented scores. No stock photos of smiling filers. If you need
            a number, use the{" "}
            <Link href="/quote" className="copper-underline">
              quote form
            </Link>{" "}
            or start the{" "}
            <Link href="/order" className="copper-underline">
              order
            </Link>
            . This demo does not take cards or keep your files.
          </p>
        </div>
      </section>
    </>
  );
}
