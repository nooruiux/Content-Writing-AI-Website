export const site = {
  name: "Quantum",
  title: "Quantum — AI Content Writing Tool",
  description:
    "Design your future with quantum AI. Generate blog posts, paragraphs, rewrites, summaries and AI voiceovers with Quantum AI.",
  url: (
    process.env.NEXT_PUBLIC_SITE_URL ??
    (process.env.VERCEL_PROJECT_PRODUCTION_URL
      ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
      : "https://content-writing-ai-website.vercel.app")
  ).replace(/\/$/, ""),
};
