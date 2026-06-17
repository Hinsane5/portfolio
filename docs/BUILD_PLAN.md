# Build Plan — Howard Frelindo Goh Portfolio

A phased plan to build the portfolio site. Each phase has a clear goal, the work
inside it, and a definition of done. Build phases in order; don't start a phase
until the previous one's "Done when" checks pass.

**Design reference:** [kentokawazoe.com](https://kentokawazoe.com/) — dark, minimal,
typographically driven. See [ARCHITECTURE.md](./ARCHITECTURE.md) for the design
tokens distilled from it.

**Target audience:** Apple Developer Academy Indonesia admissions team, recruiters,
collaborators.

---

## Phase 0 — Project setup (foundation)

**Goal:** A running Next.js app with the toolchain, design tokens, and folder
structure in place. No real content yet.

- Scaffold Next.js (App Router) + TypeScript + Tailwind CSS.
- Configure `tailwind.config.ts` with the design tokens (colors, Montserrat font,
  spacing scale, letter-spacing) from [ARCHITECTURE.md](./ARCHITECTURE.md).
- Add `next/font` for Montserrat (light + regular + medium weights).
- Set up ESLint + Prettier, a `lib/` for utilities, and the `content/` data file
  (a typed `projects.ts` array so project content lives in one place).
- Wire up base layout: dark background, global type styles, smooth-scroll root.
- Add `prefers-reduced-motion` guard at the root.

**Done when:** `npm run dev` shows a styled blank page in the reference's color and
type system; `npm run build` passes; Lighthouse runs clean on the empty shell.

---

## Phase 1 — Layout shell & navigation

**Goal:** The persistent chrome the whole site lives inside.

- Fixed **left sidebar**: name/initials mark, nav links (Home, Projects/Works,
  Contact), and a social icon column (GitHub, Email, plus LinkedIn if provided).
- **Theme toggle** (dark default, light alternate) top-right, persisted to
  `localStorage`, no flash on load.
- **Active-section highlighting** as you scroll (IntersectionObserver).
- **Back-to-top** affordance.
- Mobile: sidebar collapses into a top bar / slide-in menu; everything works
  from 320px up.

**Done when:** Nav scrolls to sections, active link tracks scroll position, theme
toggle persists across reloads, layout holds from 320px to ultrawide, keyboard
tab order is correct.

---

## Phase 2 — Hero + About

**Goal:** The first screen and the bio.

- **Hero:** massive thin uppercase name (`HOWARD FRELINDO GOH`) with wide
  letter-spacing, the positioning line as subtitle, primary CTAs (View Projects,
  GitHub, Email), and the contact line. Mirror the reference's negative space.
- **About:** short bio behind a hairline `ABOUT ME` divider; skills grouped by
  domain (Game, Desktop, Web, Mobile, AI) as quiet tech chips.
- Entrance motion: fade/translate reveal, honoring reduced-motion.

**Done when:** Hero and About match the reference's rhythm, content is exact per
the build prompt, reveals are subtle, contrast passes WCAG AA.

---

## Phase 3 — Projects

**Goal:** The five flagship projects, the heart of the site.

- Render from the typed `projects` array.
- Each project: large screenshot/placeholder, project number (`01 / 05`), title,
  tagline, year, role, type, tech chips, description, impact, what-I-learned, and
  repo link.
- Preserve the **GROUP PROJECT** label on Hwixel and WarungAI, the role note, and
  the **IN PROGRESS** tag on WarungAI.
- Scroll-reveal per project; alternating/parallax image treatment like the
  reference Works page.
- Tasteful sized placeholder blocks where screenshots are missing.

**Done when:** All five projects render with exact content and labels, images
lazy-load (WebP/AVIF), placeholders are drop-in sized, repo links open in a new
tab with `rel="noopener"`.

The five projects: **ArCane Ring** (Unity multiplayer RPG), **RUSA Internal**
(Tauri/Rust/SvelteKit desktop), **hoshiBmaTchi** (Go microservices social),
**Hwixel** (Kotlin Android, group), **WarungAI** (Node/GCP AI POS, group, in
progress).

---

## Phase 4 — Contact / Footer

**Goal:** Close the page and make contact effortless.

- Email (`howardgoh99@gmail.com`), phone (`+62 853-6309-3316`), GitHub
  (`github.com/Hinsane5`), a short closing line, and the social icons.
- Footer copyright line.

**Done when:** All contact links work (`mailto:`, `tel:`, external GitHub), footer
matches the reference's restraint.

---

## Phase 5 — Polish: motion, performance, accessibility

**Goal:** Make it feel finished and hit the metrics.

- Smooth scroll (Lenis) + scroll-reveal pass; remove any jank.
- Image pipeline: `next/image`, modern formats, correct `sizes`, blur placeholders.
- Accessibility sweep: semantic landmarks, alt text, focus rings, contrast,
  reduced-motion verified.
- Performance: code-split, audit bundle, lazy-load below-the-fold.
- Cross-browser check (Chrome, Safari, Firefox); zero console errors.

**Done when:** **Lighthouse 90+ on all four metrics**, no console errors, reduced-motion
fully respected.

---

## Phase 6 — SEO & deploy

**Goal:** Discoverable and live.

- Metadata: title, description, Open Graph + Twitter cards, favicon, social share
  image.
- `sitemap.xml` + `robots.txt` (Next metadata routes).
- Deploy to Vercel; verify the production URL and Lighthouse on prod.
- Finalize `README` run/build/deploy steps.

**Done when:** Site is live on Vercel, share preview renders correctly, sitemap
resolves, README lets a stranger run and deploy it.

---

## Cross-cutting acceptance criteria (apply to every phase)

- Mobile-first; flawless 320px → ultrawide.
- Accessible: semantic HTML, keyboard navigable, alt text, AA contrast,
  `prefers-reduced-motion` honored.
- Performant: lazy images, modern formats, Lighthouse 90+.
- Clean, documented, component-based code.
- No console errors; graceful fallbacks; cross-browser tested.
- All five projects' content exact; group/role labels and WarungAI "In Progress"
  tag preserved.

## Suggested order of attack

Phase 0 → 1 → 2 → 3 → 4 → 5 → 6. Phases 2–4 can each ship independently once the
shell (Phase 1) exists. Don't defer accessibility or performance to the end — bake
the cross-cutting criteria into every phase.
