"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

type Viewport = "desktop" | "mobile";
type Concept = "monogram" | "rings";

const positioning =
  "I'm an engineer, happiest when an idea turns into something people can actually use.";

function MonogramArtwork() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 440 360"
      className="h-full w-full overflow-visible"
      fill="none"
    >
      <defs>
        <linearGradient id="monogram-face" x1="120" y1="90" x2="330" y2="270">
          <stop stopColor="#F2F0EB" />
          <stop offset="0.48" stopColor="#92969E" />
          <stop offset="1" stopColor="#3B414B" />
        </linearGradient>
        <linearGradient id="monogram-edge" x1="125" y1="115" x2="330" y2="255">
          <stop stopColor="#98AFCF" />
          <stop offset="0.52" stopColor="#4F5F77" />
          <stop offset="1" stopColor="#242A34" />
        </linearGradient>
        <radialGradient
          id="monogram-glow"
          cx="0"
          cy="0"
          r="1"
          gradientTransform="translate(220 180) rotate(90) scale(155 190)"
        >
          <stop stopColor="#526780" stopOpacity="0.24" />
          <stop offset="1" stopColor="#101113" stopOpacity="0" />
        </radialGradient>
        <filter
          id="monogram-shadow"
          x="35"
          y="40"
          width="370"
          height="300"
          colorInterpolationFilters="sRGB"
        >
          <feGaussianBlur stdDeviation="14" />
        </filter>
      </defs>

      <ellipse
        cx="220"
        cy="292"
        rx="118"
        ry="14"
        fill="#000"
        opacity="0.55"
        filter="url(#monogram-shadow)"
      />
      <circle cx="220" cy="180" r="168" fill="url(#monogram-glow)" />
      <ellipse
        cx="220"
        cy="184"
        rx="151"
        ry="78"
        stroke="#8CA2C0"
        strokeOpacity="0.25"
        transform="rotate(-24 220 184)"
      />
      <ellipse
        cx="220"
        cy="184"
        rx="151"
        ry="78"
        stroke="#D0D7E1"
        strokeOpacity="0.16"
        transform="rotate(24 220 184)"
      />

      <g
        fontFamily="var(--font-montserrat), sans-serif"
        fontSize="130"
        fontWeight="500"
        letterSpacing="-14"
        textAnchor="middle"
      >
        {Array.from({ length: 12 }, (_, index) => (
          <text
            key={index}
            x="220"
            y="228"
            transform={`translate(${(index + 1) * 1.7} ${(index + 1) * 2.2})`}
            fill="url(#monogram-edge)"
            opacity="0.96"
          >
            HFG
          </text>
        ))}
        <text
          x="220"
          y="228"
          fill="url(#monogram-face)"
          stroke="#D9E0EA"
          strokeOpacity="0.6"
          strokeWidth="1.2"
        >
          HFG
        </text>
      </g>

      <circle cx="342" cy="107" r="3" fill="#C8D6EA" />
      <circle cx="96" cy="250" r="2" fill="#8299BA" opacity="0.8" />
      <path
        d="M92 280C154 319 282 324 350 277"
        stroke="#8093AE"
        strokeOpacity="0.2"
      />
    </svg>
  );
}

