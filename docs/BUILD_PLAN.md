# Build Plan — Howard Frelindo Goh Portfolio

A phased plan to build the portfolio site. Each phase has a clear goal, the work
inside it, and a definition of done. Build phases in order; don't start a phase
until the previous one's "Done when" checks pass.

**Design reference:** [kentokawazoe.com](https://kentokawazoe.com/) — dark, minimal,
typographically driven. See [ARCHITECTURE.md](./ARCHITECTURE.md) for the design
tokens distilled from it.

**Target audience:** Apple Developer Academy Indonesia admissions team, recruiters,
collaborators.

## Site sections (single-page scroll)

1. **Hero** — name, positioning line, CTAs, contact.
2. **About** — bio.
3. **Education** — BINUS undergrad + relevant coursework/timeline.
4. **Experience** — roles / activities (optional; fill as content arrives).
5. **Skills** — grouped tech (Game, Desktop, Web, Mobile, AI).
6. **Projects** — the five flagship projects.
7. **Contact / Footer** — email, phone, GitHub, closing line.

Anchored left-sidebar nav with active-section highlighting links to each.

## Motion & interaction (a first-class goal)

This site should *feel* alive, like the reference. Two pillars, both gated behind
`prefers-reduced-motion` and disabled on touch where they don't apply:

- **Custom cursor** — a small dot + trailing ring that follows the pointer, grows
  / changes state on hover over links, buttons, and project cards (magnetic pull
  on CTAs). Native cursor hidden on pointer-fine devices only.
- **Scroll animations** — Lenis smooth scroll, scroll-reveal (fade + translate),
  image parallax, line-by-line text reveals on headings, a scroll-progress
  indicator, and sticky/pinned project transitions.

See [ARCHITECTURE.md](./ARCHITECTURE.md) §4 for the motion tokens and the full
animation catalog. Phase 5 is where these get tuned, but the cursor and reveal
primitives land in Phase 1.

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

- Fixed **left sidebar**: name/initials mark, nav links (Home, About, Education,
  Projects, Contact), and a social icon column (GitHub, Email, plus LinkedIn if
  provided).
- **Theme toggle** (dark default, light alternate) top-right, persisted to
  `localStorage`, no flash on load.
- **Custom cursor** — global dot + trailing ring follower with a hover/active
  state. Hidden on touch and under reduced-motion (native cursor restored).
- **Reveal primitive** — a reusable scroll-reveal wrapper + Lenis smooth-scroll
  root, so every later section animates in consistently.
- **Scroll-progress indicator** (thin bar or sidebar tick).
- **Active-section highlighting** as you scroll (IntersectionObserver).
- **Back-to-top** affordance.
- Mobile: sidebar collapses into a top bar / slide-in menu; everything works
  from 320px up.

**Done when:** Nav scrolls to sections, active link tracks scroll position, theme
toggle persists across reloads, the custom cursor tracks and reacts to hover (and
vanishes under reduced-motion / touch), layout holds from 320px to ultrawide,
keyboard tab order is correct.

---

## Phase 2 — Hero, About, Education, Experience & Skills

**Goal:** The first screen, the bio, and the credentials sections.

- **Hero:** massive thin uppercase name (`HOWARD FRELINDO GOH`) with wide
  letter-spacing, the positioning line as subtitle, primary CTAs (View Projects,
  GitHub, Email), and the contact line. Mirror the reference's negative space.
  Line-by-line text reveal on the name.
- **About:** short bio behind a hairline `ABOUT ME` divider.
- **Education:** behind an `EDUCATION` divider — **Bina Nusantara University
  (BINUS)**, **Bachelor of Computer Science**, **2024 – 2028 (expected)**,
  currently semester 4, **GPA 3.95**. Rendered as a clean timeline/entry list.
  *(Optional: add notable coursework if you want it shown.)*
- **Experience:** `EXPERIENCE` timeline for roles, internships, and org activity.
  Reuses the same timeline component as Education.
  - **Laboratory Assistant (Aslab)** — Software Laboratory Center (SLC), BINUS
    (also referred to as LCAS). **2025 – Present.** Mentor students, author lab
    assignments, and grade student submissions.
- **Skills:** grouped by domain (Game, Desktop, Web, Mobile, AI) as quiet tech
  chips — can live inside About or as its own `SKILLS` block.
- Entrance motion: staggered fade/translate reveals per entry, honoring
  reduced-motion.

**Done when:** Each section matches the reference's rhythm, content is exact per
the build prompt, Education renders BINUS correctly, empty optional sections drop
out without leaving gaps, reveals are subtle, contrast passes WCAG AA.

> **Content needed from you:** Education details (major, years, any honors) and any
> Experience entries. Until provided, these render with clearly-marked placeholder
> copy so the layout is ready to drop real content into.

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

**Goal:** Make it feel finished and hit the metrics. This is where the cursor and
scroll system (stubbed in Phase 1) get tuned to feel right.

**Motion catalog to land/tune:**
- **Custom cursor** — dot + trailing ring (spring-eased follow), hover-grow on
  interactive elements, magnetic pull on primary CTAs, distinct "view" state over
  project cards. Touch + reduced-motion fallbacks verified.
- **Smooth scroll** — Lenis, with scroll-linked effects driven off it.
- **Scroll reveals** — fade + translate, staggered for lists/grids.
- **Text reveals** — line/word mask reveal on the hero name and section headings.
- **Image parallax** — subtle offset on project images, alternating like the
  reference Works page.
- **Sticky/pinned project transitions** — optional pin-and-reveal as each project
  enters.
- **Scroll-progress indicator** + micro-interactions on links/chips/toggle.

**Then the metrics pass:**
- Image pipeline: `next/image`, modern formats, correct `sizes`, blur placeholders.
- Accessibility sweep: semantic landmarks, alt text, focus rings, contrast,
  reduced-motion verified (every effect above no-ops cleanly).
- Performance: code-split (lazy-load the cursor + motion libs), audit bundle,
  lazy-load below-the-fold; confirm scroll effects don't drop frames.
- Cross-browser check (Chrome, Safari, Firefox); zero console errors.

**Done when:** **Lighthouse 90+ on all four metrics**, no console errors, the cursor
and scroll animations feel smooth at 60fps, and reduced-motion fully disables them.

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

The proposed 3D hero and broader design refresh are tracked in
[BACKLOG.md](./BACKLOG.md). They are separate from the original phase gates and
remain unimplemented proposals. The 3D work depends on a visual direction.

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
