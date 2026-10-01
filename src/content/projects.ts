import type { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "arcane-ring",
    number: "01",
    title: "ArCane Ring",
    tagline: "3D Multiplayer Action RPG built in Unity",
    year: "2025",
    role: "Game Developer / Programmer",
    type: "Class / Work Assignment (individual)",
    tech: ["Unity", "C#", "Photon PUN", "State-Machine AI"],
    repo: "https://github.com/Acad600-TPA/GAME-HW-252",
    description:
      "A 3D multiplayer action RPG built in Unity (C#), featuring four enemy types driven by state-machine AI: Skeleton, Soldier, Wizard, and a Dragon Boss. It includes real-time networking via Photon PUN and full inventory, shop, and player-stat systems.",
    impact:
      "Designed and implemented the entire enemy AI architecture using the State pattern (Idle → Patrol → Chase → Attack), synchronized across all clients through Photon RPC calls. Built the full inventory system, NPC shop, consumable item effects (healing, mana, speed buffs), player stat tracking (HP / Mana / Stamina), and skill mechanics to deliver a fully playable networked RPG.",
    learned:
      "Deepened my understanding of state-machine design and real-time multiplayer synchronization. Architecting four distinct enemy types with different attack patterns taught me to write modular, extensible game systems in C#. Debugging networked state sharpened my appreciation for event-driven programming and careful data flow across clients.",
    images: ["/projects/arcane-ring.png"],
  },
  {
    id: "rusa-internal",
    number: "02",
    title: "RUSA Internal",
    tagline: "Cross-platform desktop management system",
    year: "2025",
    role: "Full-Stack Desktop Developer",
    type: "Class / Work Assignment (individual)",
    tech: ["Tauri 2", "Rust", "SvelteKit", "TypeScript", "PostgreSQL", "Redis"],
    repo: "https://github.com/Hinsane5/TPA_DESKTOP_CODE",
    description:
      "A cross-platform desktop application for RUSA, a fictional interplanetary organization, built with Tauri 2 (Rust backend) and SvelteKit (TypeScript). Supports 20+ user roles with role-gated access to department workflows: internal messaging, task management, a multi-Director voting system, and audit logging.",
    impact:
      "Architected the whole application around a layered MVC structure and five mandated design patterns (State/Event, Singleton, Observer, Command, Repository). Built the real-time event pipeline using Tauri IPC emit/listen, the PostgreSQL data layer with compile-time-verified SQLx queries, Redis caching, and Argon2 password hashing. A supply request can trigger a Director voting session that then notifies the requester, all through one clean architecture.",
    learned:
      "Learned to think at a systems level, from Rust ownership and safe concurrency to the Tauri IPC bridge and enforcing authorization across 20+ roles without leaking logic between layers. Managing this scale taught me the value of clear service contracts, defensive backend design, and why architecture decisions compound over time.",
    images: ["/projects/rusa-internal.png"],
  },
  {
    id: "hoshibmatchi",
    number: "03",
    title: "hoshiBmaTchi",
    tagline: "Instagram-inspired social platform on Go microservices",
    year: "2025",
    role: "Full-Stack Web Developer",
    type: "Class / Work Assignment (individual)",
    tech: [
      "Vue.js",
      "TypeScript",
      "Go",
      "gRPC",
      "Docker",
      "RabbitMQ",
      "MinIO",
      "Traefik",
    ],
    repo: "https://github.com/Acad600-TPA/WEB-HW-252",
    description:
      "A full-featured Instagram-inspired social platform with a Vue.js + TypeScript frontend and a Go microservices backend communicating over gRPC. Supports authentication, posts, follows, audio/video streaming, AI-powered features, and a fully containerized HTTPS production deployment.",
    impact:
      "Built the entire platform from scratch: a hexagonal microservices architecture with a Go REST API Gateway forwarding to internal gRPC services via Docker DNS, RabbitMQ for async workflows, MinIO for object storage, Redis caching, and Traefik as the HTTPS reverse proxy. The frontend adds lazy loading, route prefetching, dark/light/auto theming, ESLint enforcement, and JWT access + refresh token security.",
    learned:
      "Hands-on experience with gRPC + Protobuf, database-per-service isolation, message queues, and production-grade Docker. Reshaped how I think about scalability: every architectural decision carries a downstream performance and security cost, and this project made that tangible.",
    images: [],
  },
  {
    id: "hwixel",
    number: "04",
    title: "Hwixel",
    tagline: "Android app for university group-project management",
    year: "2025",
    role: "Tech (Android Developer)",
    type: "Class / Work Assignment",
    group: { team: "Team HW XL", role: "Tech (Android Developer)" },
    tech: ["Kotlin", "MVVM", "Room", "Firebase", "AI Analytics"],
    repo: "https://github.com/Acad600-TPA/MOBILE-HW-XL-252",
    description:
      "An Android app (Kotlin, MVVM) that centralizes university group-project management. It combines a Kanban task board, AI-driven team-health analytics, attendance tracking, peer evaluations, and push notifications in one mobile-first experience with offline support via a Room database.",
    impact:
      "As the tech member, implemented the MVVM foundation across the app (no business logic in Activities or Fragments), built the AI-powered Contribution Analytics that generates Team Health verdicts and targeted recommendations from member task statistics, and designed the Room schema for offline-first operation. Integrated Firebase Auth, Realtime Database sync, and Cloud Messaging for real-time push notifications.",
    learned:
      "The discipline of clean Android architecture and the real-world challenge of integrating external AI services under latency and reliability constraints. Working in a structured team with defined roles (Tech, Designer, PM) sharpened my ability to write modular, well-documented code teammates can build on without friction.",
    images: ["/projects/hwixel.jpeg"],
  },
  {
    id: "warungai",
    number: "05",
    title: "WarungAI",
    tagline: "AI Conversational POS for Indonesian micro-businesses",
    year: "2026 (In Progress)",
    role: "Hacker (Tech / Developer)",
    type: "Hackathon, GCW 2.0, Gunadarma",
    group: {
      team: "Team of 4 (2 Hustler, 1 Hipster, 1 Hacker)",
      role: "Hacker (Tech / Developer)",
    },
    inProgress: true,
    tech: ["Node.js", "Express", "Google Cloud AI", "WhatsApp API"],
    repo: "https://github.com/Hinsane5/WarungAI",
    description:
      "An AI-powered WhatsApp bot acting as a conversational Point of Sale and smart CRM for Indonesian micro-businesses (warung). Owners record transactions by sending voice or text messages; the AI turns them into structured stock and cash-flow data in real time, without requiring a new app or a learning curve.",
    impact:
      "As the sole hacker on a 4-member team, building the Node.js/Express backend and the Google Cloud AI pipeline that parses free-form Indonesian voice and text into structured transactions (item, quantity, action, price). Also implementing the Smart Kasbon debt-digitization system with automated collection drafts, a frictionless QR loyalty-capture flow, and a predictive restock alert engine.",
    learned:
      "Building AI processing for noisy, informal Indonesian dialect is teaching me how fragile standard models can be against real-world language variance, and how to design robust prompts and fallback logic. Beyond the tech, this hackathon is shaping my product thinking: the most impactful solution often hides its complexity and meets users where they already are.",
    images: ["/projects/warungai.png"],
  },
  {
    id: "lokalloop",
    number: "06",
    title: "LokalLoop",
    tagline: "AI coordination for Indonesia’s informal recycling network",
    year: "2026 (In Progress)",
    role: "Software Developer",
    type: "Samsung Solve for Tomorrow 2026",
    group: {
      team: "Team PALEM · Universitas Bina Nusantara",
      role: "Engineering contributor",
    },
    inProgress: true,
    tech: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "FastAPI", "Python"],
    repo: "https://github.com/LokalLoopHub",
    description:
      "LokalLoop is an AI-driven coordination platform for Indonesia’s informal recycling network. It connects resident pickup requests with collector routes, helps waste banks combine stock into buyer-ready lots, and supports material traceability for ESG reporting. The work spans a Next.js portal, TypeScript backend, and Python optimization service. The project is in progress, and some dashboard journeys still use demo data or await live API support.",
    impact:
      "Contributed to the pooling and routing workflow across the operations dashboard, backend, and AI service. Recent work includes bulk assignment of waste banks to material clusters, operator-facing pooling and route updates, and a seven-day inventory-history fixture for the pooling forecast. Frontend mock journeys are available while parts of the live API integration continue.",
    learned:
      "Working across separate repositories has strengthened my understanding of service boundaries and shared API contracts. I’m learning to trace how inventory, route, and forecast data move through the system, and to make clear when a workflow uses demo data, partial live data, or a complete backend integration.",
    images: [
      "/projects/lokalloop-admin-dashboard.png",
      "/projects/lokalloop-map.png",
      "/projects/lokalloop-wa.jpeg",
    ],
    imageCaptions: [
      "Operations dashboard",
      "Collector route and pickup map",
      "WhatsApp pickup conversation",
    ],
  },
];
