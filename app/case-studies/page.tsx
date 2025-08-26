'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ArrowRight, ExternalLink, TrendingUp, Users, Clock } from 'lucide-react'

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

export default function CaseStudiesPage() {
  const caseStudies = [
    {
      title: "FinTech SaaS Platform",
      category: "Financial Technology",
      description: "Built a comprehensive financial management platform that processes $10M+ in transactions monthly.",
      image: "/placeholder.jpg",
      tags: ["React", "Node.js", "PostgreSQL", "AWS"],
      metrics: [
        { label: "Users", value: "50K+" },
        { label: "Transactions", value: "$10M+" },
        { label: "Uptime", value: "99.9%" }
      ],
      timeline: "6 months",
      challenge: "Complex financial calculations and regulatory compliance requirements",
      solution: "Microservices architecture with automated compliance checks and real-time processing"
    },
    {
      title: "HealthTech MVP",
      category: "Healthcare",
      description: "Developed a telemedicine platform connecting patients with healthcare providers globally.",
      image: "/placeholder.jpg",
      tags: ["Next.js", "Python", "MongoDB", "WebRTC"],
      metrics: [
        { label: "Consultations", value: "25K+" },
        { label: "Providers", value: "500+" },
        { label: "Countries", value: "15" }
      ],
      timeline: "4 months",
      challenge: "HIPAA compliance and real-time video consultations at scale",
      solution: "End-to-end encryption with scalable video infrastructure and compliance framework"
    },
    {
      title: "E-commerce Marketplace",
      category: "Retail Technology",
      description: "Created a multi-vendor marketplace with advanced analytics and AI-powered recommendations.",
      image: "/placeholder.jpg",
      tags: ["Vue.js", "Django", "Redis", "ML/AI"],
      metrics: [
        { label: "Vendors", value: "1K+" },
        { label: "Products", value: "100K+" },
        { label: "Revenue", value: "$5M+" }
      ],
      timeline: "8 months",
      challenge: "Complex vendor management and personalized shopping experience",
      solution: "AI-driven recommendation engine with comprehensive vendor dashboard and analytics"
    },
    {
      title: "IoT Management Platform",
      category: "Internet of Things",
      description: "Built an enterprise IoT platform managing 100K+ connected devices across multiple industries.",
      image: "/placeholder.jpg",
      tags: ["Angular", "Go", "InfluxDB", "Docker"],
      metrics: [
        { label: "Devices", value: "100K+" },
        { label: "Data Points", value: "1B+" },
        { label: "Industries", value: "8" }
      ],
      timeline: "10 months",
      challenge: "Real-time data processing from thousands of IoT devices",
      solution: "Event-driven architecture with time-series database and real-time analytics dashboard"
    },
    {
      title: "EdTech Learning Platform",
      category: "Education Technology",
      description: "Developed an adaptive learning platform with AI-powered personalized curriculum.",
      image: "/placeholder.jpg",
      tags: ["React Native", "Node.js", "TensorFlow", "GraphQL"],
      metrics: [
        { label: "Students", value: "75K+" },
        { label: "Courses", value: "500+" },
        { label: "Completion", value: "85%" }
      ],
      timeline: "7 months",
      challenge: "Personalized learning paths and cross-platform mobile experience",
      solution: "AI-powered adaptive learning algorithm with native mobile apps and progressive web app"
    },
    {
      title: "Real Estate CRM",
      category: "Property Technology",
      description: "Created a comprehensive CRM system for real estate agencies with automated workflows.",
      image: "/placeholder.jpg",
      tags: ["Laravel", "Vue.js", "MySQL", "Stripe"],
      metrics: [
        { label: "Agencies", value: "200+" },
        { label: "Properties", value: "50K+" },
        { label: "Automation", value: "70%" }
      ],
      timeline: "5 months",
      challenge: "Complex workflow automation and multi-tenant architecture",
      solution: "Modular CRM with customizable workflows and white-label capabilities"
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1 
              className="text-4xl md:text-6xl font-bold mb-6"
              {...fadeInUp}
            >
              Our <span className="text-red-500">Success Stories</span>
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed"
              {...fadeInUp}
              transition={{ delay: 0.2 }}
            >
              Discover how we've helped founders and companies build scalable, successful technology solutions across various industries.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-gray-900/30">
        <div className="container mx-auto px-4">
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              { value: "100+", label: "Projects Completed" },
              { value: "$50M+", label: "Revenue Generated" },
              { value: "500K+", label: "Users Served" },
              { value: "15+", label: "Industries" }
            ].map((stat, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <div className="text-3xl md:text-4xl font-bold text-red-500 mb-2">{stat.value}</div>
                <div className="text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div 
            className="grid lg:grid-cols-2 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {caseStudies.map((study, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="bg-gray-900/50 border-gray-800 hover:border-red-500/50 transition-all duration-300 h-full group">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-4">
                      <Badge variant="outline" className="border-red-500/50 text-red-400">
                        {study.category}
                      </Badge>
                      <div className="flex items-center text-gray-400 text-sm">
                        <Clock className="h-4 w-4 mr-1" />
                        {study.timeline}
                      </div>
                    </div>
                    <CardTitle className="text-xl mb-3 group-hover:text-red-400 transition-colors">
                      {study.title}
                    </CardTitle>
                    <p className="text-gray-400 leading-relaxed mb-4">
                      {study.description}
                    </p>
                  </CardHeader>
                  
                  <CardContent className="space-y-6">
                    {/* Metrics */}
                    <div className="grid grid-cols-3 gap-4">
                      {study.metrics.map((metric, metricIndex) => (
                        <div key={metricIndex} className="text-center">
                          <div className="text-lg font-bold text-red-500">{metric.value}</div>
                          <div className="text-xs text-gray-400">{metric.label}</div>
                        </div>
                      ))}
                    </div>

                    {/* Technologies */}
                    <div>
                      <h4 className="text-sm font-semibold text-gray-300 mb-2">Technologies Used</h4>
                      <div className="flex flex-wrap gap-2">
                        {study.tags.map((tag, tagIndex) => (
                          <Badge key={tagIndex} variant="secondary" className="bg-gray-800 text-gray-300">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Challenge & Solution */}
                    <div className="space-y-3">
                      <div>
                        <h4 className="text-sm font-semibold text-red-400 mb-1">Challenge</h4>
                        <p className="text-sm text-gray-400">{study.challenge}</p>
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-red-400 mb-1">Solution</h4>
                        <p className="text-sm text-gray-400">{study.solution}</p>
                      </div>
                    </div>

                    {/* CTA */}
                    <div className="pt-4 border-t border-gray-800">
                      <Button 
                        variant="ghost" 
                        className="w-full text-red-400 hover:text-red-300 hover:bg-red-500/10"
                      >
                        View Full Case Study
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-red-900/20 to-black">
        <div className="container mx-auto px-4 text-center">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-8"
            {...fadeInUp}
          >
            Ready to Create Your Success Story?
          </motion.h2>
          
          <motion.p 
            className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto"
            {...fadeInUp}
            transition={{ delay: 0.2 }}
          >
            Let's discuss how we can help you build a solution that drives real business results.
          </motion.p>
          
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            {...fadeInUp}
            transition={{ delay: 0.4 }}
          >
            <Button 
              size="lg" 
              className="bg-red-500 hover:bg-red-600 text-white px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 hover:scale-105"
            >
              Start Your Project
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            
            <Button 
              size="lg" 
              variant="outline"
              className="border-red-500 text-red-500 hover:bg-red-500 hover:text-white px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 hover:scale-105 bg-transparent"
            >
              Schedule a Call
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}