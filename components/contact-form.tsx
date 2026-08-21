"use client";

import { useState } from "react";
import { Button, Field, TextArea, TextInput } from "@/components/field";

export function ContactForm() {
  const [sent, setSent] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  if (sent) {
    return (
      <div className="mt-12 max-w-md border-y border-hairline py-10">
        <p className="font-display text-3xl tracking-tight">Noted.</p>
        <p className="mt-4 text-[1.02rem] leading-relaxed text-ink/70">
          This form does not deliver a message. No ticket was opened. For a
          price, use the quote form or start an order.
        </p>
      </div>
    );
  }

  return (
    <form
      className="mt-12 max-w-md space-y-5"
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
    >
      <Field label="Name">
        <TextInput
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          autoComplete="name"
        />
      </Field>
      <Field label="Email">
        <TextInput
          required
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          autoComplete="email"
        />
      </Field>
      <Field label="Message">
        <TextArea
          required
          rows={5}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </Field>
      <Button type="submit">Send</Button>
      <p className="text-[0.8rem] text-ink/50">
        Demo only. The message stays in this tab.
      </p>
    </form>
  );
}
