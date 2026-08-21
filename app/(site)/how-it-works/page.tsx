import type { Metadata } from "next";
import { Cta } from "@/components/cta";
import { PageShell } from "@/components/page-shell";

export const metadata: Metadata = {
  title: "How it works",
  description:
    "Choose a service, name the language pair, count pages, attach files, add extras if needed. Demo checkout does not charge or store documents.",
};

const steps = [
  {
    n: "01",
    title: "Service and tier",
    body: "Certified Professional, Detailed, or Expert — or Standard if no statement is required.",
  },
  {
    n: "02",
    title: "Language pair",
    body: "Source and target. Seventy-plus languages on the list. If yours is missing, use the quote form.",
  },
  {
    n: "03",
    title: "Document and pages",
    body: "Name the type. Enter the page count. A page is 250 words of source text.",
  },
  {
    n: "04",
    title: "Files",
    body: "In this demo we keep the filename and size only. Nothing is uploaded or stored.",
  },
  {
    n: "05",
    title: "Add-ons",
    body: "Notarization, hard copy, apostille, currency note. Only if the receiving office asked.",
  },
  {
    n: "06",
    title: "Your details",
    body: "Name, email, optional phone. Where the PDF would go, if this were live.",
  },
  {
    n: "07",
    title: "Review",
    body: "The total matches the pricing page. The button does not charge. You land on a summary.",
  },
];

export default function HowItWorksPage() {
  return (
    <PageShell
      kicker="How it works"
      title="Seven steps. One total."
      lede="Standard delivery is the next business day. Same-day rush is a checkbox. No accounts required in this demo."
    >
      <ol className="mt-16 max-w-2xl divide-y divide-hairline border-y border-hairline">
        {steps.map((step) => (
          <li
            key={step.n}
            className="grid gap-3 py-8 md:grid-cols-[4rem_minmax(0,1fr)]"
          >
            <p className="font-display text-2xl text-ink/35">{step.n}</p>
            <div>
              <h2 className="font-display text-2xl tracking-tight">
                {step.title}
              </h2>
              <p className="mt-2 text-[1.02rem] leading-relaxed text-ink/70">
                {step.body}
              </p>
            </div>
          </li>
        ))}
      </ol>
      <div className="mt-12">
        <Cta href="/order">Start an order</Cta>
      </div>
    </PageShell>
  );
}
