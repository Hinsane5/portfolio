import { projects } from "@/content/projects";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

/**
 * Phase 1 shell: a numbered index of the five projects. Rich project cards
 * (images, tech chips, impact, parallax) land in Phase 3.
 */
export function Projects() {
  return (
    <section id="projects" className="px-6 py-24 sm:px-12 lg:px-24 lg:py-32">
      <SectionHeading>Projects</SectionHeading>
      <ul>
        {projects.map((p, i) => (
          <Reveal as="li" key={p.id} delay={i * 0.04}>
            <a
              href={p.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="group border-hairline flex flex-col gap-1 border-t py-8 transition-colors sm:flex-row sm:items-baseline sm:gap-8"
            >
              <span className="text-muted text-sm tracking-widest">
                {p.number}
              </span>
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
              <span className="text-muted text-sm tracking-wide">{p.year}</span>
            </a>
          </Reveal>
        ))}
      </ul>
    </section>
  );
}
