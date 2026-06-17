import { experience } from "@/content/experience";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { TimelineItem } from "@/components/ui/TimelineItem";

export function Experience() {
  // Optional section: render nothing if there's no content.
  if (experience.length === 0) return null;

  return (
    <section id="experience" className="px-6 py-24 sm:px-12 lg:px-24 lg:py-32">
      <SectionHeading>Experience</SectionHeading>
      <div className="max-w-3xl">
        {experience.map((x, i) => (
          <Reveal key={`${x.org}-${x.role}`} delay={i * 0.05}>
            <TimelineItem
              title={x.role}
              subtitle={x.org}
              period={`${x.start} – ${x.end}`}
            >
              {x.summary}
            </TimelineItem>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
