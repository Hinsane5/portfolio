import { Reveal } from "@/components/ui/Reveal";

/** Section label above a hairline divider — the reference's `ABOUT ME` pattern. */
export function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <Reveal>
      <div className="mb-10">
        <h2 className="text-muted text-xs tracking-[0.22em] uppercase">
          {children}
        </h2>
        <div className="bg-hairline mt-4 h-px w-full" />
      </div>
    </Reveal>
  );
}
