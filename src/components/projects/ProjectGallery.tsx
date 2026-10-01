"use client";

import { useState } from "react";
import Image from "next/image";
import type { Project } from "@/types";
import { ProjectImage } from "@/components/projects/ProjectImage";

export function ProjectGallery({
  project,
  priority,
}: {
  project: Project;
  priority?: boolean;
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const images = project.images;

  if (images.length < 2) {
    return <ProjectImage project={project} priority={priority} />;
  }
  const activeCaption =
    project.imageCaptions?.[activeIndex] ?? `Screenshot ${activeIndex + 1}`;

  return (
    <div role="group" aria-label={`${project.title} images`}>
      <div className="bg-surface relative aspect-[16/10] overflow-hidden rounded-sm">
        <Image
          src={images[activeIndex]}
          alt={`${project.title}: ${activeCaption}`}
          fill
          priority={priority}
          sizes="(max-width: 1024px) 100vw, 55vw"
          className="object-contain p-2 sm:p-4"
        />
      </div>
      <p className="text-muted mt-2 text-xs tracking-wide">{activeCaption}</p>

      <div className="mt-3 grid grid-cols-3 gap-2">
        {images.map((src, index) => {
          const caption =
            project.imageCaptions?.[index] ?? `Screenshot ${index + 1}`;

          return (
            <button
              key={src}
              type="button"
              aria-label={`Show ${caption}`}
              aria-pressed={activeIndex === index}
              onClick={() => setActiveIndex(index)}
              className={`bg-surface relative aspect-[16/10] overflow-hidden rounded-sm border transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-text ${
                activeIndex === index
                  ? "border-text"
                  : "border-hairline hover:border-text/60"
              }`}
            >
              <Image
                src={src}
                alt=""
                fill
                sizes="(max-width: 640px) 30vw, 18vw"
                className="object-contain p-1"
              />
            </button>
          );
        })}
      </div>
    </div>
  );
}
