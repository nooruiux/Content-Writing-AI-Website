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
    <div className="relative h-[456px] w-[588px] overflow-hidden rounded-[32px] border-[1.4px] border-white bg-surface backdrop-blur-4xl">
      <div
        aria-hidden
        className="absolute left-1/2 top-8 h-[420px] w-[720px] -translate-x-1/2 rounded-full border border-white/[0.04]"
      />
      <div
        aria-hidden
        className="absolute left-1/2 top-14 h-[320px] w-[560px] -translate-x-1/2 rounded-full border border-white/[0.04]"
      />

      <div className="absolute left-1/2 top-8 flex -translate-x-1/2 flex-col items-center gap-8">
        <div className="flex gap-5">
          {toolbar.map((name) => (
            <Icon key={name} src={`/assets/realcontent/${name}.svg`} size={24} />
          ))}
        </div>

        <div className="flex flex-col gap-6 rounded-t-xl border border-white bg-white/20 px-6 py-5 backdrop-blur-[6px]">
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
            className="flex w-[284px] items-center justify-center gap-2 rounded-lg bg-accent px-4 py-2.5 text-base font-bold text-white"
          >
            <Icon src="/assets/realcontent/ic-generate.svg" size={20} />
            Generate copy
          </button>
        </div>
      </div>
    </div>
  );
}
