import { Icon } from "@/components/ui/Icon";
import { superpowers } from "@/lib/content";

const chevron = "/assets/superpowers/ic-chevdown.svg";

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

function SelectBox({ value, icon }: { value: string; icon?: string }) {
  return (
    <div className="flex items-center justify-between rounded-lg border border-border bg-white/[0.04] px-4 py-3.5">
      <span className="flex items-center gap-2 text-sm text-white/70">
        {icon ? <Icon src={icon} size={20} /> : null}
        {value}
      </span>
      <Icon src={chevron} size={16} />
    </div>
  );
}

export function ParagraphGeneratorCard() {
  const { paragraphGenerator: pg } = superpowers;
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
            <SelectBox value="Regular" />
          </Field>
        </div>

        <div className="relative flex flex-col gap-2">
          <span className="text-base text-white">What is your paragraph about?*</span>
          <div className="h-[108px] rounded-lg border border-border bg-white/[0.04] px-4 py-3.5">
            <p className="text-sm text-white/70">The best  cryptocurrency to invest in..</p>
          </div>
          <span className="absolute right-0 top-0 text-base text-white/70">0/200</span>
        </div>

        <Field label="Keyword to include">
          <div className="rounded-lg border border-border bg-white/[0.04] px-4 py-3.5">
            <p className="text-sm text-white/70">Cryptocurrency</p>
          </div>
        </Field>

        <Field label="Tone of voice*">
          <SelectBox value="Neutral" />
        </Field>
      </div>

      <button
        type="button"
        className="mt-4 flex h-12 w-full items-center justify-center gap-2 rounded-lg bg-accent text-base font-bold text-white"
      >
        <Icon src="/assets/superpowers/ic-generate.svg" size={20} />
        Generate
      </button>

      <div className="mt-6 flex items-start gap-3">
        <Icon src="/assets/superpowers/ic-info-circle.svg" size={20} />
        <p className="max-w-[450px] text-base text-white/[0.88]">{pg.hint}</p>
      </div>
    </div>
  );
}
