"use client";

import { useId, useRef, useState } from "react";

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
  const [activeSection, setActiveSection] = useState<SectionKey>("overview");
  const id = useId();
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const sections: { key: SectionKey; label: string; answer: string }[] = [
    { key: "overview", label: "Overview", answer: description },
    { key: "impact", label: "Impact", answer: impact },
    { key: "learning", label: learningLabel, answer: learned },
  ];

  return (
    <div className={`border-hairline border-t ${className}`}>
      <div
        role="tablist"
        aria-label="Project details"
        className="grid grid-cols-3 border-b border-hairline"
      >
        {sections.map(({ key, label }, index) => {
          const selected = activeSection === key;

          return (
            <button
              key={key}
              ref={(node) => {
                tabRefs.current[index] = node;
              }}
              id={`${id}-${key}-tab`}
              type="button"
              role="tab"
              aria-selected={selected}
              aria-controls={`${id}-${key}-panel`}
              tabIndex={selected ? 0 : -1}
              onClick={() => setActiveSection(key)}
              onKeyDown={(event) => {
                let nextIndex: number | null = null;
                if (event.key === "ArrowRight") nextIndex = (index + 1) % sections.length;
                if (event.key === "ArrowLeft") nextIndex = (index - 1 + sections.length) % sections.length;
                if (event.key === "Home") nextIndex = 0;
                if (event.key === "End") nextIndex = sections.length - 1;

                if (nextIndex !== null) {
                  event.preventDefault();
                  const nextSection = sections[nextIndex];
                  setActiveSection(nextSection.key);
                  tabRefs.current[nextIndex]?.focus();
                }
              }}
              className={`min-w-0 border-b-2 px-1 py-4 text-center text-[0.56rem] tracking-[0.1em] uppercase transition-colors motion-reduce:transition-none sm:text-[0.62rem] sm:tracking-[0.16em] ${selected ? "border-text text-text" : "border-transparent text-muted hover:text-text"}`}
            >
              {label}
            </button>
          );
        })}
      </div>

      {sections.map(({ key, answer }) => {
        return (
          <div
            key={key}
            id={`${id}-${key}-panel`}
            role="tabpanel"
            aria-labelledby={`${id}-${key}-tab`}
            tabIndex={0}
            hidden={activeSection !== key}
            className="pt-4"
          >
            <p className="text-muted text-sm leading-relaxed sm:text-[0.95rem]">
              {answer}
            </p>
          </div>
        );
      })}
    </div>
  );
}
