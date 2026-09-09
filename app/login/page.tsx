import type { Metadata } from "next";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { Container } from "@/components/ui/Container";
import { LoginForm } from "@/components/auth/LoginForm";
import { site } from "@/lib/content";

export const metadata: Metadata = {
  title: `Login — ${site.name}`,
  description: `Sign in to your ${site.name} account.`,
};

export default function LoginPage() {
  return (
    <>
      <Navbar />
      <main className="flex min-h-[70vh] items-center justify-center py-16 sm:py-24">
        <Container className="flex justify-center">
          <div className="w-full max-w-[468px]">
            <LoginForm />
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
