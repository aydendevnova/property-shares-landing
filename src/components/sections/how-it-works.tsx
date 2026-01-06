"use client";

import { Search, ShieldCheck, Wallet } from "lucide-react";
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/motion";
import { GOOGLE_FORM_URL } from "@/consts";



const steps = [
  {
    icon: Search,
    step: "01",
    title: "Discover",
    description: "Browse curated properties and offerings with transparent terms, detailed documentation, and clear investment highlights.",
  },
  {
    icon: ShieldCheck,
    step: "02",
    title: "Verify",
    description: "Complete identity verification and eligibility checks (KYC/AML) in minutes. Your security is our priority.",
  },
  {
    icon: Wallet,
    step: "03",
    title: "Invest",
    description: "Choose an amount, review disclosures, and purchase shares. Start building your real estate portfolio today.",
  },
];

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-32 lg:py-44 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <FadeUp className="text-center max-w-2xl mx-auto mb-16 lg:mb-20">
          <p className="text-sm font-semibold text-primary uppercase tracking-wide mb-3">
            How it works
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight mb-4">
            Investing made simple
          </h2>
          <p className="text-lg text-muted-foreground">
            Three straightforward steps to start building your real estate portfolio
          </p>
        </FadeUp>

        {/* Steps Grid */}
        <StaggerContainer className="grid md:grid-cols-3 gap-8 lg:gap-12 items-stretch" staggerDelay={0.15}>
          {steps.map((step, index) => (
            <StaggerItem key={step.title} className="relative group h-full">
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-[calc(50%+4rem)] w-[calc(100%-4rem)] h-[2px] bg-primary/20" />
              )}

              <div className="relative h-full bg-white rounded-2xl p-8 border border-slate-200 hover:border-primary/20 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5">
                {/* Step Number */}
                <div className="absolute top-3 right-3 h-8 w-14 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-sm font-bold text-primary">{step.step}</span>
                </div>

                {/* Icon */}
                <div className="h-14 w-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/15 transition-colors">
                  <step.icon className="h-7 w-7 text-primary" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold mb-3 text-foreground">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Bottom CTA */}
        <FadeUp delay={0.5} className="mt-16 text-center">
          <a
            href={GOOGLE_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary font-medium hover:underline"
          >
            Get started today
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </FadeUp>
      </div>
    </section>
  );
}
