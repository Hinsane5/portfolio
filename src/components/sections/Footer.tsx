import { Mail } from "lucide-react";
import { profile } from "@/content/profile";
import { GithubIcon } from "@/components/ui/icons";

export function Footer() {
  return (
    <footer className="border-hairline border-t px-6 py-12 sm:px-12 lg:px-24">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm font-light tracking-wide">
          Thanks for scrolling all the way down.
        </p>
        <div className="flex items-center gap-5">
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
      </div>
      <p className="text-muted mt-8 text-xs tracking-[0.18em] uppercase">
        © {new Date().getFullYear()} Howard Frelindo Goh
      </p>
    </footer>
  );
}
