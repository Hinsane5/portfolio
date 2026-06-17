import { Sidebar } from "@/components/layout/Sidebar";
import { MobileNav } from "@/components/layout/MobileNav";
import { ThemeToggle } from "@/components/layout/ThemeToggle";
import { BackToTop } from "@/components/layout/BackToTop";

/** Persistent site chrome rendered on every page (sits outside <main>). */
export function SiteChrome() {
  return (
    <>
      <Sidebar />
      <MobileNav />
      <ThemeToggle />
      <BackToTop />
    </>
  );
}
