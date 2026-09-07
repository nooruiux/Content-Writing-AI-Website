import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { BillingToggle } from "@/components/ui/BillingToggle";
import { Icon } from "@/components/ui/Icon";
import { pricing } from "@/lib/content";

type Plan = (typeof pricing.plans)[number];

function FeatureRow({ label, icon, muted = false }: { label: string; icon: string; muted?: boolean }) {
  return (
    <li className={`flex items-start gap-2.5 ${muted ? "text-white/[0.32]" : "text-white"}`}>
      <Icon src={icon} size={24} className="shrink-0" />
      <span className="text-[17px] leading-[24px] sm:whitespace-nowrap">{label}</span>
    </li>
  );
}

function PricingCard({ plan }: { plan: Plan }) {
  const checkIcon = plan.popular ? "/assets/pricing/check-blue.svg" : "/assets/pricing/check.svg";

  return (
    <div
      className={`relative flex w-full max-w-[360px] flex-col gap-7 rounded-[20px] bg-surface px-6 pb-8 pt-6 backdrop-blur-2xl sm:w-[324px] ${
        plan.popular ? "pro-card-frame" : "border border-border"
      }`}
    >
      {plan.popular ? (
        <span className="absolute right-6 top-6 flex h-8 items-center gap-1.5 rounded-pill bg-accent-soft px-3 text-sm font-bold text-accent">
          <Icon src="/assets/pricing/sparkle-blue.svg" size={16} />
          Popular
        </span>
      ) : null}

      <div className="flex flex-col gap-7">
        <div className="flex flex-col gap-3">
          <h3 className="text-title font-medium text-white">{plan.name}</h3>
          <p className="text-base text-white/80">{plan.tagline}</p>
        </div>
        <p className="font-bold text-white">
          <span className="text-[40px] leading-[48px]">{plan.price}</span>
          <span className="text-title leading-[48px]">/month</span>
        </p>
      </div>

      <div className="h-px w-full bg-white/5" />

      <ul className="flex flex-col gap-4">
        {plan.features.map((f) => (
          <FeatureRow key={f} label={f} icon={checkIcon} />
        ))}
        {plan.disabledFeatures.map((f) => (
          <FeatureRow key={f} label={f} icon="/assets/pricing/check-muted.svg" muted />
        ))}
      </ul>

      <Button
        href={pricing.cta.href}
        variant={plan.popular ? "gradient" : "outline"}
        pill={plan.popular ? "lg" : "md"}
        className="mt-auto w-full"
      >
        {pricing.cta.label}
      </Button>
    </div>
  );
}

export function Pricing() {
  return (
    <section id="pricing" className="py-14">
      <Container className="flex flex-col items-center gap-12 lg:gap-16">
        <div className="flex flex-col items-center gap-8">
          <SectionHeading
            title={pricing.title}
            subtitle={pricing.subtitle}
            titleClassName="text-[34px] leading-[1.1] sm:text-[42px] lg:text-h4"
            subtitleClassName="max-w-[324px] text-base text-white/[0.88]"
          />
          <BillingToggle />
        </div>

        <div className="flex w-full max-w-[1072px] flex-col items-center gap-8 md:flex-row md:items-stretch md:justify-center md:gap-6 lg:gap-11">
          {pricing.plans.map((plan) => (
            <PricingCard key={plan.name} plan={plan} />
          ))}
        </div>
      </Container>
    </section>
  );
}
