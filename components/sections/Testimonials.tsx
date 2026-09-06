import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GradientText } from "@/components/ui/GradientText";
import { Icon } from "@/components/ui/Icon";
import { testimonials } from "@/lib/content";

const userStoryGradient =
  "bg-[linear-gradient(107deg,#b321cb_6%,#ffffff_56%,#18a0fb_110%)]";

export function Testimonials() {
  const { quote } = testimonials;

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
        {/* side peek cards */}
        <div
          aria-hidden
          className="absolute left-1/2 top-1/2 hidden w-[1400px] -translate-x-1/2 -translate-y-1/2 justify-between lg:flex"
        >
          <div className="h-[445px] w-[162px] rounded-r-[32px] border-y-[1.4px] border-r-[1.4px] border-white bg-gradient-to-r from-[rgb(29_28_32/0.48)] to-[rgb(29_28_32/0.8)]" />
          <div className="h-[445px] w-[162px] rounded-l-[32px] border-y-[1.4px] border-l-[1.4px] border-white bg-gradient-to-l from-[rgb(29_28_32/0.48)] to-[rgb(29_28_32/0.8)]" />
        </div>

        {/* main card */}
        <div className="relative z-10 mx-4 flex w-full max-w-[1059px] flex-col overflow-hidden rounded-[32px] border-[1.4px] border-white bg-surface sm:flex-row">
          <div className="relative flex shrink-0 justify-center pt-8 sm:w-[390px] sm:justify-start sm:pt-0">
            <img
              src="/assets/testimonials/portrait.png"
              alt="William Kerry"
              width={390}
              height={450}
              className="h-[280px] w-auto self-end object-contain object-bottom sm:h-[450px] sm:pl-6"
            />
          </div>

          <div className="flex flex-1 flex-col justify-center gap-10 p-8 sm:gap-16 sm:py-12 sm:pl-0 sm:pr-14">
            <div className="flex flex-col gap-4">
              <GradientText gradient={userStoryGradient} className="text-lead font-bold">
                {quote.eyebrow}
              </GradientText>
              <p className="max-w-[556px] text-[26px] font-bold leading-[1.3] text-white sm:text-quote">
                {quote.text}
              </p>
            </div>

            <div className="flex flex-col items-start gap-6 rounded-3xl border border-white/[0.12] p-6 sm:flex-row sm:items-center sm:justify-between sm:gap-8 sm:rounded-pill-lg sm:py-5 sm:pl-8 sm:pr-6">
              <div className="flex flex-col gap-2">
                <p className="text-lead font-bold text-white">{quote.name}</p>
                <p className="text-sm text-white/[0.88]">{quote.role}</p>
              </div>
              <a
                href={quote.cta.href}
                className="flex h-12 shrink-0 items-center gap-2 rounded-pill-lg bg-accent px-6 text-base font-bold text-white"
              >
                {quote.cta.label}
                <Icon src="/assets/testimonials/read-arrow.svg" size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-10 flex items-center justify-center gap-5">
        <button type="button" aria-label="Previous testimonial">
          <img src="/assets/testimonials/arrow-prev.svg" alt="" width={50} height={50} />
        </button>
        <button type="button" aria-label="Next testimonial">
          <img src="/assets/testimonials/arrow-next.svg" alt="" width={50} height={50} />
        </button>
      </div>
    </section>
  );
}
