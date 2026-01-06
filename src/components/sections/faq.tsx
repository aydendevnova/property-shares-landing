"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/motion";

const faqs = [
  {
    question: "What am I actually buying?",
    answer: "When you invest through Property Shares AI, you're purchasing fractional ownership shares in a specific real estate property or portfolio. These shares represent your proportional ownership stake and entitle you to potential returns based on property performance.",
  },
  {
    question: "What are the risks of investing?",
    answer: "Like all investments, real estate carries risks including market fluctuations, property-specific issues, illiquidity, and potential loss of principal. We recommend only investing amounts you can afford to have illiquid for the projected hold period. Full risk disclosures are provided for each offering.",
  },
  {
    question: "Who can invest?",
    answer: "Investment eligibility varies by offering type and jurisdiction. Some offerings are open to all investors, while others may be limited to accredited investors or specific jurisdictions. Eligibility requirements are clearly stated for each opportunity.",
  },
  {
    question: "What's the minimum investment?",
    answer: "Minimum investments vary by property but typically start as low as $100. This allows you to diversify across multiple properties rather than concentrating your investment in a single asset.",
  },
  {
    question: "How long is the typical hold period?",
    answer: "Hold periods vary by property and investment strategy, typically ranging from 12 to 36 months. Each offering clearly states its projected timeline. Note that these are projections and actual timelines may vary.",
  },
  {
    question: "How do I track my investments?",
    answer: "Once invested, you'll have access to a personal dashboard showing your portfolio, property updates, and performance metrics. We provide regular updates on property status and any distributions.",
  },
  {
    question: "Is my investment liquid?",
    answer: "Real estate investments are generally illiquid. While we're working on secondary market solutions, you should plan to hold your investment for the projected hold period. This is not a trading platform for quick buying and selling.",
  },
  {
    question: "How is Property Shares AI regulated?",
    answer: "We operate within established securities regulatory frameworks and work with registered broker-dealers and transfer agents. All offerings comply with applicable securities laws and regulations.",
  },
];

export function FAQSection() {
  return (
    <section id="faq" className="py-32 lg:py-44 bg-slate-50">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <FadeUp className="text-center mb-12 lg:pb-16">
          <p className="text-sm font-semibold text-primary uppercase tracking-wide mb-3">
            FAQ
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight mb-4">
            Common questions
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to know about investing with Property Shares AI
          </p>
        </FadeUp>

        {/* FAQ Accordion */}
        <StaggerContainer staggerDelay={0.05}>
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <StaggerItem key={index}>
                <AccordionItem
                  value={`item-${index}`}
                  className="border border-slate-200 rounded-xl px-6 data-[state=open]:bg-slate-50/50 transition-colors"
                >
                  <AccordionTrigger className="text-left text-base font-medium hover:no-underline py-5">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </StaggerItem>
            ))}
          </Accordion>
        </StaggerContainer>

        {/* Contact CTA */}
        <FadeUp delay={0.3} className="mt-18 text-center">
          <p className="text-muted-foreground mb-4">
            Still have questions?
          </p>
          <a
            href="mailto:private@exponentlabs.ai"
            className="inline-flex items-center gap-2 text-primary font-medium hover:underline"
          >
            Contact our team
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </FadeUp>
      </div>
    </section>
  );
}
