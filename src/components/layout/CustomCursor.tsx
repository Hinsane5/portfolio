"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useReducedMotion } from "@/lib/hooks/useReducedMotion";
import { useMediaQuery } from "@/lib/hooks/useMediaQuery";

/**
 * Custom cursor: a small dot that tracks the pointer 1:1 plus a larger ring
 * that follows with spring easing. The ring grows over interactive elements.
 * Renders nothing on touch / coarse pointers or under reduced-motion.
 */
export function CustomCursor() {
  const reduced = useReducedMotion();
  const finePointer = useMediaQuery("(pointer: fine)");
  const enabled = finePointer && !reduced;
  const [hovering, setHovering] = useState(false);

  // Raw pointer position (dot follows instantly).
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  // Ring lags behind with a spring.
  const ringX = useSpring(x, { stiffness: 350, damping: 28, mass: 0.6 });
  const ringY = useSpring(y, { stiffness: 350, damping: 28, mass: 0.6 });

  useEffect(() => {
    if (!enabled) return;
    document.documentElement.classList.add("has-custom-cursor");

    const move = (e: PointerEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      const interactive = (e.target as HTMLElement)?.closest(
        'a, button, [data-cursor="hover"], input, [role="button"]',
      );
      setHovering(!!interactive);
    };
    window.addEventListener("pointermove", move);
    return () => {
      window.removeEventListener("pointermove", move);
      document.documentElement.classList.remove("has-custom-cursor");
    };
  }, [enabled, x, y]);

  if (!enabled) return null;

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-[100]">
      {/* Dot */}
      <motion.div
        className="bg-text fixed top-0 left-0 h-1.5 w-1.5 rounded-full"
        style={{ x, y, translateX: "-50%", translateY: "-50%" }}
      />
      {/* Ring */}
      <motion.div
        className="border-text/60 fixed top-0 left-0 rounded-full border"
        style={{ x: ringX, y: ringY, translateX: "-50%", translateY: "-50%" }}
        animate={{
          width: hovering ? 48 : 30,
          height: hovering ? 48 : 30,
          opacity: hovering ? 1 : 0.6,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
      />
    </div>
  );
}
