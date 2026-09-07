import type { Metadata } from "next";
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
  if (!q) return { title: `Story — ${site.name}` };
  return {
    title: `${q.name} — ${site.name} story`,
    description: q.text,
  };
}

export default async function StoryPage({ params }: Params) {
  const { slug } = await params;
  const list = testimonials.quotes;
  const i = list.findIndex((x) => x.slug === slug);
  if (i === -1) notFound();

  const q = list[i];
  const prev = i > 0 ? list[i - 1] : null;
  const next = i < list.length - 1 ? list[i + 1] : null;

  return (
    <>
      <Navbar />
      <main id="top" className="pb-24 pt-12 sm:pt-16">
        <Container className="flex flex-col gap-12 sm:gap-16">
          <Link
            href="/"
            className="flex w-fit items-center gap-2 text-base font-medium text-white/60 transition-colors hover:text-white"
          >
            <span aria-hidden>←</span> Back to home
          </Link>

          <header className="flex flex-col items-center gap-8 text-center">
            <img
              src={q.photo}
              alt=""
              width={220}
              height={260}
              className="h-[240px] w-[204px] rounded-[24px] border border-border bg-surface object-contain object-bottom"
            />
            <div className="flex flex-col items-center gap-3">
              <GradientText gradient={userStoryGradient} className="text-lead font-bold">
                {q.eyebrow}
              </GradientText>
              <h1 className="text-[36px] font-bold leading-[1.1] text-white sm:text-h4">
                {q.name}
              </h1>
              <p className="text-lead text-white/70">{q.role}</p>
            </div>
          </header>

          <blockquote className="mx-auto max-w-[760px] text-center text-[24px] font-bold leading-[1.35] text-white sm:text-quote">
            “{q.text}”
          </blockquote>

          <div className="mx-auto flex max-w-[680px] flex-col gap-6 text-list leading-[1.7] text-white/80">
            {q.story.map((para) => (
              <p key={para}>{para}</p>
            ))}
          </div>

          <nav className="mx-auto flex w-full max-w-[680px] items-center justify-between gap-4 border-t border-border pt-8 text-base font-medium">
            {prev ? (
              <Link href={`/story/${prev.slug}`} className="text-white/60 transition-colors hover:text-white">
                <span aria-hidden>←</span> {prev.name}
              </Link>
            ) : (
              <span />
            )}
            {next ? (
              <Link href={`/story/${next.slug}`} className="text-white/60 transition-colors hover:text-white">
                {next.name} <span aria-hidden>→</span>
              </Link>
            ) : (
              <span />
            )}
          </nav>
        </Container>
      </main>
      <Footer />
    </>
  );
}
