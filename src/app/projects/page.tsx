import type { Metadata } from "next";
import { profile } from "@/content/profile";
import { ProjectsShowcase } from "@/components/projects/ProjectsShowcase";

export const metadata: Metadata = {
  title: `Works — ${profile.name}`,
  description:
    "Selected work across game, desktop, web, mobile, and AI — by Howard Frelindo Goh.",
};

export default function ProjectsPage() {
  return (
    <main>
      <div className="px-6 pt-20 pb-16 sm:px-12 lg:px-20 lg:py-0">
        <ProjectsShowcase />
      </div>
    </main>
  );
}
