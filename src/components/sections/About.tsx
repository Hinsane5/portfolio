import { profile } from "@/content/profile";
import { skills } from "@/content/skills";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { TechChip } from "@/components/ui/TechChip";

export function About() {
  return (
    <section
      id="about"
      aria-label="About"
      className="px-6 py-24 sm:px-12 lg:px-24 lg:py-32"
    >
      <SectionHeading>About</SectionHeading>

      <div className="grid gap-16 lg:grid-cols-[1.1fr_1fr]">
        <Reveal>
          <p className="text-lg leading-relaxed sm:text-xl">{profile.bio}</p>
        </Reveal>

        <div>
          <Reveal>
            <h3 className="text-muted mb-8 text-xs tracking-[0.22em] uppercase">
              What I work with
            </h3>
          </Reveal>
          <div className="flex flex-col gap-7">
            {skills.map((group, i) => (
              <Reveal key={group.label} delay={i * 0.05}>
                <div>
                  <h4 className="mb-3 text-sm font-medium tracking-wide">
                    {group.label}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <TechChip key={item}>{item}</TechChip>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
