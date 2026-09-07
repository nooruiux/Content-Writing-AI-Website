"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GradientText } from "@/components/ui/GradientText";
import { Icon } from "@/components/ui/Icon";
import { testimonials } from "@/lib/content";

type Quote = (typeof testimonials.quotes)[number];

const userStoryGradient =
  "bg-[linear-gradient(107deg,#1264c4_4%,#ffffff_52%,#18a0fb_112%)]";

const arrowBase =
  "group flex size-[58px] shrink-0 items-center justify-center rounded-full transition-[background-color,transform,opacity] duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg disabled:pointer-events-none disabled:cursor-not-allowed";
const arrowActive = "hover:bg-white/[0.1] hover:scale-105 active:scale-95";
const arrowDisabled = "opacity-30";

function PeekCard({ side, quote }: { side: "left" | "right"; quote: Quote }) {
  const isLeft = side === "left";
  return (
    <div
      className={`flex h-[445px] w-[162px] flex-col gap-4 bg-surface/90 p-7 ${
        isLeft
          ? "rounded-r-[32px] [mask-image:linear-gradient(to_right,transparent,#000_78%)]"
          : "rounded-l-[32px] [mask-image:linear-gradient(to_left,transparent,#000_78%)]"
      }`}
    >
      <Image
        src={quote.photo}
        alt=""
        width={44}
        height={44}
        className="size-11 shrink-0 rounded-full object-cover object-top opacity-40 grayscale"
      />
      <p className="line-clamp-6 text-[15px] font-bold leading-[1.4] text-white/35">
        {quote.text}
      </p>
    </div>
  );
}

export function Testimonials() {
  const { quotes } = testimonials;
  const count = quotes.length;
  const [index, setIndex] = useState(0);

  const go = (delta: number) =>
    setIndex((v) => Math.min(count - 1, Math.max(0, v + delta)));

  const q = quotes[index];
  const atStart = index === 0;
  const atEnd = index === count - 1;
  const prev = quotes[Math.max(0, index - 1)];
  const next = quotes[Math.min(count - 1, index + 1)];

  return (
    <section className="overflow-hidden py-14">
      <Container className="flex flex-col items-center gap-12 lg:gap-16">
        <SectionHeading
          title={testimonials.title}
          subtitle={testimonials.subtitle}
          titleClassName="text-[32px] leading-[1.1] sm:text-[42px] lg:text-h4"
          subtitleClassName="max-w-[456px] text-base font-medium text-white/[0.88]"
        />
      </Container>

      {/* Figma frame 1:3310 subheading bottom (y128) → card 1:3296 top (y200) = 72px */}
      <div className="relative mt-18 flex justify-center">
        {/* side peek cards — a faded glimpse of the neighbouring quotes */}
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-1/2 hidden w-[1400px] -translate-x-1/2 -translate-y-1/2 justify-between lg:flex"
        >
          <PeekCard side="left" quote={prev} />
          <PeekCard side="right" quote={next} />
        </div>

        {/* main card */}
        <div className="relative z-10 mx-4 flex w-full max-w-[1059px] flex-col overflow-hidden rounded-[32px] border-[1.4px] border-border bg-surface sm:flex-row">
          <div className="relative flex shrink-0 items-end justify-center pt-8 sm:w-[390px] sm:pt-0">
            <div className="relative h-[280px] w-[240px] sm:h-[450px] sm:w-[360px]">
              <Image
                key={q.slug}
                src={q.photo}
                alt=""
                fill
                sizes="(min-width: 640px) 360px, 240px"
                priority={index === 0}
                className="object-contain object-bottom grayscale"
              />
            </div>
          </div>

          <div className="flex flex-1 flex-col justify-center gap-10 p-8 sm:gap-14 sm:py-12 sm:pl-0 sm:pr-14">
            <div className="flex flex-col items-start gap-4">
              <GradientText gradient={userStoryGradient} className="text-lead font-bold">
                {q.eyebrow}
              </GradientText>
              <p className="max-w-[556px] text-left text-[22px] font-bold leading-[1.35] text-white sm:min-h-[128px] sm:text-title sm:leading-[34px]">
                {q.text}
              </p>
            </div>

            <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between sm:gap-8">
              <div className="flex flex-col gap-0.5">
                <p className="text-lead font-bold leading-[26px] text-white">{q.name}</p>
                <p className="text-sm leading-[18px] text-white/[0.88]">{q.role}</p>
              </div>
              <Link
                href={`/story/${q.slug}`}
                className="flex h-12 shrink-0 items-center gap-2 rounded-pill-lg bg-accent px-6 text-base font-bold text-white transition-colors duration-200 ease-out hover:bg-[#0f8fe6]"
              >
                {testimonials.cta.label}
                <Icon src="/assets/testimonials/read-arrow.svg" size={16} />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-10 flex items-center justify-center gap-5">
        <button
          type="button"
          aria-label="Previous testimonial"
          onClick={() => go(-1)}
          disabled={atStart}
          className={`${arrowBase} ${atStart ? arrowDisabled : arrowActive}`}
        >
          <img
            src="/assets/testimonials/arrow-prev.svg"
            alt=""
            width={46}
            height={46}
            className="opacity-55 transition-opacity duration-200 group-hover:opacity-100"
          />
        </button>
        <button
          type="button"
          aria-label="Next testimonial"
          onClick={() => go(1)}
          disabled={atEnd}
          className={`${arrowBase} ${atEnd ? arrowDisabled : arrowActive}`}
        >
          <img
            src="/assets/testimonials/arrow-next.svg"
            alt=""
            width={46}
            height={46}
            className="opacity-55 transition-opacity duration-200 group-hover:opacity-100"
          />
        </button>
      </div>
    </section>
  );
}
