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

type Errors = {
  firstName?: string;
  lastName?: string;
  email?: string;
  password?: string;
  agree?: string;
};

export function RegisterForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [agree, setAgree] = useState(false);
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);

  function clear(key: keyof Errors) {
    setErrors((p) => ({ ...p, [key]: undefined }));
    if (submitted) setSubmitted(false);
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const next: Errors = {};

    if (!firstName.trim()) next.firstName = "First name is required.";
    if (!lastName.trim()) next.lastName = "Last name is required.";
    if (!email.trim()) {
      next.email = "Email is required.";
    } else if (!EMAIL_RE.test(email.trim())) {
      next.email = "Enter a valid email address.";
    }
    if (!password) {
      next.password = "Password is required.";
    } else if (password.length < 8) {
      next.password = "Use at least 8 characters.";
    }
    if (!agree) next.agree = "Please accept the Terms to continue.";

    setErrors(next);
    setSubmitted(Object.keys(next).length === 0);
  }

  return (
    <form onSubmit={handleSubmit} noValidate className={authCardClass}>
      <h1 className="text-[32px] font-bold leading-none text-white">Start free trial</h1>
      <p className="mt-3 text-sm text-white/60">
        Create your Quantum account — 3,000 free words, no card required.
      </p>

      <div className="mt-8 flex flex-col gap-5">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <TextField
            label="First Name"
            required
            name="firstName"
            type="text"
            autoComplete="given-name"
            value={firstName}
            onChange={(e) => {
              setFirstName(e.target.value);
              if (errors.firstName) clear("firstName");
            }}
            error={errors.firstName}
          />
          <TextField
            label="Last Name"
            required
            name="lastName"
            type="text"
            autoComplete="family-name"
            value={lastName}
            onChange={(e) => {
              setLastName(e.target.value);
              if (errors.lastName) clear("lastName");
            }}
            error={errors.lastName}
          />
        </div>
        <TextField
          label="Email"
          required
          name="email"
          type="email"
          autoComplete="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (errors.email) clear("email");
          }}
          error={errors.email}
        />
        <PasswordField
          label="Password"
          required
          name="password"
          autoComplete="new-password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
            if (errors.password) clear("password");
          }}
          error={errors.password}
        />
      </div>

      <div className="mt-4 flex flex-col gap-1.5">
        <label className="flex cursor-pointer items-start gap-2 text-sm text-white/70">
          <input
            type="checkbox"
            checked={agree}
            onChange={(e) => {
              setAgree(e.target.checked);
              if (errors.agree) clear("agree");
            }}
            className="mt-0.5 size-4 rounded border-white/25 bg-white/10 accent-accent"
          />
          <span>
            I agree to the{" "}
            <Link href="/register" className="text-accent hover:opacity-80">
              Terms
            </Link>{" "}
            and{" "}
            <Link href="/register" className="text-accent hover:opacity-80">
              Privacy Policy
            </Link>
            .
          </span>
        </label>
        {errors.agree ? <p className="text-xs text-[#f87171]">{errors.agree}</p> : null}
      </div>

      <div className="mt-6">
        <SubmitButton>Start free trial</SubmitButton>
      </div>

      {submitted ? (
        <p role="status" className="mt-3 text-[13px] text-accent">
          Looks good — this is a front-end demo, so no account is created.
        </p>
      ) : null}

      <SocialAuthButtons verb="sign up" />

      <div className="mt-6 border-t border-white/10 pt-5 text-center text-sm text-white/60">
        Already have an account?{" "}
        <Link
          href="/login"
          className="font-bold text-accent transition-opacity hover:opacity-80"
        >
          Log In
        </Link>
      </div>
    </form>
  );
}
