"use client";

import { useMediaQuery } from "@/lib/hooks/useMediaQuery";

/** Tracks the user's `prefers-reduced-motion` setting, reactively (SSR-safe). */
export function useReducedMotion(): boolean {
  return useMediaQuery("(prefers-reduced-motion: reduce)");
}
