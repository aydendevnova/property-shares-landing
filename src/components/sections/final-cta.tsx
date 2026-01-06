import { Button } from "@/components/ui/button";
import { FadeUp } from "@/components/motion";
import { ArrowRight } from "lucide-react";
import { GOOGLE_FORM_URL } from "@/consts";

export function FinalCTASection() {
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

        {/* CTA Button */}
        <FadeUp delay={0.2}>
          <Button
            asChild
            size="lg"
            className="h-14 px-10 bg-white hover:bg-white/90 text-primary font-semibold text-lg"
          >
            <a href={GOOGLE_FORM_URL} target="_blank" rel="noopener noreferrer">
              <span className="flex items-center gap-2">
                Get early access
                <ArrowRight className="h-5 w-5" />
              </span>
            </a>
          </Button>
          <p className="text-sm text-blue-200 mt-4">
            No spam, we&apos;ll only notify you when we launch in your area.
          </p>
        </FadeUp>
      </div>
    </section>
  );
}
