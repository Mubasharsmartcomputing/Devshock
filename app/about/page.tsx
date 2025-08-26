'use client'

import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Users, Target, Lightbulb, Rocket, ArrowRight, CheckCircle } from 'lucide-react'

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

export default function AboutPage() {
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
              About <span className="text-red-500">Devshock</span>
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed"
              {...fadeInUp}
              transition={{ delay: 0.2 }}
            >
              Built by founders, powered by elite engineering. We understand the challenges of scaling technology because we've been there.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-gray-900/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div 
              className="grid lg:grid-cols-2 gap-12 items-center"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Story</h2>
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  Founded by entrepreneurs who experienced the pain of finding reliable technical talent, Devshock was born from necessity. After building multiple SaaS products and facing the same challenges repeatedly, we decided to solve this problem once and for all.
                </p>
                <p className="text-gray-300 text-lg leading-relaxed">
                  Today, we've assembled a global team of elite engineers, designers, and product specialists who share our founder mindset and commitment to excellence.
                </p>
              </div>
              <div className="bg-gradient-to-br from-red-500/10 to-transparent rounded-2xl p-8 border border-red-500/20">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-red-500 mb-2">10+</div>
                    <div className="text-gray-400">Years Experience</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-red-500 mb-2">100+</div>
                    <div className="text-gray-400">Projects Delivered</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-red-500 mb-2">50+</div>
                    <div className="text-gray-400">Happy Clients</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-red-500 mb-2">95%</div>
                    <div className="text-gray-400">Success Rate</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-center mb-16"
            {...fadeInUp}
          >
            Our Core Values
          </motion.h2>
          
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              {
                icon: Target,
                title: "Founder-First Mindset",
                desc: "We think like founders because we are founders. Every decision is made with your business goals in mind."
              },
              {
                icon: Users,
                title: "Elite Talent Only",
                desc: "We work with the top 1% of global talent. Our rigorous vetting process ensures exceptional quality."
              },
              {
                icon: Lightbulb,
                title: "Innovation Driven",
                desc: "We stay ahead of technology trends and bring cutting-edge solutions to every project."
              },
              {
                icon: Rocket,
                title: "Delivery Excellence",
                desc: "On-time, on-budget, and exceeding expectations. That's our commitment to every client."
              }
            ].map((value, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="bg-gray-900/50 border-gray-800 hover:border-red-500/50 transition-all duration-300 h-full">
                  <CardContent className="p-6 text-center">
                    <div className="mb-4 p-3 bg-red-500/10 rounded-lg w-fit mx-auto">
                      <value.icon className="h-8 w-8 text-red-500" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                    <p className="text-gray-400 leading-relaxed">{value.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-20 bg-gray-900/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-center mb-16"
              {...fadeInUp}
            >
              Our Approach
            </motion.h2>
            
            <motion.div 
              className="space-y-8"
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              {[
                {
                  title: "Deep Understanding",
                  desc: "We start by truly understanding your business, goals, and challenges. No cookie-cutter solutions."
                },
                {
                  title: "Strategic Planning",
                  desc: "Every project begins with a comprehensive strategy that aligns technology with business objectives."
                },
                {
                  title: "Agile Execution",
                  desc: "We use proven agile methodologies to deliver value quickly while maintaining flexibility."
                },
                {
                  title: "Continuous Partnership",
                  desc: "Our relationship doesn't end at launch. We're your long-term technology partner."
                }
              ].map((approach, index) => (
                <motion.div 
                  key={index} 
                  className="flex items-start space-x-4"
                  variants={fadeInUp}
                >
                  <div className="flex-shrink-0 w-8 h-8 bg-red-500 rounded-full flex items-center justify-center mt-1">
                    <CheckCircle className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{approach.title}</h3>
                    <p className="text-gray-400 leading-relaxed">{approach.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-8"
            {...fadeInUp}
          >
            Ready to Work with Us?
          </motion.h2>
          
          <motion.p 
            className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto"
            {...fadeInUp}
            transition={{ delay: 0.2 }}
          >
            Let's discuss how we can help you build and scale your technology solutions.
          </motion.p>
          
          <motion.div
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
          </motion.div>
        </div>
      </section>
    </div>
  )
}