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
    <article className="px-6 pb-16 pt-8 md:px-12 lg:px-16">
      {kicker ? <p className="font-stamp text-ink/45">{kicker}</p> : null}
      <h1 className="mt-3 font-display max-w-[18ch] text-[clamp(2.2rem,6vw,4.4rem)] leading-[0.9] tracking-[-0.02em]">
        {title}
      </h1>
      {lede ? (
        <div
          className={`mt-6 text-[1.05rem] leading-relaxed text-ink/70 ${wide ? "max-w-xl" : "max-w-md"}`}
        >
          {lede}
        </div>
      ) : null}
      {children}
    </article>
  );
}
