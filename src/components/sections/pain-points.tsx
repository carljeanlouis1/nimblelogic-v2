"use client";

import { PAIN_POINTS } from "@/lib/constants";
import { SectionWrapper } from "@/components/layout/section-wrapper";
import { RevealOnScroll } from "@/components/shared/reveal-on-scroll";
import { GlassCard } from "@/components/shared/glass-card";
import { AnimatedCounter } from "@/components/shared/animated-counter";

export function PainPoints() {
  return (
    <SectionWrapper background="surface" maxWidth="5xl">
      {/* Subtle radial amber glow behind the entire stats area */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at center, rgba(245,158,11,0.04), transparent 70%)",
        }}
        aria-hidden="true"
      />

      {/* Heading */}
      <RevealOnScroll>
        <div className="text-center mb-16">
          <h2 className="text-display font-bold text-text-primary mb-4">
            Every Missed Call Is{" "}
            <span className="text-amber">Revenue Lost</span>
          </h2>
          <p className="text-text-secondary text-body-lg max-w-2xl mx-auto">
            The numbers don&apos;t lie. Every unanswered call is money walking
            out the door.
          </p>
        </div>
      </RevealOnScroll>

      {/* 3 Stat Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {PAIN_POINTS.map((point, index) => (
          <RevealOnScroll key={index} delay={index * 0.1}>
            <GlassCard glow="amber" hover={false} className="text-center">
              {/* Stat with ambient glow */}
              <div className="relative inline-flex items-center justify-center w-full">
                {/* Subtle amber glow behind the number */}
                <div
                  className="absolute w-20 h-20 rounded-full bg-amber/10 blur-2xl"
                  aria-hidden="true"
                />
                {point.stat === "80%" ? (
                  <p className="relative text-display-lg font-bold text-amber">
                    <AnimatedCounter value="80" />
                    <span>%</span>
                  </p>
                ) : (
                  <p className="relative text-display-lg font-bold text-amber">
                    {point.stat}
                  </p>
                )}
              </div>

              {/* Description */}
              <p className="text-body text-text-secondary mt-3">
                {point.description}
              </p>
            </GlassCard>
          </RevealOnScroll>
        ))}
      </div>
    </SectionWrapper>
  );
}
