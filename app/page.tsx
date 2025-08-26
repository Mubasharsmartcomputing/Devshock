"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Rocket,
  Users,
  Building2,
  Cpu,
  RefreshCw,
  Brain,
  UserCheck,
  Search,
  Palette,
  Zap,
  Target,
  Globe,
  Shield,
  Star,
  ArrowRight,
} from "lucide-react"

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

export default function HomePage() {
  return (
    <div className="min-h-screen">

      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4">
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
                7 Days Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>
          </div>

          <motion.div
            className="mt-20 text-center"
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

      {/* Who We Serve */}
      <section className="py-20 bg-gray-900/50">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-center mb-16"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Who We Serve
          </motion.h2>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              { icon: Rocket, title: "SaaS innovators launching MVPs & growth versions" },
              { icon: Users, title: "Technical founders needing scalable execution" },
              { icon: Building2, title: "B2B platform builders" },
              { icon: Cpu, title: "Hardware & IoT companies" },
            ].map((item, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="bg-black border-gray-800 hover:border-red-500 transition-all duration-300 hover:scale-105 group">
                  <CardContent className="p-6 text-center">
                    <item.icon className="h-12 w-12 text-red-500 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                    <p className="text-gray-300 leading-relaxed">{item.title}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Our Solutions */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-center mb-16"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Our Solutions
          </motion.h2>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              { icon: Rocket, title: "MVP & Product Builds", desc: "From concept to launch" },
              { icon: RefreshCw, title: "Feature Expansion & SaaS Scaling", desc: "Growth-focused development" },
              { icon: Brain, title: "AI & Embedded Systems", desc: "Cutting-edge technology" },
              { icon: Users, title: "Dedicated Dev Teams", desc: "Your extended engineering team" },
            ].map((item, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="bg-gradient-to-br from-black to-red-900/20 border-gray-800 hover:border-red-500 transition-all duration-300 hover:scale-105">
                  <CardContent className="p-6 text-center">
                    <item.icon className="h-12 w-12 text-red-500 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-gray-400">{item.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* How We Work */}
      <section className="py-20 bg-gray-900/50">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-center mb-16"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            How We Work
          </motion.h2>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8">
              {[
                { icon: Search, title: "Explore", desc: "Understanding your vision" },
                { icon: Palette, title: "Design", desc: "Crafting the experience" },
                { icon: Zap, title: "Build", desc: "Engineering excellence" },
                { icon: Rocket, title: "Launch", desc: "Delivering success" },
              ].map((step, index) => (
                <motion.div
                  key={index}
                  className="text-center relative"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="bg-red-500 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <step.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-gray-400">{step.desc}</p>
                  {index < 3 && (
                    <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-red-500/30 -translate-x-1/2" />
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Devshock */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-center mb-16"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Why Devshock?
          </motion.h2>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              { icon: UserCheck, title: "Founders in Alignment", desc: "We understand your journey" },
              { icon: Globe, title: "Known Global Execution", desc: "Proven worldwide delivery" },
              { icon: Shield, title: "Transparent & Predictable", desc: "Clear communication always" },
              { icon: Target, title: "Trusted in Key Markets", desc: "Established market presence" },
            ].map((item, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="bg-black border-gray-800 hover:border-red-500 transition-all duration-300 h-full">
                  <CardContent className="p-6 text-center">
                    <item.icon className="h-12 w-12 text-red-500 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-gray-400">{item.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Credibility & Proof */}
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
                <div className="text-gray-400">{item.label}</div>
              </motion.div>
            ))}
          </motion.div>

          <motion.p
            className="text-gray-400 mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Trusted by SaaS, Fintech, and Healthtech companies worldwide
          </motion.p>

          <motion.div
            className="flex justify-center items-center space-x-8 opacity-50"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.5 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="w-24 h-12 bg-gray-700 rounded flex items-center justify-center">
                <span className="text-xs">Logo {i}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-center mb-16"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Founders' Voice
          </motion.h2>

          <motion.div
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="bg-gradient-to-br from-black to-red-900/20 border-red-500/30">
              <CardContent className="p-8 text-center">
                <div className="flex justify-center mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="h-6 w-6 text-red-500 fill-current" />
                  ))}
                </div>
                <blockquote className="text-xl md:text-2xl text-gray-300 mb-6 italic">
                  "With Devshock, we built a structure that felt like home—professional, timely, and aligned with our
                  vision."
                </blockquote>
                <cite className="text-red-400 font-semibold">— SaaS Founder, Germany</cite>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-red-900/20 to-black">
        <div className="container mx-auto px-4 text-center">
          <motion.h2
            className="text-4xl md:text-6xl font-bold mb-8"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Ready to Build Your Dream Team?
          </motion.h2>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Button
              size="lg"
              className="bg-red-500 hover:bg-red-600 text-white px-8 py-4 text-lg font-semibold hover:scale-105 transition-transform"
            >
              Book Your Free Discovery Call
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-red-500 text-red-500 hover:bg-red-500 hover:text-white px-8 py-4 text-lg font-semibold hover:scale-105 transition-transform bg-transparent"
            >
              Share Your Project Scope
            </Button>
          </motion.div>
        </div>
      </section>

    </div>
  )
}
