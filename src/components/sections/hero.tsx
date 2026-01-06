"use client";

import { useRef } from "react";
import Image from "next/image";
import { useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { RotatingWords } from "@/components/rotating-words";
import { FadeUp, SlideInLeft, motion } from "@/components/motion";
import { ArrowRight } from "lucide-react";
import { GOOGLE_FORM_URL } from "@/consts";


export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  // Phone parallax - moves up as user scrolls down
  const phoneY = useTransform(scrollYProgress, (v: number) => v * -280);
  // Decorative elements parallax - different speeds for depth
  const bubble1Y = useTransform(scrollYProgress, (v: number) => v * -80);
  const bubble2Y = useTransform(scrollYProgress, (v: number) => v * -120);
  const sliderY = useTransform(scrollYProgress, (v: number) => v * -60);

  return (
    <section ref={sectionRef} className="relative min-h-screen flex items-center pt-16 bg-gradient-to-b from-slate-50 to-white overflow-hidden">
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
                <span className="text-sm font-medium text-primary">Sign up now for early access</span>
              </div>
            </FadeUp>

            {/* Headline */}
            <FadeUp delay={0.2}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold leading-[1.1] tracking-tight">
                The future of real estate wealth is{" "}
                <span className="text-primary">
                  <RotatingWords
                    words={["shared", "accessible", "diversified", "transparent"]}
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

            {/* CTA Button */}
            <FadeUp delay={0.4}>
              <div className="space-y-4">
                <Button
                  asChild
                  className="h-12 px-8 bg-primary hover:bg-primary/90 text-white font-medium"
                >
                  <a href={GOOGLE_FORM_URL} target="_blank" rel="noopener noreferrer">
                    <span className="flex items-center gap-2">
                      Get early access
                      <ArrowRight className="h-4 w-4" />
                    </span>
                  </a>
                </Button>
                <p className="text-sm text-muted-foreground">
                  Early access is limited. We&apos;ll notify you when your region opens.
                </p>
              </div>
            </FadeUp>

         
          </SlideInLeft>

          {/* Right Column - Phone Mockup with Decorative Elements */}
          <div className="relative lg:pl-8 flex items-center justify-center">
            {/* Amount Slider Card - Decorative */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              style={{ y: sliderY }}
              className="absolute left-0 lg:-left-8 top-1/3 z-20 hidden lg:block"
            >
              <div className="bg-white rounded-xl shadow-xl border border-slate-100 p-4 w-52">
                <p className="text-xs text-slate-500 mb-1">Amount: <span className="text-slate-900 font-medium">$8,545.00</span></p>
                <div className="relative mt-3">
                  {/* Slider track */}
                  <div className="h-1.5 bg-slate-100 rounded-full w-full">
                    <div className="h-1.5 bg-primary rounded-full" style={{ width: "46%" }} />
                  </div>
                  {/* Slider thumb */}
                  <div 
                    className="absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-white border-2 border-primary rounded-full shadow-md"
                    style={{ left: "46%" }}
                  />
                </div>
                <div className="flex justify-between mt-2 text-xs text-slate-400">
                  <span>$0</span>
                  <span className="text-primary font-medium">$4,600</span>
                  <span>$10,000</span>
                </div>
              </div>
            </motion.div>

            {/* "Share In Real Estate" Bubble - Top Right */}
            <motion.div
              initial={{ opacity: 0, x: 40, y: -20 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ delay: 0.9, duration: 0.6 }}
              style={{ y: bubble1Y }}
              className="absolute -right-4 lg:right-0 top-8 z-20 hidden sm:block"
            >
              <div className="bg-slate-900 text-white px-4 py-2.5 rounded-full text-sm font-medium shadow-lg">
                Share In Real Estate
              </div>
            </motion.div>

            {/* Phone Mockup with Parallax */}
            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
              style={{ y: phoneY }}
              className="relative z-10"
            >
              <div className="relative w-[280px] sm:w-[320px] lg:w-[380px]">
                <Image
                  src="/mockup.png"
                  alt="Property Shares app showing fractional real estate investment interface"
                  width={380}
                  height={780}
                  className="w-full h-auto drop-shadow-2xl"
                  priority
                />
              </div>
            </motion.div>

            {/* "Escrow on-chain" Bubble - Bottom Left */}
            <motion.div
              initial={{ opacity: 0, x: -40, y: 20 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
              style={{ y: bubble2Y }}
              className="absolute left-4 lg:left-8 bottom-24 lg:bottom-32 z-20 hidden sm:block"
            >
              <div className="bg-white border border-slate-200 text-slate-900 px-4 py-2.5 rounded-full text-sm font-medium shadow-lg">
                Escrow on-chain
              </div>
            </motion.div>

            {/* Subtle gradient glow behind phone */}
            <div className="absolute inset-0 -z-10 flex items-center justify-center pointer-events-none">
              <div className="w-[400px] h-[400px] bg-gradient-to-r from-primary/10 via-blue-400/10 to-primary/5 rounded-full blur-3xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
