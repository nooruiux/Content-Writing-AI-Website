import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { cta } from "@/lib/content";

export function CtaBanner() {
  return (
    <section className="pt-14 pb-8">
      <Container>
        <div className="flex flex-col items-start gap-8 rounded-2xl border border-white/[0.08] bg-surface p-8 backdrop-blur-xs sm:flex-row sm:items-center sm:justify-between sm:p-12 lg:p-16">
          <div className="flex flex-col gap-3">
            <h2 className="text-[28px] font-bold leading-[1.15] text-white sm:text-h5">{cta.title}</h2>
            <p className="text-base font-medium text-white/80 sm:text-lead">{cta.subtitle}</p>
          </div>
          <a
            href={cta.button.href}
            className="flex h-14 shrink-0 items-center justify-center gap-2.5 rounded-pill border border-white/[0.12] bg-accent px-8 text-list font-bold text-white shadow-[1px_1px_0.8px_0_rgb(255_255_255/0.04),inset_0_-1px_1px_1.5px_rgb(255_255_255/0.08)] transition-colors hover:bg-[#0f93ef] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
          >
            <Icon src="/assets/cta-icon.svg" size={24} />
            {cta.button.label}
          </a>
        </div>
      </Container>
    </section>
  );
}
