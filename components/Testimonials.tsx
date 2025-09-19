"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

export default function Testimonials() {
  return (
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
          <Card className="bg-gradient-to-br from-black to-blue-900/20 border-blue-500/30">
            <CardContent className="p-8 text-center">
              <div className="flex justify-center mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="h-6 w-6 fill-current" style={{color: '#02B2E8'}} />
                ))}
              </div>
              <blockquote className="text-xl md:text-2xl text-white mb-6 italic">
                "With Devshock, we built a structure that felt like home—professional, timely, and aligned with our
                vision."
              </blockquote>
              <cite className="text-blue-400 font-semibold">— SaaS Founder, Germany</cite>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}