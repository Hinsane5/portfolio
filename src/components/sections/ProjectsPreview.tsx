import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/content/projects";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

/**
 * Compact projects index on the home page. One row per project, linking to its
 * detail page, plus a "View all" affordance. Keeps the home page short; the
 * full visual index lives at /projects.
 */
export function ProjectsPreview() {
  return (
    <section id="projects" className="px-6 py-24 sm:px-12 lg:px-24 lg:py-32">
      <SectionHeading>Projects</SectionHeading>

      <ul>
        {projects.map((p, i) => (
          <Reveal as="li" key={p.id} delay={i * 0.04}>
            <Link
              href={`/projects/${p.id}`}
              className="group border-hairline flex flex-col gap-1 border-t py-8 sm:flex-row sm:items-baseline sm:gap-8"
            >
              <span className="text-muted text-sm tracking-widest">{p.number}</span>
              <div className="flex-1">
                <div className="flex flex-wrap items-baseline gap-3">
                  <h3 className="group-hover:text-muted text-2xl font-light tracking-wide transition-colors sm:text-3xl">
                    {p.title}
                  </h3>
                  {p.group && (
                    <span className="text-muted text-[0.65rem] tracking-[0.18em] uppercase">
                      Group
                    </span>
                  )}
                  {p.inProgress && (
                    <span className="text-muted text-[0.65rem] tracking-[0.18em] uppercase">
                      In Progress
                    </span>
                  )}
                </div>
                <p className="text-muted mt-2 max-w-xl">{p.tagline}</p>
              </div>
              <span className="text-muted flex items-center gap-3 text-sm tracking-wide">
                {p.year}
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" strokeWidth={1.5} />
              </span>
            </Link>
          </Reveal>
        ))}
      </ul>

      <Reveal>
        <Link
          href="/projects"
          className="border-hairline hover:border-text mt-12 inline-flex items-center gap-2 rounded-full border px-6 py-2.5 text-sm tracking-wide transition-colors"
        >
          View all projects
          <ArrowUpRight className="h-4 w-4" strokeWidth={1.5} />
        </Link>
      </Reveal>
    </section>
  );
}
