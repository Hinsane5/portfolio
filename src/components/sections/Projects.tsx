import { projects } from "@/content/projects";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectCard } from "@/components/projects/ProjectCard";

export function Projects() {
  return (
    <section id="projects" className="px-6 py-24 sm:px-12 lg:px-24 lg:py-32">
      <SectionHeading>Projects</SectionHeading>
      <div className="flex flex-col gap-24 lg:gap-36">
        {projects.map((p, i) => (
          <ProjectCard key={p.id} project={p} index={i} />
        ))}
      </div>
    </section>
  );
}
