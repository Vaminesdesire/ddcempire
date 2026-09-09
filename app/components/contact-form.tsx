"use client";

import { FormEvent, useState } from "react";

export function ContactForm() {
  const [sent, setSent] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
  }

  if (sent) {
    return (
      <p className="rounded-2xl border border-line bg-surface px-6 py-10 text-lg text-accent-soft">
        Received. A partner will reply within one business day.
      </p>
    );
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-2 text-sm text-muted">
          Name
          <input
            required
            name="name"
            className="rounded-xl border border-line bg-background px-4 py-3 text-foreground outline-none focus:border-accent"
            autoComplete="name"
          />
        </label>
        <label className="grid gap-2 text-sm text-muted">
          Email
          <input
            required
            type="email"
            name="email"
            className="rounded-xl border border-line bg-background px-4 py-3 text-foreground outline-none focus:border-accent"
            autoComplete="email"
          />
        </label>
      </div>
      <label className="grid gap-2 text-sm text-muted">
        What should we build?
        <textarea
          required
          name="message"
          rows={4}
          className="resize-y rounded-xl border border-line bg-background px-4 py-3 text-foreground outline-none focus:border-accent"
        />
      </label>
      <button
        type="submit"
        className="mt-2 inline-flex h-12 items-center justify-center rounded-full bg-accent px-8 text-sm font-semibold tracking-wide text-white transition-colors hover:bg-accent-soft"
      >
        Start a conversation
      </button>
    </form>
  );
}
