"use client";

import Link from "next/link";
import { useState, type FormEvent } from "react";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_RE = /^[+()\d][\d\s\-()]{6,}$/;

const labelClass = "text-[13px] font-bold text-[#33334d]";
const fieldClass =
  "h-11 w-full rounded-md border border-[#e3e4e8] bg-[#fbfbfc] px-4 text-sm text-[#14142b] placeholder:text-[#9a9aa5] transition-colors focus:border-[#e31b23] focus:outline-none focus:ring-2 focus:ring-[#e31b23]/20";

export function LoginForm() {
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [remember, setRemember] = useState(false);
  const [errors, setErrors] = useState<{ identifier?: string; password?: string }>({});
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const id = identifier.trim();
    const next: { identifier?: string; password?: string } = {};

    if (!id) {
      next.identifier = "Email or phone number is required.";
    } else if (!EMAIL_RE.test(id) && !PHONE_RE.test(id)) {
      next.identifier = "Enter a valid email or phone number.";
    }
    if (!password) {
      next.password = "Password is required.";
    } else if (password.length < 6) {
      next.password = "Password must be at least 6 characters.";
    }

    setErrors(next);
    setSubmitted(Object.keys(next).length === 0);
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="w-full rounded-[20px] bg-white p-8 shadow-[0_12px_44px_rgb(17_17_43/0.08)] sm:p-10"
    >
      <h1 className="text-[32px] font-bold leading-none text-[#14142b]">Login</h1>

      <div className="mt-8 flex flex-col gap-1.5">
        <label htmlFor="login-id" className={labelClass}>
          Email or Phone Number <span className="text-[#e31b23]">*</span>
        </label>
        <input
          id="login-id"
          name="identifier"
          type="text"
          autoComplete="username"
          value={identifier}
          onChange={(e) => {
            setIdentifier(e.target.value);
            if (errors.identifier) setErrors((p) => ({ ...p, identifier: undefined }));
            if (submitted) setSubmitted(false);
          }}
          aria-invalid={errors.identifier ? true : undefined}
          aria-describedby={errors.identifier ? "login-id-error" : undefined}
          className={fieldClass}
        />
        {errors.identifier ? (
          <p id="login-id-error" className="text-xs text-[#e31b23]">
            {errors.identifier}
          </p>
        ) : null}
      </div>

      <div className="mt-5 flex flex-col gap-1.5">
        <label htmlFor="login-password" className={labelClass}>
          Password <span className="text-[#e31b23]">*</span>
        </label>
        <div className="relative">
          <input
            id="login-password"
            name="password"
            type={showPassword ? "text" : "password"}
            autoComplete="current-password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              if (errors.password) setErrors((p) => ({ ...p, password: undefined }));
              if (submitted) setSubmitted(false);
            }}
            aria-invalid={errors.password ? true : undefined}
            aria-describedby={errors.password ? "login-password-error" : undefined}
            className={`${fieldClass} pr-11`}
          />
          <button
            type="button"
            onClick={() => setShowPassword((v) => !v)}
            aria-label={showPassword ? "Hide password" : "Show password"}
            aria-pressed={showPassword}
            className="absolute right-1 top-1/2 flex size-9 -translate-y-1/2 items-center justify-center rounded text-[#6b6b7b] transition-colors hover:text-[#14142b]"
          >
            {showPassword ? (
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
        {errors.password ? (
          <p id="login-password-error" className="text-xs text-[#e31b23]">
            {errors.password}
          </p>
        ) : null}
      </div>

      <button
        type="submit"
        className="mt-6 h-12 w-full rounded-md bg-[#e31b23] text-[15px] font-bold text-white transition-colors hover:bg-[#c9161d] focus:outline-none focus:ring-2 focus:ring-[#e31b23]/40 focus:ring-offset-2"
      >
        Log In
      </button>

      {submitted ? (
        <p role="status" className="mt-3 text-[13px] text-[#1a7f37]">
          Looks good — this is a front-end demo, so no account is signed in.
        </p>
      ) : null}

      <div className="mt-4 flex items-center justify-between gap-3">
        <label className="flex cursor-pointer items-center gap-2 text-sm text-[#33334d]">
          <input
            type="checkbox"
            checked={remember}
            onChange={(e) => setRemember(e.target.checked)}
            className="size-4 rounded border-[#c4c4cf] text-[#e31b23] accent-[#e31b23]"
          />
          Remember me
        </label>
        <Link
          href="/login"
          className="text-sm font-medium text-[#e31b23] transition-opacity hover:opacity-80"
        >
          Lost your password?
        </Link>
      </div>

      <div className="my-6 flex items-center gap-4">
        <span className="h-px flex-1 bg-[#e3e4e8]" />
        <span className="text-[13px] font-bold uppercase tracking-wide text-[#14142b]">
          Or login with
        </span>
        <span className="h-px flex-1 bg-[#e3e4e8]" />
      </div>

      <div className="flex flex-col gap-3">
        <button
          type="button"
          className="relative flex h-12 w-full items-center justify-center rounded-md bg-[#3b5998] text-sm font-bold uppercase tracking-wide text-white transition-colors hover:bg-[#344e86] focus:outline-none focus:ring-2 focus:ring-[#3b5998]/40 focus:ring-offset-2"
        >
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
        <button
          type="button"
          className="relative flex h-12 w-full items-center justify-center rounded-md bg-[#4285f4] text-sm font-bold uppercase tracking-wide text-white transition-colors hover:bg-[#3b78e0] focus:outline-none focus:ring-2 focus:ring-[#4285f4]/40 focus:ring-offset-2"
        >
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

      <div className="mt-6 border-t border-[#e3e4e8] pt-5 text-center text-sm text-[#6b6b7b]">
        Don&rsquo;t have an account?{" "}
        <Link href="/login" className="font-bold text-[#e31b23] transition-opacity hover:opacity-80">
          Register
        </Link>
      </div>
    </form>
  );
}
