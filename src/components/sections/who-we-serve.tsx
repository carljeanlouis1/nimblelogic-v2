"use client";

import { SectionWrapper } from "@/components/layout/section-wrapper";
import { RevealOnScroll } from "@/components/shared/reveal-on-scroll";
import { GlassCard } from "@/components/shared/glass-card";
import { GradientText } from "@/components/shared/gradient-text";
import { Wrench, Scale, Heart, Briefcase, type LucideIcon } from "lucide-react";

interface IndustryCard {
  icon: LucideIcon;
  title: string;
  subtitle: string;
  description: string;
}

const INDUSTRIES: IndustryCard[] = [
  {
    icon: Wrench,
    title: "Home Services",
    subtitle:
      "Plumbers, HVAC, Electricians, Roofers, Landscapers, Pest Control",
    description:
      "Your hands are full on a job site. Every missed call is a lost job. Our AI answers, qualifies the lead, and books directly into your calendar — 24/7.",
  },
  {
    icon: Scale,
    title: "Legal",
    subtitle: "Solo Attorneys, Small Law Firms, Legal Intake",
    description:
      "Every unanswered call is a potential $5,000+ retainer walking to your competitor. AI handles intake questions, captures case details, and schedules consultations.",
  },
  {
    icon: Heart,
    title: "Healthcare",
    subtitle: "Dental Offices, Med Spas, Chiropractors, Clinics",
    description:
      "Patients call to book, not to leave voicemails. AI manages appointment scheduling, answers insurance questions, and handles after-hours calls so your front desk isn't overwhelmed.",
  },
  {
    icon: Briefcase,
    title: "Professional Services",
    subtitle:
      "Real Estate Agents, Insurance Brokers, Consultants, Salons & Spas",
    description:
      "When you're with a client, you can't answer the phone. AI captures every inquiry, qualifies prospects, and books follow-ups — so you never lose business to a missed call.",
  },
];

export function WhoWeServe() {
  return (
    <SectionWrapper id="who-we-serve" background="surface">
      {/* Heading */}
      <RevealOnScroll>
        <div className="text-center mb-16">
          <GradientText as="h2" className="text-display font-bold">
            Who We Serve
          </GradientText>
          <p className="text-text-secondary text-center max-w-2xl mx-auto mt-4">
            AI automation for businesses that can&apos;t afford to miss a single
            call.
          </p>
        </div>
      </RevealOnScroll>

      {/* Industry Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {INDUSTRIES.map((industry, index) => {
          const Icon = industry.icon;
          return (
            <RevealOnScroll key={industry.title} delay={index * 0.1}>
              <GlassCard hover glow="primary" className="h-full flex flex-col">
                {/* Icon */}
                <div className="w-10 h-10 p-2 rounded-lg bg-primary/10 text-primary">
                  <Icon className="w-full h-full" />
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold text-text-primary mt-4">
                  {industry.title}
                </h3>

                {/* Subtitle */}
                <p className="text-sm text-text-muted mt-1">
                  {industry.subtitle}
                </p>

                {/* Description */}
                <p className="text-sm text-text-secondary mt-3">
                  {industry.description}
                </p>
              </GlassCard>
            </RevealOnScroll>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
