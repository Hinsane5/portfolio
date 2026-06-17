"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUp } from "lucide-react";

/** Floating back-to-top button, appears after scrolling down a screen. */
export function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight);
    // Defer the initial check out of the effect body (avoids a sync setState).
    const id = requestAnimationFrame(onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(id);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const scrollTop = () => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          type="button"
          onClick={scrollTop}
          aria-label="Back to top"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 12 }}
          className="border-hairline bg-bg/80 text-text hover:border-text/40 fixed right-6 bottom-6 z-40 flex h-11 w-11 items-center justify-center rounded-full border backdrop-blur-sm transition-colors sm:right-8 sm:bottom-8"
        >
          <ArrowUp className="h-4 w-4" strokeWidth={1.5} />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
