import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Superpowers } from "@/components/sections/Superpowers";
import { VoiceAI } from "@/components/sections/VoiceAI";
import { RealContent } from "@/components/sections/RealContent";
import { Pricing } from "@/components/sections/Pricing";
import { Testimonials } from "@/components/sections/Testimonials";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="top">
        <Hero />
        <Superpowers />
        <VoiceAI />
        <RealContent />
        <Pricing />
        <Testimonials />
        <CtaBanner />
      </main>
      <Footer />
    </>
  );
}
