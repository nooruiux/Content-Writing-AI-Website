import { Icon } from "@/components/ui/Icon";

const toolbar = [
  "tb-bold",
  "tb-italic",
  "tb-underline",
  "tb-strike",
  "tb-aa",
  "tb-eyedropper",
  "tb-bullets",
  "tb-numbers",
  "tb-indent",
  "tb-outdent",
];

function SkeletonRows({ rows }: { rows: number[][] }) {
  return (
    <div className="flex w-[284px] flex-col gap-4 rounded-lg bg-white/[0.05] p-4 backdrop-blur-lg">
      {rows.map((row, i) => (
        <div key={i} className="flex gap-3">
          {row.map((w, j) => (
            <div key={j} className="h-3 rounded-pill bg-white/[0.06]" style={{ width: w }} />
          ))}
        </div>
      ))}
    </div>
  );
}

export function RichEditorCard() {
  return (
    <div className="relative h-[456px] w-[588px] overflow-hidden rounded-[32px] border-[1.4px] border-border bg-surface backdrop-blur-4xl">
      {/* concentric arc rings peeking from the card edges (Figma "Group 29" / "Group 28") */}
      <img
        src="/assets/realcontent/arc-left.svg"
        alt=""
        aria-hidden
        width={396}
        height={396}
        className="rc-arc-l pointer-events-none absolute left-[-264px] top-[31px] size-[396px] rotate-90"
      />
      <img
        src="/assets/realcontent/arc-right.svg"
        alt=""
        aria-hidden
        width={396}
        height={396}
        className="rc-arc-r pointer-events-none absolute left-[456px] top-[31px] size-[396px] -rotate-90"
      />

      <div className="absolute left-[84px] top-8 flex w-[420px] flex-col items-center gap-8">
        <div className="flex gap-5">
          {toolbar.map((name) => (
            <Icon key={name} src={`/assets/realcontent/${name}.svg`} size={24} />
          ))}
        </div>

        <div className="flex flex-col gap-6 rounded-t-xl border border-border bg-white/20 px-6 py-5 backdrop-blur-[6px]">
          <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-3">
              <p className="text-base font-bold text-white">Describe your topic</p>
              <SkeletonRows
                rows={[
                  [108, 132],
                  [72, 168],
                  [129, 111],
                  [199],
                ]}
              />
            </div>
            <div className="flex flex-col gap-3">
              <p className="text-base font-bold text-white">Primary keywords</p>
              <SkeletonRows rows={[[54, 54, 54, 54]]} />
            </div>
          </div>

          <button
            type="button"
            className="flex w-[284px] items-center justify-center gap-2.5 rounded-lg bg-accent px-4 py-[9px] text-base font-bold text-white"
          >
            <Icon src="/assets/realcontent/ic-generate.svg" size={20} />
            Generate copy
          </button>
        </div>
      </div>
    </div>
  );
}
