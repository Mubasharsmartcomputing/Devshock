"use client"

import HeroSection from "@/components/HeroSection"
import HowWeWork from "@/components/HowWeWork"
import OurSolutions from "@/components/OurSolutions"
import WhyDevshock from "@/components/WhyDevshock"
import CredibilityProof from "@/components/CredibilityProof"
import Testimonials from "@/components/Testimonials"
import FAQ from "@/components/FAQ"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <OurSolutions />
      <HowWeWork />
      <WhyDevshock />
      <CredibilityProof />
      <Testimonials />
      {/* <FAQ /> */}
    </div>
  )
}
