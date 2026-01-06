"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { MapPin, ExternalLink } from "lucide-react";
import { FadeUp, StaggerContainer, StaggerItem, motion } from "@/components/motion";
import Link from "next/link";
import { GOOGLE_FORM_URL } from "@/consts";

const properties = [
  {
    id: 1,
    location: "Phoenix, AZ",
    type: "Single Family Home",
    image: "/property-shares-2.jpeg",
    minInvestment: "$100",
    holdPeriod: "12-24 months",
    progress: 72,
    status: "New",
  },
  {
    id: 2,
    location: "Scottsdale, AZ",
    type: "Modern Townhouse",
    image: "/property-shares-3.jpeg",
    minInvestment: "$250",
    holdPeriod: "18-30 months",
    progress: 45,
    status: "Funding",
  },
  {
    id: 3,
    location: "Mesa, AZ",
    type: "Multi-Family Duplex",
    image: "/property-shares-4.jpeg",
    minInvestment: "$500",
    holdPeriod: "24-36 months",
    progress: 88,
    status: "Almost Full",
  }
];

export function FeaturedOpportunitiesSection() {
  return (
    <section id="opportunities" className="py-32 lg:py-44 bg-amber-50/20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <FadeUp className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 lg:mb-16">
          <div>
            <p className="text-sm font-semibold text-primary uppercase tracking-wide mb-3">
              Featured Opportunities
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight">
              Explore properties
            </h2>
          </div>
          <p className="text-muted-foreground max-w-md">
            Browse curated real estate opportunities in high-growth markets. All listings are illustrative examples.
          </p>
        </FadeUp>

        {/* Notice Banner */}
        <FadeUp delay={0.1} className="mb-8">
          <div className="p-4 rounded-lg bg-gray-50 border border-gray-200/50">
            <p className="text-sm text-gray-800">
              <span className="font-semibold">Note:</span> Featured opportunities shown for demonstration purposes. 
              Availability depends on offering terms and jurisdiction.
            </p>
          </div>
        </FadeUp>

        {/* Properties Grid */}
        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.1}>
          {properties.map((property) => (
            <StaggerItem key={property.id}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                className="property-card group bg-white rounded-xl border border-slate-200 overflow-hidden hover:border-primary/30"
              >
                {/* Property Image */}
                <div className="aspect-[4/3] bg-slate-100 relative overflow-hidden">
                  <Image
                    src={property.image}
                    alt={`${property.type} in ${property.location}`}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  {/* Status Badge */}
                  <div className={`absolute top-3 left-3 px-2.5 py-1 rounded-full text-xs font-medium z-10 ${
                    property.status === "New" 
                      ? "bg-blue-100 text-blue-700"
                      : property.status === "Almost Full"
                      ? "bg-amber-100 text-amber-700" : property.status === "Funding"
                      ? "bg-green-100 text-green-700"
                      : "bg-primary/10 text-primary"
                  }`}>
                    {property.status}
                  </div>
                  <div className="absolute top-3 right-3 px-2 py-1 rounded-full bg-black/60 backdrop-blur text-xs text-white z-10">
                    Sample
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 space-y-4">
                  <div>
                    <div className="flex items-center gap-1.5 text-muted-foreground text-sm mb-1">
                      <MapPin className="h-3.5 w-3.5" />
                      {property.location}
                    </div>
                    <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                      {property.type}
                    </h3>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div className="space-y-0.5">
                      <p className="text-xs text-muted-foreground">Min. Investment</p>
                      <p className="font-semibold text-primary">{property.minInvestment}</p>
                    </div>
                    <div className="space-y-0.5">
                      <p className="text-xs text-muted-foreground">Hold Period</p>
                      <p className="font-medium text-foreground text-sm">{property.holdPeriod}</p>
                    </div>
                  </div>

                  {/* Progress Bar */}
                  <div>
                    <div className="flex items-center justify-between text-xs mb-1.5">
                      <span className="text-muted-foreground">Funding</span>
                      <span className="font-medium text-foreground">{property.progress}%</span>
                    </div>
                    <div className="h-1.5 bg-slate-100 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${property.progress}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                        className="h-full bg-primary rounded-full"
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Bottom CTA */}
        <FadeUp delay={0.4} className="mt-16 text-center">
          <Link href={GOOGLE_FORM_URL} target="_blank" rel="noopener noreferrer">
          <Button
            variant="outline"
            size="lg"
            className="border-primary/30 text-primary hover:bg-primary/5"
          >
            Join waitlist
            <ExternalLink className="h-4 w-4 ml-2" />
          </Button>
          </Link>
        </FadeUp>
      </div>
    </section>
  );
}
