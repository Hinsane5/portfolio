"use client";

import { motion, useScroll, useSpring } from "framer-motion";

/** Thin progress bar pinned to the top, tracking scroll position. */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 200,
    damping: 40,
    restDelta: 0.001,
  });

  return (
    <motion.div
      aria-hidden
      className="bg-text fixed top-0 right-0 left-0 z-[90] h-px origin-left"
      style={{ scaleX }}
    />
  );
}
