import Image from "next/image";
import { Parallax } from "@/components/ui/Parallax";
import type { Project } from "@/types";

/**
 * Project visual: an overflow-hidden frame sized to the final image's aspect
 * ratio, with a parallax layer inside. Renders the first image when present,
 * otherwise a tasteful sized placeholder that can be dropped into later.
 */
export function ProjectImage({ project }: { project: Project }) {
  const src = project.images[0];

  return (
    <div className="bg-surface relative aspect-[4/3] overflow-hidden rounded-sm">
      <Parallax className="absolute inset-[-8%]" distance={40}>
        {src ? (
          <Image
            src={src}
            alt={`${project.title} — ${project.tagline}`}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center">
            <span className="text-muted/40 text-7xl font-light tracking-[0.1em] sm:text-8xl">
              {project.number}
            </span>
          </div>
        )}
      </Parallax>

      {!src && (
        <span className="text-muted/50 absolute bottom-4 left-4 text-[0.65rem] tracking-[0.18em] uppercase">
          Visual coming soon
        </span>
      )}
    </div>
  );
}
