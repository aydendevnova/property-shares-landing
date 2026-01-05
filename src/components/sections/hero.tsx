"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { RotatingWords } from "@/components/rotating-words";
import { FadeUp, SlideInLeft, SlideInRight, ScaleIn, motion } from "@/components/motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export function HeroSection() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsSubmitted(true);
    setIsLoading(false);
  }

  return (
    <section className="relative min-h-screen flex items-center pt-16 bg-blue-50">
      <div className="mx-auto max-w-[90rem] px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Content */}
          <SlideInLeft className="space-y-8">
            {/* Badge */}
            <FadeUp delay={0.1}>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                <span className="text-sm font-medium text-primary">Now accepting early access signups</span>
              </div>
            </FadeUp>

            {/* Headline */}
            <FadeUp delay={0.2}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold leading-[1.1] tracking-tight">
                Real estate investing,{" "}
                <span className="text-primary">
                  <RotatingWords
                    words={["simplified", "accessible", "diversified", "transparent"]}
                    interval={2500}
                  />
                </span>
              </h1>
            </FadeUp>

            {/* Subheadline */}
            <FadeUp delay={0.3}>
              <p className="text-lg sm:text-xl text-muted-foreground max-w-xl leading-relaxed">
                Buy fractional shares of real properties from your phone. Start small, 
                diversify across multiple homes, and track everything in one place.
              </p>
            </FadeUp>

            {/* Waitlist Form */}
            <FadeUp delay={0.4}>
              <div id="waitlist" className="space-y-4">
                {!isSubmitted ? (
                  <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md">
                    <Input
                      type="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="h-12 px-4 text-base bg-white border-border focus:border-primary"
                    />
                    <Button
                      type="submit"
                      disabled={isLoading}
                      className="h-12 px-6 bg-primary hover:bg-primary/90 text-white font-medium whitespace-nowrap"
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
                          Join waitlist
                          <ArrowRight className="h-4 w-4" />
                        </span>
                      )}
                    </Button>
                  </form>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex items-center gap-3 p-4 rounded-lg bg-green-50 border border-green-200 max-w-md"
                  >
                    <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0" />
                    <p className="text-sm text-green-800">
                      You&apos;re on the list! We&apos;ll notify you when your region opens.
                    </p>
                  </motion.div>
                )}
                <p className="text-sm text-muted-foreground">
                  Early access is limited. We&apos;ll notify you when your region opens.
                </p>
              </div>
            </FadeUp>

            {/* Social Proof */}
            <FadeUp delay={0.5}>
              <div className="flex items-center gap-4 pt-4">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.6 + i * 0.1, duration: 0.3 }}
                      className="h-8 w-8 rounded-full bg-gradient-to-br from-slate-200 to-slate-300 border-2 border-white flex items-center justify-center text-xs font-medium text-slate-500"
                    >
                      {String.fromCharCode(64 + i)}
                    </motion.div>
                  ))}
                </div>
                <p className="text-sm text-muted-foreground">
                  <span className="font-semibold text-foreground">2,400+</span> investors already on the waitlist
                </p>
              </div>
            </FadeUp>
          </SlideInLeft>

          {/* Right Column - Property Card Visual */}
          <SlideInRight className="relative lg:pl-8" delay={0.2}>
            {/* Main Property Card */}
            <ScaleIn delay={0.3}>
              <div className="relative bg-white rounded-2xl shadow-2xl shadow-slate-200/50 border border-slate-100 overflow-hidden">
                {/* Property Image */}
                <div className="aspect-[4/3] bg-slate-100 relative">
                  {/* Sample label */}
                  <div className="absolute top-4 left-4 px-2.5 py-1 rounded-full bg-white/90 backdrop-blur text-xs font-medium text-slate-700">
                    Sample Listing
                  </div>
                  {/* House illustration */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <svg className="w-32 h-32 text-slate-300" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 3L4 9v12h16V9l-8-6zm6 16h-3v-6H9v6H6v-9.5l6-4.5 6 4.5V19z"/>
                    </svg>
                  </div>
                </div>

                {/* Property Details */}
                <div className="p-6 space-y-4">
                  <div>
                    <p className="text-sm text-muted-foreground">Phoenix, AZ</p>
                    <h3 className="text-lg font-semibold text-foreground mt-1">
                      Modern Single Family Home
                    </h3>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <p className="text-xs text-muted-foreground uppercase tracking-wide">Min. Investment</p>
                      <p className="text-lg font-semibold text-primary">$100</p>
                    </div>
                    <div className="space-y-1">
                      <p className="text-xs text-muted-foreground uppercase tracking-wide">Hold Period</p>
                      <p className="text-lg font-semibold text-foreground">12-24 mo</p>
                    </div>
                  </div>

                  <div className="pt-2">
                    <div className="flex items-center justify-between text-sm mb-2">
                      <span className="text-muted-foreground">Funding progress</span>
                      <span className="font-medium text-foreground">68%</span>
                    </div>
                    <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: "68%" }}
                        transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
                        className="h-full bg-primary rounded-full"
                      />
                    </div>
                  </div>

                  <Button className="w-full h-11 bg-primary hover:bg-primary/90 text-white font-medium">
                    View Details
                  </Button>
                </div>
              </div>
            </ScaleIn>

            {/* Floating UI Elements */}
            <motion.div
              initial={{ opacity: 0, y: 20, x: 20 }}
              animate={{ opacity: 1, y: 0, x: 0 }}
              transition={{ delay: 0.9, duration: 0.5 }}
              className="absolute -top-4 -right-4 p-3 bg-white rounded-xl shadow-lg border border-slate-100 hidden lg:flex items-center gap-3"
            >
              <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center">
                <CheckCircle2 className="h-5 w-5 text-green-600" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Verification</p>
                <p className="text-sm font-medium text-foreground">Complete</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: -20, x: -20 }}
              animate={{ opacity: 1, y: 0, x: 0 }}
              transition={{ delay: 1, duration: 0.5 }}
              className="absolute -bottom-4 -left-4 p-3 bg-white rounded-xl shadow-lg border border-slate-100 hidden lg:flex items-center gap-3"
            >
              <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                <svg className="h-5 w-5 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                </svg>
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Starting from</p>
                <p className="text-sm font-medium text-foreground">$100</p>
              </div>
            </motion.div>
          </SlideInRight>
        </div>
      </div>
    </section>
  );
}
