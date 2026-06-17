import type { Metadata } from "next";
import { projects } from "@/content/projects";
import { profile } from "@/content/profile";
import { Reveal } from "@/components/ui/Reveal";
import { ProjectIndexCard } from "@/components/projects/ProjectIndexCard";

export const metadata: Metadata = {
  title: `Projects — ${profile.name}`,
  description:
    "Selected work across game, desktop, web, mobile, and AI — by Howard Frelindo Goh.",
};

export default function ProjectsPage() {
  return (
    <main className="lg:pl-40">
      <section className="min-h-dvh px-6 py-24 sm:px-12 lg:px-24 lg:py-32">
        <Reveal>
          <p className="text-muted mb-4 text-xs tracking-[0.22em] uppercase">
            Selected Work
          </p>
          <h1 className="text-[clamp(2.5rem,7vw,5rem)] font-light tracking-[0.08em] uppercase">
            Projects
          </h1>
          <p className="text-muted mt-6 max-w-xl leading-relaxed">
            Five projects spanning game, desktop, web, mobile, and AI. Tap any one
            for the full write-up.
          </p>
        </Reveal>

        <div className="mt-20 flex flex-col gap-24 lg:gap-32">
          {projects.map((p, i) => (
            <ProjectIndexCard key={p.id} project={p} index={i} />
          ))}
        </div>
      </section>
    </main>
  );
}
