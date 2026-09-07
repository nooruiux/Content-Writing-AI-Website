import { Icon } from "@/components/ui/Icon";
import { voiceAI } from "@/lib/content";

// Waveform bars transcribed from Figma: [x, y, height, faded]
const bars: [number, number, number, boolean][] = [
  [27, 42, 56, false], [14, 51, 37, false], [0, 61, 17, false], [192, 17, 105, true],
  [110, 50, 39, false], [274, 42, 55, true], [398, 55, 28, false], [41, 44, 50, false],
  [206, 23, 92, true], [123, 44, 50, false], [288, 50, 39, true], [411, 35, 67, false],
  [55, 34, 70, false], [219, 17, 105, true], [137, 56, 27, true], [302, 61, 16, true],
  [425, 39, 60, false], [69, 18, 103, false], [233, 28, 83, true], [357, 29, 81, false],
  [151, 0, 138, true], [315, 53, 34, true], [439, 55, 28, false], [82, 35, 68, false],
  [247, 45, 48, true], [370, 29, 81, false], [165, 21, 98, true], [329, 21, 98, false],
  [452, 46, 46, false], [96, 53, 33, false], [261, 27, 84, true], [384, 17, 104, false],
  [178, 27, 84, true], [343, 44, 50, false], [466, 61, 17, false],
];

function SelectField({ label, value }: { label: string; value: string }) {
  return (
    <label className="flex flex-col gap-2">
      <span className="text-sm font-medium text-white">{label}</span>
      <span className="flex w-[324px] items-center justify-between rounded-lg border border-border bg-white/[0.04] px-4 py-2.5 text-sm text-white/80">
        {value}
        <Icon src="/assets/voice/ic-caret.svg" size={16} />
      </span>
    </label>
  );
}

function RecordedRow({ name, len, on = true }: { name: string; len: string; on?: boolean }) {
  return (
    <div className="flex items-center gap-6">
      <div className="flex items-center gap-3">
        <span
          className={`flex w-8 items-center rounded-pill p-0.5 ${on ? "justify-end bg-accent" : "bg-[#8d8c92]"}`}
        >
          <span className="size-3 rounded-full bg-white" />
        </span>
        <span className="text-sm text-white">{name}</span>
      </div>
      <div className="flex items-center gap-3">
        <span className="text-sm text-white">{len}</span>
        <Icon src="/assets/voice/bar-play.svg" size={16} />
        <Icon src="/assets/voice/bar-trash.svg" size={16} />
      </div>
    </div>
  );
}

function VoiceOutput() {
  return (
    <div className="flex flex-col items-center gap-6">
      <div className="relative h-[330px] w-[477px] overflow-hidden rounded-2xl">
        <img
          src="/assets/voice/waveform-photo.jpg"
          alt=""
          className="absolute inset-0 size-full object-cover"
        />
        <div className="absolute left-1/2 top-1/2 size-[193px] -translate-x-1/2 -translate-y-1/2">
          {[193, 166, 139, 113].map((s, i) => (
            <span
              key={s}
              className="absolute rounded-full bg-[#b321cb]"
              style={{
                width: s,
                height: s,
                left: (193 - s) / 2,
                top: (193 - s) / 2,
                opacity: [0.1, 0.2, 0.3, 0.5][i] * 0.5,
              }}
            />
          ))}
          <span className="absolute left-1/2 top-1/2 flex size-[92px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#b321cb]">
            <Icon src="/assets/voice/ic-mic-play.svg" size={22} />
          </span>
        </div>
        <div className="absolute left-1/2 top-[70px] h-[138px] w-[474px] -translate-x-1/2">
          {bars.map(([x, y, h, faded], i) => (
            <span
              key={i}
              className={`absolute w-2 rounded-pill ${faded ? "bg-white/10" : "bg-[#b321cb]"}`}
              style={{ left: x, top: y, height: h }}
            />
          ))}
        </div>
      </div>
      <div className="flex items-center gap-4">
        {["tb-1", "tb-2", "tb-3", "tb-4", "tb-5"].map((n) => (
          <Icon key={n} src={`/assets/voice/${n}.svg`} size={24} />
        ))}
      </div>
    </div>
  );
}

