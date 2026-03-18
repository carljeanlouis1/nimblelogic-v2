"use client";

import { HOW_IT_WORKS, SITE } from "@/lib/constants";
import { SectionWrapper } from "@/components/layout/section-wrapper";
import { RevealOnScroll } from "@/components/shared/reveal-on-scroll";
import { Phone, Wrench, Rocket, ArrowRight } from "lucide-react";

const STEP_ICONS = [Phone, Wrench, Rocket] as const;

export function HowItWorks() {
  return (
    <SectionWrapper id="how-it-works">
      {/* Heading */}
      <RevealOnScroll>
        <h2 className="text-display font-bold text-text-primary text-center mb-4">
          How It Works
        </h2>
        <p className="text-text-secondary text-center max-w-2xl mx-auto mb-16">
          Three simple steps to never missing a call again.
        </p>
      </RevealOnScroll>

      {/* Steps — horizontal on desktop, vertical on mobile */}
      <div className="flex flex-col lg:flex-row items-center lg:items-start lg:justify-between relative">
        {HOW_IT_WORKS.map((item, index) => {
          const Icon = STEP_ICONS[index];

          return (
            <div key={item.step} className="contents">
              {/* Vertical connecting line (mobile only, between steps) */}
              {index > 0 && (
                <div
                  className="h-8 border-l-2 border-dashed border-white/10 lg:hidden"
                  aria-hidden="true"
                />
              )}

              <RevealOnScroll
                delay={index * 0.15}
                className="text-center flex-1 relative z-10"
              >
                {/* Number circle */}
                <div
                  className="w-14 h-14 rounded-full mx-auto flex items-center justify-center"
                  style={{
                    background: "linear-gradient(135deg, #00D4AA, #0EA5E9)",
                  }}
                >
                  <span className="text-[#0A0F1C] font-bold text-lg">
                    {item.step}
                  </span>
                </div>

                {/* Icon */}
                <div className="mt-6">
                  <Icon className="w-6 h-6 mx-auto text-[#00D4AA]" />
                </div>

                {/* Title */}
                <h3 className="mt-4 text-lg font-semibold text-text-primary">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="mt-2 text-sm text-text-secondary max-w-[200px] mx-auto">
                  {item.description}
                </p>
              </RevealOnScroll>

              {/* Horizontal connecting line (desktop only, between steps) */}
              {index < HOW_IT_WORKS.length - 1 && (
                <div
                  className="hidden lg:block flex-1 relative self-stretch"
                  aria-hidden="true"
                >
                  <div className="absolute top-7 inset-x-0 border-t-2 border-dashed border-white/10" />
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* CTA */}
      <RevealOnScroll delay={0.4}>
        <div className="text-center mt-16">
          <a
            href={SITE.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gradient px-8 py-3 rounded-lg text-base font-semibold inline-flex items-center gap-2"
          >
            Book Your Discovery Call
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </RevealOnScroll>
    </SectionWrapper>
  );
}
