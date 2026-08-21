import type { InputHTMLAttributes, SelectHTMLAttributes, TextareaHTMLAttributes } from "react";

const box =
  "mt-2 w-full border border-hairline bg-paper px-3 py-2.5 text-[0.95rem] outline-none focus:border-copper";

export function Field({
  label,
  hint,
  children,
}: {
  label: string;
  hint?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="text-[0.85rem] text-ink/80">{label}</span>
      {children}
      {hint ? (
        <span className="mt-1.5 block text-[0.75rem] leading-relaxed text-ink/50">
          {hint}
        </span>
      ) : null}
    </label>
  );
}

export function TextInput(props: InputHTMLAttributes<HTMLInputElement>) {
  return <input {...props} className={`${box} ${props.className ?? ""}`} />;
}

export function SelectInput(props: SelectHTMLAttributes<HTMLSelectElement>) {
  return <select {...props} className={`${box} ${props.className ?? ""}`} />;
}

export function TextArea(props: TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return <textarea {...props} className={`${box} ${props.className ?? ""}`} />;
}

export function Button({
  children,
  tone = "copper",
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & {
  tone?: "copper" | "ghost";
}) {
  const cls =
    tone === "copper"
      ? "inline-block bg-copper px-6 py-3 text-[0.95rem] font-medium text-paper hover:opacity-90 disabled:opacity-40"
      : "inline-block border border-hairline px-6 py-3 text-[0.95rem] text-ink/80 hover:border-ink/30 disabled:opacity-40";
  return (
    <button type="button" {...props} className={`${cls} ${props.className ?? ""}`}>
      {children}
    </button>
  );
}
