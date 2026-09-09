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
      {/* crisp-white copy, revealed left->right behind the sweeping eraser */}
      <p className="lorem-reveal absolute left-[25px] top-[240px] whitespace-nowrap text-[44px] font-bold leading-[52px] text-white">
        It&rsquo;s Quantum Lorem Ipsum
      </p>

      {/* eraser sweeping over the faded text (Figma group 1:2598) */}
      <div className="lorem-eraser pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute left-[216.39px] top-[247.62px] flex h-[320.484px] w-[125.323px] items-center justify-center">
          <div className="shrink-0 -rotate-[165deg]">
            <div className="relative h-[320px] w-[44px]">
              <div className="absolute inset-[-1.25%_-18.18%_-3.75%_-18.18%]">
                <img
                  src="/assets/realcontent/eraser.svg"
                  alt=""
                  aria-hidden
                  className="block size-full max-w-none"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="absolute left-[286.39px] top-[204.73px] flex h-[97.425px] w-[69.141px] items-center justify-center">
          <div className="shrink-0 rotate-[15deg]">
            <div className="h-[88px] w-[48px] rounded-t-[8px] bg-white" />
          </div>
        </div>
      </div>
    </div>
  );
}
