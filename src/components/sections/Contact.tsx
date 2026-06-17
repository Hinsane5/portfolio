import { profile } from "@/content/profile";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export function Contact() {
  return (
    <section id="contact" className="px-6 py-24 sm:px-12 lg:px-24 lg:py-32">
      <SectionHeading>Contact</SectionHeading>
      <Reveal>
        <p className="max-w-2xl text-2xl font-light tracking-wide sm:text-3xl">
          Have something to build, or a question? Let&apos;s talk.
        </p>
      </Reveal>
      <Reveal delay={0.08}>
        <div className="text-muted mt-10 flex flex-col gap-3 text-base">
          <a href={`mailto:${profile.email}`} className="hover:text-text w-fit transition-colors">
            {profile.email}
          </a>
          <a href={`tel:${profile.phone.replace(/\s/g, "")}`} className="hover:text-text w-fit transition-colors">
            {profile.phone}
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-text w-fit transition-colors"
          >
            {profile.github.replace("https://", "")}
          </a>
        </div>
      </Reveal>
    </section>
  );
}
