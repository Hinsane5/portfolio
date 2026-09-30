"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { projects } from "@/content/projects";
import { ProjectImage } from "@/components/projects/ProjectImage";
import { ProjectDetailDialog } from "@/components/projects/ProjectDetailDialog";
import { useReducedMotion } from "@/lib/hooks/useReducedMotion";

type ScrollDirection = "up" | "down";

const clamp = (value: number, min: number, max: number) =>
  Math.min(max, Math.max(min, value));

/**
 * A naturally scrollable runway with a sticky stage. Project artwork is the
 * 3D material: CSS perspective arranges the real screenshots into a helix, and
 * page scroll moves the helix through the selected work without intercepting
 * wheel or touch input.
 */
export function ProjectsPreview() {
  const runwayRef = useRef<HTMLElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const previousScrollY = useRef(0);
  const directionRef = useRef<ScrollDirection>("down");
  const [progress, setProgress] = useState(0);
  const [direction, setDirection] = useState<ScrollDirection>("down");
  const [stageWidth, setStageWidth] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    const runway = runwayRef.current;
    if (!runway) return;

    previousScrollY.current = window.scrollY;
    let frame = 0;

    const update = () => {
      if (frame) cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const scrollY = window.scrollY;
        const delta = scrollY - previousScrollY.current;
        if (Math.abs(delta) > 1) {
          const nextDirection = delta > 0 ? "down" : "up";
          if (directionRef.current !== nextDirection) {
            directionRef.current = nextDirection;
            setDirection(nextDirection);
          }
        }
        previousScrollY.current = scrollY;

        const start = runway.getBoundingClientRect().top + scrollY;
        const travel = Math.max(1, runway.offsetHeight - window.innerHeight);
        setProgress(clamp((scrollY - start) / travel, 0, 1));
      });
    };

    const resizeObserver = new ResizeObserver(update);
    resizeObserver.observe(runway);
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    update();

    return () => {
      if (frame) cancelAnimationFrame(frame);
      resizeObserver.disconnect();
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;
    const measure = () => setStageWidth(stage.getBoundingClientRect().width);
    const observer = new ResizeObserver(measure);
    observer.observe(stage);
    measure();
    return () => observer.disconnect();
  }, []);

  const lastIndex = projects.length - 1;
  const position = progress * lastIndex;
  const activeIndex = clamp(Math.round(position), 0, lastIndex);
  const activeProject = projects[activeIndex];
  const cardRadius = Math.min(320, stageWidth * 0.27);
  const cardStep = Math.min(142, Math.max(104, stageWidth * 0.115));
  const directionRotation = direction === "down" ? -0.45 : 0.45;

  const goToProject = (index: number) => {
    const runway = runwayRef.current;
    if (!runway) return;
    const start = runway.getBoundingClientRect().top + window.scrollY;
    const travel = Math.max(1, runway.offsetHeight - window.innerHeight);
    const target = start + (index / lastIndex) * travel;
    window.scrollTo({
      top: target,
      behavior: reducedMotion ? "auto" : "smooth",
    });
  };

  return (
    <section
      id="projects"
      ref={runwayRef}
      aria-label="Projects"
      className="relative isolate"
      style={{ height: `${projects.length * 100}svh` }}
    >
      <div
        ref={stageRef}
        className="bg-bg sticky top-0 h-svh min-h-[34rem] overflow-hidden"
        style={{ perspective: "1400px" }}
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.13]"
          style={{
            backgroundImage:
              "linear-gradient(var(--hairline) 1px, transparent 1px), linear-gradient(90deg, var(--hairline) 1px, transparent 1px)",
            backgroundSize: "52px 52px",
            maskImage:
              "radial-gradient(ellipse at center, #000 5%, transparent 78%)",
          }}
        />

        <div className="relative z-10 flex h-full flex-col justify-between px-6 pt-24 pb-7 sm:px-12 sm:pt-28 sm:pb-10 lg:px-20 lg:pt-12">
          <header className="relative z-20 flex items-start justify-between gap-4">
            <div>
              <p className="text-muted text-[0.65rem] tracking-[0.22em] uppercase sm:text-xs">
                Selected work · 2025—26
              </p>
              <h2 className="mt-2 text-2xl font-light tracking-[0.1em] uppercase sm:text-3xl">
                Projects
              </h2>
            </div>
            <p className="text-muted pt-1 text-right text-xs tracking-[0.14em] uppercase sm:text-sm">
              Scroll to explore
              <span className="mt-1 block tabular-nums" aria-hidden="true">
                {String(activeIndex + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}
              </span>
            </p>
          </header>

          <div
            aria-label="Project artwork spiral"
            className="absolute inset-0 overflow-hidden"
            style={{ perspective: "1400px", transformStyle: "preserve-3d" }}
          >
            <div
              className="absolute inset-0"
              style={{
                transform: `translate3d(0, ${progress * 46}px, 0) rotateZ(${directionRotation}deg)`,
                transformStyle: "preserve-3d",
                transition: reducedMotion ? "none" : "transform 500ms ease-out",
              }}
            >
              {projects.map((project, index) => {
                const relative = index - position;
                const angle = relative * 1.28;
                const x = Math.sin(angle) * cardRadius;
                const y = -relative * cardStep + Math.sin(angle * 0.5) * 12;
                const z =
                  -(1 - Math.cos(angle)) * cardRadius * 0.58 -
                  Math.abs(relative) * 34;
                const rotateY = -Math.sin(angle) * 19 - relative * 3;
                const rotateZ = relative * -3.2;
                const scale = Math.max(0.62, 1 - Math.abs(relative) * 0.12);
                const opacity = clamp(1 - Math.abs(relative) * 0.32, 0, 1);
                const visible = Math.abs(relative) < 2.8;

                return (
                  <button
                    key={project.id}
                    type="button"
                    aria-label={`Open ${project.title} project details`}
                    aria-hidden={!visible}
                    tabIndex={visible ? 0 : -1}
                    onClick={() => setSelectedIndex(index)}
                    className="absolute top-[46%] left-1/2 w-[min(82vw,34rem)] overflow-hidden rounded-md border border-hairline bg-surface text-left shadow-[0_28px_90px_rgba(0,0,0,0.4)] outline-none transition-[filter,border-color] duration-300 hover:border-text/50 hover:brightness-110 focus-visible:z-50 focus-visible:border-text sm:w-[min(48vw,34rem)]"
                    style={{
                      transform: `translate3d(calc(-50% + ${x}px), calc(-50% + ${y}px), ${z}px) rotateY(${rotateY}deg) rotateZ(${rotateZ}deg) scale(${scale})`,
                      transformStyle: "preserve-3d",
                      zIndex: Math.round(100 - Math.abs(relative) * 12),
                      opacity,
                      pointerEvents: visible ? "auto" : "none",
                      transitionDuration: reducedMotion ? "0ms" : "620ms",
                      transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)",
                    }}
                  >
                    <ProjectImage
                      project={project}
                      priority={index < 2}
                      className="aspect-[16/10] rounded-none border-b border-hairline"
                    />
                    <span className="flex items-baseline justify-between gap-4 px-4 py-3 sm:px-5 sm:py-4">
                      <span className="min-w-0">
                        <span className="text-muted block text-[0.58rem] tracking-[0.18em] uppercase">
                          {project.number} · {project.year}
                        </span>
                        <span className="mt-1 block truncate text-sm font-medium tracking-wide sm:text-base">
                          {project.title}
                        </span>
                      </span>
                      <ArrowUpRight
                        aria-hidden="true"
                        className="text-muted h-4 w-4 shrink-0"
                        strokeWidth={1.5}
                      />
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-44 bg-gradient-to-t from-bg via-bg/85 to-transparent sm:h-52"
          />

          <footer className="relative z-20 flex items-end justify-between gap-4">
            <div className="min-w-0">
              <p className="text-muted truncate text-[0.62rem] tracking-[0.16em] uppercase sm:text-xs">
                {activeProject.type}
              </p>
              <p className="mt-1 max-w-[54vw] truncate text-base font-light tracking-wide sm:max-w-md sm:text-xl">
                {activeProject.tagline}
              </p>
              <div className="mt-4 flex items-center gap-2 sm:gap-3">
                <button
                  type="button"
                  aria-label="Previous project"
                  onClick={() => goToProject(Math.max(0, activeIndex - 1))}
                  disabled={activeIndex === 0}
                  className="border-hairline hover:border-text disabled:text-muted/40 inline-flex h-9 w-9 items-center justify-center rounded-full border transition-colors disabled:cursor-not-allowed"
                >
                  <ArrowLeft className="h-4 w-4" strokeWidth={1.5} />
                </button>
                <button
                  type="button"
                  aria-label="Next project"
                  onClick={() => goToProject(Math.min(lastIndex, activeIndex + 1))}
                  disabled={activeIndex === lastIndex}
                  className="border-hairline hover:border-text disabled:text-muted/40 inline-flex h-9 w-9 items-center justify-center rounded-full border transition-colors disabled:cursor-not-allowed"
                >
                  <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
                </button>
                <Link
                  href="/projects"
                  className="border-hairline hover:border-text inline-flex min-h-9 items-center gap-2 rounded-full border px-4 text-xs tracking-wide transition-colors sm:px-5 sm:text-sm"
                >
                  View all projects
                  <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={1.5} />
                </Link>
              </div>
            </div>

            <div className="absolute right-6 top-1/2 z-30 -translate-y-1/2 sm:right-10 lg:right-16">
              <div
                role="progressbar"
                aria-label="Projects scroll progress"
                aria-valuemin={0}
                aria-valuemax={100}
                aria-valuenow={Math.round(progress * 100)}
                className="flex flex-col items-center gap-2"
              >
                <span className="text-muted text-[0.58rem] tabular-nums">
                  {String(activeIndex + 1).padStart(2, "0")}
                </span>
                <span className="bg-hairline relative h-28 w-px overflow-hidden sm:h-36">
                  <span
                    className="bg-text absolute top-0 left-0 w-full origin-top"
                    style={{
                      height: "100%",
                      transform: `scaleY(${progress})`,
                      transition: reducedMotion ? "none" : "transform 180ms linear",
                    }}
                  />
                </span>
                <span className="text-muted text-[0.58rem] tabular-nums">
                  {String(projects.length).padStart(2, "0")}
                </span>
              </div>
            </div>
          </footer>
          <p className="sr-only" aria-live="polite" aria-atomic="true">
            Project {activeIndex + 1} of {projects.length}: {activeProject.title}
          </p>
        </div>
      </div>

      <ProjectDetailDialog
        open={selectedIndex !== null}
        projectIndex={selectedIndex ?? activeIndex}
        onChange={setSelectedIndex}
        onClose={() => setSelectedIndex(null)}
      />
    </section>
  );
}
