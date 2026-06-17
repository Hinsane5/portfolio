import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/types";
import { Reveal } from "@/components/ui/Reveal";
import { TechChip } from "@/components/ui/TechChip";
import { ProjectImage } from "@/components/projects/ProjectImage";
import { cn } from "@/lib/utils";

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="border-text/40 text-text rounded-full border px-2.5 py-1 text-[0.6rem] tracking-[0.18em] uppercase">
      {children}
    </span>
  );
}

/** Works-style card for the /projects index. Whole card links to the detail page. */
export function ProjectIndexCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const imageRight = index % 2 === 1;

  return (
    <Reveal as="div">
      <Link
        href={`/projects/${project.id}`}
        className="group grid items-center gap-8 lg:grid-cols-2 lg:gap-16"
      >
        <div className={cn(imageRight && "lg:order-2")}>
          <ProjectImage project={project} />
        </div>

        <div className={cn(imageRight && "lg:order-1")}>
          <div className="mb-4 flex flex-wrap items-center gap-3">
            <span className="text-muted text-sm tracking-[0.2em]">
              {project.number}
            </span>
            {project.group && <Tag>Group Project</Tag>}
            {project.inProgress && <Tag>In Progress</Tag>}
          </div>

          <h3 className="group-hover:text-muted text-3xl font-light tracking-wide transition-colors sm:text-4xl">
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

          <div className="mt-5 flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <TechChip key={t}>{t}</TechChip>
            ))}
          </div>

          <span className="text-muted group-hover:text-text mt-7 inline-flex items-center gap-2 text-sm tracking-wide transition-colors">
            View project
            <ArrowUpRight
              className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              strokeWidth={1.5}
            />
          </span>
        </div>
      </Link>
    </Reveal>
  );
}
