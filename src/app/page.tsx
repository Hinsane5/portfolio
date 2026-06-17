import { profile } from "@/content/profile";

/*
  Phase 0 — styled placeholder.
  Proves the design tokens (dark bg, Montserrat, wide tracking) render correctly.
  Real sections (Hero, About, Education, Experience, Skills, Projects, Contact)
  land in Phases 1–4. See docs/BUILD_PLAN.md.
*/
export default function Home() {
  return (
    <main className="flex min-h-dvh flex-col justify-between px-6 py-12 sm:px-12 lg:px-24 lg:py-20">
      <p className="text-muted text-xs tracking-[0.18em] uppercase">
        Portfolio · Phase 0 shell
      </p>

      <div className="max-w-5xl">
        <h1 className="text-[clamp(2.5rem,9vw,7rem)] leading-[0.95] font-light tracking-[0.12em] uppercase">
          Howard
          <br />
          Frelindo Goh
        </h1>
        <p className="text-muted mt-6 max-w-2xl text-base leading-relaxed sm:text-lg">
          {profile.positioning}
        </p>
      </div>

      <footer className="text-muted flex flex-wrap gap-x-8 gap-y-2 text-sm">
        <a className="hover:text-text transition-colors" href={`mailto:${profile.email}`}>
          {profile.email}
        </a>
        <a
          className="hover:text-text transition-colors"
          href={profile.github}
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        <span>© {new Date().getFullYear()} Howard Frelindo Goh</span>
      </footer>
    </main>
  );
}
