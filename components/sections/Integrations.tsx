import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { integrations, site } from "@/lib/content";

type Integration = { name: string; icon: string };

function Pill({ item }: { item: Integration }) {
  return (
    <span className="flex h-[52px] items-center gap-3 rounded-xl border border-white/[0.08] bg-white/[0.05] px-4 backdrop-blur-sm">
      <img src={item.icon} alt="" aria-hidden width={18} height={18} className="size-[18px]" />
      <span className="text-sm font-medium text-white/90">{item.name}</span>
    </span>
  );
}

function Hub() {
  return (
    <div className="flex size-[168px] flex-col items-center justify-center gap-3 rounded-[28px] border border-white/25 bg-white/[0.04] backdrop-blur-md shadow-[0_0_50px_-6px_rgb(24_160_251/0.45)]">
      <img src="/assets/logo-mark.svg" alt="" aria-hidden width={44} height={44} className="size-11" />
      <span className="text-[15px] font-bold text-white">{site.name}</span>
    </div>
  );
}

export function Integrations() {
  const { left, right, more } = integrations;

  return (
    <section id="integrations" className="py-14">
      <Container className="flex flex-col items-center gap-12">
        <SectionHeading
          title={integrations.title}
          subtitle={integrations.subtitle}
          titleClassName="text-[34px] leading-[1.1] sm:text-[42px] lg:text-h4"
          subtitleClassName="max-w-[560px] text-base text-white/[0.88]"
        />

        <div className="relative w-full max-w-[1000px] overflow-hidden rounded-[32px] border border-border bg-[#050505] px-6 py-12 sm:px-10">
          {/* brand glow rising from the bottom, à la sendr.ai */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 bottom-[-12%] h-[58%] bg-[radial-gradient(ellipse_58%_100%_at_50%_100%,rgb(24_160_251/0.34),rgb(24_160_251/0)_72%)]"
          />

          {/* desktop: fixed diagram with curved connectors */}
          <div className="relative mx-auto hidden h-[404px] w-[900px] xl:block">
            <svg
              className="absolute inset-0 h-full w-full"
              viewBox="0 0 900 404"
              fill="none"
              aria-hidden
            >
              <g stroke="rgb(255 255 255 / 0.16)" strokeWidth="1.25" strokeLinecap="round">
                <path d="M196 66 C 300 66, 322 202, 366 202" />
                <path d="M196 194 C 300 194, 332 202, 366 202" />
                <path d="M196 322 C 300 322, 322 202, 366 202" />
                <path d="M704 66 C 600 66, 578 202, 534 202" />
                <path d="M704 194 C 600 194, 568 202, 534 202" />
                <path d="M704 322 C 600 322, 578 202, 534 202" />
              </g>
            </svg>

            <div className="absolute left-0 top-[40px] w-[196px] [&>span]:w-full">
              <Pill item={left[0]} />
            </div>
            <div className="absolute left-0 top-[168px] w-[196px] [&>span]:w-full">
              <Pill item={left[1]} />
            </div>
            <div className="absolute left-0 top-[296px] w-[196px] [&>span]:w-full">
              <Pill item={left[2]} />
            </div>

            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <Hub />
            </div>

            <div className="absolute right-0 top-[40px] flex w-[196px] justify-end [&>span]:w-full">
              <Pill item={right[0]} />
            </div>
            <div className="absolute right-0 top-[168px] flex w-[196px] justify-end [&>span]:w-full">
              <Pill item={right[1]} />
            </div>
            <div className="absolute right-0 top-[296px] flex w-[196px] justify-end [&>span]:w-full">
              <Pill item={right[2]} />
            </div>
          </div>

          {/* mobile / tablet: stacked */}
          <div className="relative flex flex-col items-center gap-4 xl:hidden">
            <div className="flex w-full max-w-[280px] flex-col gap-3 [&>span]:w-full">
              {left.map((item) => (
                <Pill key={item.name} item={item} />
              ))}
            </div>
            <Hub />
            <div className="flex w-full max-w-[280px] flex-col gap-3 [&>span]:w-full">
              {right.map((item) => (
                <Pill key={item.name} item={item} />
              ))}
            </div>
          </div>
        </div>

        <p className="text-sm font-bold text-accent">{more} &rarr;</p>
      </Container>
    </section>
  );
}
