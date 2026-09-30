import type { Metadata } from "next";
import { profile } from "@/content/profile";
import { ProjectsIndex } from "@/components/projects/ProjectsIndex";

export const metadata: Metadata = {
  title: `Works — ${profile.name}`,
  description:
    "Selected work across game, desktop, web, mobile, and AI — by Howard Frelindo Goh.",
};

export default function ProjectsPage() {
  return <ProjectsIndex />;
}
