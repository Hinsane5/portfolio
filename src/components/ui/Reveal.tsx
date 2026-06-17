"use client";

import { motion } from "framer-motion";
import { useReducedMotion } from "@/lib/hooks/useReducedMotion";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  /** translate-Y distance in px before reveal */
  y?: number;
  as?: "div" | "section" | "li" | "span";
};

/**
 * Scroll-reveal wrapper: fade + translate-Y as it enters the viewport.
 * No-ops (renders content immediately) under reduced-motion.
 */
export function Reveal({
  children,
  className,
  delay = 0,
  y = 20,
  as = "div",
}: RevealProps) {
  const reduced = useReducedMotion();
  const MotionTag = motion[as];

  if (reduced) {
    const Tag = as;
    return <Tag className={className}>{children}</Tag>;
  }

  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -10% 0px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </MotionTag>
  );
}
