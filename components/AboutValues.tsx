import { Users, Globe, Briefcase, MapPin, UserCheck, Star, Heart, Lightbulb, Shield, TrendingUp, Rocket, GraduationCap, UserPlus, Globe2 } from "lucide-react"

export default function AboutValues() {
  return (
    <section className="px-2 md:px-6 py-16 lg:px-12 container mx-auto">
      <div className="mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4" style={{color: '#4169E1'}}>
          Our Core Values
        </h2>
        <p className="text-white text-lg md:text-xl mb-16 max-w-3xl mx-auto">
          The principles that drive our innovation and guide every technology solution we deliver
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-left relative group transform transition-transform duration-300 hover:scale-105 bg-black border-gray-800 p-8 rounded-2xl" onMouseEnter={(e) => e.currentTarget.style.borderColor = '#4169E1'} onMouseLeave={(e) => e.currentTarget.style.borderColor = ''}>
            <div className="mb-4 p-2 border w-16 h-16 items-center justify-center text-center relative rounded-[56%_44%_70%_30%/30%_54%_46%_70%] animate-pulse" style={{backgroundColor: '#4169E1'}}>
              <UserCheck className="w-8 h-8 text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-white">Founder-First Mindset</h3>
            <p className="text-white leading-relaxed">
              We think like founders because we are founders. Every decision is made with your business goals in mind.
            </p>
            <div className="absolute left-0 bottom-[-10px] h-1 w-0 transition-all duration-300 group-hover:w-full" style={{backgroundColor: '#4169E1'}}></div>
          </div>

          <div className="text-left relative group transform transition-transform duration-300 hover:scale-105 bg-black border-gray-800 p-8 rounded-2xl" onMouseEnter={(e) => e.currentTarget.style.borderColor = '#4169E1'} onMouseLeave={(e) => e.currentTarget.style.borderColor = ''}>
            <div className="mb-4 p-2 border w-16 h-16 items-center justify-center text-center relative rounded-[56%_44%_70%_30%/30%_54%_46%_70%] animate-pulse" style={{backgroundColor: '#4169E1'}}>
              <GraduationCap className="w-8 h-8 text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-white">Elite Talent Only</h3>
            <p className="text-white leading-relaxed">
              We work with the top 1% of global talent. Our rigorous vetting process ensures exceptional quality.
            </p>
            <div className="absolute left-0 bottom-[-10px] h-1 w-0 transition-all duration-300 group-hover:w-full" style={{backgroundColor: '#4169E1'}}></div>
          </div>

          <div className="text-left relative group transform transition-transform duration-300 hover:scale-105 bg-black border-gray-800 p-8 rounded-2xl" onMouseEnter={(e) => e.currentTarget.style.borderColor = '#4169E1'} onMouseLeave={(e) => e.currentTarget.style.borderColor = ''}>
            <div className="mb-4 p-2 border w-16 h-16 items-center justify-center text-center relative rounded-[56%_44%_70%_30%/30%_54%_46%_70%] animate-pulse" style={{backgroundColor: '#4169E1'}}>
              <Rocket className="w-8 h-8 text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-white">Innovation Driven</h3>
            <p className="text-white leading-relaxed">
              We stay ahead of technology trends and bring cutting-edge solutions to every project.
            </p>
            <div className="absolute left-0 bottom-[-10px] h-1 w-0 transition-all duration-300 group-hover:w-full" style={{backgroundColor: '#4169E1'}}></div>
          </div>

          <div className="text-left relative group transform transition-transform duration-300 hover:scale-105 bg-black border-gray-800 p-8 rounded-2xl" onMouseEnter={(e) => e.currentTarget.style.borderColor = '#4169E1'} onMouseLeave={(e) => e.currentTarget.style.borderColor = ''}>
            <div className="mb-4 p-2 border w-16 h-16 items-center justify-center text-center relative rounded-[56%_44%_70%_30%/30%_54%_46%_70%] animate-pulse" style={{backgroundColor: '#4169E1'}}>
              <Star className="w-8 h-8 text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-white">Delivery Excellence</h3>
            <p className="text-white leading-relaxed">
              On-time, on-budget, and exceeding expectations. That's our commitment to every client.
            </p>
            <div className="absolute left-0 bottom-[-10px] h-1 w-0 transition-all duration-300 group-hover:w-full" style={{backgroundColor: '#4169E1'}}></div>
          </div>

          <div className="text-left relative group transform transition-transform duration-300 hover:scale-105 bg-black border-gray-800 p-8 rounded-2xl" onMouseEnter={(e) => e.currentTarget.style.borderColor = '#4169E1'} onMouseLeave={(e) => e.currentTarget.style.borderColor = ''}>
            <div className="mb-4 p-2 border w-16 h-16 items-center justify-center text-center relative rounded-[56%_44%_70%_30%/30%_54%_46%_70%] animate-pulse" style={{backgroundColor: '#4169E1'}}>
              <UserPlus className="w-8 h-8 text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-white">Global Execution</h3>
            <p className="text-white leading-relaxed">
              We deliver proven worldwide solutions with our global team of elite engineers and product specialists.
            </p>
            <div className="absolute left-0 bottom-[-10px] h-1 w-0 transition-all duration-300 group-hover:w-full" style={{backgroundColor: '#4169E1'}}></div>
          </div>

          <div className="text-left relative group transform transition-transform duration-300 hover:scale-105 bg-black border-gray-800 p-8 rounded-2xl" onMouseEnter={(e) => e.currentTarget.style.borderColor = '#4169E1'} onMouseLeave={(e) => e.currentTarget.style.borderColor = ''}>
            <div className="mb-4 p-2 border w-16 h-16 items-center justify-center text-center relative rounded-[56%_44%_70%_30%/30%_54%_46%_70%] animate-pulse" style={{backgroundColor: '#4169E1'}}>
              <Globe2 className="w-8 h-8 text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-white">Transparent & Predictable</h3>
            <p className="text-white leading-relaxed">
              Clear communication always. We believe in transparency throughout the development process.
            </p>
            <div className="absolute left-0 bottom-[-10px] h-1 w-0 transition-all duration-300 group-hover:w-full" style={{backgroundColor: '#4169E1'}}></div>
          </div>

          <div className="text-left relative group transform transition-transform duration-300 hover:scale-105 bg-black border-gray-800 p-8 rounded-2xl" onMouseEnter={(e) => e.currentTarget.style.borderColor = '#4169E1'} onMouseLeave={(e) => e.currentTarget.style.borderColor = ''}>
            <div className="mb-4 p-2 border w-16 h-16 items-center justify-center text-center relative rounded-[56%_44%_70%_30%/30%_54%_46%_70%] animate-pulse" style={{backgroundColor: '#4169E1'}}>
              <Shield className="w-8 h-8 text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-white">Security First</h3>
            <p className="text-white leading-relaxed">
              We implement industry-leading security practices to protect your data and ensure compliance.
            </p>
            <div className="absolute left-0 bottom-[-10px] h-1 w-0 transition-all duration-300 group-hover:w-full" style={{backgroundColor: '#4169E1'}}></div>
          </div>

          <div className="text-left relative group transform transition-transform duration-300 hover:scale-105 bg-black border-gray-800 p-8 rounded-2xl" onMouseEnter={(e) => e.currentTarget.style.borderColor = '#4169E1'} onMouseLeave={(e) => e.currentTarget.style.borderColor = ''}>
            <div className="mb-4 p-2 border w-16 h-16 items-center justify-center text-center relative rounded-[56%_44%_70%_30%/30%_54%_46%_70%] animate-pulse" style={{backgroundColor: '#4169E1'}}>
              <TrendingUp className="w-8 h-8 text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-white">Scalable Solutions</h3>
            <p className="text-white leading-relaxed">
              We build for growth. Our solutions scale seamlessly as your business expands.
            </p>
            <div className="absolute left-0 bottom-[-10px] h-1 w-0 transition-all duration-300 group-hover:w-full" style={{backgroundColor: '#4169E1'}}></div>
          </div>
        </div>
      </div>
    </section>
  )
}