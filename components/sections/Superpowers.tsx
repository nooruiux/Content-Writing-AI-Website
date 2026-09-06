import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ParagraphGeneratorCard } from "@/components/mockups/ParagraphGeneratorCard";
import { CollaboratorGraphCard } from "@/components/mockups/CollaboratorGraphCard";
import { IterateCard } from "@/components/mockups/IterateCard";
import { superpowers } from "@/lib/content";

const scale =
  "origin-top [zoom:0.58] min-[430px]:[zoom:0.72] sm:[zoom:0.92] lg:[zoom:1]";

export function Superpowers() {
  return (
    <section id="solution" className="py-14">
      <Container className="flex flex-col items-center gap-12 lg:gap-16">
        <SectionHeading
          balance={false}
          title={superpowers.title}
          subtitle={
            <>
              {superpowers.subtitle[0]}
              <br className="hidden sm:block" />{" "}
              {superpowers.subtitle[1]}
            </>
          }
          titleClassName="max-w-[679px] text-[34px] leading-[1.1] sm:text-[52px] lg:text-h1"
          subtitleClassName="text-base font-medium text-white/90 sm:text-lead"
        />

        <div className="flex flex-col items-center gap-6 lg:flex-row lg:items-start lg:gap-6">
          <div className={scale}>
            <ParagraphGeneratorCard />
          </div>
          <div className="flex flex-col items-center gap-6">
            <div className={scale}>
              <CollaboratorGraphCard />
            </div>
            <div className={scale}>
              <IterateCard />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
