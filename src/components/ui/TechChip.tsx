export function TechChip({ children }: { children: React.ReactNode }) {
  return (
    <span className="border-hairline text-muted inline-block rounded-full border px-3 py-1 text-xs tracking-wide">
      {children}
    </span>
  );
}
