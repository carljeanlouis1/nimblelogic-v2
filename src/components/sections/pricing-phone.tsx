"use client";

import { Check } from "lucide-react";
import { PRICING_PHONE, SITE } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { SectionWrapper } from "@/components/layout/section-wrapper";
import { RevealOnScroll } from "@/components/shared/reveal-on-scroll";
import { GlassCard } from "@/components/shared/glass-card";
import { GradientText } from "@/components/shared/gradient-text";

function PricingCard({
  tier,
  delay,
}: {
  tier: (typeof PRICING_PHONE)[number];
  delay: number;
}) {
  const isPopular = tier.popular;

  const cardContent = (
    <div className={cn(isPopular && "bg-surface rounded-2xl p-8 relative z-10")}>
      {/* Popular badge */}
      {isPopular && (
        <div className="mb-4">
          <span className="bg-gradient-accent text-background text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
            Most Popular
          </span>
        </div>
      )}

      {/* Name */}
      <h3 className="text-lg font-semibold text-text-primary">{tier.name}</h3>

      {/* Price */}
      <div className="flex items-baseline gap-1 mt-2">
        <span
          className={cn(
            "font-bold text-text-primary",
            isPopular ? "text-5xl" : "text-4xl"
          )}
        >
          ${tier.price}
        </span>
        <span className="text-text-muted text-lg">{tier.period}</span>
      </div>

      {/* Description */}
      <p className="text-sm text-text-muted mt-2">{tier.description}</p>

      {/* Separator */}
      <div className="h-px bg-white/5 my-6" />

      {/* Features */}
      <ul className="space-y-3">
        {tier.features.map((feature) => (
          <li key={feature} className="flex items-center gap-3">
            <Check
              className={cn(
                "w-4 h-4 shrink-0",
                isPopular ? "text-primary" : "text-text-muted"
              )}
            />
            <span className="text-sm text-text-secondary">{feature}</span>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <a
        href={tier.name === "Enterprise" ? `mailto:${SITE.email}` : SITE.bookingUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          "w-full py-3 rounded-lg text-center mt-8 block font-semibold",
          isPopular ? "btn-gradient" : "btn-ghost"
        )}
      >
        {tier.cta}
      </a>
    </div>
  );

  if (isPopular) {
    return (
      <RevealOnScroll delay={delay}>
        <div className="animated-border shadow-glow-md lg:scale-105">
          {cardContent}
        </div>
      </RevealOnScroll>
    );
  }

  return (
    <RevealOnScroll delay={delay}>
      <GlassCard hover>{cardContent}</GlassCard>
    </RevealOnScroll>
  );
}

export function PricingPhone() {
  return (
    <SectionWrapper id="pricing">
      {/* Heading */}
      <div className="text-center mb-12">
        <GradientText as="h2" className="text-display font-bold">
          AI Voice Agent
        </GradientText>
        <p className="text-text-secondary text-body-lg mt-4">
          Simple pricing, no surprises. Cancel anytime.
        </p>
      </div>

      {/* Cards grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 items-center">
        {PRICING_PHONE.map((tier, i) => (
          <PricingCard key={tier.name} tier={tier} delay={i * 0.1} />
        ))}
      </div>
    </SectionWrapper>
  );
}
