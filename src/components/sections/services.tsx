"use client";

import { SERVICES } from "@/lib/constants";
import { SectionWrapper } from "@/components/layout/section-wrapper";
import { RevealOnScroll } from "@/components/shared/reveal-on-scroll";
import { GlassCard } from "@/components/shared/glass-card";
import { GradientText } from "@/components/shared/gradient-text";
import { Check, ArrowRight, Bot, Users } from "lucide-react";

const phoneAgent = SERVICES[0];
const personalAssistant = SERVICES[1];
const businessOps = SERVICES[2];

const secondaryCards = [
  {
    service: personalAssistant,
    icon: Bot,
  },
  {
    service: businessOps,
    icon: Users,
  },
] as const;

export function Services() {
  return (
    <SectionWrapper id="services">
      {/* Heading */}
      <RevealOnScroll>
        <div className="text-center mb-16">
          <GradientText as="h2" className="text-display font-bold">
            What We Build
          </GradientText>
          <p className="text-text-secondary text-body-lg max-w-2xl mx-auto mt-4">
            Three AI solutions, one goal: give you back your time.
          </p>
        </div>
      </RevealOnScroll>

      {/* AI Phone Agent — Hero Card */}
      <RevealOnScroll>
        <div className="animated-border">
          <div className="bg-surface rounded-2xl p-8 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Left Column */}
              <div>
                <span className="inline-block bg-primary/10 border border-primary/20 text-primary text-sm font-medium px-3 py-1 rounded-full">
                  Flagship Service
                </span>
                <h3 className="text-heading font-bold text-text-primary mt-4">
                  {phoneAgent.title}
                </h3>
                <p className="text-body-lg text-text-secondary mt-4">
                  {phoneAgent.description}
                </p>
                <p className="text-sm text-text-muted mt-4 italic">
                  Built for: {phoneAgent.audience}
                </p>
              </div>

              {/* Right Column */}
              <div className="flex flex-col">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {phoneAgent.features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <Check className="text-primary w-5 h-5 mt-0.5 flex-shrink-0" />
                      <span className="text-text-secondary text-sm">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
                <a
                  href="#pricing"
                  className="btn-gradient px-6 py-3 rounded-lg mt-8 inline-flex items-center gap-2 w-fit"
                >
                  Get Started
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>

      {/* AI Personal Assistant + AI Business Ops */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
        {secondaryCards.map(({ service, icon: Icon }, index) => (
          <RevealOnScroll key={service.id} delay={0.1 * (index + 1)}>
            <GlassCard hover glow="primary" className="h-full flex flex-col">
              {/* Icon */}
              <div className="rounded-lg bg-secondary/10 p-3 w-fit">
                <Icon className="w-6 h-6 text-secondary" />
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-text-primary mt-4">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-text-secondary mt-2">{service.description}</p>

              {/* Features */}
              <div className="mt-4 space-y-2.5">
                {service.features.map((feature, featureIndex) => (
                  <div
                    key={featureIndex}
                    className="flex items-start gap-3"
                  >
                    <Check className="text-primary w-4 h-4 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-text-secondary">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              {/* Setup note */}
              {"setupNote" in service && service.setupNote && (
                <p className="text-sm text-text-muted italic mt-4">
                  {service.setupNote}
                </p>
              )}

              {/* Learn More link — pushed to bottom */}
              <div className="mt-auto pt-6">
                <a
                  href="#pricing"
                  className="text-primary text-sm font-medium inline-flex items-center gap-1 hover:gap-2 transition-all"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </GlassCard>
          </RevealOnScroll>
        ))}
      </div>
    </SectionWrapper>
  );
}
