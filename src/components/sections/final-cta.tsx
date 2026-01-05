"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FadeUp, ScaleIn, motion } from "@/components/motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export function FinalCTASection() {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsSubmitted(true);
    setIsLoading(false);
  }

  return (
    <section className="py-32 lg:py-44 bg-primary relative overflow-hidden">

      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        {/* Content */}
        <FadeUp>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-white mb-4">
            The future of real estate is shared
          </h2>
        </FadeUp>
        <FadeUp delay={0.1}>
          <p className="text-lg text-blue-100 mb-10 max-w-2xl mx-auto">
            Join thousands of investors getting early access to fractional real estate opportunities. 
            Be the first to know when we launch in your area.
          </p>
        </FadeUp>

        {/* Form */}
        <FadeUp delay={0.2}>
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="max-w-lg mx-auto space-y-4">
              <div className="flex flex-col sm:flex-row gap-3">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="h-12 px-4 text-base bg-white border-0 text-foreground placeholder:text-slate-400"
                />
                <Button
                  type="submit"
                  disabled={isLoading}
                  className="h-12 px-6 bg-slate-900 hover:bg-slate-800 text-white font-medium whitespace-nowrap"
                >
                  {isLoading ? (
                    <span className="flex items-center gap-2">
                      <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      Joining...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      Get early access
                      <ArrowRight className="h-4 w-4" />
                    </span>
                  )}
                </Button>
              </div>
              <Input
                type="tel"
                placeholder="Phone number (optional, for SMS updates)"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="h-12 px-4 text-base bg-white/10 border-white/20 text-white placeholder:text-blue-200"
              />
              <p className="text-sm text-blue-200">
                By signing up, you agree to receive updates. No spam, unsubscribe anytime.
              </p>
            </form>
          ) : (
            <ScaleIn>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex items-center justify-center gap-3 p-6 rounded-xl bg-white/10 border border-white/20 max-w-lg mx-auto"
              >
                <CheckCircle2 className="h-6 w-6 text-green-300 flex-shrink-0" />
                <div className="text-left">
                  <p className="font-semibold text-white">You&apos;re on the list!</p>
                  <p className="text-sm text-blue-200">
                    We&apos;ll notify you when Property Shares AI launches in your region.
                  </p>
                </div>
              </motion.div>
            </ScaleIn>
          )}
        </FadeUp>
      </div>
    </section>
  );
}
