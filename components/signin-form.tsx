"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { Button, Field, TextInput } from "@/components/field";
import { ORDER_EMAIL_KEY } from "@/lib/order";

export function SigninForm() {
  const router = useRouter();
  const [email, setEmail] = useState("");

  return (
    <form
      className="mt-12 max-w-md space-y-5"
      onSubmit={(e) => {
        e.preventDefault();
        sessionStorage.setItem(ORDER_EMAIL_KEY, email);
        router.push("/order");
      }}
    >
      <Field
        label="Email"
        hint="No password. No account is created. Continue opens the order form."
      >
        <TextInput
          required
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          autoComplete="email"
        />
      </Field>
      <Button type="submit">Continue</Button>
    </form>
  );
}
