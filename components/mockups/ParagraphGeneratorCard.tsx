"use client";

import { useEffect, useState } from "react";
import { Icon } from "@/components/ui/Icon";
import { superpowers } from "@/lib/content";

const chevron = "/assets/superpowers/ic-chevdown.svg";
const ABOUT = "The best cryptocurrency to invest in for 2025";
const KEYWORD = "Cryptocurrency";

function Field({
  label,
  className = "",
  children,
}: {
  label: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <label className={`flex flex-col gap-2 ${className}`}>
      <span className="text-base text-white">{label}</span>
      {children}
    </label>
  );
}

function SelectBox({ value, icon, flash = false }: { value: string; icon?: string; flash?: boolean }) {
  return (
    <div
      className={`flex items-center justify-between rounded-lg border bg-white/[0.04] px-4 py-3.5 transition-[box-shadow,border-color] duration-300 ${
        flash ? "border-accent/70 shadow-[0_0_0_3px_rgb(24_160_251/0.22)]" : "border-border"
      }`}
    >
      <span className="flex items-center gap-2 text-sm text-white/70">
        {icon ? <Icon src={icon} size={20} /> : null}
        <span className="transition-opacity duration-200">{value}</span>
      </span>
      <Icon src={chevron} size={16} />
    </div>
  );
}

function Caret({ on }: { on: boolean }) {
  if (!on) return null;
  return (
    <span className="caret-blink ml-px inline-block h-[1em] w-px translate-y-[0.15em] animate-[caret-blink_1.06s_infinite] bg-white/70 align-baseline" />
  );
}

export function ParagraphGeneratorCard() {
  const { paragraphGenerator: pg } = superpowers;
  const [about, setAbout] = useState("");
  const [keyword, setKeyword] = useState("");
  const [creativity, setCreativity] = useState("Regular");
  const [tone, setTone] = useState("Neutral");
  const [flash, setFlash] = useState<"" | "creativity" | "tone">("");
  const [phase, setPhase] = useState<"idle" | "about" | "keyword" | "loading">("idle");
  const [pressed, setPressed] = useState(false);

  useEffect(() => {
    let cancelled = false;
    const sleep = (ms: number) => new Promise<void>((r) => setTimeout(r, ms));
    const type = async (text: string, set: (s: string) => void, per = 52) => {
      for (let i = 1; i <= text.length && !cancelled; i++) {
        set(text.slice(0, i));
        await sleep(per + Math.random() * 45);
      }
    };

    (async () => {
      await sleep(0);
      if (cancelled) return;

      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        setAbout(ABOUT);
        setKeyword(KEYWORD);
        setCreativity("Creative");
        setTone("Persuasive");
        return;
      }

      while (!cancelled) {
        setPhase("idle");
        setAbout("");
        setKeyword("");
        setCreativity("Regular");
        setTone("Neutral");
        await sleep(1500);

        setFlash("creativity");
        await sleep(260);
        setCreativity("Creative");
        await sleep(520);
        setFlash("");
        await sleep(420);

        setPhase("about");
        await type(ABOUT, setAbout);
        await sleep(520);

        setPhase("keyword");
        await type(KEYWORD, setKeyword, 62);
        await sleep(420);

        setFlash("tone");
        await sleep(260);
        setTone("Persuasive");
        await sleep(520);
        setFlash("");
        await sleep(560);

        setPressed(true);
        await sleep(170);
        setPressed(false);
        setPhase("loading");
        await sleep(2700);
      }
    })();

    return () => {
      cancelled = true;
    };
  }, []);

  const loading = phase === "loading";

  return (
    <div className="w-[576px] rounded-[32px] border-[1.4px] border-border bg-surface p-8 backdrop-blur-4xl">
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-3">
          <span className="rounded bg-[rgb(16_185_129/0.12)] px-1.5 py-[5px]">
            <Icon src="/assets/superpowers/ic-paragraph-gen.svg" size={20} />
          </span>
          <h3 className="text-title font-bold text-white">{pg.title}</h3>
        </div>
        <p className="max-w-[455px] text-base text-white/[0.88]">{pg.description}</p>
      </div>

      <div className="mt-6 flex flex-col gap-4">
        <div className="flex gap-4">
          <Field label="Language" className="w-[248px]">
            <SelectBox value="English (US)" icon="/assets/superpowers/ic-globe.svg" />
          </Field>
          <Field
            label="Creativity"
            className="w-[248px] [&>span]:flex [&>span]:items-center [&>span]:gap-1"
          >
            <SelectBox value={creativity} flash={flash === "creativity"} />
          </Field>
        </div>

        <div className="relative flex flex-col gap-2">
          <span className="text-base text-white">What is your paragraph about?*</span>
          <div className="h-[108px] rounded-lg border border-border bg-white/[0.04] px-4 py-3.5">
            <p className="min-h-[1.25em] text-sm text-white/70">
              {about}
              <Caret on={phase === "about"} />
            </p>
          </div>
          <span className="absolute right-0 top-0 text-base text-white/70">{about.length}/200</span>
        </div>

        <Field label="Keyword to include">
          <div className="rounded-lg border border-border bg-white/[0.04] px-4 py-3.5">
            <p className="min-h-[1.25em] text-sm text-white/70">
              {keyword}
              <Caret on={phase === "keyword"} />
            </p>
          </div>
        </Field>

        <Field label="Tone of voice*">
          <SelectBox value={tone} flash={flash === "tone"} />
        </Field>
      </div>

      <button
        type="button"
        aria-hidden
        tabIndex={-1}
        className={`mt-4 flex h-12 w-full items-center justify-center gap-2 rounded-lg bg-accent text-base font-bold text-white transition-transform duration-150 ${
          pressed ? "scale-[0.97]" : "scale-100"
        } ${loading ? "opacity-95" : ""}`}
      >
        <Icon
          src="/assets/superpowers/ic-generate.svg"
          size={20}
          className={loading ? "animate-spin [animation-duration:0.9s]" : ""}
        />
        {loading ? "Generating…" : "Generate"}
      </button>

      <div className="mt-6 flex items-start gap-3">
        <Icon src="/assets/superpowers/ic-info-circle.svg" size={20} />
        <p className="max-w-[450px] text-base text-white/[0.88]">{pg.hint}</p>
      </div>
    </div>
  );
}
