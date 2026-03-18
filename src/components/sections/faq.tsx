"use client";

import { FAQ_ITEMS, SITE } from "@/lib/constants";
import { SectionWrapper } from "@/components/layout/section-wrapper";
import { RevealOnScroll } from "@/components/shared/reveal-on-scroll";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

export function FAQ() {
  return (
    <SectionWrapper id="faq" background="surface" maxWidth="5xl">
      {/* Heading */}
      <RevealOnScroll>
        <h2 className="text-display font-bold text-text-primary text-center mb-4">
          Frequently Asked Questions
        </h2>
        <p className="text-text-secondary text-center mb-12">
          Got questions? We&apos;ve got answers.
        </p>
      </RevealOnScroll>

      {/* Accordion */}
      <RevealOnScroll delay={0.15}>
        <Accordion className="max-w-3xl mx-auto">
          {FAQ_ITEMS.map((item, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-surface rounded-xl px-6 mb-3 border border-white/5 hover:border-white/10 transition-colors"
            >
              <AccordionTrigger className="text-left text-body font-medium text-text-primary py-5 no-underline hover:no-underline">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-text-secondary text-body pb-5">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </RevealOnScroll>

      {/* Bottom CTA */}
      <RevealOnScroll delay={0.3}>
        <div className="mt-12 text-center">
          <p className="text-text-secondary">
            Still have questions?{" "}
            <a
              href={`mailto:${SITE.email}`}
              className="text-[#00D4AA] font-medium hover:underline"
            >
              Get in touch
            </a>
          </p>
        </div>
      </RevealOnScroll>
    </SectionWrapper>
  );
}
