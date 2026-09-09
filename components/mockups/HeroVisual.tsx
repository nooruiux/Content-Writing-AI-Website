import { Icon } from "@/components/ui/Icon";

const skeleton = "rounded-2xl bg-white/12";

/* Figma "Frame 176/185/187…" — grey placeholder cards behind the menu panel. */
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

/* Figma 1:2016 — a plain menu row (icon + title + subtitle). */
function MenuItem({ icon, title, subtitle }: { icon: string; title: string; subtitle: string }) {
  return (
    <div className="flex items-start gap-2">
      <Icon src={icon} size={24} />
      <div className="flex flex-col gap-1 whitespace-nowrap">
        <p className="text-base font-bold leading-6 text-white/[0.94]">{title}</p>
        <p className="text-xs leading-[18px] text-white/80">{subtitle}</p>
      </div>
    </div>
  );
}

/* Figma 1:2010 / 1:2041 — the highlighted, floating menu card. */
function MenuCard({
  icon,
  title,
  subtitle,
  className = "",
  flip = false,
}: {
  icon: string;
  title: string;
  subtitle: string;
  className?: string;
  flip?: boolean;
}) {
  const shadow = flip
    ? "shadow-[12px_12px_24px_0_rgb(0_0_0/0.08),24px_32px_64px_0_rgb(33_33_33/0.32),inset_-4px_-4px_8px_0_rgb(0_0_0/0.08)]"
    : "shadow-[-12px_12px_24px_0_rgb(0_0_0/0.08),-24px_32px_64px_0_rgb(33_33_33/0.32),inset_4px_-4px_8px_0_rgb(0_0_0/0.08)]";
  return (
    <div
      className={`flex h-[70px] items-start gap-2 rounded-xl border border-white/[0.32] bg-white/[0.08] px-6 py-3 backdrop-blur-[60px] ${shadow} ${className}`}
    >
      <Icon src={icon} size={24} />
      <div className="flex flex-col gap-1 whitespace-nowrap">
        <p className="text-base font-bold leading-6 text-white">{title}</p>
        <p className="text-xs leading-[18px] text-white/80">{subtitle}</p>
      </div>
    </div>
  );
}

/* Figma 1:1860 — concentric globe rings + floating icon badges (single exported SVG). */
function GlobeOrbit({ className = "" }: { className?: string }) {
  return (
    <div className={`relative h-[617px] w-[617px] ${className}`}>
      <div
        aria-hidden
        className="absolute left-1/2 top-[40px] h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgb(111_58_218/0.18),transparent_65%)] blur-[80px]"
      />
      <img src="/assets/hero/globe.svg" alt="" width={617} height={617} className="absolute inset-0" />
    </div>
  );
}

/* Figma 1:1951 — the left sidebar (Quantum logo + skeleton nav lines). */
function Sidebar({ className = "" }: { className?: string }) {
  return (
    <div className={`flex flex-col gap-[108px] rounded-2xl bg-white/[0.06] p-6 ${className}`}>
      <div className="flex w-[164px] flex-col gap-6">
        <div className="flex items-center gap-2">
          <img src="/assets/logo-mark.svg" alt="" width={24} height={24} className="size-6" />
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
  );
}

