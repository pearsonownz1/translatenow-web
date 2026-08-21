import type { Metadata } from "next";
import Link from "next/link";
import { Cta } from "@/components/cta";
import { Faq } from "@/components/faq";
import { ADDONS, PAGE_WORDS, TIERS, formatUsd } from "@/lib/pricing";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Certified Professional $24/page, Detailed $32, Expert $40. Standard $18. A page is 250 words. Add-ons priced separately.",
};

const tierRows = [
  TIERS.professional,
  TIERS.detailed,
  TIERS.expert,
  TIERS.standard,
];

export default function PricingPage() {
  return (
    <article className="px-6 pb-16 pt-8 md:px-12 lg:px-16">
      <p className="font-stamp text-ink/45">
        Pricing
      </p>
      <h1 className="mt-3 font-display max-w-[18ch] text-[clamp(2.2rem,6vw,4.4rem)] leading-[0.9]">
        A page is {PAGE_WORDS} words.
      </h1>
      <p className="mt-6 max-w-md text-[1.05rem] leading-relaxed text-ink/70">
        We count the source, not the paper it was printed on. Standard
        turnaround is the next business day. Same-day rush is available on the
        order form.
      </p>

      <dl className="mt-12 max-w-xl divide-y divide-hairline border-y border-hairline">
        {tierRows.map((tier) => (
          <div
            key={tier.id}
            className="flex items-baseline justify-between gap-6 py-5"
          >
            <dt>
              <span className="block">{tier.name}</span>
              <span className="mt-1 block text-[0.8rem] text-ink/50">
                {tier.blurb}
              </span>
            </dt>
            <dd className="shrink-0 text-ink/70">
              {formatUsd(tier.price)}
              /page
            </dd>
          </div>
        ))}
      </dl>

      <h2 className="mt-12 font-display text-3xl">Add-ons</h2>
      <dl className="mt-6 max-w-xl divide-y divide-hairline border-y border-hairline">
        <div className="flex items-baseline justify-between gap-6 py-5">
          <dt>
            <span className="block">{ADDONS.notarization.name}</span>
            <span className="mt-1 block text-[0.8rem] text-ink/50">
              {ADDONS.notarization.blurb}
            </span>
          </dt>
          <dd className="shrink-0 text-ink/70">
            {formatUsd(ADDONS.notarization.price)}/order
          </dd>
        </div>
        <div className="flex items-baseline justify-between gap-6 py-5">
          <dt>
            <span className="block">{ADDONS.hardCopy.name}</span>
            <span className="mt-1 block text-[0.8rem] text-ink/50">
              {ADDONS.hardCopy.blurb}
            </span>
          </dt>
          <dd className="shrink-0 text-ink/70">
            {formatUsd(ADDONS.hardCopy.price)}/order
          </dd>
        </div>
        <div className="flex items-baseline justify-between gap-6 py-5">
          <dt>
            <span className="block">{ADDONS.apostille.name}</span>
            <span className="mt-1 block text-[0.8rem] text-ink/50">
              {ADDONS.apostille.blurb}
            </span>
          </dt>
          <dd className="shrink-0 text-ink/70">
            {formatUsd(ADDONS.apostille.price)}/document
          </dd>
        </div>
        <div className="flex items-baseline justify-between gap-6 py-5">
          <dt>
            <span className="block">{ADDONS.currencyNote.name}</span>
            <span className="mt-1 block text-[0.8rem] text-ink/50">
              {ADDONS.currencyNote.blurb}
            </span>
          </dt>
          <dd className="shrink-0 text-ink/70">
            {formatUsd(ADDONS.currencyNote.price)}/page
          </dd>
        </div>
      </dl>

      <p className="mt-8 max-w-md text-[0.95rem] leading-relaxed text-ink/60">
        Worked example: a two-page birth certificate at Certified Professional
        with notarization is {formatUsd(TIERS.professional.price * 2)} +{" "}
        {formatUsd(ADDONS.notarization.price)} ={" "}
        {formatUsd(TIERS.professional.price * 2 + ADDONS.notarization.price)}.
        The order form uses the same math.
      </p>

      <div className="mt-12 flex flex-wrap items-center gap-6">
        <Cta href="/order">Start an order</Cta>
        <Link href="/quote" className="copper-underline">
          Request a quote
        </Link>
      </div>

      <section className="mt-14 max-w-xl">
        <h2 className="mb-5 font-display text-3xl">Questions</h2>
        <Faq
          items={[
            {
              q: "What counts as a page?",
              a: `Up to ${PAGE_WORDS} words in the source. Seals and stamps are described, not ignored. A sparse one-sheet certificate is usually one page.`,
            },
            {
              q: "Is rush extra?",
              a: "Same-day rush is offered on the order form in this demo. The published page rates do not change.",
            },
            {
              q: "Do you take cards here?",
              a: "No. This storefront is a demo. The pay button does not charge and no card is collected.",
            },
          ]}
        />
      </section>
    </article>
  );
}