function RingsArtwork() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 440 360"
      className="h-full w-full overflow-visible"
      fill="none"
    >
      <defs>
        <linearGradient id="ring-silver" x1="105" y1="95" x2="328" y2="263">
          <stop stopColor="#E5E5E2" />
          <stop offset="0.45" stopColor="#737A84" />
          <stop offset="0.72" stopColor="#C6CFDA" />
          <stop offset="1" stopColor="#424852" />
        </linearGradient>
        <linearGradient id="ring-blue" x1="130" y1="78" x2="318" y2="286">
          <stop stopColor="#9DB4D4" />
          <stop offset="0.5" stopColor="#49586F" />
          <stop offset="1" stopColor="#C5CEDB" />
        </linearGradient>
        <radialGradient
          id="ring-core"
          cx="0"
          cy="0"
          r="1"
          gradientTransform="translate(220 178) rotate(90) scale(66)"
        >
          <stop stopColor="#A9B7CA" stopOpacity="0.72" />
          <stop offset="0.5" stopColor="#596579" stopOpacity="0.5" />
          <stop offset="1" stopColor="#171A20" stopOpacity="0.12" />
        </radialGradient>
        <radialGradient
          id="ring-glow"
          cx="0"
          cy="0"
          r="1"
          gradientTransform="translate(220 180) rotate(90) scale(155 190)"
        >
          <stop stopColor="#526780" stopOpacity="0.22" />
          <stop offset="1" stopColor="#101113" stopOpacity="0" />
        </radialGradient>
        <filter
          id="ring-blur"
          x="40"
          y="40"
          width="360"
          height="290"
          colorInterpolationFilters="sRGB"
        >
          <feGaussianBlur stdDeviation="17" />
        </filter>
      </defs>

      <ellipse
        cx="220"
        cy="292"
        rx="118"
        ry="14"
        fill="#000"
        opacity="0.5"
        filter="url(#ring-blur)"
      />
      <circle cx="220" cy="180" r="168" fill="url(#ring-glow)" />
      <circle cx="220" cy="180" r="56" fill="url(#ring-core)" />
      <ellipse
        cx="220"
        cy="180"
        rx="133"
        ry="70"
        stroke="url(#ring-silver)"
        strokeWidth="11"
        transform="rotate(-36 220 180)"
      />
      <ellipse
        cx="220"
        cy="180"
        rx="133"
        ry="70"
        stroke="url(#ring-blue)"
        strokeWidth="10"
        transform="rotate(36 220 180)"
      />
      <ellipse
        cx="220"
        cy="180"
        rx="133"
        ry="70"
        stroke="url(#ring-silver)"
        strokeWidth="9"
        transform="rotate(92 220 180)"
      />
      <path
        d="M121 126C149 93 186 75 222 76"
        stroke="#F3F3EF"
        strokeOpacity="0.55"
        strokeWidth="2"
        strokeLinecap="round"
        transform="rotate(-36 220 180)"
      />
      <path
        d="M120 125C150 94 184 78 211 76"
        stroke="#DCE5F1"
        strokeOpacity="0.45"
        strokeWidth="2"
        strokeLinecap="round"
        transform="rotate(36 220 180)"
      />
      <circle cx="341" cy="129" r="5" fill="#D3DCE9" />
      <circle cx="111" cy="221" r="4" fill="#8BA4C7" />
      <circle cx="217" cy="48" r="3" fill="#D7E0ED" opacity="0.85" />
      <path
        d="M92 280C154 319 282 324 350 277"
        stroke="#8093AE"
        strokeOpacity="0.18"
      />
    </svg>
  );
}

function Artwork({ concept }: { concept: Concept }) {
  return (
    <div className="absolute inset-0">
      {concept === "monogram" ? <MonogramArtwork /> : <RingsArtwork />}
      <span className="absolute right-1 bottom-2 text-[0.5rem] tracking-[0.24em] text-white/35 uppercase">
        {concept === "monogram" ? "Identity / 01" : "Connection / 02"}
      </span>
    </div>
  );
}

function HeroPreview({
  concept,
  viewport,
}: {
  concept: Concept;
  viewport: Viewport;
}) {
  const isMobile = viewport === "mobile";
  const title = concept === "monogram" ? "HFG Sculpture" : "Interlocking Rings";
  const ConceptArt = <Artwork concept={concept} />;

  return (
    <div
      className={cn(
        "relative isolate flex overflow-hidden rounded-sm border border-white/10 bg-[#0d0e10] text-white shadow-[0_28px_80px_rgba(0,0,0,0.28)]",
        isMobile
          ? "mx-auto aspect-[9/16] w-full max-w-[23rem] flex-col p-6"
          : "aspect-[1.55/1] w-full items-center gap-3 p-6 sm:p-8",
      )}
      role="group"
      aria-label={`${title}, ${viewport} hero mockup`}
    >
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_78%_47%,rgba(88,108,137,0.15),transparent_52%)]" />

      <div
        className={cn(
          "relative z-10 flex shrink-0 flex-col justify-center",
          isMobile ? "pt-2" : "w-[56%]",
        )}
      >
        <p className="text-[0.52rem] tracking-[0.24em] text-white/45 uppercase">
          Developer · Engineer
        </p>
        <h2
          className={cn(
            "mt-4 leading-[0.98] font-light tracking-[0.075em] uppercase",
            isMobile
              ? "text-[clamp(1.75rem,8vw,2.55rem)]"
              : "text-[clamp(1.45rem,2vw,2rem)]",
          )}
        >
          Howard
          <br />
          Frelindo Goh
        </h2>
        <p
          className={cn(
            "mt-4 max-w-[27rem] leading-relaxed text-white/60",
            isMobile ? "text-xs" : "text-[0.65rem] sm:text-xs",
          )}
        >
          {positioning}
        </p>
        <div className="mt-5 flex flex-wrap gap-2">
          <span className="rounded-full border border-white/70 bg-white px-3 py-1.5 text-[0.55rem] tracking-wide text-[#15171b]">
            Selected work
          </span>
          <span className="rounded-full border border-white/20 px-3 py-1.5 text-[0.55rem] tracking-wide text-white/75">
            Get in touch
          </span>
        </div>
      </div>

      {isMobile ? (
        <div className="relative mt-2 min-h-0 flex-1">{ConceptArt}</div>
      ) : (
        <div className="absolute inset-y-0 right-0 w-[53%]">{ConceptArt}</div>
      )}

      <span className="absolute right-4 bottom-3 text-[0.48rem] tracking-[0.18em] text-white/25 uppercase">
        Howard Frelindo Goh · Portfolio
      </span>
    </div>
  );
}