/* Figma 1:1896 + siblings — the left dark panel and everything layered on it. */
function QuantumMenuPanel({ className = "" }: { className?: string }) {
  return (
    <div className={`h-[454px] w-[631px] ${className}`}>
      <div className="absolute inset-0 rounded-2xl border border-border bg-[#1d1c20]" />

      <Sidebar className="absolute -left-px -top-px" />

      <SkeletonCard className="absolute left-[227px] top-[23px] w-[181px]" />
      <SkeletonCard className="absolute left-[227px] top-[143px] w-[181px]" />
      <SkeletonCard className="absolute left-[227px] top-[263px] w-[378px]" wide />
      <SkeletonCard className="absolute left-[424px] top-[23px] w-[181px]" />
      <SkeletonCard className="absolute left-[424px] top-[143px] w-[181px]" />

      {/* Figma 1:2000 — bordered glass box */}
      <div className="absolute left-[287px] top-px h-[453px] w-[321px] overflow-hidden rounded-xl border border-white/10 bg-white/[0.04] backdrop-blur-[100px]">
        <div className="absolute left-[23px] top-6 flex flex-col gap-2">
          <p className="text-[20px] font-bold leading-7 text-white">Write your content</p>
          <div className="h-px w-[273px] bg-white/5" />
        </div>
      </div>

      {/* Figma 1:2004 — tabs */}
      <div className="absolute left-[314px] top-[77px] flex gap-5 text-sm leading-6">
        <span className="font-bold text-accent">All</span>
        <span className="font-medium text-white/80">Blog</span>
        <span className="font-medium text-white/80">Paragraph</span>
        <span className="font-medium text-white/80">Voice</span>
        <span className="font-medium text-white/80">Product</span>
      </div>

      {/* Figma 1:2010 — highlighted */}
      <MenuCard
        className="hv-float-1 absolute left-[314px] top-[118px]"
        icon="/assets/icon-edit.svg"
        title="Write your blog post"
        subtitle="Write your blog post using quantum AI website"
      />

      {/* Figma 1:2016 — plain rows */}
      <div className="absolute left-[314px] top-[205px] flex flex-col gap-4">
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

      {/* Figma 1:2041 — highlighted, offset left */}
      <MenuCard
        className="hv-float-2 absolute left-[242px] top-[359.58px]"
        flip
        icon="/assets/icon-lightning.svg"
        title="Improve your writing skill"
        subtitle="Write your blog post using best quantum AI website"
      />
    </div>
  );
}

/* Figma 1:2048 — the rotated "Generate your AI Task" prompt card. */
function GenerateTaskCard({ className = "" }: { className?: string }) {
  return (
    <div
      className={`flex w-[351px] shrink-0 flex-col gap-4 rounded-2xl border border-white/[0.12] bg-white/5 p-6 backdrop-blur-[60px] ${className}`}
    >
      <div className="flex items-center justify-center gap-3">
        <Icon src="/assets/icon-sparkles.svg" size={24} />
        <p className="whitespace-nowrap text-base text-white/[0.88]">
          Generate your AI Task using prompt
        </p>
      </div>
      <div className="flex flex-col gap-9 rounded-lg border border-white/[0.08] bg-white/[0.08] px-3 py-2">
        <div className="min-h-[36px] text-xs leading-[18px] text-white/80">
          <span className="hv-type hv-type-l1">Write a blog post about the best</span>
          <span className="hv-type hv-type-l2">
            AI writing tools
            <span className="caret-blink ml-px inline-block h-3 w-px animate-[caret-blink_1.06s_infinite] bg-white/70 align-middle" />
          </span>
        </div>
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
  );
}

/* Figma 1:1897 — the "Ask quantum AI" chat panel. */
function AskQuantumPanel({ className = "" }: { className?: string }) {
  return (
    <div
      className={`h-[454px] w-[481px] overflow-hidden rounded-2xl border border-border bg-[#1d1c20] ${className}`}
    >
      {/* header — Figma 1:1922 */}
      <div className="absolute left-[23px] top-[23px] flex items-center gap-3">
        <Icon src="/assets/icon-sparkles.svg" size={24} />
        <p className="text-[20px] font-bold leading-8 text-white">Ask quantum AI</p>
        <span className="rounded border border-white/[0.12] px-2 py-1 text-xs font-medium leading-4 text-white">
          Q &amp; A Beta
        </span>
      </div>
      <div className="absolute right-[25px] top-[23px] flex items-start gap-4">
        <Icon src="/assets/icon-more.svg" size={24} />
        <span className="rounded-full bg-white/12 p-1">
          <Icon src="/assets/icon-close.svg" size={16} />
        </span>
      </div>

      <p className="absolute left-1/2 top-[94px] -translate-x-1/2 whitespace-nowrap text-sm font-bold leading-[22px] text-white/[0.48]">
        Today, 12:34 PM
      </p>

      {/* question — Figma 1:1938 */}
      <div className="absolute left-[125px] top-[132px] rounded-pill border border-border bg-white/[0.08] px-4 py-2">
        <p className="whitespace-nowrap text-base text-white/[0.88]">
          What&rsquo;s the most popular Ai writing website?
        </p>
      </div>

      {/* answer — Figma 1:1940 (kept to 4 lines like Figma; 405 vs 387 buys the
         width the corrected "summarizing" needs so the stack spacing matches). */}
      <div className="absolute left-[23px] top-[188px] w-[405px] rounded-lg border border-white/[0.12] bg-white/[0.08] px-4 pb-2 pt-[9px]">
        <p className="text-base leading-6 text-white/[0.88]">
          Quantum AI is the most popular AI Content services provider. It&rsquo;s also provide article
          writing, product description, paragraph writing, summarizing, and text to voice services.
          You can check out with free trial.
        </p>
      </div>

      {/* actions — Figma 1:1942 */}
      <div className="absolute left-[23px] top-[325px] flex gap-2">
        <span className="flex h-10 items-center gap-2 rounded-pill border border-white/[0.24] px-5 text-sm font-bold text-white/80">
          <Icon src="/assets/icon-copy.svg" size={16} />
          Copy
        </span>
        <span className="flex h-10 items-center gap-2 rounded-pill border border-white/[0.24] px-5 text-sm font-bold text-white/80">
          <Icon src="/assets/icon-retry.svg" size={16} />
          Try again
        </span>
      </div>

      {/* input — Figma 1:1899 */}
      <div className="absolute left-[23px] top-[381px] flex h-12 w-[433px] items-center gap-1 rounded-pill border border-white/[0.12] bg-white/[0.08] pl-6 shadow-[1px_1px_0.8px_0_rgb(255_255_255/0.04),inset_0_-1px_1px_1.5px_rgb(255_255_255/0.08)] backdrop-blur-[6px]">
        <span className="hv-type hv-type-ask text-base font-bold text-white/70">
          What&rsquo;s the best AI tool for content writing?
        </span>
        <span className="caret-blink h-[18px] w-px animate-[caret-blink_1.06s_infinite] bg-white/70" />
        <Icon
          src="/assets/hero/sparkle-lg.svg"
          size={36}
          className="absolute right-[7px] top-1/2 -translate-y-1/2"
        />
      </div>
    </div>
  );
}

