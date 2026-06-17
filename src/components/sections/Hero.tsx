import { ArrowDown } from "lucide-react";
import { profile } from "@/content/profile";
import { Reveal } from "@/components/ui/Reveal";
import { TextReveal } from "@/components/ui/TextReveal";
import { Magnetic } from "@/components/ui/Magnetic";

export function Hero() {
  return (
    <section
      id="home"
      aria-label="Introduction"
      className="flex min-h-dvh flex-col justify-center px-6 py-24 sm:px-12 lg:px-24"
    >
      <Reveal>
        <p className="text-muted mb-6 text-xs tracking-[0.22em] uppercase">
          Developer · Engineer
        </p>
      </Reveal>

      <h1 className="text-[clamp(2.5rem,9vw,7rem)] leading-[0.95] font-light tracking-[0.1em] uppercase">
        <TextReveal
          lines={["Howard", "Frelindo Goh"]}
          delay={0.05}
          trigger="mount"
        />
      </h1>

      <Reveal delay={0.12}>
        <p className="text-muted mt-8 max-w-2xl text-base leading-relaxed sm:text-lg">
          {profile.positioning}
        </p>
      </Reveal>

      <Reveal delay={0.18}>
        <div className="mt-10 flex flex-wrap gap-4">
          <Magnetic>
            <a
              href="#projects"
              className="border-text hover:bg-text hover:text-bg inline-block rounded-full border px-6 py-2.5 text-sm tracking-wide transition-colors"
            >
              View Projects
            </a>
          </Magnetic>
          <Magnetic>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="border-hairline hover:border-text inline-block rounded-full border px-6 py-2.5 text-sm tracking-wide transition-colors"
            >
              GitHub
            </a>
          </Magnetic>
          <Magnetic>
            <a
              href={`mailto:${profile.email}`}
              className="border-hairline hover:border-text inline-block rounded-full border px-6 py-2.5 text-sm tracking-wide transition-colors"
            >
              Email
            </a>
          </Magnetic>
        </div>
      </Reveal>

      <Reveal delay={0.3}>
        <a
          href="#about"
          aria-label="Scroll to about"
          className="text-muted hover:text-text mt-20 inline-flex items-center gap-2 text-xs tracking-[0.18em] uppercase transition-colors"
        >
          Scroll <ArrowDown className="h-4 w-4" strokeWidth={1.5} />
        </a>
      </Reveal>
    </section>
  );
}
