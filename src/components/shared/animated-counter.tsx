"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

interface AnimatedCounterProps {
  value: string;
  className?: string;
}

export function AnimatedCounter({ value, className }: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [displayed, setDisplayed] = useState(false);

  useEffect(() => {
    if (isInView) {
      setDisplayed(true);
    }
  }, [isInView]);

  // For non-numeric values like "Right Now", just fade in
  const numericMatch = value.match(/^[\$]?([\d,]+)/);

  if (!numericMatch) {
    return (
      <span
        ref={ref}
        className={className}
        style={{
          opacity: displayed ? 1 : 0,
          transition: "opacity 0.8s ease-out",
        }}
      >
        {value}
      </span>
    );
  }

  return (
    <span ref={ref} className={className}>
      <CountUp
        target={value}
        numericPart={parseInt(numericMatch[1].replace(/,/g, ""))}
        isActive={displayed}
      />
    </span>
  );
}

function CountUp({
  target,
  numericPart,
  isActive,
}: {
  target: string;
  numericPart: number;
  isActive: boolean;
}) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!isActive) return;

    const duration = 2000;
    const startTime = performance.now();

    function update(currentTime: number) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCurrent(Math.floor(eased * numericPart));

      if (progress < 1) {
        requestAnimationFrame(update);
      }
    }

    requestAnimationFrame(update);
  }, [isActive, numericPart]);

  // Replace the numeric part in the target string with animated value
  const prefix = target.match(/^[^\d]*/)?.[0] || "";
  const suffix = target.match(/[^\d]*$/)?.[0] || "";

  return (
    <>
      {prefix}
      {current.toLocaleString()}
      {suffix}
    </>
  );
}
