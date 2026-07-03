import { cn } from "@/lib/utils";

export function Kicker({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      <span className="h-px w-8 bg-gradient-to-r from-uda-500 to-transparent" />
      <span className="kicker">{children}</span>
    </div>
  );
}

export function PillarBadge({
  color,
  children,
}: {
  color: "uda" | "forest";
  children: React.ReactNode;
}) {
  const styles =
    color === "uda"
      ? "border-uda-500/40 bg-uda-500/10 text-party-gold"
      : "border-forest-400/40 bg-forest-500/10 text-forest-700";

  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-3 py-1 text-[11px] font-mono uppercase tracking-widest",
        styles
      )}
    >
      {children}
    </span>
  );
}
