import Image from "next/image";
import type { Project } from "@/types";
import { cn } from "@/lib/utils";

/**
 * Project visual: a frame sized to a consistent aspect ratio. Real images are
 * `object-contain` so nothing gets cropped (screenshots vary from 16:9 to
 * portrait phone). Falls back to a sized placeholder when no image exists.
 */
export function ProjectImage({
  project,
  className,
  priority,
}: {
  project: Project;
  className?: string;
  priority?: boolean;
}) {
  const src = project.images[0];

  return (
    <div
      className={cn(
        "bg-surface relative aspect-[16/10] overflow-hidden rounded-sm",
        className,
      )}
    >
      {src ? (
        <Image
          src={src}
          alt={`${project.title} — ${project.tagline}`}
          fill
          priority={priority}
          sizes="(max-width: 1024px) 100vw, 55vw"
          className="object-contain p-2 sm:p-4"
        />
      ) : (
        <>
          <div className="flex h-full w-full items-center justify-center">
            <span className="text-muted/40 text-7xl font-light tracking-[0.1em] sm:text-8xl">
              {project.number}
            </span>
          </div>
          <span className="text-muted/50 absolute bottom-4 left-4 text-[0.65rem] tracking-[0.18em] uppercase">
            Visual coming soon
          </span>
        </>
      )}
    </div>
  );
}
