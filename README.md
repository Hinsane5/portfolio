# Howard Frelindo Goh — Portfolio Website

A fast, polished, responsive personal portfolio for **Howard Frelindo Goh** — a
developer working across game, desktop, web, mobile, and AI. It showcases five
flagship projects and is aimed at the Apple Developer Academy Indonesia admissions
team, recruiters, and collaborators.

**Design direction:** dark, minimal, typographically driven, modeled on
[kentokawazoe.com](https://kentokawazoe.com/) — adapted to original content.

> **Status:** Planning complete. The repo currently holds the build plan, tech
> decisions, and architecture. App scaffolding is Phase 0 — see the build plan.

## Documentation

| Doc | What's in it |
|---|---|
| [docs/BUILD_PLAN.md](docs/BUILD_PLAN.md) | Phased build plan (Phase 0 → 6) with "done when" gates. |
| [docs/TECH_STACK.md](docs/TECH_STACK.md) | Stack choices and the reasoning behind them. |
| [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md) | Folder layout, data flow, components, design tokens. |
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

The Next.js app is created in Phase 0 of the [build plan](docs/BUILD_PLAN.md). Once
scaffolded:

```bash
npm install      # install dependencies
npm run dev      # http://localhost:3000
npm run build    # production build
npm run lint     # lint
```

## Deploy

Built to deploy on [Vercel](https://vercel.com): import the repo, accept the
detected Next.js defaults, and ship. Preview deploys are generated per push.

## Assets

Project screenshots go in [`assets/screenshots/`](assets/screenshots/). Missing
images render tasteful sized placeholders so they can be dropped in later.

## Contact

- Email: howardgoh99@gmail.com
- Phone: +62 853-6309-3316
- GitHub: [github.com/Hinsane5](https://github.com/Hinsane5)

## License

[MIT](LICENSE) © Howard Frelindo Goh
