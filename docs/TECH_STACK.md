# Tech Stack

The stack chosen for this portfolio, and why. Optimized for a content-focused,
animation-rich single page that must hit Lighthouse 90+ and stay easy to maintain.

## Decision

**Next.js (App Router) + TypeScript + Tailwind CSS, deployed on Vercel.**

This matches the build prompt's reasonable default and the reference site
([kentokawazoe.com](https://kentokawazoe.com/)), which is itself Next.js + React +
TypeScript + Tailwind + Motion + GSAP. Choosing the same foundation lets us
replicate its look and motion without fighting the tooling.

## Stack at a glance

| Layer | Choice | Why |
|---|---|---|
| Framework | **Next.js 14+ (App Router)** | First-class image optimization, metadata/SEO routes, file-based routing, zero-config Vercel deploy. |
| Language | **TypeScript** | Typed project content and components; catches content/shape errors at build time. |
| Styling | **Tailwind CSS** | Fast, consistent design tokens; matches the reference's utility-driven build. |
| Fonts | **`next/font` (Montserrat)** | The reference's typeface. Self-hosted, zero layout shift, no render-blocking. |
| Animation | **Framer Motion** | Scroll reveals, text reveals, entrance + theme transitions, cursor springs. Declarative, respects `prefers-reduced-motion`. |
| Smooth scroll | **Lenis** | The buttery scroll feel of the reference, lightweight, reduced-motion aware. Drives scroll-linked parallax/progress. |
| Custom cursor | **hand-built** | Dot + spring-trailed ring with hover/magnetic states. No dependency — `requestAnimationFrame` + transforms, fed by Framer Motion springs. Disabled on touch + reduced-motion. |
| Icons | **lucide-react** | Clean, tree-shakeable social/UI icons. |
| Images | **`next/image`** | AVIF/WebP, lazy-load, responsive `sizes`, blur placeholders → Lighthouse-friendly. |
| Lint/format | **ESLint + Prettier** | Consistent, documented code. |
| Hosting | **Vercel** | Native Next.js host, preview deploys, edge CDN, free tier. |

## Proposed 3D addition

The design backlog proposes one low-contrast 3D form behind the home hero copy.
If its visual direction is approved, use **React Three Fiber + Three.js** in a
lazily loaded client component, with a still poster for reduced motion, loading,
and unsupported WebGL. Render on demand and keep pointer parallax restrained so
the background stays secondary to the text. See [BACKLOG.md](./BACKLOG.md) for
scope and acceptance criteria. These packages are not installed yet.

## Deliberately NOT included

- **Site-wide 3D scenes** — the proposed hero background is a single accent;
  sections remain centered on content and project evidence.
- **A CMS / database** — content is small and stable; it lives in a typed
  `content/projects.ts` file. No backend needed.
- **State library (Zustand/Redux)** — a single theme context + `localStorage` is
  enough. No global store warranted.

## Versions & assumptions

- Node 18+ (Node 20 LTS recommended).
- Package manager: npm (swap for pnpm/bun freely; lockfile is the source of truth).
- The site is static/SSG — no server runtime, no API routes required.
- All project content and images are provided by the owner; missing images render
  sized placeholders (see [BUILD_PLAN.md](./BUILD_PLAN.md) Phase 3).

## Alternatives considered

- **Astro** — excellent for content sites and ships less JS. Rejected because the
  reference's motion is React/Framer-Motion heavy; Next.js keeps parity simpler.
- **Single `index.html`** — simplest possible, but loses image optimization,
  component reuse, and the motion ergonomics this design needs.

## Local commands (once scaffolded)

```bash
npm install      # install dependencies
npm run dev      # local dev server (http://localhost:3000)
npm run build    # production build
npm run start    # serve the production build
npm run lint     # eslint
```
