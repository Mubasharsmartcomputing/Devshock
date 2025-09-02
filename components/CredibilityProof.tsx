"use client"

import { motion } from "framer-motion"
import { useState, useEffect, useRef } from "react"

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const logos = [
  { src: "/CompanyLogo/image1.png", alt: "Logo 1" },
  { src: "/CompanyLogo/image2.png", alt: "Logo 2" },
  { src: "/CompanyLogo/image3.png", alt: "Logo 3" },
  { src: "/CompanyLogo/image4.png", alt: "Logo 4" },
  { src: "/CompanyLogo/image5.png", alt: "Logo 5" },
  { src: "/CompanyLogo/image6.png", alt: "Logo 6" },
];

export default function CredibilityProof() {
  const [isAnimating, setIsAnimating] = useState(true);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const carouselRef = useRef(null);
  
  const extendedLogos = [...logos, ...logos];

  useEffect(() => {
    const carousel = carouselRef.current;
    let animationId;
    let position = 0;

    const animate = () => {
      if (!isAnimating || !carousel) return;
      
      position -= 0.5; // Adjust speed here
      
      // Reset position when we've scrolled the width of our original logos
      if (position <= -carousel.children[0].offsetWidth * logos.length) {
        position = 0;
      }
      
      carousel.style.transform = `translateX(${position}px)`;
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);
    
    // Pause animation when not in viewport or tab is inactive
    const handleVisibilityChange = () => {
      setIsAnimating(!document.hidden);
    };
    
    document.addEventListener("visibilitychange", handleVisibilityChange);
    
    return () => {
      cancelAnimationFrame(animationId);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [isAnimating]);

  // Pause on hover
  const handleMouseEnter = () => setIsAnimating(false);
  const handleMouseLeave = () => setIsAnimating(true);

  return (
    <section className="py-20 bg-gray-900/50">
      <div className="container mx-auto px-4 text-center">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Credibility & Proof
        </motion.h2>

        <motion.div
          className="grid md:grid-cols-3 gap-8 mb-16"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {[
            { stat: "95%", label: "On-time Delivery" },
            { stat: "50+", label: "SaaS Projects" },
            { stat: "10+", label: "Years Experience" },
          ].map((item, index) => (
            <motion.div key={index} variants={fadeInUp}>
              <div className="text-5xl font-bold text-red-500 mb-2">{item.stat}</div>
              <div className="text-white">{item.label}</div>
            </motion.div>
          ))}
        </motion.div>

        <motion.p
          className="text-white mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Trusted by SaaS, Fintech, and Healthtech companies worldwide
        </motion.p>

        <motion.div
          className="flex justify-center items-center opacity-50"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.5 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="max-w-7xl w-full overflow-hidden h-20 my-8">
            <div
              className="flex items-center"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <div
                ref={carouselRef}
                className="flex space-x-10 transition-transform"
                style={{ willChange: "transform" }}
              >
                {extendedLogos.map((logo, index) => (
                  <div key={index} className="flex-shrink-0">
                    <img
                      src={logo.src}
                      alt={logo.alt}
                      className="w-[158px] h-[32px] object-contain"
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