import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/content/projects";
import { profile } from "@/content/profile";
import { ProjectImage } from "@/components/projects/ProjectImage";
import { TechChip } from "@/components/ui/TechChip";
import { Reveal } from "@/components/ui/Reveal";

type Params = { id: string };

export function generateStaticParams(): Params[] {
  return projects.map((p) => ({ id: p.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);
  if (!project) return {};
  return {
    title: `${project.title} — ${profile.name}`,
    description: project.tagline,
    openGraph: { title: project.title, description: project.tagline },
  };
}

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="border-text/40 text-text rounded-full border px-2.5 py-1 text-[0.6rem] tracking-[0.18em] uppercase">
      {children}
    </span>
  );
}

export default async function ProjectDetail({
  params,
}: {
  params: Promise<Params>;
}) {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);
  if (!project) notFound();

  return (
    <main>
      <article className="mx-auto max-w-4xl px-6 py-24 sm:px-12 lg:px-16 lg:py-32">
        <Reveal>
          <div className="mb-4 flex flex-wrap items-center gap-3">
            <span className="text-muted text-sm tracking-[0.2em]">
              {project.number}
            </span>
            {project.group && <Tag>Group Project</Tag>}
            {project.inProgress && <Tag>In Progress</Tag>}
          </div>

          <h1 className="text-[clamp(2.25rem,6vw,4rem)] font-light tracking-[0.06em] uppercase">
            {project.title}
          </h1>
          <p className="text-muted mt-3 text-lg sm:text-xl">{project.tagline}</p>

          <div className="text-muted mt-5 flex flex-wrap gap-x-3 gap-y-1 text-sm tracking-wide">
            <span>{project.year}</span>
            <span aria-hidden>·</span>
            <span>{project.role}</span>
            <span aria-hidden>·</span>
            <span>{project.type}</span>
          </div>
          {project.group && (
            <p className="text-muted mt-2 text-sm tracking-wide">
              {project.group.team} — my role: {project.group.role}
            </p>
          )}
        </Reveal>

        <Reveal>
          <div className="mt-12">
            <ProjectImage project={project} priority />
          </div>
        </Reveal>

        <Reveal>
          <div className="mt-8 flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <TechChip key={t}>{t}</TechChip>
            ))}
          </div>
        </Reveal>

        <Reveal>
          <p className="mt-10 text-lg leading-relaxed">{project.description}</p>
        </Reveal>

        <Reveal>
          <div className="mt-10 space-y-8">
            <div>
              <h2 className="text-muted text-xs tracking-[0.2em] uppercase">
                Impact
              </h2>
              <p className="mt-2 leading-relaxed">{project.impact}</p>
            </div>
            <div>
              <h2 className="text-muted text-xs tracking-[0.2em] uppercase">
                {project.inProgress ? "What I'm learning" : "What I learned"}
              </h2>
              <p className="mt-2 leading-relaxed">{project.learned}</p>
            </div>
          </div>
        </Reveal>

        <Reveal>
          <a
            href={project.repo}
            target="_blank"
            rel="noopener noreferrer"
            className="border-hairline hover:border-text mt-12 inline-flex items-center gap-2 rounded-full border px-6 py-3 text-sm tracking-wide transition-colors"
          >
            View Repository
            <ArrowUpRight className="h-4 w-4" strokeWidth={1.5} />
          </a>
        </Reveal>
      </article>
    </main>
  );
}
