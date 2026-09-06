"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { nav, site } from "@/lib/content";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="relative z-20 pt-6">
      <Container className="flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2" aria-label={`${site.name} home`}>
          <img src="/assets/logo-mark.svg" alt="" width={24} height={24} className="size-6" />
          <span className="text-[20px] font-bold leading-6 text-white">{site.name}</span>
        </a>

        <nav
          aria-label="Primary"
          className="hidden items-center gap-8 text-base font-medium text-white [text-shadow:0_4px_2px_rgb(0_0_0/0.25)] lg:flex"
        >
          {nav.links.map((link) => (
            <a key={link.label} href={link.href} className="transition-opacity hover:opacity-70">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-6 lg:flex">
          <a href={nav.login.href} className="text-base font-bold text-white transition-opacity hover:opacity-70">
            {nav.login.label}
          </a>
          <Button href={nav.cta.href} variant="glass">
            {nav.cta.label}
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          className="flex size-10 items-center justify-center rounded-lg border border-white/12 bg-white/[0.08] lg:hidden"
        >
          <span className="relative block h-2.5 w-4">
            <span
              className={`absolute left-0 h-0.5 w-full bg-white transition-transform ${
                open ? "top-1/2 -translate-y-1/2 rotate-45" : "top-0"
              }`}
            />
            <span
              className={`absolute left-0 top-1/2 h-0.5 w-full -translate-y-1/2 bg-white transition-opacity ${
                open ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute left-0 h-0.5 w-full bg-white transition-transform ${
                open ? "top-1/2 -translate-y-1/2 -rotate-45" : "bottom-0"
              }`}
            />
          </span>
        </button>
      </Container>

      {open ? (
        <Container className="lg:hidden">
          <div
            id="mobile-menu"
            className="mt-4 flex flex-col gap-1 rounded-2xl border border-white/12 bg-surface/95 p-4 backdrop-blur-2xl"
          >
            {nav.links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-base font-medium text-white/90 hover:bg-white/5"
              >
                {link.label}
              </a>
            ))}
            <a
              href={nav.login.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-2.5 text-base font-bold text-white hover:bg-white/5"
            >
              {nav.login.label}
            </a>
            <Button href={nav.cta.href} variant="glass" className="mt-2 w-full">
              {nav.cta.label}
            </Button>
          </div>
        </Container>
      ) : null}
    </header>
  );
}
