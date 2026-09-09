import type { ReactNode } from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { integrations, site } from "@/lib/content";

type Item = { name: string; icon: string };

function Pill({ item }: { item: Item }) {
  return (
    <span className="flex h-[52px] items-center gap-2.5 rounded-xl border border-white/[0.08] bg-white/[0.05] px-3.5 backdrop-blur-sm">
      <img src={item.icon} alt="" aria-hidden width={18} height={18} className="size-[18px] shrink-0" />
      <span className="truncate text-[13px] font-medium text-white/90">{item.name}</span>
    </span>
  );
}

function MorePill() {
  return (
    <span className="flex h-[52px] items-center justify-center rounded-xl border border-accent/40 bg-accent-soft px-3.5 text-[13px] font-bold text-accent">
      {integrations.more}
    </span>
  );
}

function GroupLabel({ children }: { children: ReactNode }) {
  return (
    <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.14em] text-white/40">{children}</p>
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
      <Container className="flex flex-col items-center gap-12">
        <SectionHeading
          title={integrations.title}
          subtitle={integrations.subtitle}
          titleClassName="text-[34px] leading-[1.1] sm:text-[42px] lg:text-h4"
          subtitleClassName="max-w-[560px] text-base text-white/[0.88]"
        />

        {/* desktop: fixed diagram with curved connectors */}
        <div className="relative mx-auto hidden h-[460px] w-[1000px] xl:block">
          <svg className="absolute inset-0 h-full w-full" viewBox="0 0 1000 460" fill="none" aria-hidden>
            <g stroke="rgb(255 255 255 / 0.16)" strokeWidth="1.25" strokeLinecap="round">
              <path d="M214 66 C 300 66 350 230 416 230" />
              <path d="M214 124 C 300 124 360 230 416 230" />
              <path d="M214 182 C 330 182 380 230 416 230" />
              <path d="M214 280 C 330 280 380 230 416 230" />
              <path d="M214 338 C 300 338 360 230 416 230" />
              <path d="M214 396 C 300 396 350 230 416 230" />
              <path d="M584 230 C 690 230 700 56 786 56" />
              <path d="M584 230 C 690 230 700 114 786 114" />
              <path d="M584 230 C 690 230 720 172 786 172" />
              <path d="M584 230 C 690 230 720 230 786 230" />
              <path d="M584 230 C 690 230 700 288 786 288" />
              <path d="M584 230 C 690 230 700 346 786 346" />
              <path d="M584 230 C 690 230 700 404 786 404" />
            </g>
          </svg>

          <div className="absolute left-0 top-[12px] w-[214px]">
            <GroupLabel>{leftGroups[0].label}</GroupLabel>
            <div className="flex flex-col gap-1.5 [&>span]:w-full">
              {leftGroups[0].items.map((i) => (
                <Pill key={i.name} item={i} />
              ))}
            </div>
          </div>
          <div className="absolute left-0 top-[226px] w-[214px]">
            <GroupLabel>{leftGroups[1].label}</GroupLabel>
            <div className="flex flex-col gap-1.5 [&>span]:w-full">
              {leftGroups[1].items.map((i) => (
                <Pill key={i.name} item={i} />
              ))}
            </div>
          </div>

          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <Hub />
          </div>

          <div className="absolute right-0 top-[30px] flex w-[214px] flex-col gap-1.5 [&>span]:w-full">
            {right.map((i) => (
              <Pill key={i.name} item={i} />
            ))}
            <MorePill />
          </div>
        </div>

        {/* mobile / tablet: stacked */}
        <div className="flex w-full max-w-[340px] flex-col items-center gap-8 xl:hidden">
          {leftGroups.map((g) => (
            <div key={g.label} className="w-full">
              <GroupLabel>{g.label}</GroupLabel>
              <div className="flex flex-col gap-2.5 [&>span]:w-full">
                {g.items.map((i) => (
                  <Pill key={i.name} item={i} />
                ))}
              </div>
            </div>
          ))}

          <Hub />

          <div className="flex w-full flex-col gap-2.5 [&>span]:w-full">
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
