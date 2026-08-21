"use client";

import { useState } from "react";
import { Button, Field, TextInput } from "@/components/field";

export function FindOrderForm() {
  const [looked, setLooked] = useState(false);
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");

  return (
    <form
      className="mt-12 max-w-md space-y-5"
      onSubmit={(e) => {
        e.preventDefault();
        setLooked(true);
      }}
    >
      <Field label="Order number">
        <TextInput
          required
          value={number}
          onChange={(e) => {
            setNumber(e.target.value);
            setLooked(false);
          }}
        />
      </Field>
      <Field label="Email">
        <TextInput
          required
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            setLooked(false);
          }}
          autoComplete="email"
        />
      </Field>
      <Button type="submit">Look up</Button>
      {looked ? (
        <p className="border-t border-hairline pt-5 text-[1.02rem] leading-relaxed text-ink/70">
          No matching demo order. This storefront does not keep a ledger.
          Completed checkouts in this browser appear only on the confirmation
          page.
        </p>
      ) : null}
    </form>
  );
}
