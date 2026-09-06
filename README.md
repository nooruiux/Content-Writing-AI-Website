# Quantum — AI Content Writing

Marketing home page for **Quantum**, an AI content‑writing product, implemented from the
[Figma design](https://www.figma.com/design/DgqCM2YiKV9qrtFhLsNT3A/Home).

## Stack

- Next.js 16 (App Router, React 19)
- TypeScript
- Tailwind CSS v4 — design tokens in `app/globals.css` (`@theme`)
- Satoshi, self‑hosted via `next/font/local`

## Development

```bash
npm install
npm run dev
```

Open http://localhost:3000.

```bash
npm run build   # production build
npm run lint    # eslint
```

## Structure

```
app/                 layout, page, global tokens, favicon
components/
  sections/          one component per page section (Navbar, Hero, Pricing, …)
  mockups/           the illustrative product UI panels shown in the design
  ui/                shared primitives (Button, Container, SectionHeading, …)
lib/content.ts       all copy, kept out of the components
public/assets/       SVG icons + images exported from Figma
public/fonts/        Satoshi woff2
```

Responsive: the Figma is desktop‑only (1440); layouts reflow to a single column below `lg`,
and the wider product mockups scale down with `zoom` / restack on small screens.
