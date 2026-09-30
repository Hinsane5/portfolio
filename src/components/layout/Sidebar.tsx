"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Mail } from "lucide-react";
import { sections, type SectionId } from "@/lib/sections";
import { useActiveSection } from "@/lib/hooks/useActiveSection";
import { profile } from "@/content/profile";
import { GithubIcon } from "@/components/ui/icons";
import { cn } from "@/lib/utils";

/** Fixed left sidebar (desktop): brand, nav, social icons. Hidden on mobile. */
export function Sidebar() {
  const active = useActiveSection();
  const pathname = usePathname();
  const isHome = pathname === "/";

  // All nav items are in-page sections on the home page (Projects scrolls to
  // the spiral; its "View all projects" control opens the dedicated index).
  const hrefFor = (id: SectionId) => (isHome ? `#${id}` : `/#${id}`);
  const isActive = (id: SectionId) => isHome && active === id;

  return (
    <aside className="fixed top-0 left-0 z-40 hidden h-dvh w-40 flex-col justify-between px-8 py-10 lg:flex">
      <Link
        href="/"
        className="text-sm font-medium tracking-[0.2em] uppercase"
        aria-label="Home"
      >
        HFG
      </Link>

      <nav aria-label="Primary">
        <ul className="flex flex-col gap-3">
          {sections.map(({ id, label }) => {
            const href = hrefFor(id);
            const cls = cn(
              "text-xs tracking-[0.18em] uppercase transition-colors",
              isActive(id)
                ? "text-text border-text border-b pb-0.5"
                : "text-muted hover:text-text",
            );
            return (
              <li key={id}>
                {href.startsWith("#") ? (
                  <a href={href} aria-current={isActive(id) ? "true" : undefined} className={cls}>
                    {label}
                  </a>
                ) : (
                  <Link href={href} aria-current={isActive(id) ? "true" : undefined} className={cls}>
                    {label}
                  </Link>
                )}
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="flex flex-col gap-4">
        <a
          href={profile.github}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="text-muted hover:text-text transition-colors"
        >
          <GithubIcon className="h-5 w-5" />
        </a>
        <a
          href={`mailto:${profile.email}`}
          aria-label="Email"
          className="text-muted hover:text-text transition-colors"
        >
          <Mail className="h-5 w-5" strokeWidth={1.5} />
        </a>
      </div>
    </aside>
  );
}
