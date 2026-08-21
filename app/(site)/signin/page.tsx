import type { Metadata } from "next";
import { PageShell } from "@/components/page-shell";
import { SigninForm } from "@/components/signin-form";

export const metadata: Metadata = {
  title: "Sign in",
  description:
    "Demo sign-in. Enter an email and continue to the order form. No account is created.",
};

export default function SigninPage() {
  return (
    <PageShell
      kicker="Sign in"
      title="Email only. Then the order."
      lede="There is no password and no account store. Continue puts the address on the order form."
    >
      <SigninForm />
    </PageShell>
  );
}
