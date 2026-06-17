"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useReducedMotion } from "@/lib/hooks/useReducedMotion";

type ParallaxProps = {
  children: React.ReactNode;
  className?: string;
  /** Vertical travel in px across the scroll range. */
  distance?: number;
};

/**
 * Scroll-linked vertical parallax. The child should sit inside an
 * `overflow-hidden` frame that's slightly smaller than the child so the
 * movement doesn't reveal gaps. No-ops under reduced-motion.
 */
export function Parallax({ children, className, distance = 50 }: ParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [distance, -distance]);

  if (reduced) {
    return (
      <div ref={ref} className={className}>
        {children}
      </div>
    );
  }

  return (
    <motion.div ref={ref} className={className} style={{ y }}>
      {children}
    </motion.div>
  );
}
