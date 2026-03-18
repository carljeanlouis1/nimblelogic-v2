import { cn } from "@/lib/utils";

interface SectionWrapperProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
  background?: "default" | "surface" | "elevated";
  maxWidth?: "5xl" | "6xl" | "7xl";
}

export function SectionWrapper({
  id,
  className,
  children,
  background = "default",
  maxWidth = "7xl",
}: SectionWrapperProps) {
  const bgClasses = {
    default: "bg-background",
    surface: "bg-surface",
    elevated: "bg-elevated",
  };

  const maxWidthClasses = {
    "5xl": "max-w-5xl",
    "6xl": "max-w-6xl",
    "7xl": "max-w-7xl",
  };

  return (
    <section
      id={id}
      className={cn(
        "relative py-24 lg:py-32",
        bgClasses[background],
        className
      )}
    >
      <div
        className={cn(
          "mx-auto px-5 md:px-6 lg:px-8",
          maxWidthClasses[maxWidth]
        )}
      >
        {children}
      </div>
    </section>
  );
}
