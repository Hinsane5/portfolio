# Howard Frelindo Goh — Portfolio Website

A fast, polished, responsive personal portfolio for **Howard Frelindo Goh** — a
developer working across game, desktop, web, mobile, and AI. It showcases five
flagship projects and is aimed at the Apple Developer Academy Indonesia admissions
team, recruiters, and collaborators.

**Design direction:** dark, minimal, typographically driven, modeled on
[kentokawazoe.com](https://kentokawazoe.com/) — adapted to original content.

**Sections:** Hero · About · Education · Experience · Skills · Projects · Contact —
single-page scroll with anchored sidebar nav.

**Motion:** a custom cursor (dot + trailing ring with hover/magnetic states),
scroll reveals, and a native-scroll-driven Projects spiral made from the
project screenshots — all gated behind `prefers-reduced-motion`.

> **Status:** Phases 1–5 complete. Full single-page site (hero, about, skills,
> education, experience, projects) + a scroll-driven 3D project spiral, an
> all-projects grid with in-place detail browsing, and per-project detail pages.
> Phase 4/5 added: polished contact + footer, magnetic CTAs,
> accessibility (focus rings, landmarks, AA contrast, reduced-motion), image
> optimization, and SEO (metadata, sitemap, robots). Remaining: **Phase 6 —
> deploy to Vercel** (set `NEXT_PUBLIC_SITE_URL`). A proposed hero and project
> design refresh is tracked separately in [docs/BACKLOG.md](docs/BACKLOG.md).
> See [docs/BUILD_PLAN.md](docs/BUILD_PLAN.md).
>
> **Adding project screenshots:** drop images in `public/projects/`, then set the
> `images` array for that project in `src/content/projects.ts` (e.g.
> `images: ["/projects/arcane-ring-1.png"]`). They lazy-load and replace the
> placeholder automatically.

## Documentation

| Doc | What's in it |
|---|---|
| [docs/BUILD_PLAN.md](docs/BUILD_PLAN.md) | Phased build plan (Phase 0 → 6) with "done when" gates. |
| [docs/BACKLOG.md](docs/BACKLOG.md) | Project spiral review, visual polish, and domain work. |
| [docs/TECH_STACK.md](docs/TECH_STACK.md) | Stack choices and the reasoning behind them. |
| [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md) | Folder layout, data flow, components, design tokens. |
| [docs/DEPLOY.md](docs/DEPLOY.md) | Deploy steps (GitHub + Vercel), env vars, post-deploy checklist. |
| [docs/Portfolio_Website_Build_Prompt.md](docs/Portfolio_Website_Build_Prompt.md) | Original source brief and full project content. |

## Tech stack

Next.js (App Router) · TypeScript · Tailwind CSS · Framer Motion · deployed on
Vercel. Full rationale in [docs/TECH_STACK.md](docs/TECH_STACK.md).

## Projects featured

1. **ArCane Ring** — 3D multiplayer action RPG in Unity (C#, Photon PUN).
2. **RUSA Internal** — cross-platform desktop system (Tauri 2, Rust, SvelteKit).
3. **hoshiBmaTchi** — Instagram-inspired social platform on Go microservices.
4. **Hwixel** — Android group-project manager (Kotlin, MVVM) · group project.
5. **WarungAI** — AI conversational POS for Indonesian warung · group · in progress.

## Getting started

```bash
npm install      # install dependencies
npm run dev      # http://localhost:3000
npm run build    # production build
npm run start    # serve the production build
npm run lint     # lint
```

## Deploy

Import the repo on [Vercel](https://vercel.com) (Next.js is auto-detected) and set
`NEXT_PUBLIC_SITE_URL` to your production URL. Full steps + a post-deploy checklist
in [docs/DEPLOY.md](docs/DEPLOY.md).

## Assets

Project screenshots go in [`assets/screenshots/`](assets/screenshots/). Missing
images render tasteful sized placeholders so they can be dropped in later.

## Contact

- Email: howardgoh99@gmail.com
- Phone: +62 853-6309-3316
- GitHub: [github.com/Hinsane5](https://github.com/Hinsane5)

## License

[MIT](LICENSE) © Howard Frelindo Goh
