"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/content/projects";
import { profile } from "@/content/profile";
import { ProjectImage } from "@/components/projects/ProjectImage";
import { useReducedMotion } from "@/lib/hooks/useReducedMotion";
import { cn } from "@/lib/utils";

const handle = `/${profile.github.split("/").pop()}`;
const total = String(projects.length).padStart(2, "0");

/**
 * Kento-style works showcase: images scroll on the left while a sticky panel on
 * the right shows the in-view project's number, title, type, and description.
 * A clickable numbered index lets visitors jump straight to any project so the
 * page never forces a long linear scroll. Falls back to stacked cards on mobile.
 */
export function ProjectsShowcase() {
  const [active, setActive] = useState(0);
  const reduced = useReducedMotion();
  const shotRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Whichever image is crossing the viewport's vertical center is "active".
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setActive(Number((e.target as HTMLElement).dataset.index));
          }
        });
      },
      { rootMargin: "-50% 0px -50% 0px" },
    );
    shotRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const jumpTo = (i: number) => {
    shotRefs.current[i]?.scrollIntoView({
      behavior: reduced ? "auto" : "smooth",
      block: "center",
    });
  };

  const current = projects[active];

  return (
    <div className="relative grid lg:grid-cols-[1fr_0.82fr] lg:gap-16">
      {/* Left: scrolling images */}
      <div className="flex flex-col gap-8 lg:gap-0">
        {projects.map((p, i) => (
          <div
            key={p.id}
            ref={(el) => {
              shotRefs.current[i] = el;
            }}
            data-index={i}
            className="flex flex-col justify-center lg:min-h-dvh lg:py-16"
          >
            <Link href={`/projects/${p.id}`} aria-label={`${p.title} — view project`}>
              <ProjectImage project={p} priority={i === 0} />
            </Link>

            {/* Mobile-only inline text (no sticky panel on small screens) */}
            <div className="mt-6 lg:hidden">
              <p className="text-muted text-xs tracking-[0.2em]">
                [ {String(i + 1).padStart(2, "0")} / {total} ]
              </p>
              <h2 className="mt-2 text-2xl font-light tracking-wide uppercase">
                {p.title}
              </h2>
              <p className="text-muted mt-1 text-sm">{p.type}</p>
              <p className="text-muted mt-3 max-w-md leading-relaxed">
                {p.tagline}
              </p>
              <Link
                href={`/projects/${p.id}`}
                className="text-muted hover:text-text mt-4 inline-flex items-center gap-2 text-sm tracking-wide transition-colors"
              >
                View project <ArrowUpRight className="h-4 w-4" strokeWidth={1.5} />
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Right: sticky text panel (desktop) */}
      <div className="hidden lg:block">
        <div className="sticky top-0 flex h-dvh flex-col justify-center">
          <div className="mb-10 flex items-baseline justify-between border-b pb-4 border-hairline">
            <h1 className="text-2xl font-light tracking-[0.18em] uppercase">
              Works
            </h1>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-text text-sm tracking-wide transition-colors"
            >
              {handle}
            </a>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={reduced ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduced ? undefined : { opacity: 0, y: -16 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="text-muted text-sm tracking-[0.22em]">
                [ {String(active + 1).padStart(2, "0")} / {total} ]
              </p>
              <h2 className="mt-4 text-3xl font-light tracking-wide uppercase xl:text-4xl">
                {current.title}
              </h2>
              <p className="text-muted mt-2">{current.type}</p>
              <p className="mt-5 max-w-md leading-relaxed">{current.tagline}</p>
              <Link
                href={`/projects/${current.id}`}
                className="border-hairline hover:border-text mt-7 inline-flex items-center gap-2 rounded-full border px-5 py-2.5 text-sm tracking-wide transition-colors"
              >
                View project
                <ArrowUpRight className="h-4 w-4" strokeWidth={1.5} />
              </Link>
            </motion.div>
          </AnimatePresence>

          {/* Quick-jump index — jump to any project, no long scroll required */}
          <nav aria-label="Project index" className="mt-12 flex flex-col gap-1">
            {projects.map((p, i) => (
              <button
                key={p.id}
                type="button"
                onClick={() => jumpTo(i)}
                aria-current={active === i ? "true" : undefined}
                className={cn(
                  "group flex items-center gap-3 py-1 text-left text-xs tracking-[0.12em] uppercase transition-colors",
                  active === i ? "text-text" : "text-muted hover:text-text",
                )}
              >
                <span className="tabular-nums">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span
                  className={cn(
                    "h-px bg-current transition-all",
                    active === i ? "w-8" : "w-4 opacity-50",
                  )}
                />
                <span className="truncate">{p.title}</span>
              </button>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
}
