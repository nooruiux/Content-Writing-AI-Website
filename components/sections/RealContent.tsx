import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { LoremEraserCard } from "@/components/mockups/LoremEraserCard";
import { RichEditorCard } from "@/components/mockups/RichEditorCard";
import { realContent } from "@/lib/content";

const scale = "origin-top [zoom:0.56] min-[430px]:[zoom:0.7] sm:[zoom:0.92] lg:[zoom:1]";

export function RealContent() {
  return (
    <section className="py-14">
      <Container className="flex flex-col items-center gap-12 lg:gap-16">
        <SectionHeading
          balance={false}
          title={realContent.title}
          subtitle={realContent.subtitle}
          titleClassName="max-w-[520px] text-[32px] leading-[1.15] sm:text-[44px] lg:text-h3"
          subtitleClassName="text-base text-white/[0.88]"
        />

        <div className="flex flex-col items-center gap-6 lg:flex-row lg:items-start">
          <div className={scale}>
            <LoremEraserCard />
          </div>
          <div className={scale}>
            <RichEditorCard />
          </div>
        </div>
      </Container>
    </section>
  );
}
