"use client";

import { Check, ArrowRight } from "lucide-react";
import { SITE } from "@/lib/constants";
import { SectionWrapper } from "@/components/layout/section-wrapper";
import { RevealOnScroll } from "@/components/shared/reveal-on-scroll";
import { GlassCard } from "@/components/shared/glass-card";

const OPERATIONS_FEATURES = [
  "Custom workflow automation",
  "Intelligent lead follow-up",
  "Multi-department AI coordination",
  "Dedicated implementation team",
  "Ongoing optimization",
];

export function PricingOperations() {
  return (
    <SectionWrapper id="pricing-operations" background="surface">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-heading font-bold text-text-primary">
          AI Business Operations
        </h2>
        <p className="text-text-secondary text-body-lg mt-4">
          Tailored AI systems built around your workflows.
        </p>
      </div>

      {/* Card */}
      <RevealOnScroll>
        <div className="max-w-2xl mx-auto">
          <GlassCard hover glow="primary">
            <div className="text-center">
              <span className="bg-primary/10 border border-primary/20 text-primary text-xs font-medium px-3 py-1 rounded-full">
                Custom Solutions
              </span>

              <div className="flex items-baseline justify-center gap-2 mt-6">
                <span className="text-sm text-text-muted">Starting at</span>
                <span className="text-4xl font-bold text-text-primary">
                  $1,500
                </span>
              </div>

              <p className="text-sm text-text-muted mt-2">
                Tailored multi-agent systems for your business operations
              </p>
            </div>

            <div className="h-px bg-white/5 my-8" />

            <ul className="space-y-3 max-w-md mx-auto">
              {OPERATIONS_FEATURES.map((feature) => (
                <li key={feature} className="flex items-center gap-3">
                  <Check className="w-4 h-4 shrink-0 text-primary" />
                  <span className="text-sm text-text-secondary">{feature}</span>
                </li>
              ))}
            </ul>

            <div className="text-center mt-8">
              <a
                href={SITE.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gradient inline-flex items-center gap-2 px-8 py-3 rounded-lg text-base font-semibold"
              >
                Book a Discovery Call
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </GlassCard>
        </div>
      </RevealOnScroll>
    </SectionWrapper>
  );
}
