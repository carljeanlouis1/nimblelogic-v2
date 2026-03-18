"use client";

import { motion } from "framer-motion";
import { Phone, Bot, BarChart3, ArrowRight, ChevronDown, Check } from "lucide-react";
import { SITE } from "@/lib/constants";
import { heroStagger, heroChild, springIn } from "@/lib/animations";
import { GradientText } from "@/components/shared/gradient-text";
import { GradientMesh } from "@/components/effects/gradient-mesh";
import { GridPattern } from "@/components/effects/grid-pattern";

/* ------------------------------------------------------------------ */
/*  Floating glass card used in the right-column visual               */
/* ------------------------------------------------------------------ */
function GlassCard({
  icon: Icon,
  iconColor,
  label,
  subtext,
  className,
}: {
  icon: React.ElementType;
  iconColor: string;
  label: string;
  subtext: string;
  className?: string;
}) {
  return (
    <div
      className={`glass rounded-2xl p-5 flex flex-col gap-3 shadow-glass ${className ?? ""}`}
    >
      <div
        className="w-10 h-10 rounded-lg flex items-center justify-center"
        style={{ background: `${iconColor}15` }}
      >
        <Icon className="w-5 h-5" style={{ color: iconColor }} />
      </div>
      <div>
        <p className="text-sm font-semibold text-text-primary">{label}</p>
        <p className="text-xs text-text-muted mt-0.5">{subtext}</p>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Hero Section                                                       */
/* ------------------------------------------------------------------ */
export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen overflow-hidden"
      aria-label="Hero"
    >
      {/* ---- Background layers ---- */}
      <div className="absolute inset-0" aria-hidden="true">
        <GradientMesh />
        <GridPattern />
      </div>

      {/* ---- Content ---- */}
      <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-6 lg:px-8 flex items-center min-h-screen">
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center py-20 lg:py-0">

          {/* ========== LEFT COLUMN ========== */}
          <motion.div
            className="lg:col-span-7"
            variants={heroStagger}
            initial="hidden"
            animate="visible"
          >
            {/* Badge pill */}
            <motion.div variants={heroChild}>
              <span className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 border border-[#00D4AA]/20 bg-[#00D4AA]/10">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00D4AA] opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00D4AA]" />
                </span>
                <span className="text-sm text-[#00D4AA] font-medium">
                  AI-Powered Automation
                </span>
              </span>
            </motion.div>

            {/* H1 */}
            <motion.h1
              variants={heroChild}
              className="mt-6 text-4xl sm:text-5xl lg:text-display-xl font-bold tracking-tight leading-[1.1] text-balance"
            >
              <span className="text-text-primary">
                Intelligent Automation
              </span>
              <br />
              <GradientText>That Actually Works</GradientText>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              variants={heroChild}
              className="text-body-lg text-text-secondary max-w-xl mt-6"
            >
              From AI phone agents to personal assistants to full business
              operations. Built in NYC. Backed by real humans.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={heroChild}
              className="flex flex-wrap items-center gap-4 mt-8"
            >
              <a
                href="#demo"
                className="btn-gradient px-7 py-3 rounded-lg text-base font-semibold inline-flex items-center gap-2"
              >
                Try Our AI Live
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href={SITE.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost px-7 py-3 rounded-lg text-base inline-flex items-center gap-2"
              >
                Book a Free Call
              </a>
            </motion.div>

            {/* Trust line */}
            <motion.div
              variants={heroChild}
              className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-text-muted"
            >
              {["No contracts", "Live in 48 hours", "Cancel anytime"].map(
                (item) => (
                  <span key={item} className="inline-flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5 text-[#00D4AA]" />
                    {item}
                  </span>
                )
              )}
            </motion.div>
          </motion.div>

          {/* ========== RIGHT COLUMN (desktop visual) ========== */}
          <motion.div
            className="hidden lg:block lg:col-span-5"
            variants={springIn}
            initial="hidden"
            animate="visible"
          >
            <div className="relative w-full h-[600px]">
              {/* Background orbs */}
              <div
                className="absolute w-72 h-72 rounded-full blur-3xl"
                style={{
                  top: "25%",
                  right: "25%",
                  background: "rgba(0, 212, 170, 0.10)",
                }}
                aria-hidden="true"
              />
              <div
                className="absolute w-56 h-56 rounded-full blur-3xl"
                style={{
                  bottom: "33%",
                  left: "25%",
                  background: "rgba(14, 165, 233, 0.08)",
                }}
                aria-hidden="true"
              />

              {/* Card 1 - AI Phone Agent */}
              <div
                className="absolute animate-float"
                style={{ top: "8%", right: "5%", transform: "rotate(3deg)" }}
              >
                <GlassCard
                  icon={Phone}
                  iconColor="#00D4AA"
                  label="AI Phone Agent"
                  subtext={"24/7 \u00B7 Every call answered"}
                  className="w-[200px] h-[140px]"
                />
              </div>

              {/* Card 2 - AI Assistant */}
              <div
                className="absolute animate-float-delayed"
                style={{ top: "38%", left: "3%", transform: "rotate(-2deg)" }}
              >
                <GlassCard
                  icon={Bot}
                  iconColor="#0EA5E9"
                  label="AI Assistant"
                  subtext={"Email \u00B7 Calendar \u00B7 Research"}
                  className="w-[200px] h-[140px]"
                />
              </div>

              {/* Card 3 - Operations */}
              <div
                className="absolute animate-float"
                style={{ bottom: "10%", right: "10%", transform: "rotate(1deg)" }}
              >
                <GlassCard
                  icon={BarChart3}
                  iconColor="#00D4AA"
                  label="Operations"
                  subtext="Scale without headcount"
                  className="w-[180px] h-[130px]"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* ---- Scroll indicator ---- */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 z-10">
        <span className="text-xs text-text-muted tracking-widest uppercase">
          Scroll
        </span>
        <ChevronDown className="w-5 h-5 text-text-muted animate-bounce" />
      </div>
    </section>
  );
}
