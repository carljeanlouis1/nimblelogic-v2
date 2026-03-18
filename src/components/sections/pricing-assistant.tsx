"use client";

import { Check } from "lucide-react";
import { PRICING_ASSISTANT, PRICING_MAINTENANCE, SITE } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { SectionWrapper } from "@/components/layout/section-wrapper";
import { RevealOnScroll } from "@/components/shared/reveal-on-scroll";
import { GlassCard } from "@/components/shared/glass-card";

export function PricingAssistant() {
  return (
    <SectionWrapper>
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-heading font-bold text-text-primary">
          AI Personal Assistant
        </h2>
        <p className="text-text-secondary text-body-lg mt-4">
          One-time setup. Your data stays yours.
        </p>
      </div>

      {/* Cards grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
        {PRICING_ASSISTANT.map((tier, i) => {
          const isInPerson = tier.name === "In-Person NYC";

          return (
            <RevealOnScroll key={tier.name} delay={i * 0.1}>
              <GlassCard hover>
                {/* Name */}
                <h3 className="text-lg font-semibold text-text-primary">
                  {tier.name}
                </h3>

                {/* Price */}
                <div className="flex items-baseline gap-2 mt-2">
                  <span className="text-3xl font-bold text-text-primary">
                    ${tier.price}
                  </span>
                  <span className="text-text-muted text-sm">{tier.period}</span>
                </div>

                {/* Description */}
                <p className="text-sm text-text-muted mt-2">
                  {tier.description}
                </p>

                {/* Separator */}
                <div className="h-px bg-white/5 my-6" />

                {/* Features */}
                <ul className="space-y-3">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3">
                      <Check className="w-4 h-4 shrink-0 text-text-muted" />
                      <span className="text-sm text-text-secondary">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href={SITE.bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    "w-full py-3 rounded-lg text-center mt-8 block font-semibold",
                    isInPerson ? "btn-gradient" : "btn-ghost"
                  )}
                >
                  Get Started
                </a>
              </GlassCard>
            </RevealOnScroll>
          );
        })}
      </div>

      {/* Maintenance Banner */}
      <RevealOnScroll delay={0.2}>
        <div className="mt-8 max-w-3xl mx-auto">
          <GlassCard hover={false} className="text-center">
            <h3 className="text-lg font-semibold text-text-primary">
              Optional Maintenance
            </h3>
            <p className="text-xl font-semibold text-primary mt-2">
              {PRICING_MAINTENANCE.range}/month
            </p>
            <p className="text-sm text-text-muted mt-2">
              {PRICING_MAINTENANCE.description}
            </p>
          </GlassCard>
        </div>
      </RevealOnScroll>
    </SectionWrapper>
  );
}