const concepts: { id: Concept; number: string; title: string; note: string }[] =
  [
    {
      id: "monogram",
      number: "01",
      title: "HFG Sculpture",
      note: "A dimensional monogram makes the hero personal and memorable.",
    },
    {
      id: "rings",
      number: "02",
      title: "Interlocking Rings",
      note: "Connected metal forms suggest the links between different kinds of software.",
    },
  ];

export function HeroConceptGallery() {
  const [viewport, setViewport] = useState<Viewport>("desktop");

  return (
    <main className="min-h-dvh px-5 pt-24 pb-20 sm:px-10 sm:pt-28 lg:py-20 lg:pl-40">
      <div className="mx-auto max-w-[1440px]">
        <header className="border-hairline flex flex-col gap-8 border-b pb-8 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <p className="text-muted text-[0.65rem] tracking-[0.22em] uppercase">
              Design exploration · D-01
            </p>
            <h1 className="mt-4 text-[clamp(2rem,5vw,3.7rem)] leading-none font-light tracking-[0.07em] uppercase">
              Hero concepts
            </h1>
            <p className="text-muted mt-4 max-w-xl text-sm leading-relaxed sm:text-base">
              Two restrained sculpture directions, each shown at desktop and
              mobile proportions. The forms are static studies for review, not
              the final interactive 3D asset.
            </p>
          </div>

          <div
            className="border-hairline inline-flex w-fit shrink-0 rounded-full border p-1"
            role="group"
            aria-label="Preview viewport size"
          >
            {(["desktop", "mobile"] as const).map((size) => (
              <button
                key={size}
                type="button"
                onClick={() => setViewport(size)}
                aria-pressed={viewport === size}
                className={cn(
                  "rounded-full px-4 py-2 text-xs tracking-wide capitalize transition-colors",
                  viewport === size
                    ? "bg-text text-bg"
                    : "text-muted hover:text-text",
                )}
              >
                {size}
              </button>
            ))}
          </div>
        </header>

        <div className="mt-8 grid gap-8 xl:grid-cols-2 xl:gap-6">
          {concepts.map((concept) => (
            <section key={concept.id} aria-labelledby={`${concept.id}-heading`}>
              <div className="mb-3 flex items-baseline gap-3">
                <span className="text-muted text-xs tracking-[0.2em] tabular-nums">
                  {concept.number}
                </span>
                <h2
                  id={`${concept.id}-heading`}
                  className="text-sm font-medium tracking-[0.12em] uppercase"
                >
                  {concept.title}
                </h2>
              </div>
              <HeroPreview concept={concept.id} viewport={viewport} />
              <p className="text-muted mt-3 max-w-xl text-xs leading-relaxed sm:text-sm">
                {concept.note}
              </p>
            </section>
          ))}
        </div>

        <aside className="border-hairline text-muted mt-12 border-t pt-5 text-xs leading-relaxed sm:flex sm:items-start sm:justify-between sm:gap-8">
          <p className="max-w-2xl">
            Review focus: choose the visual direction that feels most
            distinctive while keeping Howard&apos;s name, positioning, and calls
            to action easy to read.
          </p>
          <p className="mt-3 shrink-0 tracking-wide sm:mt-0">
            Next: approve form, accent, and final hero copy.
          </p>
        </aside>
      </div>
    </main>
  );
}
