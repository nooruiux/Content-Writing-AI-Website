import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { HeroVisual } from "@/components/mockups/HeroVisual";
import { hero } from "@/lib/content";

export function Hero() {
  return (
    <section className="relative overflow-hidden pb-14">
      <Container className="relative z-10 flex flex-col items-center gap-10 pt-20 text-center lg:pt-28">
        <div className="flex w-full max-w-[690px] flex-col items-center gap-6">
          <h1 className="text-balance text-[32px] font-bold leading-[1.1] text-white sm:text-[52px] lg:text-display">
            {hero.title}
          </h1>
          <p className="text-base font-medium text-white/90 sm:text-lead">{hero.subtitle}</p>
        </div>

        <div className="relative flex justify-center">
          <div
            aria-hidden
            className="pointer-events-none absolute top-1/2 left-1/2 hidden w-[1176px] -translate-x-1/2 -translate-y-1/2 justify-between lg:flex"
          >
            <img
              src="/assets/hero/bracket-left.svg"
              alt=""
              width={484}
              height={400}
              className="-translate-y-[187px]"
            />
            <img
              src="/assets/hero/bracket-right.svg"
              alt=""
              width={484}
              height={400}
              className="translate-y-[187px] rotate-180"
            />
          </div>

          <span className="cta-glow">
            <span aria-hidden className="cta-glow-layer cta-glow-bloom">
              <span className="cta-glow-spin" />
            </span>
            <span aria-hidden className="cta-glow-layer cta-glow-ring">
              <span className="cta-glow-spin" />
            </span>
            <Button href={hero.cta.href} variant="glass" className="relative">
              <Icon src="/assets/hero/btn-quantum.svg" size={20} />
              {hero.cta.label}
            </Button>
          </span>
        </div>
      </Container>

      <HeroVisual className="mt-16 lg:mt-20" />
    </section>
  );
}
