"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowLeft, Moon, Sun } from "lucide-react";
import { useTheme } from "@/components/theme-provider";

/**
 * Top bar shown on the focused /projects pages (where the sidebar nav is
 * hidden). Provides a clear Back affordance and, on mobile, the theme toggle
 * (desktop keeps the global one).
 */
export function ProjectsTopBar() {
  const pathname = usePathname();
  const { theme, toggle } = useTheme();

  const isDetail = pathname !== "/projects";
  const backHref = isDetail ? "/projects" : "/";
  const backLabel = isDetail ? "All projects" : "Back";

  return (
    <div className="fixed top-0 right-0 left-0 z-50 flex items-center justify-between px-6 py-5 sm:px-8">
      <Link
        href={backHref}
        className="text-muted hover:text-text inline-flex items-center gap-2 text-xs tracking-[0.18em] uppercase transition-colors"
      >
        <ArrowLeft className="h-4 w-4" strokeWidth={1.5} />
        {backLabel}
      </Link>

      <button
        type="button"
        onClick={toggle}
        aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
        className="text-text lg:hidden"
      >
        {theme === "dark" ? (
          <Moon className="h-5 w-5" strokeWidth={1.5} />
        ) : (
          <Sun className="h-5 w-5" strokeWidth={1.5} />
        )}
      </button>
    </div>
  );
}