/** Desktop: the layered Figma scene (node 1:1859), scaled by breakpoint. */
function HeroVisualDesktop() {
  return (
    <div className="hidden w-full justify-center overflow-hidden md:flex">
      <div className="relative h-[790px] w-[1280px] shrink-0 [zoom:0.62] lg:[zoom:0.82] xl:[zoom:1]">
        <GlobeOrbit className="absolute left-1/2 top-0 -translate-x-1/2" />

        {/* glass container — Figma 1:1894 (1200×518, centre + 39.83px). */}
        <div className="absolute left-[calc(50%+39.83px)] top-[253px] h-[518px] w-[1200px] -translate-x-1/2 overflow-hidden rounded-[32px] border-[1.4px] border-white/10 bg-white/5 backdrop-blur-2xl">
          <QuantumMenuPanel className="absolute left-8 top-8" />
          <AskQuantumPanel className="absolute left-[687px] top-8" />
        </div>

        {/* Figma 1:2048 — rotated card, layered above the container, not clipped. */}
        <div className="absolute left-[186px] top-[551px] -translate-x-1/2 -translate-y-1/2">
          <div className="hv-float-3 -rotate-45">
            <GenerateTaskCard />
          </div>
        </div>
      </div>
    </div>
  );
}

/** Below md: restacked and legible. */
function HeroVisualMobile() {
  return (
    <div className="flex flex-col items-center gap-8 overflow-hidden md:hidden">
      <div className="[zoom:0.42] min-[420px]:[zoom:0.5]">
        <GlobeOrbit />
      </div>
      <div className="-mt-24 flex flex-col items-center gap-6 min-[420px]:-mt-16">
        <div className="relative rounded-2xl border-[1.4px] border-white/10 bg-white/5 p-2 backdrop-blur-2xl [zoom:0.5] min-[420px]:[zoom:0.56]">
          <QuantumMenuPanel className="relative" />
          <div className="absolute -left-1 top-[110px]">
            <div className="hv-float-3 -rotate-45">
              <GenerateTaskCard />
            </div>
          </div>
        </div>
        <div className="rounded-2xl border-[1.4px] border-white/10 bg-white/5 p-2 backdrop-blur-2xl [zoom:0.66] min-[420px]:[zoom:0.74]">
          <AskQuantumPanel className="relative" />
        </div>
      </div>
    </div>
  );
}

export function HeroVisual({ className = "" }: { className?: string }) {
  return (
    <div className={`relative w-full ${className}`} aria-hidden>
      <HeroVisualDesktop />
      <HeroVisualMobile />
    </div>
  );
}
