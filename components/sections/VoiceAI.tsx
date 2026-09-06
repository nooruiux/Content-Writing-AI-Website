import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { VoiceEditorDesktop, VoiceEditorMobile } from "@/components/mockups/VoiceEditor";
import { voiceAI } from "@/lib/content";

export function VoiceAI() {
  return (
    <section className="overflow-hidden py-14">
      <Container className="flex flex-col items-center gap-12 lg:gap-16">
        <SectionHeading
          balance={false}
          title={voiceAI.title}
          subtitle={voiceAI.subtitle}
          titleClassName="max-w-[717px] text-[32px] leading-[1.15] sm:text-[52px] lg:text-h2"
          subtitleClassName="max-w-[548px] text-base font-medium text-white/90 sm:text-lead"
        />
      </Container>

      {/* md+ : layered Figma editor, scaled */}
      <div className="mt-4 hidden w-full justify-center md:flex">
        <div className="shrink-0 [zoom:0.66] lg:[zoom:0.82] xl:[zoom:1]">
          <VoiceEditorDesktop />
        </div>
      </div>

      {/* below md : restacked editor */}
      <Container className="mt-6 md:hidden">
        <VoiceEditorMobile />
      </Container>
    </section>
  );
}
