import type { SkillGroup } from "@/types";

export const skills: SkillGroup[] = [
  { label: "Game", items: ["Unity", "C#", "Photon PUN", "State-Machine AI"] },
  {
    label: "Desktop",
    items: ["Rust", "Tauri", "SvelteKit", "TypeScript"],
  },
  {
    label: "Web",
    items: ["Vue.js", "Go", "gRPC", "Node.js / Express", "Docker", "Traefik"],
  },
  { label: "Mobile", items: ["Kotlin", "Android (MVVM)", "Room", "Firebase"] },
  {
    label: "AI",
    items: ["Google Cloud AI", "Prompt Engineering", "WhatsApp API"],
  },
  {
    label: "Data & Infra",
    items: ["PostgreSQL", "Redis", "RabbitMQ", "MinIO"],
  },
];
