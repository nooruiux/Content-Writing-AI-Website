import type { Metadata } from "next";
import localFont from "next/font/local";
import { Starfield } from "@/components/Starfield";
import "./globals.css";

const satoshi = localFont({
  variable: "--font-satoshi",
  display: "swap",
  src: [
    { path: "../public/fonts/Satoshi-Regular.woff2", weight: "400", style: "normal" },
    { path: "../public/fonts/Satoshi-Medium.woff2", weight: "500", style: "normal" },
    { path: "../public/fonts/Satoshi-Bold.woff2", weight: "700", style: "normal" },
  ],
});

export const metadata: Metadata = {
  title: "Quantum — AI Content Writing",
  description:
    "Design your future with quantum AI. Generate blog posts, paragraphs, rewrites, summaries and AI voiceovers with Quantum AI.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${satoshi.variable} antialiased`}>
      <body className="relative min-h-screen overflow-x-hidden bg-bg text-white">
        <Starfield />
        <div className="relative z-10">{children}</div>
      </body>
    </html>
  );
}
