"use client"

import HeroSection from "@/components/HeroSection"
import HowWeWork from "@/components/HowWeWork"
import OurSolutions from "@/components/OurSolutions"
import WhyDevshock from "@/components/WhyDevshock"
import Testimonials from "@/components/Testimonials"
import TechnologiesCarousel from "@/components/TechnologiesCarousel"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <OurSolutions />
      <TechnologiesCarousel />
      <HowWeWork />
      <WhyDevshock />     
      {/* <FAQ /> */}
    </div>
  )
}
