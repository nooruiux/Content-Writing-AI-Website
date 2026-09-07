import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { Container } from "@/components/ui/Container";
import { GradientText } from "@/components/ui/GradientText";
import { testimonials, site } from "@/lib/content";

const userStoryGradient =
  "bg-[linear-gradient(107deg,#1264c4_4%,#ffffff_52%,#18a0fb_112%)]";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return testimonials.quotes.map((q) => ({ slug: q.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const q = testimonials.quotes.find((x) => x.slug === slug);
  if (!q) return { title: `Read Full Story — ${site.name}` };
  return {
    title: `${q.name} — Read Full Story — ${site.name}`,
    description: q.text,
  };
}

export default async function StoryPage({ params }: Params) {
  const { slug } = await params;
  const q = testimonials.quotes.find((x) => x.slug === slug);
  if (!q) notFound();

  return (
    <>
      <Navbar />
      <main id="top" className="pb-24 pt-10 sm:pt-14">
        <Container className="flex flex-col gap-8">
          <Link
            href="/"
            className="flex w-fit items-center gap-2 text-base font-medium text-white/60 transition-colors hover:text-white"
          >
            <span aria-hidden>←</span> Back to home
          </Link>

          {/* glass-morphism wrapper — starfield stays visible around it */}
          <article className="mx-auto flex w-full max-w-[880px] flex-col items-center gap-10 rounded-[32px] border border-white/[0.1] bg-white/[0.05] p-8 text-center shadow-[0_8px_48px_rgb(0_0_0/0.35)] backdrop-blur-2xl sm:gap-12 sm:p-14">
            <h1 className="text-[32px] font-bold leading-[1.1] text-white sm:text-h4">
              Read Full Story
            </h1>

            <div className="flex flex-col items-center gap-6">
              <div className="relative h-[248px] w-[220px]">
                <Image
                  src={q.photo}
                  alt=""
                  fill
                  sizes="220px"
                  priority
                  className="object-contain object-bottom grayscale"
                />
              </div>
              <div className="flex flex-col items-center gap-4">
                <GradientText gradient={userStoryGradient} className="text-lead font-bold">
                  {q.eyebrow}
                </GradientText>
                <div className="flex flex-col items-center gap-0.5">
                  <p className="text-[24px] font-bold leading-[30px] text-white sm:text-[28px] sm:leading-[34px]">
                    {q.name}
                  </p>
                  <p className="text-lead leading-[24px] text-white/70">{q.role}</p>
                </div>
              </div>
            </div>

            <blockquote className="max-w-[680px] text-[20px] font-bold leading-[1.4] text-white sm:text-[24px]">
              “{q.text}”
            </blockquote>

            <div className="flex max-w-[640px] flex-col gap-6 text-left text-list leading-[1.7] text-white/80">
              {q.story.map((para) => (
                <p key={para}>{para}</p>
              ))}
            </div>
          </article>
        </Container>
      </main>
      <Footer />
    </>
  );
}
