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
    <header className="px-6 pt-5 pb-4 md:px-12 lg:px-16">
      <div className="flex items-start justify-between gap-6">
        <div>
          <Link
            href="/"
            className="font-display text-[1.3rem] uppercase leading-none tracking-[0.12em] text-ink"
          >
            TranslateNow
          </Link>
          <p className="font-stamp mt-2 text-ink/55">Certified translation</p>
        </div>
        <nav
          aria-label="Primary"
          className="flex flex-wrap items-center justify-end gap-x-5 gap-y-2 text-[0.72rem] font-medium uppercase tracking-[0.1em]"
        >
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-ink/75 hover:text-ink"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
      <hr className="rule mt-4" />
    </header>
  );
}
