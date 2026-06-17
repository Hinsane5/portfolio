"use client";

import { useEffect, useState } from "react";
import { sections, type SectionId } from "@/lib/sections";

/**
 * Tracks which section is currently in view via IntersectionObserver,
 * for active-link highlighting in the nav.
 */
export function useActiveSection(): SectionId {
  const [active, setActive] = useState<SectionId>(sections[0].id);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id as SectionId);
      },
      // A band across the middle of the viewport decides the "active" section.
      { rootMargin: "-45% 0px -45% 0px", threshold: [0, 0.25, 0.5, 1] },
    );

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return active;
}
