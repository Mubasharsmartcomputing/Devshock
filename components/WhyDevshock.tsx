import { Card, CardHeader } from "@/components/ui/card"
import { UserCheck, Globe, Shield, Target } from "lucide-react"

export default function WhyDevshock() {
  return (
    <section className="px-2 md:px-6 py-16 lg:px-12 container mx-auto">
      <div className="mx-auto text-center">
        <h2 className="text-4xl font-bold text-red-500 mb-4">
          Why Devshock?
        </h2>
        <p className="text-gray-400 text-lg md:text-xl mb-16 max-w-3xl mx-auto">
          What sets us apart in delivering exceptional development solutions
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { icon: UserCheck, title: "Founders in Alignment", desc: "We understand your journey" },
            { icon: Globe, title: "Known Global Execution", desc: "Proven worldwide delivery" },
            { icon: Shield, title: "Transparent & Predictable", desc: "Clear communication always" },
            { icon: Target, title: "Trusted in Key Markets", desc: "Established market presence" },
          ].map((item, index) => (
            <Card
              key={index}
              className="text-left relative group transform transition-transform duration-300 hover:scale-105 bg-black border-gray-800 hover:border-red-500"
            >
              <CardHeader>
                <div className="mb-4 p-2 border w-16 h-16 items-center justify-center text-center relative bg-red-500 rounded-[56%_44%_70%_30%/30%_54%_46%_70%] animate-pulse">
                  <item.icon className="w-8 h-8 text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white">{item.title}</h3>
                <p className="text-gray-400">{item.desc}</p>
              </CardHeader>
              <div className="absolute left-0 bottom-[-10px] h-1 w-0 bg-red-500 transition-all duration-300 group-hover:w-full"></div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}