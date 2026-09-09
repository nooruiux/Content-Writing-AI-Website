"use client";

import { useState, type FormEvent } from "react";
import {
  authCardClass,
  EMAIL_RE,
  SubmitButton,
  TextAreaField,
  TextField,
} from "@/components/ui/formControls";

type Errors = {
  firstName?: string;
  lastName?: string;
  email?: string;
  subject?: string;
  message?: string;
};

export function ContactForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);

  function clear(key: keyof Errors) {
    setErrors((p) => ({ ...p, [key]: undefined }));
    if (sent) setSent(false);
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
    if (!subject.trim()) next.subject = "Please add a subject.";
    if (!message.trim()) {
      next.message = "Please write a message.";
    } else if (message.trim().length < 10) {
      next.message = "Message is a little short — add a few more details.";
    }

    setErrors(next);
    if (Object.keys(next).length === 0) {
      setSent(true);
      setFirstName("");
      setLastName("");
      setEmail("");
      setSubject("");
      setMessage("");
    }
  }

  return (
    <form onSubmit={handleSubmit} noValidate className={authCardClass}>
      <h1 className="text-[32px] font-bold leading-none text-white">Contact support</h1>
      <p className="mt-3 text-sm text-white/60">
        Tell us what you need help with and the team will get back to you by email.
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
        <TextField
          label="Subject"
          required
          name="subject"
          type="text"
          value={subject}
          onChange={(e) => {
            setSubject(e.target.value);
            if (errors.subject) clear("subject");
          }}
          error={errors.subject}
        />
        <TextAreaField
          label="Message"
          required
          name="message"
          rows={6}
          value={message}
          onChange={(e) => {
            setMessage(e.target.value);
            if (errors.message) clear("message");
          }}
          error={errors.message}
        />
      </div>

      <div className="mt-6">
        <SubmitButton>Send message</SubmitButton>
      </div>

      {sent ? (
        <p role="status" className="mt-3 text-[13px] text-accent">
          Thanks — your message has been received. This is a front-end demo, so nothing
          is actually sent or stored.
        </p>
      ) : null}
    </form>
  );
}
