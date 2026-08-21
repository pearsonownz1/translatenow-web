export function Faq({
  items,
}: {
  items: { q: string; a: string }[];
}) {
  return (
    <div className="divide-y divide-hairline border-y border-hairline">
      {items.map((item) => (
        <details key={item.q} className="group py-5">
          <summary className="cursor-pointer list-none text-[1.05rem] leading-snug [&::-webkit-details-marker]:hidden">
            {item.q}
          </summary>
          <p className="mt-3 max-w-xl text-[0.95rem] leading-relaxed text-ink/70">
            {item.a}
          </p>
        </details>
      ))}
    </div>
  );
}
