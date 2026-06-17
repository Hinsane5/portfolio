"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { sections, type SectionId } from "@/lib/sections";

/**
 * Tracks which section is currently in view via IntersectionObserver, for
 * active-link highlighting. Re-attaches on route change so the scroll-spy keeps
 * working after navigating away from the home page and back.
 */
export function useActiveSection(): SectionId {
  const [active, setActive] = useState<SectionId>(sections[0].id);
  const pathname = usePathname();

  useEffect(() => {
    // Section anchors only exist on the home page.
    if (pathname !== "/") return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id as SectionId);
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: [0, 0.25, 0.5, 1] },
    );

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [pathname]);

  return active;
}
