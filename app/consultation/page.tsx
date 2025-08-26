'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Checkbox } from '@/components/ui/checkbox'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Calendar, Clock, CheckCircle, ArrowRight, Users, Lightbulb, Target } from 'lucide-react'

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
}

export default function ConsultationPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    projectType: '',
    budget: '',
    timeline: '',
    description: '',
    services: [] as string[]
  })

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleServiceToggle = (service: string) => {
    setFormData(prev => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter(s => s !== service)
        : [...prev.services, service]
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    // Handle form submission
  }

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
              Get Your <span className="text-red-500">Free Consultation</span>
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed"
              {...fadeInUp}
              transition={{ delay: 0.2 }}
            >
              Schedule a strategic consultation with our founders. We'll analyze your project, discuss solutions, and create a roadmap for success.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 bg-gray-900/30">
        <div className="container mx-auto px-4">
          <motion.div 
            className="grid md:grid-cols-3 gap-8 text-center"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {[
              {
                icon: Users,
                title: "Founder-to-Founder",
                desc: "Direct access to our founding team who understand your challenges"
              },
              {
                icon: Lightbulb,
                title: "Strategic Insights",
                desc: "Get actionable recommendations based on 10+ years of experience"
              },
              {
                icon: Target,
                title: "Custom Roadmap",
                desc: "Receive a tailored plan for your specific project and goals"
              }
            ].map((benefit, index) => (
              <div key={index} className="space-y-4">
                <div className="mx-auto w-16 h-16 bg-red-500/10 rounded-full flex items-center justify-center">
                  <benefit.icon className="h-8 w-8 text-red-500" />
                </div>
                <h3 className="text-xl font-semibold">{benefit.title}</h3>
                <p className="text-gray-400">{benefit.desc}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="bg-gray-900/50 border-gray-800">
                <CardHeader>
                  <CardTitle className="text-2xl">Tell Us About Your Project</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Basic Info */}
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) => handleInputChange('name', e.target.value)}
                          className="bg-gray-800 border-gray-700 focus:border-red-500"
                          placeholder="Your full name"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          className="bg-gray-800 border-gray-700 focus:border-red-500"
                          placeholder="your@email.com"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="company">Company/Organization</Label>
                        <Input
                          id="company"
                          value={formData.company}
                          onChange={(e) => handleInputChange('company', e.target.value)}
                          className="bg-gray-800 border-gray-700 focus:border-red-500"
                          placeholder="Your company name"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          value={formData.phone}
                          onChange={(e) => handleInputChange('phone', e.target.value)}
                          className="bg-gray-800 border-gray-700 focus:border-red-500"
                          placeholder="+1 (555) 123-4567"
                        />
                      </div>
                    </div>

                    {/* Project Details */}
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label>Project Type *</Label>
                        <Select value={formData.projectType} onValueChange={(value) => handleInputChange('projectType', value)}>
                          <SelectTrigger className="bg-gray-800 border-gray-700 focus:border-red-500">
                            <SelectValue placeholder="Select project type" />
                          </SelectTrigger>
                          <SelectContent className="bg-gray-800 border-gray-700">
                            <SelectItem value="mvp">MVP Development</SelectItem>
                            <SelectItem value="saas">SaaS Platform</SelectItem>
                            <SelectItem value="mobile">Mobile App</SelectItem>
                            <SelectItem value="web">Web Application</SelectItem>
                            <SelectItem value="ai">AI/ML Solution</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label>Budget Range</Label>
                        <Select value={formData.budget} onValueChange={(value) => handleInputChange('budget', value)}>
                          <SelectTrigger className="bg-gray-800 border-gray-700 focus:border-red-500">
                            <SelectValue placeholder="Select budget range" />
                          </SelectTrigger>
                          <SelectContent className="bg-gray-800 border-gray-700">
                            <SelectItem value="10k-25k">$10K - $25K</SelectItem>
                            <SelectItem value="25k-50k">$25K - $50K</SelectItem>
                            <SelectItem value="50k-100k">$50K - $100K</SelectItem>
                            <SelectItem value="100k+">$100K+</SelectItem>
                            <SelectItem value="discuss">Let's Discuss</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label>Timeline</Label>
                      <Select value={formData.timeline} onValueChange={(value) => handleInputChange('timeline', value)}>
                        <SelectTrigger className="bg-gray-800 border-gray-700 focus:border-red-500">
                          <SelectValue placeholder="Select timeline" />
                        </SelectTrigger>
                        <SelectContent className="bg-gray-800 border-gray-700">
                          <SelectItem value="asap">ASAP</SelectItem>
                          <SelectItem value="1-3months">1-3 months</SelectItem>
                          <SelectItem value="3-6months">3-6 months</SelectItem>
                          <SelectItem value="6months+">6+ months</SelectItem>
                          <SelectItem value="flexible">Flexible</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Services */}
                    <div className="space-y-3">
                      <Label>Services Needed (Select all that apply)</Label>
                      <div className="grid grid-cols-2 gap-3">
                        {[
                          'MVP Development',
                          'Full-Stack Development',
                          'Mobile App Development',
                          'UI/UX Design',
                          'DevOps & Infrastructure',
                          'AI/ML Integration',
                          'Quality Assurance',
                          'Technical Consulting'
                        ].map((service) => (
                          <div key={service} className="flex items-center space-x-2">
                            <Checkbox
                              id={service}
                              checked={formData.services.includes(service)}
                              onCheckedChange={() => handleServiceToggle(service)}
                              className="border-gray-600 data-[state=checked]:bg-red-500 data-[state=checked]:border-red-500"
                            />
                            <Label htmlFor={service} className="text-sm">{service}</Label>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Description */}
                    <div className="space-y-2">
                      <Label htmlFor="description">Project Description *</Label>
                      <Textarea
                        id="description"
                        value={formData.description}
                        onChange={(e) => handleInputChange('description', e.target.value)}
                        className="bg-gray-800 border-gray-700 focus:border-red-500 min-h-[120px]"
                        placeholder="Tell us about your project, goals, and any specific requirements..."
                        required
                      />
                    </div>

                    <Button 
                      type="submit" 
                      size="lg" 
                      className="w-full bg-red-500 hover:bg-red-600 text-white py-4 text-lg font-semibold"
                    >
                      Schedule Free Consultation
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            {/* Consultation Details */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              {/* What to Expect */}
              <Card className="bg-gray-900/50 border-gray-800">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Calendar className="h-6 w-6 text-red-500 mr-2" />
                    What to Expect
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {[
                    "45-minute strategic consultation call",
                    "Project analysis and technical recommendations",
                    "Custom roadmap and timeline discussion",
                    "Team composition and cost estimation",
                    "Next steps and proposal outline"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300">{item}</span>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Process */}
              <Card className="bg-gray-900/50 border-gray-800">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Clock className="h-6 w-6 text-red-500 mr-2" />
                    Our Process
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {[
                    {
                      step: "1",
                      title: "Submit Form",
                      desc: "Fill out the consultation form with your project details"
                    },
                    {
                      step: "2",
                      title: "Schedule Call",
                      desc: "We'll contact you within 24 hours to schedule your consultation"
                    },
                    {
                      step: "3",
                      title: "Strategic Discussion",
                      desc: "45-minute call with our founding team to discuss your project"
                    },
                    {
                      step: "4",
                      title: "Custom Proposal",
                      desc: "Receive a detailed proposal with timeline and cost breakdown"
                    }
                  ].map((process, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                        {process.step}
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">{process.title}</h4>
                        <p className="text-gray-400 text-sm">{process.desc}</p>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Contact Info */}
              <Card className="bg-gradient-to-br from-red-500/10 to-transparent border-red-500/20">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Prefer to Talk Directly?</h3>
                  <div className="space-y-3 text-gray-300">
                    <p>📧 hello@devshock.com</p>
                    <p>📞 +1 (555) 123-4567</p>
                    <p>🌍 Available globally (Remote-first)</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}