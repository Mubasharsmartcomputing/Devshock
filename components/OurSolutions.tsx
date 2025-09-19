import { Card, CardHeader } from "@/components/ui/card"
import { Monitor, Brain, Cpu, Users, Building, GitBranch } from "lucide-react"

export default function OurSolutions() {
  return (
    <section className="px-2 md:px-6 py-16 lg:px-12 container mx-auto">
      <div className="mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4" style={{color: '#02B2E8'}}>
          Our Solutions
        </h2>
        <p className="text-white text-lg md:text-xl mb-16 max-w-3xl mx-auto">
          Comprehensive development services tailored to your business needs
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { icon: Monitor, title: "SOFTWARES & MOBILE/ WEB APPLICATIONS", desc: "Custom Software and Mobile/Web Application Development." },
            { icon: Brain, title: "Artificial Intelligence Solution & Industry 4.0", desc: "Solutions and Industry 4.0 for Smart Automation and Innovation." },
            { icon: Cpu, title: "Embedded Systems", desc: "Embedded Systems for Advanced, Customised Technological Solutions." },
            { icon: Users, title: "IT RESOURCE AUGMENTATION", desc: "Resource Augmentation for Scalable and Flexible Workforce Solutions." },
            { icon: Building, title: "ENTERPRISE RESOURCE PLANNING SOLUTIONS", desc: "ERP Solutions for Streamlined Business Operations." },
            { icon: GitBranch, title: "DEV OPS", desc: "Our DevOps services accelerate development and streamline operations." },
          ].map((item, index) => (
            <Card
              key={index}
              className="text-left relative group transform transition-transform duration-300 hover:scale-105 bg-black border-gray-800" style={{'--hover-border': '#02B2E8'}} onMouseEnter={(e) => e.currentTarget.style.borderColor = '#02B2E8'} onMouseLeave={(e) => e.currentTarget.style.borderColor = ''}
            >
              <CardHeader>
                <div className="mb-4 p-2 border w-16 h-16 items-center justify-center text-center relative rounded-[56%_44%_70%_30%/30%_54%_46%_70%] animate-pulse" style={{backgroundColor: '#02B2E8'}}>
                  <item.icon className="w-8 h-8 text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-white">{item.title}</h3>
                <p className="text-white">{item.desc}</p>
              </CardHeader>
              <div className="absolute left-0 bottom-[-10px] h-1 w-0 transition-all duration-300 group-hover:w-full" style={{backgroundColor: '#02B2E8'}}></div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}