"use client";

import { useState } from "react";

export function NewsletterForm() {
  const [email, setEmail] = useState("");

  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="flex flex-col gap-4 sm:flex-row sm:items-center"
    >
      <label className="sr-only" htmlFor="newsletter-email">
        Email address
      </label>
      <input
        id="newsletter-email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
        className="h-12 w-full rounded-lg border border-white/[0.12] bg-white/[0.08] px-4 text-sm text-white placeholder:text-white/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent sm:w-[305px]"
      />
      <button
        type="submit"
        className="h-12 shrink-0 rounded-lg border border-white/[0.12] bg-white/[0.08] px-6 text-base font-bold text-white shadow-[1px_1px_0.8px_0_rgb(255_255_255/0.04),inset_0_-1px_1px_1.5px_rgb(255_255_255/0.08)] transition-colors hover:bg-white/[0.14] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
      >
        Subscribe
      </button>
    </form>
  );
}
