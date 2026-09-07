"use client";

import { useState, type FormEvent } from "react";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const field =
  "h-12 w-full rounded-lg border bg-white/[0.08] px-4 text-sm text-white placeholder:text-white/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent";

export function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [done, setDone] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!EMAIL_RE.test(email.trim())) {
      setError("Please enter a valid email address.");
      return;
    }
    setError("");
    setDone(true);
  }

  if (done) {
    return (
      <div
        role="status"
        className="flex items-start gap-3 rounded-lg border border-accent/30 bg-accent-soft px-4 py-3.5"
      >
        <svg
          className="mt-0.5 size-5 shrink-0 text-accent"
          viewBox="0 0 20 20"
          fill="none"
          aria-hidden
        >
          <circle cx="10" cy="10" r="9" stroke="currentColor" strokeWidth="1.6" />
          <path
            d="M6 10.5 8.8 13.2 14 7.5"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <div className="flex flex-col gap-1">
          <p className="text-base font-bold text-white">Thanks for subscribing!</p>
          <p className="text-sm text-white/70">We&rsquo;ve got {email.trim()} on file.</p>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-2">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
        <div className="flex w-full flex-col gap-1.5 sm:w-[305px]">
          <label className="sr-only" htmlFor="newsletter-email">
            Email address
          </label>
          <input
            id="newsletter-email"
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              if (error) setError("");
            }}
            placeholder="Enter your email"
            aria-invalid={error ? true : undefined}
            aria-describedby={error ? "newsletter-error" : undefined}
            className={`${field} ${error ? "border-[#f87171]/70" : "border-white/[0.12]"}`}
          />
        </div>
        <button
          type="submit"
          className="h-12 shrink-0 rounded-lg border border-white/[0.12] bg-white/[0.08] px-6 text-base font-bold text-white shadow-[1px_1px_0.8px_0_rgb(255_255_255/0.04),inset_0_-1px_1px_1.5px_rgb(255_255_255/0.08)] transition-colors hover:bg-white/[0.14] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
        >
          Subscribe
        </button>
      </div>
      {error ? (
        <p id="newsletter-error" className="text-sm text-[#f87171]">
          {error}
        </p>
      ) : null}
    </form>
  );
}
