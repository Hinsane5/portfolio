"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/components/theme-provider";

/** Dark/light pill toggle, top-right. Persists via the ThemeProvider. */
export function ThemeToggle() {
  const { theme, toggle } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={`Switch to ${isDark ? "light" : "dark"} theme`}
      aria-pressed={!isDark}
      className="border-hairline hover:border-text/40 fixed top-8 right-8 z-50 hidden h-8 w-14 items-center rounded-full border px-1 transition-colors lg:flex"
    >
      <span
        className="bg-text flex h-6 w-6 items-center justify-center rounded-full transition-transform duration-300"
        style={{ transform: isDark ? "translateX(0)" : "translateX(24px)" }}
      >
        {isDark ? (
          <Moon className="text-bg h-3.5 w-3.5" strokeWidth={1.75} />
        ) : (
          <Sun className="text-bg h-3.5 w-3.5" strokeWidth={1.75} />
        )}
      </span>
    </button>
  );
}
