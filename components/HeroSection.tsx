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
            <motion.h1 className="text-4xl font-bold mb-6 leading-tight" {...fadeInUp}>
              Transforming Your Business Vision Into <span style={{color: '#4169E1'}}>Digital Reality</span>
            </motion.h1>

            <motion.p
              className="text-white text-lg md:text-xl mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              We deliver <span style={{color: '#4169E1'}}>transformative technology solutions</span> that drive efficiency, growth, and competitive advantage. Combining technical expertise with deep business understanding to deliver <span style={{color: '#4169E1'}}>exceptional value</span>.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
             <Link href="/contact">
              <Button className="text-white px-6 py-2 rounded-lg transition-colors" style={{backgroundColor: '#4169E1'}} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#3A5FCD'} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#4169E1'}>
                Get started
              </Button>
            </Link>
            </motion.div>
          </div>

          {/* Right Image */}
          <motion.div
            className="relative z-20"
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 2, delay: 0.9 }}
          >
            <Image
              src="/homeBaner.png"
              alt="Hero Banner"
              width={700}
              height={600}
              className="w-full h-auto max-w-xl mx-auto lg:max-w-xl"
              priority
              quality={100}
              unoptimized
            />
          </motion.div>
        </div>     
      </div>
    </section>
  )
}