"use client"

import { motion } from "framer-motion"
import { useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import TechnologiesCarousel from "@/components/TechnologiesCarousel"

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
}

export default function HeroSection() {

  useEffect(() => {
    const initVanta = () => {
      if (typeof window !== 'undefined' && (window as any).VANTA && (window as any).THREE) {
        (window as any).VANTA.NET({
          el: "#hero-bg",
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.00,
          minWidth: 200.00,
          scale: 1.00,
          scaleMobile: 1.00,
          color: 0x3b5bc0,
          backgroundColor: 0xc080c
        })
      } else {
        setTimeout(initVanta, 100)
      }
    }
    
    setTimeout(initVanta, 500)
  }, [])



  return (
    <section id="hero-bg" className="py-16 lg:py-28 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <motion.h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight" {...fadeInUp}>
              Build Your <span style={{color: '#02B2E8'}}>Dream Team</span>
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl text-white mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              We've scouted and interviewed thousands of game changers in technology. We match you with our top
              standouts – all while <span style={{color: '#02B2E8'}}>cutting costs by 43%</span> and{" "}
              <span style={{color: '#02B2E8'}}>reducing staffing times by 5x</span>.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
             <Link href="/contact">
              <Button className="text-white px-6 py-2 rounded-lg transition-colors" style={{backgroundColor: '#02B2E8'}} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#0299D1'} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#02B2E8'}>
                Get started
              </Button>
            </Link>
            </motion.div>
          </div>

          {/* Right Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <Image
              src="/homeBaner.png"
              alt="Hero Banner"
              width={400}
              height={300}
              className="w-full h-auto max-w-sm mx-auto lg:max-w-md"
              priority
            />
          </motion.div>
        </div>

        
      </div>
    </section>
  )
}