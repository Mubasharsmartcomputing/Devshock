"use client"

import { motion } from "framer-motion"
import { useEffect, useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
}

export default function HeroSection() {
  const [isAnimating, setIsAnimating] = useState(true)
  const [isAnimatingRight, setIsAnimatingRight] = useState(true)
  const carouselLeftRef = useRef(null)
  const carouselRightRef = useRef(null)

  const techLogosLeft = [
    { name: "React", icon: "/technology/react.svg" },
    { name: "Next.js", icon: "/technology/nextjs.svg" },
    { name: "Node.js", icon: "/technology/nodejs.svg" },
    { name: "MongoDB", icon: "/technology/mongodb.svg" },
    { name: "TypeScript", icon: "/technology/typescript.svg" },
    { name: "Python", icon: "/technology/python.svg" },
    { name: "Java", icon: "/technology/java.svg" },
    { name: "MySQL", icon: "/technology/mysql.svg" },
    { name: "PostgreSQL", icon: "/technology/postgresql.svg" },
    { name: "Redis", icon: "/technology/redis.svg" },
    { name: "Docker", icon: "/technology/docker.svg" }
  ]

  const techLogosRight = [
    { name: "Angular", icon: "/technology/angular.svg" },
    { name: "Vue.js", icon: "/technology/vue.svg" },
    { name: "AWS", icon: "/technology/aws.svg" },
    { name: "Azure", icon: "/technology/azure.svg" },
    { name: "Google Cloud", icon: "/technology/gcp.svg" },
    { name: ".NET", icon: "/technology/dotnet.svg" },
    { name: "Swift", icon: "/technology/swift.svg" },
    { name: "Elasticsearch", icon: "/technology/elasticsearch.svg" },
    { name: "Kubernetes", icon: "/technology/kubernetes.svg" }
  ]

  const extendedLogosLeft = [...techLogosLeft, ...techLogosLeft]
  const extendedLogosRight = [...techLogosRight, ...techLogosRight]

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

  useEffect(() => {
    const carouselLeft = carouselLeftRef.current
    let animationId
    let position = 0

    const animate = () => {
      if (!isAnimating || !carouselLeft) return
      
      position -= 0.5
      
      if (position <= -carouselLeft.children[0].offsetWidth * techLogosLeft.length) {
        position = 0
      }
      
      carouselLeft.style.transform = `translateX(${position}px)`
      animationId = requestAnimationFrame(animate)
    }

    animationId = requestAnimationFrame(animate)
    
    const handleVisibilityChange = () => {
      setIsAnimating(!document.hidden)
    }
    
    document.addEventListener("visibilitychange", handleVisibilityChange)
    
    return () => {
      cancelAnimationFrame(animationId)
      document.removeEventListener("visibilitychange", handleVisibilityChange)
    }
  }, [isAnimating, techLogosLeft.length])

  useEffect(() => {
    const carouselRight = carouselRightRef.current
    let animationId
    let position = -carouselRight?.children[0]?.offsetWidth * techLogosRight.length || 0

    const animate = () => {
      if (!isAnimatingRight || !carouselRight) return
      
      position += 0.5
      
      if (position >= 0) {
        position = -carouselRight.children[0].offsetWidth * techLogosRight.length
      }
      
      carouselRight.style.transform = `translateX(${position}px)`
      animationId = requestAnimationFrame(animate)
    }

    animationId = requestAnimationFrame(animate)
    
    const handleVisibilityChange = () => {
      setIsAnimatingRight(!document.hidden)
    }
    
    document.addEventListener("visibilitychange", handleVisibilityChange)
    
    return () => {
      cancelAnimationFrame(animationId)
      document.removeEventListener("visibilitychange", handleVisibilityChange)
    }
  }, [isAnimatingRight, techLogosRight.length])

  return (
    <section id="hero-bg" className="py-20 lg:py-32 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <motion.h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight" {...fadeInUp}>
              Build Your <span className="text-red-500">Dream Team</span>
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl text-white mb-8 leading-relaxed"
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
             <Link href="/contact">
              <Button className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-lg transition-colors">
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
              width={600}
              height={400}
              className="w-full h-auto max-w-lg mx-auto lg:max-w-full"
              priority
            />
          </motion.div>
        </div>

        <motion.div
          className="mt-20 text-center relative z-10 lg:col-span-2"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <p className="text-white text-[24px] mb-8">Technologies we work with</p>
          
          {/* First Row - Moving Left */}
          <div className="overflow-hidden mb-6">
            <div
              className="flex gap-6"
              onMouseEnter={() => setIsAnimating(false)}
              onMouseLeave={() => setIsAnimating(true)}
            >
              <div
                ref={carouselLeftRef}
                className="flex gap-6 transition-transform"
                style={{ willChange: "transform" }}
              >
                {extendedLogosLeft.map((tech, index) => (
                  <div key={index} className="bg-white/10 px-4 py-2 rounded-full text-sm border border-white/20 flex items-center gap-2 whitespace-nowrap flex-shrink-0">
                    <Image src={tech.icon} alt={tech.name} width={20} height={20} className="w-5 h-5" />
                    <span>{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Second Row - Moving Right */}
          <div className="overflow-hidden">
            <div
              className="flex gap-6"
              onMouseEnter={() => setIsAnimatingRight(false)}
              onMouseLeave={() => setIsAnimatingRight(true)}
            >
              <div
                ref={carouselRightRef}
                className="flex gap-6 transition-transform"
                style={{ willChange: "transform" }}
              >
                {extendedLogosRight.map((tech, index) => (
                  <div key={index} className="bg-white/10 px-4 py-2 rounded-full text-sm border border-white/20 flex items-center gap-2 whitespace-nowrap flex-shrink-0">
                    <Image src={tech.icon} alt={tech.name} width={20} height={20} className="w-5 h-5" />
                    <span>{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}