function EditorTimeline({ width = 732 }: { width?: number }) {
  return (
    <div className="px-1" style={{ width }}>
      <div className="flex items-center justify-between text-white/70">
        <div className="flex gap-4">
          {["tp-1", "tp-2", "tp-3", "tp-4", "tp-5"].map((n) => (
            <Icon key={n} src={`/assets/voice/${n}.svg`} size={22} />
          ))}
        </div>
        <p className="text-base text-white">
          0.00:00 / <span className="text-white/[0.48]">0.09:32</span>
        </p>
        <div className="flex gap-4">
          {["tp-6", "tp-7", "tp-8"].map((n) => (
            <Icon key={n} src={`/assets/voice/${n}.svg`} size={22} />
          ))}
        </div>
      </div>
      <div className="mt-3 border-t border-border pt-2">
        <div className="flex justify-between text-sm text-white">
          <span>0.00</span>
          <span>0.08</span>
          <span>0.12</span>
          <span>0.16</span>
          <span>0.20</span>
        </div>
        <div className="mt-6 flex h-7 items-center gap-1 rounded-sm bg-accent px-2 text-sm font-medium text-white ring-2 ring-[#68d0be]">
          <Icon src="/assets/voice/ic-play-sm.svg" size={14} className="shrink-0" />
          <span className="truncate">{voiceAI.clipText}</span>
        </div>
      </div>
    </div>
  );
}

function SettingsPanel({ className = "" }: { className?: string }) {
  return (
    <div
      className={`flex flex-col gap-4 rounded-2xl border border-border bg-white/[0.04] p-6 ${className}`}
    >
      <span className="flex items-center gap-2 text-base text-white">
        <Icon src="/assets/voice/ic-speaker.svg" size={20} />
        Text to speech
      </span>
      <SelectField label="Language" value="English (US)" />
      <SelectField label="Voice" value="Jenny Multilingual" />
      <span className="flex items-center gap-2 text-sm font-medium text-[#b321cb]">
        <Icon src="/assets/voice/ic-play-sm.svg" size={16} />
        Hear this voice
      </span>
      <SelectField label="Emotion" value="Neutral" />
      <SelectField label="Pitch" value="Default" />
      <label className="flex flex-col gap-2">
        <span className="text-sm font-medium text-white">Text</span>
        <span className="h-[89px] w-[324px] rounded-lg border border-border bg-white/[0.04] px-4 py-2.5 text-sm leading-[21px] text-white">
          {voiceAI.settingsText}
        </span>
      </label>
      <span className="text-sm font-medium text-white">Maximum duration 10 min</span>
      <div className="flex gap-4">
        <span className="flex h-10 w-[154px] items-center justify-center gap-2 rounded-lg border border-border text-sm font-bold text-white">
          <Icon src="/assets/voice/ic-preview.svg" size={16} />
          Preview
        </span>
        <span className="flex h-10 w-[154px] items-center justify-center gap-2 rounded-lg bg-accent text-sm font-bold text-white">
          <Icon src="/assets/voice/ic-generate.svg" size={20} />
          Generate
        </span>
      </div>
    </div>
  );
}

