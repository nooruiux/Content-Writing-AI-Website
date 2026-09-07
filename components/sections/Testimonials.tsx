"use client";

import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GradientText } from "@/components/ui/GradientText";
import { Icon } from "@/components/ui/Icon";
import { testimonials } from "@/lib/content";

const userStoryGradient =
  "bg-[linear-gradient(107deg,#1264c4_4%,#ffffff_52%,#18a0fb_112%)]";

const arrowBtn =
  "group flex size-[58px] shrink-0 items-center justify-center rounded-full transition-[background-color,transform] duration-200 ease-out hover:bg-white/[0.1] hover:scale-105 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg";

function PeekCard({ side, text }: { side: "left" | "right"; text: string }) {
  const isLeft = side === "left";
  return (
    <div
      className={`h-[445px] w-[162px] bg-surface/90 p-7 ${
        isLeft
          ? "rounded-r-[32px] [mask-image:linear-gradient(to_right,transparent,#000_78%)]"
          : "rounded-l-[32px] [mask-image:linear-gradient(to_left,transparent,#000_78%)]"
      }`}
    >
      <p className="mt-16 line-clamp-6 text-[15px] font-bold leading-[1.4] text-white/35">
        {text}
      </p>
    </div>
  );
}

export function Testimonials() {
  const { quotes } = testimonials;
  const [index, setIndex] = useState(0);
  const count = quotes.length;

  const go = (delta: number) => setIndex((v) => (v + delta + count) % count);
  const q = quotes[index];
  const prev = quotes[(index - 1 + count) % count];
  const next = quotes[(index + 1) % count];

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

      <div className="relative mt-2 flex justify-center">
        {/* side peek cards — a faded glimpse of the neighbouring quotes */}
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-1/2 hidden w-[1400px] -translate-x-1/2 -translate-y-1/2 justify-between lg:flex"
        >
          <PeekCard side="left" text={prev.text} />
          <PeekCard side="right" text={next.text} />
        </div>

        {/* main card */}
        <div className="relative z-10 mx-4 flex w-full max-w-[1059px] flex-col overflow-hidden rounded-[32px] border-[1.4px] border-border bg-surface sm:flex-row">
          <div className="relative flex shrink-0 justify-center pt-8 sm:w-[390px] sm:justify-start sm:pt-0">
            <img
              src="/assets/testimonials/portrait.png"
              alt=""
              width={390}
              height={450}
              className="h-[280px] w-auto self-end object-contain object-bottom sm:h-[450px] sm:pl-6"
            />
          </div>

          <div className="flex flex-1 flex-col justify-center gap-10 p-8 sm:gap-16 sm:py-12 sm:pl-0 sm:pr-14">
            <div className="flex flex-col gap-4">
              <GradientText gradient={userStoryGradient} className="text-lead font-bold">
                {q.eyebrow}
              </GradientText>
              <p className="max-w-[556px] text-[26px] font-bold leading-[1.3] text-white sm:text-quote">
                {q.text}
              </p>
            </div>

            <div className="flex flex-col items-start gap-6 rounded-3xl border border-border p-6 sm:flex-row sm:items-center sm:justify-between sm:gap-8 sm:rounded-pill-lg sm:py-5 sm:pl-8 sm:pr-6">
              <div className="flex flex-col gap-2">
                <p className="text-lead font-bold text-white">{q.name}</p>
                <p className="text-sm text-white/[0.88]">{q.role}</p>
              </div>
              <a
                href={testimonials.cta.href}
                className="flex h-12 shrink-0 items-center gap-2 rounded-pill-lg bg-accent px-6 text-base font-bold text-white transition-colors duration-200 ease-out hover:bg-[#0f8fe6]"
              >
                {testimonials.cta.label}
                <Icon src="/assets/testimonials/read-arrow.svg" size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-10 flex items-center justify-center gap-5">
        <button type="button" aria-label="Previous testimonial" onClick={() => go(-1)} className={arrowBtn}>
          <img
            src="/assets/testimonials/arrow-prev.svg"
            alt=""
            width={46}
            height={46}
            className="opacity-55 transition-opacity duration-200 group-hover:opacity-100"
          />
        </button>
        <button type="button" aria-label="Next testimonial" onClick={() => go(1)} className={arrowBtn}>
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
