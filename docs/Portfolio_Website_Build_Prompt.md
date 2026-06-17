# Build Prompt — Howard Frelindo Goh · Portfolio Website

> Paste everything below into your AI coding agent. Sections in **`[[ ... ]]`** are for you to fill in or attach before sending (e.g. your design reference and image files).

---

## 1. Role & Objective

You are an expert front-end engineer and UI designer. Build a **personal portfolio website** for **Howard Frelindo Goh**, a developer who works across game, desktop, web, mobile, and AI. The site showcases five flagship projects and is aimed at a specific audience: **the Apple Developer Academy Indonesia admissions team**, plus recruiters and collaborators.

The goal is a fast, polished, responsive single site that makes a strong first impression and communicates range, craft, and impact.

## 2. Engineering Standards (use current best practices)

Pick the modern, well-supported stack you judge best for a content-focused portfolio, and justify it briefly. Reasonable default: **Next.js (App Router) + TypeScript + Tailwind CSS**, deployable on Vercel. (Astro or a single self-contained `index.html` are acceptable if simpler is better for the chosen scope — state your choice and why.)

Requirements regardless of stack:

- **Responsive** and mobile-first; flawless from 320px to ultrawide.
- **Accessible**: semantic HTML, keyboard navigable, proper alt text, sufficient contrast, respects `prefers-reduced-motion`.
- **Performant**: lazy-load images, use modern formats (WebP/AVIF), Lighthouse 90+ on all metrics.
- **SEO**: meta tags, Open Graph/Twitter cards, descriptive titles, a sitemap, and a favicon.
- **Clean, documented code**: components organized sensibly, a clear `README` with run/deploy steps.
- **No console errors**; graceful fallbacks; cross-browser tested.
- Smooth, tasteful interactions (scroll reveals, hover states) — subtle, never gimmicky. Honor reduced-motion.

## 3. Design Direction

**I will provide a design reference** (a screenshot, a link to a site, or a Figma/image). **Replicate that reference's look and feel** — layout system, typography scale, color palette, spacing rhythm, and motion — adapted to my content. Match it closely while keeping the result original and accessible.

`[[ PASTE OR ATTACH YOUR DESIGN REFERENCE HERE. Tell the agent: "replicate this style." ]]`

If no reference is supplied, default to a clean, minimal, Apple-like aesthetic: monochrome graphite (near-black text `#1D1D1F`, grays, hairline dividers) on white, generous whitespace, large confident typography.

## 4. Site Structure

Single-page scroll (with anchored nav) unless the chosen stack/reference favors per-project routes. Suggested sections:

1. **Hero** — name, one-line positioning statement, primary CTAs (View Projects, GitHub, Email).
2. **About** — short bio + skills/tech overview (grouped: Game, Desktop, Web, Mobile, AI).
3. **Projects** — the five projects below, each as a rich card/section with: title, tagline, year, role, type, group/role note where relevant, tech chips, description, impact, what-I-learned, repo link, and image(s).
4. **Contact / Footer** — email, phone, GitHub, and a short closing line.

Add a sticky/smooth-scroll nav, a back-to-top affordance, and active-section highlighting.

## 5. About Me (content)

- **Name:** Howard Frelindo Goh
- **Status:** Undergraduate student, Bina Nusantara University (BINUS)
- **Positioning line:** "I build across every layer of software — game engines, desktop systems, web platforms, mobile apps, and AI products — happiest when an idea becomes something people can actually use."
- **Bio:** A full-stack-minded developer with hands-on experience spanning real-time multiplayer games, cross-platform desktop systems, microservice web platforms, native Android apps, and conversational AI products. Comfortable owning architecture end to end and shipping working software.
- **Skills / tech:** Unity, C#, Rust, Tauri, SvelteKit, TypeScript, Vue.js, Go, gRPC, Docker, Kotlin (Android, MVVM), Node.js/Express, PostgreSQL, Redis, RabbitMQ, Firebase, Google Cloud AI.

**Contact**
- Email: `howardgoh99@gmail.com`
- Phone: `+62 853-6309-3316`
- GitHub: `https://github.com/Hinsane5`

## 6. Projects (full content)

