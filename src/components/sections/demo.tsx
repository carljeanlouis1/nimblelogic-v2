"use client";

import { Phone } from "lucide-react";
import { motion } from "framer-motion";
import { SITE } from "@/lib/constants";
import { SectionWrapper } from "@/components/layout/section-wrapper";
import { RevealOnScroll } from "@/components/shared/reveal-on-scroll";
import { WaveformVisualizer } from "@/components/shared/waveform-visualizer";

export function Demo() {
  return (
    <SectionWrapper
      id="demo"
      background="elevated"
      className="!py-32 lg:!py-40"
    >
      <RevealOnScroll>
        <div className="max-w-4xl mx-auto text-center">
          {/* Label */}
          <p className="text-sm font-semibold tracking-widest uppercase text-primary mb-6">
            LIVE DEMO
          </p>

          {/* Heading */}
          <h2 className="text-display font-bold text-text-primary mb-4">
            Hear It For Yourself
          </h2>

          {/* Subtitle */}
          <p className="text-body-lg text-text-secondary mb-12">
            Call our AI right now. Go ahead &mdash; ask it anything.
          </p>

          {/* Phone Number Centerpiece */}
          <RevealOnScroll delay={0.15}>
            <div className="relative inline-block">
              {/* Radial glow behind number */}
              <div
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[200%] blur-3xl pointer-events-none"
                style={{
                  background:
                    "radial-gradient(circle, rgba(0,212,170,0.12), transparent 70%)",
                }}
                aria-hidden="true"
              />

              {/* Pulsing ring */}
              <div
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[160%] rounded-full border-2 border-primary/30 animate-pulse-ring pointer-events-none"
                aria-hidden="true"
              />

              {/* The phone number */}
              <motion.a
                href={SITE.phoneTel}
                className="relative block text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold gradient-text hover:scale-[1.02] transition-transform duration-300"
                initial={{ scale: 0.95, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              >
                {SITE.phone}
              </motion.a>

              {/* Waveform visualizers flanking the number */}
              <div className="flex items-center justify-between mt-4 px-4">
                <WaveformVisualizer className="opacity-60" />
                <WaveformVisualizer className="opacity-60" />
              </div>
            </div>
          </RevealOnScroll>

          {/* Below number hints */}
          <div className="mt-10">
            {/* Mobile tap hint */}
            <p className="md:hidden flex items-center justify-center gap-2 text-text-muted text-sm">
              <Phone className="w-4 h-4" />
              Tap to call
            </p>

            {/* Availability */}
            <p className="text-text-muted text-sm mt-4">
              Available 24/7 &mdash; nights, weekends, holidays
            </p>
          </div>
        </div>
      </RevealOnScroll>
    </SectionWrapper>
  );
}
