import type { Metadata } from "next";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { Container } from "@/components/ui/Container";
import { ContactForm } from "@/components/contact/ContactForm";
import { site } from "@/lib/content";

export const metadata: Metadata = {
  title: `Contact — ${site.name}`,
  description: `Get in touch with the ${site.name} support team.`,
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="flex min-h-[70vh] items-center justify-center py-16 sm:py-24">
        <Container className="flex justify-center">
          <div className="w-full max-w-[560px]">
            <ContactForm />
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
