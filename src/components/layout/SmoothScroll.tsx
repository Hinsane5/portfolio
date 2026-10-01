"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import Lenis from "lenis";
import { useReducedMotion } from "@/lib/hooks/useReducedMotion";

/**
 * Lenis smooth scroll, mounted once at the root. Disabled under
 * prefers-reduced-motion, and on /projects so the index and detail dialog keep
 * native scroll and focus behavior.
 */
export function SmoothScroll() {
  const reduced = useReducedMotion();
  const pathname = usePathname();

  useEffect(() => {
    if (reduced || pathname.startsWith("/projects")) return;

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });
    const syncDialogScroll = () => {
      if (document.querySelector("dialog[open]")) lenis.stop();
      else lenis.start();
    };
    const dialogObserver = new MutationObserver(syncDialogScroll);
    dialogObserver.observe(document.body, {
      attributes: true,
      attributeFilter: ["open"],
      subtree: true,
    });
    syncDialogScroll();

    // Let anchor clicks (#section) drive Lenis for smooth in-page nav.
    const onAnchorClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest('a[href^="#"]');
      if (!target) return;
      const id = target.getAttribute("href")!.slice(1);
      const el = document.getElementById(id);
      if (el) {
        e.preventDefault();
        lenis.scrollTo(el, { offset: 0 });
      }
    };
    document.addEventListener("click", onAnchorClick);

    let raf = 0;
    const loop = (time: number) => {
      lenis.raf(time);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(raf);
      document.removeEventListener("click", onAnchorClick);
      dialogObserver.disconnect();
      lenis.destroy();
    };
  }, [reduced, pathname]);

  return null;
}
