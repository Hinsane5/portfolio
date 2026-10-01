import { Mail, Phone } from "lucide-react";
import { profile } from "@/content/profile";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Magnetic } from "@/components/ui/Magnetic";
import { GithubIcon, LinkedInIcon } from "@/components/ui/icons";

export function Contact() {
  return (
    <section
      id="contact"
      aria-label="Contact"
      className="px-6 py-24 sm:px-12 lg:px-24 lg:py-32"
    >
      <SectionHeading>Contact</SectionHeading>

      <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:items-end">
        <div>
          <Reveal>
            <p className="max-w-xl text-2xl leading-snug font-light tracking-wide sm:text-3xl">
              Have an idea, a role, or a question? I&apos;d love to hear it.
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <Magnetic className="mt-8">
              <a
                href={`mailto:${profile.email}`}
                className="border-text hover:bg-text hover:text-bg inline-flex items-center gap-3 rounded-full border px-7 py-3.5 text-sm tracking-wide transition-colors sm:text-base"
              >
                <Mail className="h-4 w-4" strokeWidth={1.5} />
                {profile.email}
              </a>
            </Magnetic>
          </Reveal>
        </div>

        <Reveal delay={0.12}>
          <div className="text-muted flex flex-col gap-4">
            <a
              href={`tel:${profile.phone.replace(/\s/g, "")}`}
              className="hover:text-text inline-flex w-fit items-center gap-3 transition-colors"
            >
              <Phone className="h-4 w-4" strokeWidth={1.5} />
              {profile.phone}
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-text inline-flex w-fit items-center gap-3 transition-colors"
            >
              <GithubIcon className="h-4 w-4" />
              {profile.github.replace("https://", "")}
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-text inline-flex w-fit items-center gap-3 transition-colors"
            >
              <LinkedInIcon className="h-4 w-4" />
              LinkedIn profile
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
