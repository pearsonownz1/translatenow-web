import type { Metadata } from "next";
import Link from "next/link";
import { ContactForm } from "@/components/contact-form";
import { PageShell } from "@/components/page-shell";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "A demo contact form. Messages are not delivered. Use quote or order for a price.",
};

export default function ContactPage() {
  return (
    <PageShell
      kicker="Contact"
      title="A form that goes nowhere."
      lede="This demo has no inbox. For a price, use the quote form or the order steps. For legal terms, see the footer."
    >
      <ContactForm />
      <p className="mt-10 text-[0.95rem] text-ink/60">
        <Link href="/quote" className="copper-underline">
          Request a quote
        </Link>
        <span className="mx-3 text-ink/30">/</span>
        <Link href="/order" className="copper-underline">
          Start an order
        </Link>
      </p>
    </PageShell>
  );
}
