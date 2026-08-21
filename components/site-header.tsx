import Link from "next/link";

const NAV = [
  { href: "/pricing", label: "Pricing" },
  { href: "/how-it-works", label: "How it works" },
  { href: "/uscis", label: "USCIS" },
  { href: "/languages", label: "Languages" },
  { href: "/order", label: "Start an order" },
];

export function SiteHeader() {
  return (
    <header className="px-6 pt-8 pb-6 md:px-12 lg:px-16">
      <div className="flex items-baseline justify-between gap-6">
        <div>
          <Link
            href="/"
            className="font-display text-[1.65rem] leading-none tracking-tight text-ink"
          >
            TranslateNow
          </Link>
          <p className="mt-2 max-w-[18rem] text-[0.72rem] leading-snug tracking-wide text-ink/55">
            Certified translations for the filing.
          </p>
        </div>
        <nav
          aria-label="Primary"
          className="flex flex-wrap items-baseline justify-end gap-x-6 gap-y-2 text-[0.85rem]"
        >
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-ink/80 hover:text-ink"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
      <hr className="rule mt-6" />
    </header>
  );
}
