import { Icon } from "@/components/ui/Icon";

const skeleton = "rounded-2xl bg-white/12";

function SkeletonCard({ className = "", wide = false }: { className?: string; wide?: boolean }) {
  return (
    <div className={`rounded-lg bg-white/[0.06] p-6 ${className}`}>
      <div className="flex flex-col gap-3">
        <div className={`h-3 w-[82px] ${skeleton}`} />
        <div className="flex flex-col gap-2">
          <div className={`h-3 ${skeleton} ${wide ? "w-[330px]" : "w-[133px]"}`} />
          <div className={`h-3 ${skeleton} ${wide ? "w-[330px]" : "w-[133px]"}`} />
        </div>
      </div>
    </div>
  );
}

function MenuItem({
  icon,
  title,
  subtitle,
  highlighted = false,
}: {
  icon: string;
  title: string;
  subtitle: string;
  highlighted?: boolean;
}) {
  const body = (
    <>
      <Icon src={icon} size={24} />
      <div className="flex flex-col gap-1 whitespace-nowrap">
        <p className={`text-base font-bold ${highlighted ? "text-white" : "text-white/[0.94]"}`}>
          {title}
        </p>
        <p className="text-xs text-white/80">{subtitle}</p>
      </div>
    </>
  );

  return highlighted ? (
    <div className="flex items-start gap-2 rounded-xl border border-border bg-white/[0.08] px-6 py-3 shadow-[0_20px_48px_rgb(33_33_33/0.32)] backdrop-blur-2xl">
      {body}
    </div>
  ) : (
    <div className="flex items-start gap-2">{body}</div>
  );
}

function GlobeOrbit({ className = "" }: { className?: string }) {
  return (
    <div className={`relative h-[618px] w-[618px] ${className}`}>
      <div
        aria-hidden
        className="absolute left-1/2 top-[40px] h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgb(111_58_218/0.18),transparent_65%)] blur-[80px]"
      />
      <img src="/assets/hero/globe.svg" alt="" width={618} height={618} className="absolute inset-0" />
    </div>
  );
}

