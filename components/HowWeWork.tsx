import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Check, Home, Zap, Trophy } from 'lucide-react'
import { ReactNode } from 'react'

interface WorkStep {
  icon: ReactNode
  title: string
  description: string
  items: string[]
}

const workSteps: WorkStep[] = [
  {
    icon: <Home className="w-8 h-8 text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />,
    title: "Discovery & Planning",
    description: "We begin with a deep dive into your business needs:",
    items: [
      "Requirements gathering and analysis",
      "Strategic roadmap development",
      "Technology stack selection"
    ]
  },
  {
    icon: <Zap className="w-8 h-8 text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />,
    title: "Agile Development",
    description: "We follow agile methodologies for efficient delivery:",
    items: [
      "2-week sprint cycles",
      "Regular progress updates",
      "Continuous integration & deployment"
    ]
  },
  {
    icon: <Trophy className="w-8 h-8 text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />,
    title: "Launch & Support",
    description: "We ensure smooth deployment and ongoing success:",
    items: [
      "Thorough testing & QA",
      "Seamless deployment process",
      "24/7 maintenance & support"
    ]
  }
]

export default function HowWeWork() {
  return (
    <section className="px-2 md:px-6 py-16 lg:px-12 container mx-auto">
      <div className="mx-auto text-center">
        <h2 className="text-4xl font-bold text-red-500 mb-4">
          How We Work
        </h2>
        <p className="text-white text-lg md:text-xl mb-16 max-w-3xl mx-auto">
          Our proven approach to delivering successful solutions that ensure quality,
          efficiency, and satisfaction
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {workSteps.map((step) => (
            <Card
              key={step.title}
              className="text-left relative group transform transition-transform duration-300 hover:scale-105 bg-black border-gray-800 hover:border-red-500"
            >
              <CardHeader>
                <div className="mb-4 p-2 border w-16 h-16 items-center justify-center text-center relative bg-red-500 rounded-[56%_44%_70%_30%/30%_54%_46%_70%] animate-pulse">
                  {step.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white">{step.title}</h3>
                <p className="text-white">{step.description}</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {step.items.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                      <span className="text-white">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <div className="absolute left-0 bottom-[-10px] h-1 w-0 bg-red-500 transition-all duration-300 group-hover:w-full"></div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}