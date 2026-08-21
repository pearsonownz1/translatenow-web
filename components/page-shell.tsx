export function PageShell({
  kicker,
  title,
  lede,
  children,
  wide = false,
}: {
  kicker?: string;
  title: string;
  lede?: React.ReactNode;
  children?: React.ReactNode;
  wide?: boolean;
}) {
  return (
    <article className="px-6 pb-24 pt-10 md:px-12 lg:px-16">
      {kicker ? (
        <p className="text-[0.7rem] uppercase tracking-[0.16em] text-ink/45">
          {kicker}
        </p>
      ) : null}
      <h1 className="mt-4 font-display max-w-[16ch] text-[clamp(2.75rem,7vw,5.75rem)] leading-[0.92] tracking-tight">
        {title}
      </h1>
      {lede ? (
        <div
          className={`mt-8 text-[1.05rem] leading-relaxed text-ink/70 ${wide ? "max-w-xl" : "max-w-md"}`}
        >
          {lede}
        </div>
      ) : null}
      {children}
    </article>
  );
}
