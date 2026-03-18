import { cn } from "@/lib/utils";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  glow?: "primary" | "amber" | "none";
}

export function GlassCard({
  children,
  className,
  hover = true,
  glow = "none",
}: GlassCardProps) {
  const glowClasses = {
    primary: "hover:shadow-glow-sm",
    amber: "hover:shadow-glow-amber",
    none: "",
  };

  return (
    <div
      className={cn(
        "glass rounded-2xl p-6 md:p-8 transition-all duration-300",
        hover && "glass-hover hover:-translate-y-1",
        glowClasses[glow],
        className
      )}
    >
      {children}
    </div>
  );
}
