"use client";

import { useId, useState } from "react";
import { ChevronDown } from "lucide-react";

type SectionKey = "overview" | "impact" | "learning";

export function ProjectInsights({
  description,
  impact,
  learned,
  learningLabel,
  className = "",
}: {
  description: string;
  impact: string;
  learned: string;
  learningLabel: string;
  className?: string;
}) {
  const [openSection, setOpenSection] = useState<SectionKey | null>(null);
  const id = useId();
  const sections: { key: SectionKey; label: string; answer: string }[] = [
    { key: "overview", label: "Overview", answer: description },
    { key: "impact", label: "Impact", answer: impact },
    { key: "learning", label: learningLabel, answer: learned },
  ];

  return (
    <div className={`border-hairline border-t ${className}`}>
      {sections.map(({ key, label, answer }) => {
        const expanded = openSection === key;
        const buttonId = `${id}-${key}-button`;
        const panelId = `${id}-${key}-panel`;

        return (
          <section key={key} className="border-hairline border-b">
            <h3>
              <button
                id={buttonId}
                type="button"
                aria-expanded={expanded}
                aria-controls={panelId}
                onClick={() => setOpenSection(expanded ? null : key)}
                className="group flex w-full items-center justify-between gap-4 py-4 text-left"
              >
                <span className="text-muted group-hover:text-text text-[0.62rem] tracking-[0.18em] uppercase transition-colors motion-reduce:transition-none">
                  {label}
                </span>
                <ChevronDown
                  aria-hidden="true"
                  className={`text-muted h-4 w-4 shrink-0 transition-transform motion-reduce:transition-none ${expanded ? "rotate-180" : ""}`}
                  strokeWidth={1.5}
                />
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              hidden={!expanded}
              className="pb-4"
            >
              <p className="text-muted text-sm leading-relaxed sm:text-[0.95rem]">
                {answer}
              </p>
            </div>
          </section>
        );
      })}
    </div>
  );
}
