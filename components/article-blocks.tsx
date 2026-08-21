import { Cta } from "@/components/cta";
import Link from "next/link";

export function Sections({
  items,
}: {
  items: { title: string; body: React.ReactNode }[];
}) {
  return (
    <div className="mt-12 max-w-2xl divide-y divide-hairline border-y border-hairline">
      {items.map((item) => (
        <section key={item.title} className="grid gap-4 py-8 md:grid-cols-2">
          <h2 className="font-display text-3xl">{item.title}</h2>
          <div className="text-[1.02rem] leading-relaxed text-ink/70">
            {item.body}
          </div>
        </section>
      ))}
    </div>
  );
}

export function DualCta({
  secondaryHref = "/quote",
  secondary = "Request a quote",
}: {
  secondaryHref?: string;
  secondary?: string;
}) {
  return (
    <div className="mt-12 flex flex-wrap items-center gap-6">
      <Cta href="/order">Start an order</Cta>
      <Link href={secondaryHref} className="copper-underline">
        {secondary}
      </Link>
    </div>
  );
}
