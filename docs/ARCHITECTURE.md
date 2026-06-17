# Architecture

How the portfolio is structured: the planned folder layout, the data flow, the
component breakdown, and the design tokens distilled from the reference site.

---

## 1. Planned folder structure

Target layout once scaffolded (Next.js App Router). The repo currently holds the
planning docs; this is what Phase 0 creates.

```
Website/
├── README.md                  # project overview + run/deploy steps
├── LICENSE
├── .gitignore
├── docs/                      # planning & reference (this folder)
│   ├── BUILD_PLAN.md          # phased build plan
│   ├── TECH_STACK.md          # stack decisions
│   ├── ARCHITECTURE.md        # this file
│   └── Portfolio_Website_Build_Prompt.md   # original source brief
├── assets/
│   └── screenshots/           # project images (drop-in; optimized at build)
│
└── app/                       # ── created in Phase 0 ──
    ├── package.json
    ├── next.config.ts
    ├── tailwind.config.ts
    ├── tsconfig.json
    ├── public/                # favicon, og-image, static project images
    └── src/
        ├── app/
        │   ├── layout.tsx     # root layout: fonts, theme, <html> shell
        │   ├── page.tsx       # single-page composition of all sections
        │   ├── globals.css    # Tailwind layers + base styles
        │   ├── sitemap.ts     # SEO sitemap
        │   └── robots.ts      # SEO robots
        ├── components/
        │   ├── layout/        # Sidebar, ThemeToggle, BackToTop, MobileNav
        │   ├── sections/      # Hero, About, Projects, Contact, Footer
        │   ├── projects/      # ProjectCard, ProjectImage, TechChips, Placeholder
        │   └── ui/            # primitives: Reveal, Divider, IconLink
        ├── content/
        │   └── projects.ts    # typed project data (single source of truth)
        ├── lib/
        │   ├── hooks/         # useActiveSection, useReducedMotion, useTheme
        │   └── utils.ts
        └── types/
            └── project.ts     # Project type definition
```

> The exact framework path (`app/` subdir vs repo root) is a Phase 0 decision; the
> structure above is the contract regardless of where the Next app is rooted.

---

## 2. Data flow

Content is static and typed — no backend, no fetching.

```
content/projects.ts  ──typed Project[]──►  <Projects>  ──maps──►  <ProjectCard> × 5
        ▲
        │  single source of truth for all project copy, labels, links, image paths
```

- All five projects live in one `projects.ts` array typed by `types/project.ts`.
- Sections compose top-to-bottom in `app/page.tsx`; the page is a single scroll.
- Theme state lives in a small React context + `localStorage`; no global store.
- Active-section tracking uses IntersectionObserver via a `useActiveSection` hook.

### `Project` type (shape)

```ts
type Project = {
  id: string;             // "arcane-ring"
  number: string;         // "01"
  title: string;          // "ArCane Ring"
  tagline: string;
  year: string;           // "2025" | "2026 (In Progress)"
  role: string;
  type: string;           // "Class / Work Assignment (individual)" | "Hackathon ..."
  group?: { team: string; role: string };  // present only for group projects
  inProgress?: boolean;   // WarungAI
  tech: string[];         // tech chips
  description: string;
  impact: string;
  learned: string;
  repo: string;
  images: string[];       // [] → render sized placeholder
};
```

---

## 3. Component architecture

```
RootLayout (fonts, theme provider, smooth-scroll)
└── Page (single scroll)
    ├── Sidebar            fixed left: brand, nav, social icons
    ├── ThemeToggle        top-right, persisted
    ├── Hero               name, positioning line, CTAs, contact
    ├── About              bio + grouped skill chips
    ├── Projects
    │   └── ProjectCard ×5 image/placeholder, number, meta, tech, copy, repo
    ├── Contact            email / phone / github / closing line
    ├── Footer             copyright
    └── BackToTop
```

Shared primitives in `components/ui/`: `Reveal` (scroll-reveal wrapper that no-ops
under reduced-motion), `Divider` (hairline rule), `IconLink`, `TechChip`.

---

## 4. Design tokens (from the reference)

Distilled from [kentokawazoe.com](https://kentokawazoe.com/) so the look is
replicable. Dark default with a light alternate.

### Color

| Token | Dark (default) | Light | Use |
|---|---|---|---|
| `bg` | `#0E0E0E` | `#F5F5F3` | page background |
| `surface` | `#1A1A1A` | `#FFFFFF` | cards/raised areas |
| `text` | `rgba(255,255,255,0.87)` | `#1D1D1F` | body text |
| `text-muted` | `rgba(255,255,255,0.55)` | `#6E6E73` | secondary text |
| `hairline` | `rgba(255,255,255,0.15)` | `rgba(0,0,0,0.12)` | dividers/borders |
| `accent` | inherit (monochrome) | inherit | kept neutral; tech chips only |

Monochrome by design — restraint over color. Verify every pairing passes WCAG AA.

### Typography

- **Typeface:** Montserrat (geometric sans), self-hosted via `next/font`.
- **Display / name:** light weight (300), **UPPERCASE**, wide letter-spacing
  (~0.1–0.15em), very large (`clamp(3rem, 9vw, 7rem)`).
- **Section headings:** uppercase, letter-spaced, small-to-medium, sat above a
  hairline divider (the reference's `ABOUT ME` / `WORKS` pattern).
- **Body:** regular (400), generous line-height (~1.7), slight letter-spacing.
- **Meta/labels:** small, muted, uppercase tracking for tags and chips.

### Spacing & layout

- Fixed left sidebar (~`8rem` rail on desktop); content offset to its right.
- Generous vertical rhythm between sections (large `py`), heavy negative space.
- Max content width capped; right-aligned secondary blocks (like the reference).
- Mobile: sidebar → top bar / slide-in; single column; preserve the air.

### Motion

- Entrance: fade + small translate-Y on scroll into view (Framer Motion).
- Smooth scroll via Lenis.
- Project images: subtle parallax / alternating reveal like the Works page.
- **All motion gated behind `prefers-reduced-motion`** — reveals become instant,
  parallax disabled.

---

## 5. Performance & SEO architecture

- **Images:** `next/image`, AVIF/WebP, responsive `sizes`, lazy below-the-fold,
  blur placeholders. Source images live in `assets/screenshots/`, optimized into
  `public/` at build.
- **Fonts:** `next/font` self-host → no render-blocking, zero CLS.
- **Static generation:** the page is SSG; no runtime server.
- **Code-splitting:** Framer Motion / heavy interactions loaded where needed.
- **SEO:** `metadata` export (title, description, OG + Twitter cards, favicon),
  `sitemap.ts`, `robots.ts`.
- **A11y:** semantic landmarks (`<nav> <main> <section> <footer>`), focus-visible
  rings, alt text on every image, AA contrast, reduced-motion.

**Budget:** Lighthouse 90+ on Performance, Accessibility, Best Practices, SEO.

---

## 6. Why this architecture

- **One typed content file** keeps the five projects' exact copy/labels (group
  tags, "In Progress") in one auditable place — no content drift across components.
- **No backend** because the data is small and static; less to break, faster, free
  to host.
- **Single-page scroll with anchored nav** matches both the brief and the reference,
  and is the strongest first-impression format for this audience.
- **Tokens-first styling** makes replicating the reference (and the dark/light
  toggle) a config concern, not a per-component one.
