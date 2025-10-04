import { Card, CardHeader } from "@/components/ui/card"
import { Monitor, Brain, Cpu, Users, Building, GitBranch } from "lucide-react"

export default function OurSolutions() {
  return (
    <section className="px-2 md:px-6 py-16 lg:px-12 container mx-auto">
      <div className="mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4" style={{color: '#4169E1'}}>
          Our Solutions
        </h2>
        <p className="text-white text-lg md:text-xl mb-16 max-w-3xl mx-auto">
          Comprehensive development services tailored to your business needs
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { icon: Monitor, title: "SOFTWARES & MOBILE/ WEB APPLICATIONS", desc: "Build custom websites and complex web applications with our experienced developers. We deliver scalable, secure solutions using modern technologies for optimal performance and user experience." },
            { icon: Brain, title: "Artificial Intelligence", desc: "Leverage AI to automate processes and enhance decision-making with Devshock. Our services include NLP, chatbot development, intelligent automation, and predictive analytics for business growth." },
            { icon: Cpu, title: "Embedded Systems", desc: "Design sophisticated embedded systems for IoT devices and industrial automation. We create custom firmware and hardware integration solutions for advanced technological applications and smart devices." },
            { icon: Users, title: "IT RESOURCE AUGMENTATION", desc: "Scale your development team with our skilled professionals and flexible workforce solutions. We provide specialists and complete teams for seamless integration with your existing operations." },
            { icon: Building, title: "ENTERPRISE RESOURCE PLANNING SOLUTIONS", desc: "Streamline business operations with comprehensive ERP solutions and enterprise systems. We implement customized platforms that integrate processes for improved efficiency and data-driven decisions." },
            { icon: GitBranch, title: "DevOps", desc: "Optimize your software development and deployment processes with our DevOps services. We provide tailored tool and platform selection, streamlining operations for optimal productivity and faster time-to-market." },
          ].map((item, index) => (
            <Card
              key={index}
              className="text-left relative group transform transition-transform duration-300 hover:scale-105 bg-black border-gray-800" style={{'--hover-border': '#4169E1'}} onMouseEnter={(e) => e.currentTarget.style.borderColor = '#4169E1'} onMouseLeave={(e) => e.currentTarget.style.borderColor = ''}
            >
              <CardHeader>
                <div className="mb-4 p-2 border w-16 h-16 items-center justify-center text-center relative rounded-[56%_44%_70%_30%/30%_54%_46%_70%] animate-pulse" style={{backgroundColor: '#4169E1'}}>
                  <item.icon className="w-8 h-8 text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-white">{item.title}</h3>
                <p className="text-white">{item.desc}</p>
              </CardHeader>
              <div className="absolute left-0 bottom-[-10px] h-1 w-0 transition-all duration-300 group-hover:w-full" style={{backgroundColor: '#4169E1'}}></div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}