> Each project's `Type` indicates whether it was a class/work assignment, a hackathon, etc. Two are group projects — keep the "GROUP PROJECT" label and my role visible.

### Project 01 — ArCane Ring
- **Tagline:** 3D Multiplayer Action RPG built in Unity
- **Year:** 2025
- **Role / Position:** Game Developer / Programmer
- **Type:** Class / Work Assignment (individual)
- **Tech:** Unity · C# · Photon PUN · State-Machine AI
- **Repo:** https://github.com/Acad600-TPA/GAME-HW-252
- **Description:** A 3D multiplayer action RPG built in Unity (C#), featuring four enemy types each driven by a state-machine AI — Skeleton, Soldier, Wizard, and a Dragon Boss — with real-time networking via Photon PUN and full inventory, shop, and player-stat systems.
- **Impact:** Designed and implemented the entire enemy AI architecture using the State pattern (Idle → Patrol → Chase → Attack), synchronized across all clients through Photon RPC calls. Built the full inventory system, NPC shop, consumable item effects (healing, mana, speed buffs), player stat tracking (HP / Mana / Stamina), and skill mechanics — resulting in a fully playable networked RPG.
- **What I learned:** Deepened my understanding of state-machine design and real-time multiplayer synchronization. Architecting four distinct enemy types with different attack patterns taught me to write modular, extensible game systems in C#; debugging networked state sharpened my appreciation for event-driven programming and careful data flow across clients.

### Project 02 — RUSA Internal
- **Tagline:** Cross-platform desktop management system
- **Year:** 2025
- **Role / Position:** Full-Stack Desktop Developer
- **Type:** Class / Work Assignment (individual)
- **Tech:** Tauri 2 · Rust · SvelteKit · TypeScript · PostgreSQL · Redis
- **Repo:** https://github.com/Hinsane5/TPA_DESKTOP_CODE
- **Description:** A cross-platform desktop application for RUSA, a fictional interplanetary organization, built with Tauri 2 (Rust backend) and SvelteKit (TypeScript). Supports 20+ user roles with role-gated access to department workflows: internal messaging, task management, a multi-Director voting system, and audit logging.
- **Impact:** Architected the whole application around a layered MVC structure and five mandated design patterns (State/Event, Singleton, Observer, Command, Repository). Built the real-time event pipeline using Tauri IPC emit/listen, the PostgreSQL data layer with compile-time-verified SQLx queries, Redis caching, and Argon2 password hashing — so a supply request can trigger a Director voting session that then notifies the requester, all through one clean architecture.
- **What I learned:** Learned to think at a systems level — Rust ownership and safe concurrency, the Tauri IPC bridge, and how to enforce authorization across 20+ roles without leaking logic between layers. Managing this scale taught me the value of clear service contracts, defensive backend design, and why architecture decisions compound over time.

### Project 03 — hoshiBmaTchi
- **Tagline:** Instagram-inspired social platform on Go microservices
- **Year:** 2025
- **Role / Position:** Full-Stack Web Developer
- **Type:** Class / Work Assignment (individual)
- **Tech:** Vue.js · TypeScript · Go · gRPC · Docker · RabbitMQ · MinIO · Traefik
- **Repo:** https://github.com/Acad600-TPA/WEB-HW-252
- **Description:** A full-featured Instagram-inspired social platform with a Vue.js + TypeScript frontend and a Go microservices backend communicating over gRPC. Supports authentication, posts, follows, audio/video streaming, AI-powered features, and a fully containerized HTTPS production deployment.
- **Impact:** Built the entire platform from scratch: a hexagonal microservices architecture with a Go REST API Gateway forwarding to internal gRPC services via Docker DNS, RabbitMQ for async workflows, MinIO for object storage, Redis caching, and Traefik as the HTTPS reverse proxy. The frontend adds lazy loading, route prefetching, dark/light/auto theming, ESLint enforcement, and JWT access + refresh token security.
- **What I learned:** Hands-on experience with gRPC + Protobuf, database-per-service isolation, message queues, and production-grade Docker. Reshaped how I think about scalability: every architectural decision carries a downstream performance and security cost, and this project made that tangible.

### Project 04 — Hwixel  · GROUP PROJECT
- **Tagline:** Android app for university group-project management
- **Year:** 2025
- **Role / Position:** Tech (Android Developer)
- **Type:** Class / Work Assignment
- **Group project:** Team HW XL — **my role: Tech (Android Developer)**
- **Tech:** Kotlin · MVVM · Room · Firebase · AI Analytics
- **Repo:** https://github.com/Acad600-TPA/MOBILE-HW-XL-252
- **Description:** An Android app (Kotlin, MVVM) that centralizes university group-project management — combining a Kanban task board, AI-driven team-health analytics, attendance tracking, peer evaluations, and push notifications in one mobile-first experience with offline support via a Room database.
- **Impact:** As the tech member, implemented the MVVM foundation across the app (no business logic in Activities or Fragments), built the AI-powered Contribution Analytics that generates Team Health verdicts and targeted recommendations from member task statistics, and designed the Room schema for offline-first operation. Integrated Firebase Auth, Realtime Database sync, and Cloud Messaging for real-time push notifications.
- **What I learned:** The discipline of clean Android architecture and the real-world challenge of integrating external AI services under latency and reliability constraints. Working in a structured team with defined roles (Tech, Designer, PM) sharpened my ability to write modular, well-documented code teammates can build on without friction.

### Project 05 — WarungAI  · GROUP PROJECT · IN PROGRESS
- **Tagline:** AI Conversational POS for Indonesian micro-businesses
- **Year:** 2026 (In Progress)
- **Role / Position:** Hacker (Tech / Developer)
- **Type:** Hackathon — GCW 2.0, Gunadarma
- **Group project:** Team of 4 (2 Hustler, 1 Hipster, 1 Hacker) — **my role: Hacker (Tech / Developer)**
- **Tech:** Node.js · Express · Google Cloud AI · WhatsApp API
- **Repo:** https://github.com/Hinsane5/WarungAI
- **Description:** An AI-powered WhatsApp bot acting as a conversational Point of Sale and smart CRM for Indonesian micro-businesses (warung). Owners record transactions by sending voice or text messages; the AI turns them into structured stock and cash-flow data in real time — no new app to install and zero learning curve.
- **Impact:** As the sole hacker on a 4-member team, building the Node.js/Express backend and the Google Cloud AI pipeline that parses free-form Indonesian voice and text into structured transactions (item, quantity, action, price). Also implementing the Smart Kasbon debt-digitization system with automated collection drafts, a frictionless QR loyalty-capture flow, and a predictive restock alert engine.
- **What I am learning:** Building AI processing for noisy, informal Indonesian dialect is teaching me how fragile standard models can be against real-world language variance — and how to design robust prompt engineering and fallback logic to handle it. Beyond the tech, this hackathon is shaping my product thinking: the most impactful solution often hides its complexity entirely and meets users where they already are.

## 7. Images / Assets

I will provide screenshots for each project — use them as the project visuals (hero or gallery). Optimize and lazy-load them.

`[[ ATTACH IMAGE FILES AND MAP THEM HERE, e.g.:
- ArCane Ring: gameplay screenshot(s)
- RUSA Internal: administrator dashboard screenshot
- hoshiBmaTchi: home feed, settings, saved collection screenshots
- Hwixel: dashboard, analytics, task board, peer-evaluation phone screenshots
- WarungAI: owner dashboard screenshot
]]`

If an image is missing for a project, render a tasteful placeholder block sized to the final image so I can drop it in later.

## 8. Deliverables & Acceptance Criteria

- A complete, runnable codebase with a `README` (install, dev, build, deploy).
- All five projects present with the exact content above; group/role labels and the "In Progress" tag on WarungAI preserved.
- Fully responsive, accessible, and SEO-ready; Lighthouse 90+ across the board.
- Deploy-ready for a static/Vercel host; include deploy instructions.
- Provide a short summary of the stack you chose and why, plus any assumptions.

## 9. How to Work

Ask me clarifying questions only if blocked. Otherwise: propose the structure, confirm you'll replicate my design reference, then build it section by section. Keep components small and reusable. Deliver clean, commented code.
