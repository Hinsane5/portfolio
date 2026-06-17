import { education } from "@/content/education";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { TimelineItem } from "@/components/ui/TimelineItem";

export function Education() {
  return (
    <section id="education" className="px-6 py-24 sm:px-12 lg:px-24 lg:py-32">
      <SectionHeading>Education</SectionHeading>
      <div className="max-w-3xl">
        {education.map((e, i) => (
          <Reveal key={e.institution} delay={i * 0.05}>
            <TimelineItem
              title={e.institution}
              subtitle={e.degree}
              period={`${e.start} – ${e.end}`}
              meta={e.gpa ? `GPA ${e.gpa}` : undefined}
              divider={i !== 0}
            >
              {e.details && e.details.join(" ")}
            </TimelineItem>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
