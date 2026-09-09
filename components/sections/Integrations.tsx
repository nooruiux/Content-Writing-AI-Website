import type { ReactNode } from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { integrations, site } from "@/lib/content";

type Item = { name: string; icon: string };

function Pill({ item }: { item: Item }) {
  return (
    <span className="flex h-[52px] items-center gap-3 rounded-xl border border-white/[0.08] bg-white/[0.05] px-4 backdrop-blur-sm">
      <img src={item.icon} alt="" aria-hidden width={18} height={18} className="size-[18px] shrink-0" />
      <span className="truncate text-[13px] font-medium text-white/90">{item.name}</span>
    </span>
  );
}

function MorePill() {
  return (
    <span className="flex h-[52px] items-center justify-center rounded-xl border border-accent/40 bg-accent-soft px-4 text-[13px] font-bold text-accent">
      {integrations.more}
    </span>
  );
}

function GroupLabel({ children }: { children: ReactNode }) {
  return (
    <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.14em] text-white/40">{children}</p>
  );
}

function Hub() {
  return (
    <div className="relative flex size-[168px] flex-col items-center justify-center gap-3 rounded-[28px] border border-white/20 bg-white/[0.04] backdrop-blur-md">
      <div
        aria-hidden
        className="pointer-events-none absolute -inset-24 -z-10 bg-[radial-gradient(circle,rgb(24_160_251/0.26),transparent_62%)]"
      />
      <img src="/assets/logo-mark.svg" alt="" aria-hidden width={44} height={44} className="size-11" />
      <span className="text-[15px] font-bold text-white">{site.name}</span>
    </div>
  );
}

export function Integrations() {
  const { leftGroups, right } = integrations;

  return (
    <section id="integrations" className="py-14">
      <Container className="flex flex-col items-center gap-14">
        <SectionHeading
          title={integrations.title}
          subtitle={integrations.subtitle}
          titleClassName="max-w-[520px] text-[34px] leading-[1.15] sm:text-[42px] lg:text-h4"
          subtitleClassName="max-w-[560px] text-base text-white/[0.88]"
        />

        {/* desktop: fixed diagram with curved connectors */}
        <div className="relative mx-auto hidden h-[540px] w-[1080px] xl:block">
          <svg className="absolute inset-0 h-full w-full" viewBox="0 0 1080 540" fill="none" aria-hidden>
            <g stroke="rgb(255 255 255 / 0.16)" strokeWidth="1.25" strokeLinecap="round">
              <path d="M220 105 C 320 105 380 270 456 270" />
              <path d="M220 173 C 320 173 390 270 456 270" />
              <path d="M220 241 C 340 241 400 270 456 270" />
              <path d="M220 337 C 340 337 400 270 456 270" />
              <path d="M220 405 C 320 405 390 270 456 270" />
              <path d="M220 473 C 320 473 380 270 456 270" />
              <path d="M624 270 C 740 270 750 66 860 66" />
              <path d="M624 270 C 740 270 750 134 860 134" />
              <path d="M624 270 C 740 270 780 202 860 202" />
              <path d="M624 270 C 740 270 780 270 860 270" />
              <path d="M624 270 C 740 270 750 338 860 338" />
              <path d="M624 270 C 740 270 750 406 860 406" />
              <path d="M624 270 C 740 270 750 474 860 474" />
            </g>
          </svg>

          <div className="absolute left-0 top-[46px] w-[220px]">
            <GroupLabel>{leftGroups[0].label}</GroupLabel>
            <div className="flex flex-col gap-4 [&>span]:w-full">
              {leftGroups[0].items.map((i) => (
                <Pill key={i.name} item={i} />
              ))}
            </div>
          </div>
          <div className="absolute left-0 top-[278px] w-[220px]">
            <GroupLabel>{leftGroups[1].label}</GroupLabel>
            <div className="flex flex-col gap-4 [&>span]:w-full">
              {leftGroups[1].items.map((i) => (
                <Pill key={i.name} item={i} />
              ))}
            </div>
          </div>

          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <Hub />
          </div>

          <div className="absolute right-0 top-[40px] flex w-[220px] flex-col gap-4 [&>span]:w-full">
            {right.map((i) => (
              <Pill key={i.name} item={i} />
            ))}
            <MorePill />
          </div>
        </div>

        {/* mobile / tablet: stacked */}
        <div className="flex w-full max-w-[340px] flex-col items-center gap-10 xl:hidden">
          {leftGroups.map((g) => (
            <div key={g.label} className="w-full">
              <GroupLabel>{g.label}</GroupLabel>
              <div className="flex flex-col gap-3 [&>span]:w-full">
                {g.items.map((i) => (
                  <Pill key={i.name} item={i} />
                ))}
              </div>
            </div>
          ))}

          <Hub />

          <div className="flex w-full flex-col gap-3 [&>span]:w-full">
            {right.map((i) => (
              <Pill key={i.name} item={i} />
            ))}
            <MorePill />
          </div>
        </div>
      </Container>
    </section>
  );
}
