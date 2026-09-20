import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  VoiceEditorDesktop,
  VoiceEditorMobile,
  VoiceEditorTablet,
} from "@/components/mockups/VoiceEditor";
import { voiceAI } from "@/lib/content";

export function VoiceAI() {
  return (
    <section className="overflow-hidden pt-14 pb-6 md:pb-14">
      <Container className="flex flex-col items-center gap-12 lg:gap-16">
        <SectionHeading
          balance={false}
          title={voiceAI.title}
          subtitle={voiceAI.subtitle}
          titleClassName="max-w-[717px] text-[32px] leading-[1.15] sm:text-[52px] lg:text-h2"
          subtitleClassName="max-w-[548px] text-base font-medium text-white/90 sm:text-lead"
        />
      </Container>

      {/* lg+ (true desktop) : layered Figma editor, unchanged. 24px below the
         subheading per Figma (1:2306 → 1:2309). */}
      <div className="mt-6 hidden w-full justify-center lg:flex">
        <div className="shrink-0 lg:[zoom:0.82] xl:[zoom:1]">
          <VoiceEditorDesktop />
        </div>
      </div>

      {/* md–lg (tablet) : same layered layout, with the curve/spacing fixes */}
      <div className="mt-6 hidden w-full justify-center md:flex lg:hidden">
        <div className="shrink-0 [zoom:0.66]">
          <VoiceEditorTablet />
        </div>
      </div>

      {/* below md : restacked editor */}
      <Container className="mt-6 md:hidden">
        <VoiceEditorMobile />
      </Container>
    </section>
  );
}
