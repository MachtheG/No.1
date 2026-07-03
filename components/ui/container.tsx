import { cn } from "@/lib/utils";

export function Container({
  children,
  className,
  id,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <div id={id} className={cn("container mx-auto px-6 lg:px-10", className)}>
      {children}
    </div>
  );
}
