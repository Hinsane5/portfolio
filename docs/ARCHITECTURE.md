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
        │   ├── layout.tsx     # root layout: fonts, theme, persistent SiteChrome
        │   ├── page.tsx       # home: Hero…Contact + compact ProjectsPreview
        │   ├── projects/
        │   │   ├── page.tsx        # /projects — Works-style index
        │   │   └── [id]/page.tsx   # /projects/[id] — per-project detail (SSG)
        │   ├── globals.css    # Tailwind layers + base styles
        │   ├── sitemap.ts     # SEO sitemap
        │   └── robots.ts      # SEO robots
        ├── components/
        │   ├── layout/        # SiteChrome, Sidebar, ThemeToggle, BackToTop,
        │   │                  #   MobileNav, CustomCursor, ScrollProgress, SmoothScroll
        │   ├── sections/      # Hero, About, Education, Experience, Skills,
        │   │                  #   ProjectsPreview, Contact, Footer
        │   ├── projects/      # ProjectsShowcase, ProjectImage
        │   └── ui/            # primitives: Reveal, TextReveal, Parallax,
        │                      #   TechChip, TimelineItem, SectionHeading, icons
        ├── content/
        │   ├── projects.ts    # typed project data (single source of truth)
        │   ├── education.ts   # education entries
        │   ├── experience.ts  # experience entries (optional)
        │   └── skills.ts      # skill groups
        ├── lib/
        │   ├── hooks/         # useActiveSection, useReducedMotion, useTheme,
        │   │                  #   useCursor, useLenis
        │   └── utils.ts
        └── types/
            └── index.ts       # Project, EducationEntry, ExperienceEntry, SkillGroup
```

> The exact framework path (`app/` subdir vs repo root) is a Phase 0 decision; the
> structure above is the contract regardless of where the Next app is rooted.

---

## 2. Data flow

Content is static and typed — no backend, no fetching.

```
content/projects.ts    ──Project[]──────►  <Projects>    ──►  <ProjectCard> × 5
content/education.ts    ──Education[]─────►  <Education>   ──►  <TimelineItem> × n
content/experience.ts   ──Experience[]────►  <Experience>  ──►  <TimelineItem> × n
content/skills.ts       ──SkillGroup[]────►  <Skills>      ──►  <TechChip> grid
        ▲
        │  each file is the single source of truth for its section's copy
```

- All section content lives in typed files under `content/`, typed by `types/`.
- Sections compose top-to-bottom in `app/page.tsx`; the page is a single scroll.
- Optional sections (Experience) render nothing when their array is empty.
- Theme state lives in a small React context + `localStorage`; no global store.
- Active-section tracking uses IntersectionObserver via a `useActiveSection` hook.
- Cursor position + hover state flow through a `useCursor` hook/context consumed by
  `<CustomCursor>`; interactive components opt into hover states via data attrs.

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

type EducationEntry = {
  institution: string;    // "Bina Nusantara University (BINUS)"
  degree: string;         // "Undergraduate, <major>"
  start: string;          // "2024"
  end: string;            // "2028 (expected)"
  gpa?: string;           // "3.95 / 4.00"
  details?: string[];     // coursework / honors / notes
};

// Howard's entry:
//   institution: "Bina Nusantara University (BINUS)"
//   degree:      "Bachelor of Computer Science"  // semester 4 as of 2026
//   start: "2024", end: "2028 (expected)", gpa: "3.95 / 4.00"

type ExperienceEntry = {
  org: string;
  role: string;
  start: string;
  end: string;            // "Present"
  summary: string;
};

// Howard's entry:
//   org:   "Software Laboratory Center (SLC), BINUS"  // a.k.a. LCAS
//   role:  "Laboratory Assistant (Aslab)"
//   start: "2025", end: "Present",
//   summary: "Mentor students, author lab assignments, and grade submissions."

type SkillGroup = {
  label: string;          // "Game" | "Desktop" | "Web" | "Mobile" | "AI"
  items: string[];        // ["Unity", "C#", ...]
};
```

---

## 3. Component architecture

```
RootLayout (fonts, theme provider, smooth-scroll, cursor provider)
├── CustomCursor          global pointer follower (portal, fixed)
├── ScrollProgress        thin progress bar
└── Page (single scroll)
    ├── Sidebar            fixed left: brand, nav, social icons
    ├── ThemeToggle        top-right, persisted
    ├── Hero               name (text-reveal), positioning line, CTAs, contact
    ├── About              bio
    ├── Education
    │   └── TimelineItem ×n  institution, degree, dates, details
    ├── Experience        (renders only if content present)
    │   └── TimelineItem ×n
    ├── Skills             grouped tech chips (Game/Desktop/Web/Mobile/AI)
    ├── Projects
    │   └── ProjectCard ×5 image/placeholder, number, meta, tech, copy, repo
    ├── Contact            email / phone / github / closing line
    ├── Footer             copyright
    └── BackToTop
```

Shared primitives in `components/ui/`: `Reveal` (scroll-reveal wrapper that no-ops
under reduced-motion), `TextReveal` (line/word mask reveal), `Parallax` (scroll
offset), `Magnetic` (CTA pull toward cursor), `TimelineItem`, `Divider` (hairline
rule), `IconLink`, `TechChip`. All motion primitives read `useReducedMotion` and
degrade to static.

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

### Motion — animation catalog

The site leans on motion the way the reference does. Two systems: a **custom
cursor** and **scroll-driven animation**. Everything below is gated behind
`prefers-reduced-motion` and, where relevant, pointer type.

**Custom cursor** (`<CustomCursor>` + `useCursor`)
- Small filled **dot** tracking the pointer 1:1, plus a larger **ring** that
  follows with spring easing (lag/trail).
- **Hover-grow** over any interactive element; a distinct **"view"** label/scale
  over project cards; **magnetic** pull on primary CTAs (`<Magnetic>`).
- Native cursor hidden only on `pointer: fine`. On touch or reduced-motion the
  component renders nothing and the native cursor is restored.
- Implemented with `requestAnimationFrame` + transforms (no layout thrash);
  position written to refs, not React state, to avoid re-renders.

**Scroll animation**
- **Smooth scroll:** Lenis drives the page; scroll-linked effects read its value.
- **Reveal:** fade + translate-Y as elements enter (`<Reveal>`), staggered for
  lists/grids and timeline entries.
- **Text reveal:** line/word mask wipe on the hero name and section headings
  (`<TextReveal>`).
- **Parallax:** subtle vertical offset on project images, alternating sides like
  the reference Works page (`<Parallax>`).
- **Sticky/pinned:** optional pin-and-reveal as each project scrolls in.
- **Scroll progress:** thin top bar / sidebar tick (`<ScrollProgress>`).
- **Micro-interactions:** link underlines, chip hovers, theme-toggle transition.

**Tokens**
- Easing: spring for the cursor ring (low stiffness, high damping); `easeOut`
  ~0.6s for reveals.
- Reveal distance: ~16–24px translate, opacity 0→1.
- Stagger: ~60–90ms between siblings.

**Reduced-motion / fallbacks:** reveals become instant (content visible, no
transform), parallax and pinning disabled, text-reveal shows immediately, cursor
component unmounts. Verify via `useReducedMotion` in every motion primitive — no
effect should be load-bearing for content or navigation.

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
