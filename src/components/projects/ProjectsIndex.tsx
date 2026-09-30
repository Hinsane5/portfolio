"use client";

import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/content/projects";
import { ProjectImage } from "@/components/projects/ProjectImage";
import { ProjectDetailDialog } from "@/components/projects/ProjectDetailDialog";

export function ProjectsIndex() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  return (
    <>
      <main className="mx-auto max-w-[92rem] px-6 pt-28 pb-20 sm:px-10 lg:px-16 lg:pt-32">
        <header className="border-b border-hairline pb-8 sm:flex sm:items-end sm:justify-between sm:gap-8">
          <div>
            <p className="text-muted text-xs tracking-[0.2em] uppercase">
              Selected work · {projects.length} projects
            </p>
            <h1 className="mt-3 text-4xl font-light tracking-[0.08em] uppercase sm:text-5xl">
              All projects
            </h1>
          </div>
          <p className="text-muted mt-4 max-w-md text-sm leading-relaxed sm:mt-0 sm:text-right">
            A collection of work across games, desktop, web, mobile, and AI.
            Select a project to see the full story.
          </p>
        </header>

        <ul className="mt-8 grid gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-12 lg:gap-x-10 lg:gap-y-16">
          {projects.map((project, index) => (
            <li key={project.id}>
              <button
                type="button"
                onClick={() => setSelectedIndex(index)}
                aria-label={`Open ${project.title} project details`}
                className="group block w-full text-left"
              >
                <span className="border-hairline group-hover:border-text/60 relative block overflow-hidden rounded-sm border transition-colors">
                  <ProjectImage
                    project={project}
                    priority={index < 2}
                    className="aspect-[16/10] rounded-none transition-transform duration-500 group-hover:scale-[1.015]"
                  />
                  <span className="bg-bg/80 text-text absolute top-3 left-3 rounded-full px-3 py-1 text-[0.58rem] tracking-[0.16em] uppercase backdrop-blur-sm">
                    {project.number}
                  </span>
                </span>
                <span className="mt-4 flex items-start justify-between gap-4">
                  <span>
                    <span className="flex flex-wrap items-center gap-x-3 gap-y-1">
                      <span className="text-xl font-light tracking-wide uppercase sm:text-2xl">
                        {project.title}
                      </span>
                      {project.group && (
                        <span className="text-muted text-[0.58rem] tracking-[0.15em] uppercase">
                          Group
                        </span>
                      )}
                      {project.inProgress && (
                        <span className="text-muted text-[0.58rem] tracking-[0.15em] uppercase">
                          In progress
                        </span>
                      )}
                    </span>
                    <span className="text-muted mt-2 block max-w-xl text-sm leading-relaxed">
                      {project.tagline}
                    </span>
                    <span className="text-muted mt-2 block text-[0.62rem] tracking-[0.15em] uppercase">
                      {project.year} · {project.type}
                    </span>
                  </span>
                  <ArrowUpRight
                    aria-hidden="true"
                    className="text-muted group-hover:text-text mt-1 h-5 w-5 shrink-0 transition-colors"
                    strokeWidth={1.4}
                  />
                </span>
              </button>
            </li>
          ))}
        </ul>
      </main>

      <ProjectDetailDialog
        open={selectedIndex !== null}
        projectIndex={selectedIndex ?? 0}
        onChange={setSelectedIndex}
        onClose={() => setSelectedIndex(null)}
      />
    </>
  );
}
