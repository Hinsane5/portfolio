"use client";

import { motion } from "framer-motion";
import { useReducedMotion } from "@/lib/hooks/useReducedMotion";

type TextRevealProps = {
  lines: string[];
  className?: string;
  delay?: number;
  /** "mount" animates immediately (for above-the-fold); "inView" on scroll. */
  trigger?: "mount" | "inView";
};

/**
 * Line-by-line mask reveal: each line slides up from behind a clip, staggered.
 * Under reduced-motion the lines render immediately.
 */
export function TextReveal({
  lines,
  className,
  delay = 0,
  trigger = "inView",
}: TextRevealProps) {
  const reduced = useReducedMotion();

  if (reduced) {
    return (
      <span className={className}>
        {lines.map((line) => (
          <span key={line} className="block">
            {line}
          </span>
        ))}
      </span>
    );
  }

  return (
    <span className={className}>
      {lines.map((line, i) => (
        <span key={line} className="block overflow-hidden pb-[0.08em]">
          <motion.span
            className="block"
            initial={{ y: "110%" }}
            {...(trigger === "mount"
              ? { animate: { y: 0 } }
              : { whileInView: { y: 0 }, viewport: { once: true } })}
            transition={{
              duration: 0.8,
              delay: delay + i * 0.12,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {line}
          </motion.span>
        </span>
      ))}
    </span>
  );
}
