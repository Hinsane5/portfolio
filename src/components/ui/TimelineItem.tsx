import { cn } from "@/lib/utils";

type TimelineItemProps = {
  title: string;
  subtitle?: string;
  period: string;
  meta?: string;
  children?: React.ReactNode;
  /** Hairline divider above the row (skip on the first item). */
  divider?: boolean;
};

/** Shared entry row for the Education and Experience timelines. */
export function TimelineItem({
  title,
  subtitle,
  period,
  meta,
  children,
  divider = true,
}: TimelineItemProps) {
  return (
    <div className={cn("py-7", divider && "border-hairline border-t")}>
      <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
        <h3 className="text-lg font-medium tracking-wide">{title}</h3>
        <span className="text-muted text-sm tracking-wide tabular-nums">
          {period}
        </span>
      </div>
      {subtitle && <p className="text-muted mt-1">{subtitle}</p>}
      {meta && <p className="text-muted mt-1 text-sm">{meta}</p>}
      {children && (
        <div className="text-muted mt-3 max-w-xl text-sm leading-relaxed">
          {children}
        </div>
      )}
    </div>
  );
}
