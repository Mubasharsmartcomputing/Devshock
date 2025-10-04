import { Card, CardHeader } from "@/components/ui/card"
import { UserCheck, Globe, Shield, Target } from "lucide-react"
import Image from "next/image"

export default function WhyDevshock() {
  return (
    <section className="px-2 md:px-6 py-16 lg:px-12 container mx-auto">
      <div className="mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4" style={{color: '#4169E1'}}>
          Why Devshock?
        </h2>
        <p className="text-white text-lg md:text-xl mb-16 max-w-3xl mx-auto">
          What sets us apart in delivering exceptional development solutions
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { icon: UserCheck, title: "Expert Team", desc: "Skilled professionals with deep technical expertise and industry experience delivering innovative solutions for your business success." },
            { icon: Globe, title: "Global Execution", desc: "Proven worldwide delivery capabilities with successful projects across multiple industries and markets, ensuring reliable results." },
            { icon: Shield, title: "Transparent & Predictable", desc: "Clear communication, regular updates, and predictable timelines with no hidden costs or surprises throughout the development process." },
            { icon: Target, title: "Trusted in Key Markets", desc: "Established reputation and proven track record in critical business sectors with satisfied clients and successful long-term partnerships." },
          ].map((item, index) => (
            <Card
              key={index}
              className="text-left relative group transform transition-transform duration-300 hover:scale-105 bg-black border-gray-800" onMouseEnter={(e) => e.currentTarget.style.borderColor = '#4169E1'} onMouseLeave={(e) => e.currentTarget.style.borderColor = ''}
            >
              <CardHeader>
                <div className="mb-4 p-2 border w-16 h-16 items-center justify-center text-center relative rounded-[56%_44%_70%_30%/30%_54%_46%_70%] animate-pulse" style={{backgroundColor: '#4169E1'}}>
                  <item.icon className="w-8 h-8 text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white">{item.title}</h3>
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