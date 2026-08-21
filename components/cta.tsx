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
      className="inline-block bg-copper px-6 py-3 text-[0.95rem] font-medium text-paper hover:opacity-90"
    >
      {children}
    </Link>
  );
}
