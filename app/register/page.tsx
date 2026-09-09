import type { Metadata } from "next";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { Container } from "@/components/ui/Container";
import { RegisterForm } from "@/components/auth/RegisterForm";
import { site } from "@/lib/content";

export const metadata: Metadata = {
  title: `Start free trial — ${site.name}`,
  description: `Create your ${site.name} account and start writing with AI for free.`,
};

export default function RegisterPage() {
  return (
    <>
      <Navbar />
      <main className="flex min-h-[70vh] items-center justify-center py-16 sm:py-24">
        <Container className="flex justify-center">
          <div className="w-full max-w-[468px]">
            <RegisterForm />
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
