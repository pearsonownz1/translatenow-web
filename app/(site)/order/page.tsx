import type { Metadata } from "next";
import Link from "next/link";
import { OrderFlow } from "@/components/order-flow";

export const metadata: Metadata = {
  title: "Start an order",
  description:
    "Seven-step demo checkout. Running total uses published rates. Nothing is charged. Files are names only.",
};

export default function OrderPage() {
  return (
    <article className="px-6 pb-24 pt-10 md:px-12 lg:px-16">
      <p className="text-[0.7rem] uppercase tracking-[0.16em] text-ink/45">
        Order
      </p>
      <h1 className="mt-4 font-display max-w-[14ch] text-[clamp(2.75rem,7vw,5.75rem)] leading-[0.92] tracking-tight">
        Start an order.
      </h1>
      <p className="mt-8 max-w-md text-[1.05rem] leading-relaxed text-ink/70">
        Seven steps. The total matches{" "}
        <Link href="/pricing" className="copper-underline">
          pricing
        </Link>
        . The pay button does not charge. Unsure of the page count?{" "}
        <Link href="/quote" className="copper-underline">
          Request a quote
        </Link>{" "}
        instead.
      </p>
      <OrderFlow />
    </article>
  );
}
