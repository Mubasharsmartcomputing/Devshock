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

export default function TechnologiesCarousel() {
  const [isAnimating, setIsAnimating] = useState(true)
  const [isAnimatingRight, setIsAnimatingRight] = useState(true)
  const carouselLeftRef = useRef<HTMLDivElement>(null)
  const carouselRightRef = useRef<HTMLDivElement>(null)

  const techLogosLeft = [
    { name: "React", icon: "/technology/react.svg" },
    { name: "Next.js", icon: "/technology/nextjs.svg" },
    { name: "Node.js", icon: "/technology/nodejs.svg" },
    { name: "Python", icon: "/technology/python.svg" },
    { name: "Java", icon: "/technology/java.svg" },
    { name: "TypeScript", icon: "/technology/typescript.svg" },
    { name: "AWS", icon: "/technology/aws.svg" },
    { name: "Docker", icon: "/technology/docker.svg" },
    { name: "Kubernetes", icon: "/technology/kubernetes.svg" },
    { name: "MongoDB", icon: "/technology/mongodb.svg" }
  ]

  const techLogosRight = [
    { name: "Angular", icon: "/technology/angular.svg" },
    { name: "Vue.js", icon: "/technology/vue.svg" },
    { name: "Azure", icon: "/technology/azure.svg" },
    { name: "GCP", icon: "/technology/gcp.svg" },
    { name: "MySQL", icon: "/technology/mysql.svg" },
    { name: "PostgreSQL", icon: "/technology/postgresql.svg" },
    { name: "Redis", icon: "/technology/redis.svg" },
    { name: "Elasticsearch", icon: "/technology/elasticsearch.svg" },
    { name: ".NET", icon: "/technology/dotnet.svg" },
    { name: "Swift", icon: "/technology/swift.svg" }
  ]

  const extendedLogosLeft = [...techLogosLeft, ...techLogosLeft]
  const extendedLogosRight = [...techLogosRight, ...techLogosRight]



  useEffect(() => {
    const carouselLeft = carouselLeftRef.current
    let animationId: number
    let position = carouselLeft?.children[0] ? -(carouselLeft.children[0] as HTMLElement).offsetWidth * techLogosLeft.length : 0

    const animate = () => {
      if (!isAnimating || !carouselLeft) return
      
      position += 0.5
      
      if (position >= 0 && carouselLeft.children[0]) {
        position = -(carouselLeft.children[0] as HTMLElement).offsetWidth * techLogosLeft.length
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
    let animationId: number
    let position = 0

    const animate = () => {
      if (!isAnimatingRight || !carouselRight) return
      
      position -= 0.5
      
      if (carouselRight.children[0] && position <= -(carouselRight.children[0] as HTMLElement).offsetWidth * techLogosRight.length) {
        position = 0
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
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
         <div className="text-center max-w-4xl mx-auto mb-16">
          {/* Main Headline */}
          <motion.h1 className="text-4xl font-bold mb-6 leading-tight" {...fadeInUp}>
            Technologies We <span style={{color: '#4169E1'}}>Manage</span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            className="text-white text-lg md:text-xl mb-8 leading-relaxed"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
           Our skilled developers are trained on multiple <span style={{color: '#4169E1'}}>Tech-stacks</span> to bring you the best product & services.
          </motion.p>
        </div>
 
    <motion.div
      className="text-center relative z-10"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.6 }}
    >
      {/* First Row - Moving Right */}
      <div className="overflow-hidden mb-6 relative">
        <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none"></div>
        <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none"></div>
        <div
          className="flex gap-6"
          onMouseEnter={() => setIsAnimating(false)}
          onMouseLeave={() => setIsAnimating(true)}
        >
          <div
            ref={carouselLeftRef}
            className="flex gap-6 transition-transform"
            style={{ willChange: 'transform' }}
          >
            {extendedLogosLeft.map((tech, index) => (
              <div
                key={index}
                className="flex items-center justify-center flex-shrink-0 p-4 gap-3 
                           w-[180px] h-[80px] rounded-[16.75px] bg-white/10 
                           border border-dashed border-white/20"
              >
                <span className="text-base font-semibold text-white">
                  {tech.name}
                </span>
                <Image
                  src={tech.icon}
                  alt={tech.name}
                  width={40}
                  height={40}
                  className="w-10 h-10 object-contain"
                  loading="lazy"
                  onError={() => console.log(`Failed to load: ${tech.icon}`)}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Second Row - Moving Left */}
      <div className="overflow-hidden relative">
        <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none"></div>
        <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none"></div>
        <div
          className="flex gap-6"
          onMouseEnter={() => setIsAnimatingRight(false)}
          onMouseLeave={() => setIsAnimatingRight(true)}
        >
          <div
            ref={carouselRightRef}
            className="flex gap-6 transition-transform"
            style={{ willChange: 'transform' }}
          >
            {extendedLogosRight.map((tech, index) => (
              <div
                key={index}
                className="flex items-center justify-center flex-shrink-0 p-4 gap-3 
                           w-[180px] h-[80px] rounded-[16.75px] bg-white/10 
                           border border-dashed border-white/20"
              >
                <span className="text-base font-semibold text-white">
                  {tech.name}
                </span>
                <Image
                  src={tech.icon}
                  alt={tech.name}
                  width={40}
                  height={40}
                  className="w-10 h-10 object-contain"
                  loading="lazy"
                  onError={() => console.log(`Failed to load: ${tech.icon}`)}
                />
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