function VoiceToProcessCard({ className = "" }: { className?: string }) {
  return (
    <div
      className={`rounded-2xl border border-white/[0.08] bg-white/[0.08] p-6 backdrop-blur-[120px] ${className}`}
    >
      <div className="flex w-[485px] max-w-full flex-col items-center gap-3">
        <div className="flex w-full items-center justify-between">
          <p className="text-sm font-bold text-white">Voice to process</p>
          <div className="flex items-center gap-6">
            <span className="relative block h-[10px] w-[124px] overflow-hidden rounded-pill bg-white/[0.16]">
              <span className="absolute inset-y-0 left-0 w-[88px] rounded-pill bg-accent" />
            </span>
            <span className="text-sm text-white/80">0.7:32s / 10m</span>
          </div>
        </div>
        <div className="h-px w-full bg-white/5" />
      </div>
      <div className="mt-6 flex gap-6">
        <div className="flex flex-col gap-4">
          <RecordedRow name="Recorded1" len="(2.00)" />
          <RecordedRow name="Recorded3" len="(4.00)" />
        </div>
        <div className="w-px bg-white/5" />
        <div className="flex flex-col gap-4">
          <RecordedRow name="Recorded2" len="(2.00)" />
          <RecordedRow name="Recorded4" len="(4.00)" on={false} />
        </div>
      </div>
    </div>
  );
}

function TitleBar() {
  return (
    <div className="flex items-center gap-2 px-6 pt-5">
      <span className="size-3 rounded-full bg-[#ff5f57]" />
      <span className="size-3 rounded-full bg-[#febc2e]" />
      <span className="size-3 rounded-full bg-[#28c840]" />
    </div>
  );
}

function TopToolbar({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center justify-between ${className}`}>
      <div className="flex items-center gap-6">
        <span className="rounded-lg border border-border bg-white/10 px-5 py-2.5 text-sm font-bold text-white shadow-[inset_0_-1px_1px_rgb(255_255_255/0.08)]">
          Text to speech
        </span>
        <Icon src="/assets/voice/ic-cloud.svg" size={24} />
      </div>
      <span className="flex items-center gap-2 rounded-lg bg-accent px-5 py-2.5 text-sm font-bold text-white">
        <Icon src="/assets/voice/ic-export-cloud.svg" size={16} />
        Export
        <Icon src="/assets/voice/ic-chevdown.svg" size={16} />
      </span>
    </div>
  );
}

/** Desktop: the full layered editor at Figma dimensions (scaled by the section). */
export function VoiceEditorDesktop() {
  return (
    <div className="relative h-[767px] w-[1200px] overflow-hidden rounded-[16px] border border-border bg-[#161518]">
      <TitleBar />
      <TopToolbar className="absolute inset-x-8 top-[72px]" />
      <span className="absolute left-[688px] top-[132px] rounded-lg border border-border px-5 py-2.5 text-sm font-bold text-white">
        9:32
      </span>
      <div className="absolute left-[155px] top-[132px]">
        <VoiceOutput />
      </div>
      <div className="absolute inset-x-8 top-[540px]">
        <EditorTimeline width={732} />
      </div>
      <SettingsPanel className="absolute left-[796px] top-[72px] h-[665px] shadow-[-120px_20px_124px_rgb(0_0_0/0.2)]" />
      {/* Figma node 1:2500 — x 667, y 334, 533×158 */}
      <VoiceToProcessCard className="absolute left-[667px] top-[334px] h-[158px] w-[533px]" />
    </div>
  );
}

/** Below md: restacked so every control stays legible without horizontal scroll. */
export function VoiceEditorMobile() {
  return (
    <div className="w-full overflow-hidden rounded-[16px] border border-border bg-[#161518] pb-8">
      <TitleBar />
      <div className="mt-6 flex flex-col items-center gap-8 px-4">
        <TopToolbar className="w-full max-w-[420px]" />

        <div className="flex flex-col items-center gap-3">
          <span className="self-end rounded-lg border border-border px-4 py-2 text-sm font-bold text-white">
            9:32
          </span>
          <div className="[zoom:0.66] min-[380px]:[zoom:0.74]">
            <VoiceOutput />
          </div>
        </div>

        <div className="[zoom:0.46] min-[380px]:[zoom:0.52]">
          <EditorTimeline width={640} />
        </div>

        <SettingsPanel className="[zoom:0.9] min-[380px]:[zoom:1]" />

        <VoiceToProcessCard className="[zoom:0.6] min-[380px]:[zoom:0.68]" />
      </div>
    </div>
  );
}
