import type { Metadata } from "next";
import { PageShell } from "@/components/page-shell";

export const metadata: Metadata = {
  title: "Privacy",
  description:
    "Demo privacy note. No server storage. Browser session only. No cards or document contents.",
};

export default function PrivacyPage() {
  return (
    <PageShell
      kicker="Privacy"
      title="Nothing is kept on a server."
      lede="This demo has no database and no file store. Order drafts live in sessionStorage in your browser and go away when that session ends."
    >
      <div className="mt-16 max-w-xl space-y-6 text-[1.02rem] leading-relaxed text-ink/70">
        <p>
          Forms may hold a name, email, language pair, and notes in memory
          long enough to show a thank-you screen. They are not posted to a
          backend.
        </p>
        <p>
          File pickers are used only to display a filename and a size. Document
          contents are not retained. Card numbers are not requested.
        </p>
        <p>
          If this were a live service, a real policy would name a processor
          and a retention period. This is not that service.
        </p>
      </div>
    </PageShell>
  );
}
