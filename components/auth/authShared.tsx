"use client";

import { useId, useState, type InputHTMLAttributes, type ReactNode } from "react";

export const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const authCardClass =
  "w-full rounded-3xl border border-white/[0.1] bg-white/[0.05] p-6 shadow-[0_8px_48px_rgb(0_0_0/0.35)] backdrop-blur-2xl sm:rounded-[32px] sm:p-10";

const labelClass = "text-[13px] font-bold text-white/70";
const fieldClass =
  "h-12 w-full rounded-lg border bg-white/[0.08] px-4 text-sm text-white placeholder:text-white/60 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent";

type FieldProps = {
  label: string;
  error?: string;
  required?: boolean;
} & InputHTMLAttributes<HTMLInputElement>;

export function TextField({ label, error, required, id, ...rest }: FieldProps) {
  const autoId = useId();
  const fieldId = id ?? autoId;
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={fieldId} className={labelClass}>
        {label} {required ? <span className="text-[#f87171]">*</span> : null}
      </label>
      <input
        id={fieldId}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? `${fieldId}-error` : undefined}
        className={`${fieldClass} ${error ? "border-[#f87171]/70" : "border-white/[0.12]"}`}
        {...rest}
      />
      {error ? (
        <p id={`${fieldId}-error`} className="text-xs text-[#f87171]">
          {error}
        </p>
      ) : null}
    </div>
  );
}

export function PasswordField({ label, error, required, id, ...rest }: FieldProps) {
  const autoId = useId();
  const fieldId = id ?? autoId;
  const [show, setShow] = useState(false);
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={fieldId} className={labelClass}>
        {label} {required ? <span className="text-[#f87171]">*</span> : null}
      </label>
      <div className="relative">
        <input
          id={fieldId}
          type={show ? "text" : "password"}
          aria-invalid={error ? true : undefined}
          aria-describedby={error ? `${fieldId}-error` : undefined}
          className={`${fieldClass} pr-11 ${error ? "border-[#f87171]/70" : "border-white/[0.12]"}`}
          {...rest}
        />
        <button
          type="button"
          onClick={() => setShow((v) => !v)}
          aria-label={show ? "Hide password" : "Show password"}
          aria-pressed={show}
          className="absolute right-1 top-1/2 flex size-9 -translate-y-1/2 items-center justify-center rounded text-white/55 transition-colors hover:text-white"
        >
          {show ? (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
              <path
                d="M3 3l18 18M10.6 10.7a2 2 0 002.8 2.8M9.4 5.2A9.5 9.5 0 0112 5c5 0 9 4.5 10 7-.5 1.2-1.6 2.9-3.3 4.3M6.2 6.3C4 7.8 2.6 9.8 2 12c1 2.5 5 7 10 7 1.6 0 3-.4 4.3-1"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          ) : (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
              <path
                d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7z"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.7" />
            </svg>
          )}
        </button>
      </div>
      {error ? (
        <p id={`${fieldId}-error`} className="text-xs text-[#f87171]">
          {error}
        </p>
      ) : null}
    </div>
  );
}

export function SubmitButton({ children }: { children: ReactNode }) {
  return (
    <button
      type="submit"
      className="h-12 w-full rounded-lg bg-accent text-[15px] font-bold text-white transition-[filter] duration-150 hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
    >
      {children}
    </button>
  );
}

/** "or" divider + Facebook / Google buttons.
 *  Buttons use the same glass background as the homepage hero visual. */
export function SocialAuthButtons({ verb }: { verb: string }) {
  const glass =
    "relative flex h-12 w-full items-center justify-center rounded-lg border border-white/[0.12] bg-white/[0.08] text-sm font-bold uppercase tracking-wide text-white shadow-[1px_1px_0.8px_0_rgb(255_255_255/0.04),inset_0_-1px_1px_1.5px_rgb(255_255_255/0.08)] transition-colors hover:bg-white/[0.14] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-transparent";
  return (
    <>
      <div className="my-6 flex items-center gap-4">
        <span className="h-px flex-1 bg-white/15" />
        <span className="text-[13px] font-bold uppercase tracking-wide text-white/60">
          Or {verb} with
        </span>
        <span className="h-px flex-1 bg-white/15" />
      </div>
      <div className="flex flex-col gap-3">
        <button type="button" className={glass}>
          <img
            src="/assets/auth/facebook.svg"
            alt=""
            aria-hidden
            width={26}
            height={26}
            className="absolute left-3 size-[26px]"
          />
          Facebook
        </button>
        <button type="button" className={glass}>
          <img
            src="/assets/auth/google.svg"
            alt=""
            aria-hidden
            width={26}
            height={26}
            className="absolute left-3 size-[26px]"
          />
          Google
        </button>
      </div>
    </>
  );
}
