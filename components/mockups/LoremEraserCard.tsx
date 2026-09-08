import { realContent } from "@/lib/content";

export function LoremEraserCard() {
  return (
    <div className="relative h-[456px] w-[588px] overflow-hidden rounded-[32px] border-[1.4px] border-border bg-surface">
      <div className="absolute left-[31px] top-[31px] flex flex-col gap-3">
        <h3 className="text-title font-bold leading-8 text-white">{realContent.lorem.title}</h3>
        <p className="w-[524px] text-base text-white/[0.88]">{realContent.lorem.description}</p>
      </div>

      <p className="absolute left-[25px] top-[240px] whitespace-nowrap text-[44px] font-bold leading-[52px] text-white">
        It&rsquo;s Quantum <span className="text-white/[0.28]">Lorem Ipsum</span>
      </p>

      {/* eraser sweeping over the faded text */}
      <img
        src="/assets/realcontent/eraser.svg"
        alt=""
        width={60}
        height={336}
        className="absolute left-[210px] top-[210px] -rotate-[165deg]"
      />
      <div className="absolute left-[286px] top-[205px] h-[88px] w-12 rotate-[15deg] rounded-t-lg bg-white" />
    </div>
  );
}
