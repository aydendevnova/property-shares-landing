"use client";

import { TrendingUp, LayoutGrid, FileCheck, Zap } from "lucide-react";
import { FadeUp, SlideInLeft, StaggerContainer, StaggerItem } from "@/components/motion";

const features = [
  {
    icon: TrendingUp,
    title: "Start small",
    description: "Participate without a mortgage or property management burden. Begin your real estate journey with as little as $100.",
  },
  {
    icon: LayoutGrid,
    title: "Diversify",
    description: "Spread exposure across multiple properties and locations. Reduce risk by not putting all your eggs in one basket.",
  },
  {
    icon: FileCheck,
    title: "Transparent process",
    description: "Clear terms, documents, and status updates. Know exactly what you're investing in with full disclosure.",
  },
  {
    icon: Zap,
    title: "Built for speed",
    description: "A streamlined flow from offering to participation. Modern technology means faster, more efficient investing.",
  },
];

export function WhyPropertySharesSection() {
  return (
    <section className="py-32 lg:py-44 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Column - Content */}
          <SlideInLeft className="space-y-8">
            <div>
              <FadeUp>
                <p className="text-sm font-semibold text-primary uppercase tracking-wide mb-3">
                  Why Property Shares AI
                </p>
              </FadeUp>
              <FadeUp delay={0.1}>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight mb-4">
                  Real estate ownership,{" "}
                  <span className="text-primary">reimagined</span>
                </h2>
              </FadeUp>
              <FadeUp delay={0.2}>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Traditional real estate investing requires large capital, complex paperwork, and ongoing management. 
                  We&apos;re changing that with fractional ownership that puts you in control.
                </p>
              </FadeUp>
            </div>

            {/* Stats */}
            <FadeUp delay={0.3}>
              <div className="grid grid-cols-3 gap-6 pt-4">
                <div>
                  <p className="text-3xl font-bold text-primary">$100</p>
                  <p className="text-sm text-muted-foreground mt-1">Minimum investment</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-foreground">3 min</p>
                  <p className="text-sm text-muted-foreground mt-1">Average signup</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-foreground">24/7</p>
                  <p className="text-sm text-muted-foreground mt-1">Portfolio access</p>
                </div>
              </div>
            </FadeUp>
          </SlideInLeft>

          {/* Right Column - Features Grid */}
          <StaggerContainer className="grid sm:grid-cols-2 gap-4" staggerDelay={0.1}>
            {features.map((feature) => (
              <StaggerItem key={feature.title}>
                <div className="p-6 bg-white rounded-xl border border-slate-100 hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 h-full">
                  <div className="h-11 w-11 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <feature.icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}
