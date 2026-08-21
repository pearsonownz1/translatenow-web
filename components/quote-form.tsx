"use client";

import { useState } from "react";
import { Button, Field, TextArea, TextInput } from "@/components/field";

export function QuoteForm() {
  const [sent, setSent] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [languages, setLanguages] = useState("");
  const [notes, setNotes] = useState("");

  if (sent) {
    return (
      <div className="mt-12 max-w-md border-y border-hairline py-10">
        <p className="font-display text-3xl">Received.</p>
        <p className="mt-4 text-[1.02rem] leading-relaxed text-ink/70">
          This demo does not send mail or open a job. No document was stored.
          If this were live, we would reply to {email || "the address you entered"}.
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
      <Field
        label="Languages"
        hint="Source and target. Example: Spanish → English."
      >
        <TextInput
          required
          value={languages}
          onChange={(e) => setLanguages(e.target.value)}
        />
      </Field>
      <Field
        label="Notes"
        hint="Document type, page count if you know it, and any office instruction."
      >
        <TextArea
          rows={5}
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
        />
      </Field>
      <Button type="submit">Send the request</Button>
      <p className="text-[0.8rem] text-ink/50">
        Nothing is emailed. Nothing is stored on a server.
      </p>
    </form>
  );
}
