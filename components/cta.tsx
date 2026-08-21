import Link from "next/link";

export function Cta({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="inline-block rounded-none bg-copper px-6 py-3 text-[0.95rem] font-medium uppercase tracking-[0.14em] text-ink hover:bg-ink hover:text-copper"
    >
      {children}
    </Link>
  );
}
