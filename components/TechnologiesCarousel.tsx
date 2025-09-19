"use client"

import { motion } from "framer-motion"
import { useEffect, useState, useRef } from "react"
import Image from "next/image"

export default function TechnologiesCarousel() {
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
    <motion.div
      className="my-10 text-center relative z-10"
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
  )
}