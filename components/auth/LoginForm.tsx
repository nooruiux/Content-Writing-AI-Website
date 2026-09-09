"use client";

import Link from "next/link";
import { useState, type FormEvent } from "react";
import {
  authCardClass,
  EMAIL_RE,
  PasswordField,
  SocialAuthButtons,
  SubmitButton,
  TextField,
} from "@/components/auth/authShared";

export function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);
  const [errors, setErrors] = useState<{ email?: string; password?: string }>({});
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const value = email.trim();
    const next: { email?: string; password?: string } = {};

    if (!value) {
      next.email = "Email is required.";
    } else if (!EMAIL_RE.test(value)) {
      next.email = "Enter a valid email address.";
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
    <form onSubmit={handleSubmit} noValidate className={authCardClass}>
      <h1 className="text-[32px] font-bold leading-none text-white">Login</h1>

      <div className="mt-8 flex flex-col gap-5">
        <TextField
          label="Email"
          required
          name="email"
          type="email"
          autoComplete="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (errors.email) setErrors((p) => ({ ...p, email: undefined }));
            if (submitted) setSubmitted(false);
          }}
          error={errors.email}
        />
        <PasswordField
          label="Password"
          required
          name="password"
          autoComplete="current-password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
            if (errors.password) setErrors((p) => ({ ...p, password: undefined }));
            if (submitted) setSubmitted(false);
          }}
          error={errors.password}
        />
      </div>

      <div className="mt-6">
        <SubmitButton>Log In</SubmitButton>
      </div>

      {submitted ? (
        <p role="status" className="mt-3 text-[13px] text-accent">
          Looks good — this is a front-end demo, so no account is signed in.
        </p>
      ) : null}

      <div className="mt-4 flex items-center justify-between gap-3">
        <label className="flex cursor-pointer items-center gap-2 text-sm text-white/70">
          <input
            type="checkbox"
            checked={remember}
            onChange={(e) => setRemember(e.target.checked)}
            className="size-4 rounded border-white/25 bg-white/10 accent-accent"
          />
          Remember me
        </label>
        <Link
          href="/login"
          className="text-sm font-medium text-accent transition-opacity hover:opacity-80"
        >
          Lost your password?
        </Link>
      </div>

      <SocialAuthButtons verb="login" />

      <div className="mt-6 border-t border-white/10 pt-5 text-center text-sm text-white/60">
        Don&rsquo;t have an account?{" "}
        <Link
          href="/register"
          className="font-bold text-accent transition-opacity hover:opacity-80"
        >
          Register
        </Link>
      </div>
    </form>
  );
}
