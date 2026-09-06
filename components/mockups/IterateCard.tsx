import { Icon } from "@/components/ui/Icon";
import { superpowers } from "@/lib/content";

const pillIcons = ["so-1", "so-2", "so-3", "so-4", "so-5"];
const tileIcons = [
  "so-twitter",
  "so-6",
  "so-7",
  "so-8",
  "so-9",
  "so-10",
  "so-11",
  "so-12",
  "so-13",
];

export function IterateCard() {
  const { iterate } = superpowers;
  return (
    <div className="relative h-[364px] w-[602px] overflow-hidden rounded-[32px] border border-white bg-surface backdrop-blur-4xl">
      <div className="absolute left-6 top-6 flex flex-col gap-3">
        <h3 className="text-title font-bold text-white">{iterate.title}</h3>
        <p className="max-w-[401px] text-base text-white/[0.88]">{iterate.description}</p>
      </div>

      {/* skeleton document */}
      <div className="absolute left-6 top-[140px] h-[280px] w-[252px] rounded-2xl border border-white bg-white/[0.04] p-6">
        <div className="flex flex-col gap-2">
          {Array.from({ length: 10 }).map((_, i) => (
            <div key={i} className="h-4 w-[204px] rounded-pill bg-white/[0.03]" />
          ))}
        </div>
      </div>

      {/* formatting toolbar pill */}
      <div className="absolute left-[90px] top-[225px] flex items-center gap-4 rounded-pill border border-white/[0.08] bg-white/[0.16] px-6 py-4 shadow-[12px_12px_32px_#1c1c1c]">
        {pillIcons.map((name) => (
          <Icon key={name} src={`/assets/superpowers/${name}.svg`} size={24} />
        ))}
      </div>

      {/* social tiles */}
      <div className="absolute left-[377px] top-[139px] grid grid-cols-3 gap-4">
        {tileIcons.map((name) => (
          <span
            key={name}
            className="flex size-14 items-center justify-center rounded-lg border border-white bg-white/[0.08] shadow-[8px_8px_32px_rgb(0_0_0/0.32)]"
          >
            <Icon src={`/assets/superpowers/${name}.svg`} size={28} />
          </span>
        ))}
      </div>
    </div>
  );
}
