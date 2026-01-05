"use client";

import { Shield, Lock, FileCheck, Building, BadgeCheck, Scale } from "lucide-react";

const trustFeatures = [
  {
    icon: Shield,
    title: "KYC/AML Verified",
    description: "Industry-standard identity verification and anti-money laundering compliance.",
  },
  {
    icon: Lock,
    title: "Secure Custody",
    description: "Your assets are held with regulated custodians for maximum protection.",
  },
  {
    icon: FileCheck,
    title: "Full Disclosure",
    description: "Transparent documentation and clear terms for every investment opportunity.",
  },
  {
    icon: Building,
    title: "Regulated Framework",
    description: "Operating within established securities regulatory pathways.",
  },
];

const compliancePartners = [
  "SEC Compliant",
  "FINRA Registered",
  "SOC 2 Type II",
  "256-bit Encryption",
];

export function TrustComplianceSection() {
  return (
    <section id="trust" className="py-32 lg:py-44 bg-slate-900 text-white relative overflow-hidden">
  

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 mb-6">
            <BadgeCheck className="h-4 w-4 text-green-400" />
            <span className="text-sm font-medium text-white/90">Compliance-first approach</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight mb-4 text-white">
            Trust & Security
          </h2>
          <p className="text-lg text-slate-400">
            Property Shares AI is designed to support standard investor onboarding checks, 
            with security and compliance at our core.
          </p>
        </div>

        {/* Trust Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {trustFeatures.map((feature) => (
            <div
              key={feature.title}
              className="p-6 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300"
            >
              <div className="h-12 w-12 rounded-lg bg-primary/20 flex items-center justify-center mb-4">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-white">
                {feature.title}
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Compliance Badges */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
          {compliancePartners.map((partner) => (
            <div
              key={partner}
              className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-slate-300"
            >
              {partner}
            </div>
          ))}
        </div>

        {/* Disclaimer */}
        <div className="max-w-3xl mx-auto p-6 rounded-xl bg-white/5 border border-white/10">
          <div className="flex items-start gap-4">
            <Scale className="h-6 w-6 text-slate-400 flex-shrink-0 mt-0.5" />
            <div className="space-y-2">
              <h4 className="font-semibold text-white">Important Disclosure</h4>
              <p className="text-sm text-slate-400 leading-relaxed">
                This website is for informational purposes only and is not an offer to sell or a solicitation 
                to buy securities. Offerings, eligibility, and availability vary by jurisdiction and offering type. 
                Investments involve risk, including the possible loss of principal. Past performance is not indicative 
                of future results. Examples shown are illustrative only.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

