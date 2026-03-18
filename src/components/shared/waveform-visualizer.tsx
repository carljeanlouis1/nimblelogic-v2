"use client";

import { cn } from "@/lib/utils";

interface WaveformVisualizerProps {
  className?: string;
}

export function WaveformVisualizer({ className }: WaveformVisualizerProps) {
  return (
    <svg
      viewBox="0 0 50 40"
      className={cn("w-16 h-12", className)}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#00D4AA" />
          <stop offset="100%" stopColor="#0EA5E9" />
        </linearGradient>
      </defs>

      {[0, 1, 2, 3, 4].map((i) => (
        <rect
          key={i}
          x={3 + i * 10}
          y="4"
          width="4"
          rx="2"
          height="32"
          fill="url(#waveGradient)"
          style={{
            animationName: "waveform",
            animationDuration: "1.2s",
            animationTimingFunction: "ease-in-out",
            animationIterationCount: "infinite",
            animationDelay: `${i * 0.15}s`,
            transformOrigin: "center",
          }}
        />
      ))}
    </svg>
  );
}
