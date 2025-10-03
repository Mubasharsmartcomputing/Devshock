"use client"


import OurSolutions from "@/components/OurSolutions"
import TechnologiesCarousel from "@/components/TechnologiesCarousel"
import WhyDevshock from "@/components/WhyDevshock"

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      <OurSolutions />
      <WhyDevshock />
      <TechnologiesCarousel/>
    </div>
  )
}