function QuantumMenuPanel() {
  return (
    <div className="relative h-[454px] w-[631px] overflow-hidden rounded-2xl border border-border bg-surface">
      <div className="absolute left-6 top-6 flex flex-col gap-[108px] rounded-2xl bg-white/[0.06] p-6">
        <div className="flex w-[164px] flex-col gap-6">
          <div className="flex items-center gap-2">
            <img src="/assets/logo-mark.svg" alt="" width={24} height={24} />
            <span className="text-[20px] font-bold leading-6 text-white">Quantum</span>
          </div>
          <div className="flex flex-col gap-4">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className={`h-4 w-[164px] ${skeleton}`} />
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div className={`h-4 w-[164px] ${skeleton}`} />
          <div className={`h-4 w-[164px] ${skeleton}`} />
        </div>
      </div>
      <SkeletonCard className="absolute left-[258px] top-[54px] w-[181px]" />
      <SkeletonCard className="absolute left-[258px] top-[174px] w-[181px]" />
      <SkeletonCard className="absolute left-[258px] top-[294px] w-[378px]" wide />

      <div className="absolute left-[319px] top-[33px] h-[453px] w-[321px] overflow-hidden rounded-xl border border-border bg-white/[0.04] backdrop-blur-2xl">
        <div className="flex flex-col gap-2 px-[22px] pt-6">
          <p className="text-[20px] font-bold leading-7 text-white">Write your content</p>
          <div className="h-px w-[273px] bg-white/5" />
        </div>
        <div className="mt-4 flex gap-5 px-6 text-sm">
          <span className="font-bold text-accent">All</span>
          <span className="font-medium text-white/80">Blog</span>
          <span className="font-medium text-white/80">Paragraph</span>
          <span className="font-medium text-white/80">Voice</span>
          <span className="font-medium text-white/80">Product</span>
        </div>
        <div className="mt-3 px-6">
          <MenuItem
            icon="/assets/icon-edit.svg"
            title="Write your blog post"
            subtitle="Write your blog post using quantum AI website"
            highlighted
          />
        </div>
        <div className="mt-4 flex flex-col gap-4 px-6">
          <MenuItem
            icon="/assets/icon-paragraph.svg"
            title="Paragraph writing"
            subtitle="Write your paragraph using quantum AI"
          />
          <MenuItem
            icon="/assets/icon-microphone.svg"
            title="Text to voice"
            subtitle="Convert your text into voice using quantum"
          />
          <MenuItem
            icon="/assets/icon-copywrite.svg"
            title="Write copy with quantum AI"
            subtitle="Write your paragraph using quantum AI"
          />
        </div>
        <div className="mt-4 px-6">
          <MenuItem
            icon="/assets/icon-lightning.svg"
            title="Improve your writing skill"
            subtitle="Write your blog post using best quantum AI website"
            highlighted
          />
        </div>
      </div>

      <div className="absolute -left-1 top-[110px] -rotate-45">
        <div className="flex flex-col gap-4 rounded-2xl border border-border bg-white/5 p-6 backdrop-blur-xl">
          <div className="flex items-center gap-3">
            <Icon src="/assets/icon-sparkles.svg" size={24} />
            <p className="whitespace-nowrap text-base text-white/[0.88]">
              Generate your AI Task using prompt
            </p>
          </div>
          <div className="rounded-lg border border-border bg-white/[0.08] px-3 py-2">
            <p className="mb-9 whitespace-nowrap text-xs text-white/80">Type your prompt here...</p>
            <div className="flex w-[279px] items-start justify-between">
              <div className="flex gap-2">
                <Icon src="/assets/hero/prompt-1.svg" size={28} />
                <Icon src="/assets/hero/prompt-2.svg" size={28} />
                <Icon src="/assets/hero/prompt-3.svg" size={28} />
              </div>
              <Icon src="/assets/hero/prompt-4.svg" size={28} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function AskQuantumPanel() {
  return (
    <div className="relative h-[454px] w-[481px] overflow-hidden rounded-2xl border border-border bg-surface">
      <div className="absolute left-[23px] top-[23px] flex items-center gap-3">
        <Icon src="/assets/icon-sparkles.svg" size={24} />
        <p className="text-[20px] font-bold leading-8 text-white">Ask quantum AI</p>
        <span className="rounded border border-border px-2 py-1 text-xs font-medium text-white">
          Q &amp; A Beta
        </span>
      </div>
      <div className="absolute right-[23px] top-[26px] flex items-center gap-4">
        <Icon src="/assets/icon-more.svg" size={24} />
        <span className="rounded-full bg-white/12 p-1">
          <Icon src="/assets/icon-close.svg" size={16} />
        </span>
      </div>

      <p className="absolute left-1/2 top-[94px] -translate-x-1/2 whitespace-nowrap text-sm font-bold text-white/[0.48]">
        Today, 12:34 PM
      </p>

      <div className="absolute left-[125px] top-[132px] rounded-pill border border-border bg-white/[0.08] px-4 py-2">
        <p className="whitespace-nowrap text-base text-white/[0.88]">
          What&rsquo;s the most popular Ai writing website?
        </p>
      </div>

      <div className="absolute left-[23px] top-[188px] w-[387px] rounded-lg border border-border bg-white/[0.08] px-4 pb-2 pt-[9px]">
        <p className="text-base leading-6 text-white/[0.88]">
          Quantum AI is the most popular AI Content services provider. It&rsquo;s also provide article
          writing, product description, paragraph writing, summarizing, and text to voice services.
          You can check out with free trial.
        </p>
      </div>

      <div className="absolute left-[23px] top-[325px] flex gap-2">
        <span className="flex h-10 items-center gap-2 rounded-pill border border-border px-5 text-sm font-bold text-white/80">
          <Icon src="/assets/icon-copy.svg" size={16} />
          Copy
        </span>
        <span className="flex h-10 items-center gap-2 rounded-pill border border-border px-5 text-sm font-bold text-white/80">
          <Icon src="/assets/icon-retry.svg" size={16} />
          Try again
        </span>
      </div>

      <div className="absolute inset-x-[23px] bottom-[25px] flex h-12 items-center gap-3 rounded-pill border border-border bg-white/[0.08] px-6 shadow-[inset_0_-1px_1px_1.5px_rgb(255_255_255/0.08)] backdrop-blur-xs">
        <span className="h-6 w-px bg-white/5" />
        <span className="text-base font-bold text-white/40">Ask a question</span>
        <Icon src="/assets/hero/sparkle-lg.svg" size={36} className="ml-auto" />
      </div>
    </div>
  );
}

export function HeroVisual({ className = "" }: { className?: string }) {
  return (
    <div className={`relative w-full ${className}`} aria-hidden>
      {/* md+ : layered scene matching Figma */}
      <div className="hidden w-full justify-center overflow-hidden md:flex">
        <div className="relative h-[790px] w-[1280px] shrink-0 [zoom:0.62] lg:[zoom:0.82] xl:[zoom:1]">
          <GlobeOrbit className="absolute left-1/2 top-0 -translate-x-1/2" />
          <div className="absolute left-1/2 top-[253px] flex -translate-x-1/2 gap-[10px] rounded-[32px] border-[1.4px] border-border bg-white/5 p-8 backdrop-blur-2xl">
            <QuantumMenuPanel />
            <AskQuantumPanel />
          </div>
        </div>
      </div>

      {/* below md : stacked and legible */}
      <div className="flex flex-col items-center gap-8 overflow-hidden md:hidden">
        <div className="[zoom:0.42] min-[420px]:[zoom:0.5]">
          <GlobeOrbit />
        </div>
        <div className="-mt-24 flex flex-col items-center gap-6 min-[420px]:-mt-16">
          <div className="rounded-2xl border-[1.4px] border-border bg-white/5 p-2 backdrop-blur-2xl [zoom:0.5] min-[420px]:[zoom:0.56]">
            <QuantumMenuPanel />
          </div>
          <div className="rounded-2xl border-[1.4px] border-border bg-white/5 p-2 backdrop-blur-2xl [zoom:0.66] min-[420px]:[zoom:0.74]">
            <AskQuantumPanel />
          </div>
        </div>
      </div>
    </div>
  );
}
