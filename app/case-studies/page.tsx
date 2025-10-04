"use client"

import Image from "next/image"
import Link from "next/link"
import { Card, CardHeader } from "@/components/ui/card"
import { Smartphone, Globe, ArrowRight } from "lucide-react"

export default function CaseStudiesPage() {
  return (
    <div className="min-h-screen">
      <section className="px-2 md:px-6 py-16 lg:px-12 container mx-auto">
        <div className="mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4" style={{color: '#4169E1'}}>
            Case Studies
          </h1>
          <p className="text-white text-lg md:text-xl mb-16 max-w-3xl mx-auto">
            Explore our successful projects and see how we've helped businesses transform their digital presence
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Mobile Apps Case Study */}
            <Card className="text-left relative bg-black border-gray-800 overflow-hidden">
              <CardHeader className="p-0">
                <div className="relative h-64 w-full">
                  <Image
                    src="/casestudy/mobile.png"
                    alt="Mobile Applications Portfolio"
                    fill
                    className="object-cover rounded-t-lg"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="p-2 border w-12 h-12 flex items-center justify-center rounded-[56%_44%_70%_30%/30%_54%_46%_70%]" style={{backgroundColor: '#4169E1'}}>
                      <Smartphone className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold ml-4 text-white">Mobile Applications</h3>
                  </div>
                  <p className="text-white mb-4">
                    Innovative mobile solutions built with cutting-edge technology. Our mobile apps deliver exceptional user experiences across iOS and Android platforms.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-3 py-1 text-xs rounded-full bg-blue-600 text-white">React Native</span>
                    <span className="px-3 py-1 text-xs rounded-full bg-blue-600 text-white">Flutter</span>
                    <span className="px-3 py-1 text-xs rounded-full bg-blue-600 text-white">iOS</span>
                    <span className="px-3 py-1 text-xs rounded-full bg-blue-600 text-white">Android</span>
                  </div>
                </div>
              </CardHeader>
            </Card>

            {/* Websites Case Study */}
            <Card className="text-left relative bg-black border-gray-800 overflow-hidden">
              <CardHeader className="p-0">
                <div className="relative h-64 w-full">
                  <Image
                    src="/casestudy/website.png"
                    alt="Website Development Portfolio"
                    fill
                    className="object-cover rounded-t-lg"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="p-2 border w-12 h-12 flex items-center justify-center rounded-[56%_44%_70%_30%/30%_54%_46%_70%]" style={{backgroundColor: '#4169E1'}}>
                      <Globe className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold ml-4 text-white">Web Applications</h3>
                  </div>
                  <p className="text-white mb-4">
                    Modern, responsive websites and web applications that drive business growth. Built with performance, scalability, and user experience in mind.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-3 py-1 text-xs rounded-full bg-blue-600 text-white">Next.js</span>
                    <span className="px-3 py-1 text-xs rounded-full bg-blue-600 text-white">React</span>
                    <span className="px-3 py-1 text-xs rounded-full bg-blue-600 text-white">TypeScript</span>
                    <span className="px-3 py-1 text-xs rounded-full bg-blue-600 text-white">Tailwind CSS</span>
                  </div>
                </div>
              </CardHeader>
            </Card>
          </div>

          {/* Call to Action */}
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold mb-4 text-white">
              Ready to Start Your Project?
            </h3>
            <p className="text-white mb-8 max-w-2xl mx-auto">
              Let's discuss how we can help transform your business with our proven development expertise.
            </p>
            <Link href="/contact">
              <button 
                className="px-8 py-3 rounded-lg font-semibold text-white transition-all duration-300 hover:scale-105"
                style={{backgroundColor: '#4169E1'}}
              >
                Get Started Today
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}