"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Mail, Menu, Moon, Sun, X } from "lucide-react";
import { sections, type SectionId } from "@/lib/sections";
import { profile } from "@/content/profile";
import { GithubIcon, LinkedInIcon } from "@/components/ui/icons";
import { useTheme } from "@/components/theme-provider";

/** Top bar + slide-in menu for mobile/tablet. Hidden on lg+. */
export function MobileNav() {
  const [open, setOpen] = useState(false);
  const { theme, toggle } = useTheme();
  const pathname = usePathname();
  const isHome = pathname === "/";

  const hrefFor = (id: SectionId) => (isHome ? `#${id}` : `/#${id}`);

  // Lock body scroll while the menu is open; close on Escape.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
      <div className="bg-bg/80 fixed top-0 right-0 left-0 z-40 flex items-center justify-between px-6 py-5 backdrop-blur-sm lg:hidden">
        <Link href="/" className="text-sm font-medium tracking-[0.2em] uppercase">
          HFG
        </Link>
        <div className="flex items-center gap-5">
          <button
            type="button"
            onClick={toggle}
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
            className="text-text"
          >
            {theme === "dark" ? (
              <Moon className="h-5 w-5" strokeWidth={1.5} />
            ) : (
              <Sun className="h-5 w-5" strokeWidth={1.5} />
            )}
          </button>
          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            aria-expanded={open}
            className="text-text"
          >
            <Menu className="h-6 w-6" strokeWidth={1.5} />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            className="bg-bg fixed inset-0 z-50 flex flex-col px-6 py-5 lg:hidden"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-center justify-end">
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="text-text"
              >
                <X className="h-6 w-6" strokeWidth={1.5} />
              </button>
            </div>

            <nav aria-label="Mobile" className="mt-12 flex flex-1 flex-col gap-6">
              {sections.map(({ id, label }) => {
                const href = hrefFor(id);
                const cls = "text-3xl font-light tracking-[0.08em] uppercase";
                return href.startsWith("#") ? (
                  <a key={id} href={href} onClick={() => setOpen(false)} className={cls}>
                    {label}
                  </a>
                ) : (
                  <Link key={id} href={href} onClick={() => setOpen(false)} className={cls}>
                    {label}
                  </Link>
                );
              })}
            </nav>

            <div className="flex gap-6">
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-muted hover:text-text transition-colors"
              >
                <LinkedInIcon className="h-5 w-5" />
              </a>
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
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
