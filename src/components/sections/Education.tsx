import { education } from "@/content/education";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export function Education() {
  return (
    <section id="education" className="px-6 py-24 sm:px-12 lg:px-24 lg:py-32">
      <SectionHeading>Education</SectionHeading>
      <ul className="max-w-2xl">
        {education.map((e, i) => (
          <Reveal as="li" key={e.institution} delay={i * 0.05}>
            <div className="border-hairline border-t py-6">
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h3 className="text-lg font-medium">{e.institution}</h3>
                <span className="text-muted text-sm tracking-wide">
                  {e.start} – {e.end}
                </span>
              </div>
              <p className="text-muted mt-1">{e.degree}</p>
              {e.gpa && (
                <p className="text-muted mt-1 text-sm">GPA {e.gpa}</p>
              )}
            </div>
          </Reveal>
        ))}
      </ul>
    </section>
  );
}
