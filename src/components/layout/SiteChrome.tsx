"use client";

import { usePathname } from "next/navigation";
import { Sidebar } from "@/components/layout/Sidebar";
import { MobileNav } from "@/components/layout/MobileNav";
import { ThemeToggle } from "@/components/layout/ThemeToggle";
import { BackToTop } from "@/components/layout/BackToTop";
import { ProjectsTopBar } from "@/components/layout/ProjectsTopBar";

/**
 * Persistent site chrome rendered on every page. The /projects routes are a
 * focused works view: the sidebar nav is replaced by a Back button.
 */
export function SiteChrome() {
  const pathname = usePathname();
  const onProjects = pathname.startsWith("/projects");

  return (
    <>
      {onProjects ? (
        <ProjectsTopBar />
      ) : (
        <>
          <Sidebar />
          <MobileNav />
        </>
      )}
      <ThemeToggle />
      <BackToTop />
    </>
  );
}
