"use client"

import { motion } from "framer-motion"
import { useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Link } from "lucide-react"
import { Line } from "recharts"

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
          color: 0xf21863,
          backgroundColor: 0x0f0c17
        })
      } else {
        setTimeout(initVanta, 100)
      }
    }
    
    setTimeout(initVanta, 500)
  }, [])

  return (
    <section id="hero-bg" className="py-20 lg:py-32 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <motion.h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight" {...fadeInUp}>
            Build Your <span className="text-red-500">Dream Team</span>
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            We've scouted and interviewed thousands of game changers in technology. We match you with our top
            standouts – all while <span className="text-red-500">cutting costs by 43%</span> and{" "}
            <span className="text-red-500">reducing staffing times by 5x</span>.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            
            <Button size="lg" className="bg-red-500 hover:bg-red-600 text-white px-8 py-4 text-lg font-semibold">
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            
          </motion.div>
        </div>

        <motion.div
          className="mt-20 text-center relative z-10"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <p className="text-gray-400 mb-8">Technologies we work with</p>
          <div className="flex flex-wrap justify-center items-center gap-6 opacity-70">
            {[
              "JavaScript",
              "MongoDB",
              "Next.js",
              "Nuxt.js",
              "WordPress",
              "Vue.js",
              "Adobe XD",
              "AI",
              "Amazon",
              "Unbounce",
              "ClickFunnel",
              "Figma",
            ].map((tech, index) => (
              <div key={index} className="bg-gray-800/50 px-4 py-2 rounded-full text-sm border border-gray-700">
                {tech}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}