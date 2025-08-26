"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowRight, ArrowLeft } from "lucide-react"

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
}

export default function ContactPage() {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    company: "",
    phone: "",
    countryCode: "+1",
  })

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const nextStep = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1)
    }
  }

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  return (
    <div className="min-h-screen">

      {/* Contact Form Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <motion.div className="text-center mb-16" {...fadeInUp}>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Let's <span className="text-red-500">Collaborate</span>. We're All Ears!
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
                Unlock the gateway to collaboration by sharing your personal details, project aspirations, and desired
                timelines. Let our connection become the bridge that brings your vision to life, as we navigate together
                towards a shared destination.
              </p>
            </motion.div>

            {/* Progress Indicator */}
            <motion.div
              className="flex items-center justify-center mb-16"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="flex items-center space-x-8 md:space-x-16">
                {[
                  { step: 1, title: "Your Information" },
                  { step: 2, title: "Project Information" },
                  { step: 3, title: "Let's finalize" },
                ].map((item, index) => (
                  <div key={item.step} className="flex items-center">
                    <div className="flex flex-col items-center">
                      <div
                        className={`w-12 h-12 rounded-full flex items-center justify-center text-lg font-bold transition-all duration-300 ${
                          currentStep >= item.step ? "bg-red-500 text-white" : "bg-gray-800 text-gray-400"
                        }`}
                      >
                        {item.step.toString().padStart(2, "0")}
                      </div>
                      <span className={`mt-2 text-sm ${currentStep >= item.step ? "text-white" : "text-gray-400"}`}>
                        {item.title}
                      </span>
                    </div>
                    {index < 2 && (
                      <div
                        className={`hidden md:block w-16 lg:w-24 h-0.5 mx-4 transition-all duration-300 ${
                          currentStep > item.step ? "bg-red-500" : "bg-gray-700"
                        }`}
                      />
                    )}
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Form */}
            <motion.div
              className="bg-gray-900/50 rounded-2xl p-8 md:p-12 border border-gray-800"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {currentStep === 1 && (
                <div className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="fullName" className="text-white text-lg">
                        Full Name
                      </Label>
                      <Input
                        id="fullName"
                        value={formData.fullName}
                        onChange={(e) => handleInputChange("fullName", e.target.value)}
                        className="bg-gray-800 border-gray-700 text-white h-12 text-lg focus:border-red-500"
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="company" className="text-white text-lg">
                        Company/Organization
                      </Label>
                      <Input
                        id="company"
                        value={formData.company}
                        onChange={(e) => handleInputChange("company", e.target.value)}
                        className="bg-gray-800 border-gray-700 text-white h-12 text-lg focus:border-red-500"
                        placeholder="Enter your company name"
                      />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-white text-lg">
                        Your Email
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        className="bg-gray-800 border-gray-700 text-white h-12 text-lg focus:border-red-500"
                        placeholder="Enter your email address"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-white text-lg">
                        Contact Number
                      </Label>
                      <div className="flex">
                        <Select
                          value={formData.countryCode}
                          onValueChange={(value) => handleInputChange("countryCode", value)}
                        >
                          <SelectTrigger className="w-24 bg-gray-800 border-gray-700 text-white h-12 focus:border-red-500">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent className="bg-gray-800 border-gray-700">
                            <SelectItem value="+1" className="text-white">
                              🇺🇸 +1
                            </SelectItem>
                            <SelectItem value="+44" className="text-white">
                              🇬🇧 +44
                            </SelectItem>
                            <SelectItem value="+49" className="text-white">
                              🇩🇪 +49
                            </SelectItem>
                            <SelectItem value="+33" className="text-white">
                              🇫🇷 +33
                            </SelectItem>
                            <SelectItem value="+91" className="text-white">
                              🇮🇳 +91
                            </SelectItem>
                          </SelectContent>
                        </Select>
                        <Input
                          id="phone"
                          value={formData.phone}
                          onChange={(e) => handleInputChange("phone", e.target.value)}
                          className="bg-gray-800 border-gray-700 text-white h-12 text-lg focus:border-red-500 ml-2 flex-1"
                          placeholder="Enter your phone number"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {currentStep === 2 && (
                <div className="space-y-6 text-center">
                  <h3 className="text-2xl font-semibold text-white mb-8">Project Information</h3>
                  <p className="text-gray-400 text-lg">
                    Tell us about your project requirements, timeline, and goals. This step will help us understand your
                    needs better.
                  </p>
                  <div className="bg-gray-800/50 rounded-lg p-8 border border-gray-700">
                    <p className="text-gray-300">Project details form will be implemented here</p>
                  </div>
                </div>
              )}

              {currentStep === 3 && (
                <div className="space-y-6 text-center">
                  <h3 className="text-2xl font-semibold text-white mb-8">Let's Finalize</h3>
                  <p className="text-gray-400 text-lg">
                    Review your information and schedule a consultation call with our team.
                  </p>
                  <div className="bg-gray-800/50 rounded-lg p-8 border border-gray-700">
                    <p className="text-gray-300">Final review and scheduling will be implemented here</p>
                  </div>
                </div>
              )}

              {/* Navigation Buttons */}
              <div className="flex justify-between items-center mt-12">
                <Button
                  onClick={prevStep}
                  variant="outline"
                  className={`border-gray-600 text-gray-400 hover:bg-gray-800 hover:text-white bg-transparent ${
                    currentStep === 1 ? "invisible" : ""
                  }`}
                >
                  <ArrowLeft className="mr-2 h-5 w-5" />
                  Back
                </Button>
                <Button
                  onClick={nextStep}
                  className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 text-lg font-semibold"
                >
                  {currentStep === 3 ? "Submit" : "Next"}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

    </div>
  )
}
