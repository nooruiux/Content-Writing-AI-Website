import type { Metadata } from "next";
import Link from "next/link";
import { LoginForm } from "@/components/auth/LoginForm";
import { site } from "@/lib/content";

export const metadata: Metadata = {
  title: `Login — ${site.name}`,
  description: `Sign in to your ${site.name} account.`,
};

export default function LoginPage() {
  return (
    <main className="flex min-h-dvh w-full flex-col items-center justify-center bg-[#f2f3f5] px-4 py-12 text-[#14142b]">
      <Link
        href="/"
        aria-label={`${site.name} home`}
        className="mb-6 flex items-center gap-2 opacity-90 transition-opacity hover:opacity-100"
      >
        <img src="/assets/logo-mark.svg" alt="" width={24} height={24} className="size-6 invert" />
        <span className="text-[20px] font-bold leading-6 text-[#14142b]">{site.name}</span>
      </Link>

      <div className="w-full max-w-[468px]">
        <LoginForm />
      </div>
    </main>
  );
}
