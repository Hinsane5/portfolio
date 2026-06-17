import { profile } from "@/content/profile";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export function About() {
  return (
    <section id="about" className="px-6 py-24 sm:px-12 lg:px-24 lg:py-32">
      <SectionHeading>About</SectionHeading>
      <Reveal>
        <p className="max-w-2xl text-base leading-relaxed sm:text-lg">
          {profile.bio}
        </p>
      </Reveal>
    </section>
  );
}
