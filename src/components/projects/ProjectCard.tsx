import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/types";
import { Reveal } from "@/components/ui/Reveal";
import { TechChip } from "@/components/ui/TechChip";
import { ProjectImage } from "@/components/projects/ProjectImage";
import { cn } from "@/lib/utils";

/** A label pill (GROUP PROJECT, IN PROGRESS). */
function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="border-text/40 text-text rounded-full border px-2.5 py-1 text-[0.6rem] tracking-[0.18em] uppercase">
      {children}
    </span>
  );
}

export function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const imageRight = index % 2 === 1; // alternate sides on desktop

  return (
    <article className="grid items-center gap-8 lg:grid-cols-2 lg:gap-16">
      <Reveal className={cn(imageRight && "lg:order-2")}>
        <ProjectImage project={project} />
      </Reveal>

      <div className={cn(imageRight && "lg:order-1")}>
        <Reveal>
          <div className="mb-4 flex flex-wrap items-center gap-3">
            <span className="text-muted text-sm tracking-[0.2em]">
              {project.number}
            </span>
            {project.group && <Tag>Group Project</Tag>}
            {project.inProgress && <Tag>In Progress</Tag>}
          </div>

          <h3 className="text-3xl font-light tracking-wide sm:text-4xl">
            {project.title}
          </h3>
          <p className="text-muted mt-2 text-lg">{project.tagline}</p>

          <div className="text-muted mt-4 flex flex-wrap gap-x-2 gap-y-1 text-xs tracking-wide">
            <span>{project.year}</span>
            <span aria-hidden>·</span>
            <span>{project.role}</span>
            <span aria-hidden>·</span>
            <span>{project.type}</span>
          </div>

          {project.group && (
            <p className="text-muted mt-2 text-xs tracking-wide">
              {project.group.team} — my role: {project.group.role}
            </p>
          )}

          <div className="mt-5 flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <TechChip key={t}>{t}</TechChip>
            ))}
          </div>

          <p className="mt-6 leading-relaxed">{project.description}</p>

          <div className="mt-6 space-y-4">
            <div>
              <h4 className="text-muted text-[0.7rem] tracking-[0.2em] uppercase">
                Impact
              </h4>
              <p className="text-muted mt-1.5 text-sm leading-relaxed">
                {project.impact}
              </p>
            </div>
            <div>
              <h4 className="text-muted text-[0.7rem] tracking-[0.2em] uppercase">
                {project.inProgress ? "What I'm learning" : "What I learned"}
              </h4>
              <p className="text-muted mt-1.5 text-sm leading-relaxed">
                {project.learned}
              </p>
            </div>
          </div>

          <a
            href={project.repo}
            target="_blank"
            rel="noopener noreferrer"
            className="border-hairline hover:border-text mt-7 inline-flex items-center gap-2 rounded-full border px-5 py-2.5 text-sm tracking-wide transition-colors"
          >
            View Repository
            <ArrowUpRight className="h-4 w-4" strokeWidth={1.5} />
          </a>
        </Reveal>
      </div>
    </article>
  );
}
