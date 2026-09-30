"use client";

import { useEffect, useId, useRef } from "react";
import { ArrowLeft, ArrowRight, ArrowUpRight, X } from "lucide-react";
import { projects } from "@/content/projects";
import { ProjectImage } from "@/components/projects/ProjectImage";
import { TechChip } from "@/components/ui/TechChip";

export function ProjectDetailDialog({
  open,
  projectIndex,
  onChange,
  onClose,
}: {
  open: boolean;
  projectIndex: number;
  onChange: (index: number) => void;
  onClose: () => void;
}) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const titleId = useId();
  const project = projects[projectIndex] ?? projects[0];

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (open && !dialog.open) dialog.showModal();
    if (!open && dialog.open) dialog.close();
  }, [open]);

  const changeProject = (direction: -1 | 1) => {
    onChange((projectIndex + direction + projects.length) % projects.length);
  };

  return (
    <dialog
      ref={dialogRef}
      aria-labelledby={titleId}
      className="fixed inset-0 m-0 h-full max-h-none w-full max-w-none overflow-hidden border-0 bg-transparent p-0 text-text backdrop:bg-black/80 backdrop:backdrop-blur-sm"
      onClose={onClose}
      onCancel={(event) => {
        event.preventDefault();
        onClose();
      }}
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
      onKeyDown={(event) => {
        if (event.key === "ArrowLeft") {
          event.preventDefault();
          changeProject(-1);
        } else if (event.key === "ArrowRight") {
          event.preventDefault();
          changeProject(1);
        }
      }}
    >
      <div className="flex min-h-full items-center justify-center p-3 sm:p-6">
        <article className="bg-bg border-hairline relative max-h-[calc(100svh-1.5rem)] w-full max-w-6xl overflow-y-auto rounded-sm border shadow-2xl sm:max-h-[calc(100svh-3rem)]">
          <div className="bg-bg/90 sticky top-0 z-20 flex items-center justify-between border-b border-hairline px-4 py-3 backdrop-blur-md sm:px-7 sm:py-4">
            <div className="flex items-center gap-3">
              <button
                type="button"
                aria-label="Previous project"
                onClick={() => changeProject(-1)}
                className="text-muted hover:text-text inline-flex h-9 w-9 items-center justify-center rounded-full transition-colors"
              >
                <ArrowLeft className="h-4 w-4" strokeWidth={1.5} />
              </button>
              <span className="text-muted text-xs tracking-[0.16em] tabular-nums">
                {project.number} / {String(projects.length).padStart(2, "0")}
              </span>
              <button
                type="button"
                aria-label="Next project"
                onClick={() => changeProject(1)}
                className="text-muted hover:text-text inline-flex h-9 w-9 items-center justify-center rounded-full transition-colors"
              >
                <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
              </button>
            </div>
            <button
              type="button"
              aria-label="Close project details"
              onClick={onClose}
              className="border-hairline hover:border-text inline-flex h-9 w-9 items-center justify-center rounded-full border transition-colors"
            >
              <X className="h-4 w-4" strokeWidth={1.5} />
            </button>
          </div>

          <div className="grid gap-7 p-4 sm:gap-10 sm:p-7 lg:grid-cols-[1.05fr_0.95fr] lg:p-10">
            <div>
              <ProjectImage project={project} priority />
              <div className="mt-5 flex flex-wrap gap-2">
                {project.tech.map((technology) => (
                  <TechChip key={technology}>{technology}</TechChip>
                ))}
              </div>
            </div>

            <div className="flex flex-col">
              <div className="flex flex-wrap items-center gap-2 text-[0.62rem] tracking-[0.16em] uppercase">
                <span className="text-muted">{project.year}</span>
                {project.group && (
                  <span className="border-hairline rounded-full border px-2.5 py-1">
                    Group project
                  </span>
                )}
                {project.inProgress && (
                  <span className="border-hairline rounded-full border px-2.5 py-1">
                    In progress
                  </span>
                )}
              </div>
              <h2
                id={titleId}
                className="mt-4 text-[clamp(2rem,5vw,3.5rem)] leading-tight font-light tracking-[0.05em] uppercase"
              >
                {project.title}
              </h2>
              <p className="text-muted mt-2 text-base sm:text-lg">{project.tagline}</p>
              <p className="text-muted mt-4 text-xs leading-relaxed tracking-wide sm:text-sm">
                {project.role} <span aria-hidden>·</span> {project.type}
              </p>
              {project.group && (
                <p className="text-muted mt-2 text-xs leading-relaxed tracking-wide sm:text-sm">
                  {project.group.team} — my role: {project.group.role}
                </p>
              )}

              <div className="mt-7 space-y-6 sm:mt-9">
                <section>
                  <h3 className="text-muted text-[0.62rem] tracking-[0.18em] uppercase">
                    Overview
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed sm:text-[0.95rem]">
                    {project.description}
                  </p>
                </section>
                <section>
                  <h3 className="text-muted text-[0.62rem] tracking-[0.18em] uppercase">
                    Impact
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed sm:text-[0.95rem]">
                    {project.impact}
                  </p>
                </section>
                <section>
                  <h3 className="text-muted text-[0.62rem] tracking-[0.18em] uppercase">
                    {project.inProgress ? "What I'm learning" : "What I learned"}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed sm:text-[0.95rem]">
                    {project.learned}
                  </p>
                </section>
              </div>

              <a
                href={project.repo}
                target="_blank"
                rel="noopener noreferrer"
                className="border-hairline hover:border-text mt-8 inline-flex w-fit items-center gap-2 rounded-full border px-5 py-2.5 text-sm tracking-wide transition-colors"
              >
                View repository
                <ArrowUpRight className="h-4 w-4" strokeWidth={1.5} />
              </a>
            </div>
          </div>
        </article>
      </div>
    </dialog>
  );
}
