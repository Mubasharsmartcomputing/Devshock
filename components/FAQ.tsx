'use client'
import React from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion'

interface AccordionItem {
    question: string
    answer: string
}

const accordionData: AccordionItem[] = [
    {
        question: 'What is the application development timeline?',
        answer:
            'The timeline depends on project complexity: Simple apps take 3-4 months, medium complexity projects require 4-6 months, and enterprise-level applications need 6-12 months. We provide detailed timelines during the planning phase after understanding your specific requirements.',
    },
    {
        question: 'Do you do cross-platform development?',
        answer:
            'Yes! We specialize in cross-platform development using Flutter and React Native frameworks. These technologies allow us to build applications that run seamlessly on both iOS and Android from a single codebase, reducing development time and costs.',
    },
    {
        question: 'Is it possible to add third-party tools inside my app?',
        answer:
            'Absolutely! We specialize in seamless integration of third-party tools and APIs, including payment gateways, CRM systems, analytics tools, authentication services, mapping APIs, and social media. Our development approach emphasizes creating applications with robust integration capabilities.',
    },
    {
        question: 'What steps do you take to secure applications?',
        answer:
            'Security is our top priority. Our comprehensive approach includes end-to-end data encryption, multi-factor authentication, regular penetration testing, and compliance with industry standards like GDPR and HIPAA. We also provide ongoing security updates and monitoring to protect against emerging threats.',
    },
    {
        question: 'What types of applications do you build?',
        answer:
        'We create business workflow-based custom web applications, Progressive Web Apps (PWAs) for app-like experiences, and scalable cloud-based solutions for high performance. Our applications are tailored to streamline your business operations and improve efficiency.',
    },
]

const FAQ: React.FC = () => (
    <div className="container mx-auto px-4 py-8 md:py-16">
        {/* HEADING AND DESCRIPTION ARE OUTSIDE THE BANNER as requested */}
        <h1 className="text-4xl font-bold text-center mb-4" style={{color: '#4169E1'}}>
            FAQ
        </h1>
        <p className="text-lg md:text-xl text-center mb-8 md:mb-12 text-white max-w-3xl mx-auto">
            Devshock creates custom web applications, PWAs, and scalable cloud solutions for your business.
        </p>

        {/* This is the main container that will now serve as the banner */}
        <div
            className="flex flex-col lg:flex-row rounded-2xl gap-6 md:gap-8 p-6 lg:p-10 border border-white/20 relative"
            style={{
                backgroundImage: `url('/faq.png')`, 
                backgroundSize: 'contain',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                minHeight: '400px',
            }}
        >
            {/* Overlay to darken the image slightly for better text readability */}
            <div className="absolute inset-0 rounded-2xl bg-black opacity-30 pointer-events-none"></div>

            {/* Content Wrapper for the Accordion (FAQ Questions) */}
            <div className="w-full lg:w-1/2 order-2 lg:order-1 relative z-10">
                <Accordion type="single" collapsible className="w-full space-y-3 md:space-y-4">
                    {accordionData.map((item, index) => (
                        <AccordionItem
                            value={`item-${index}`}
                            key={index}
                            className="!border !border-white bg-transparent rounded-lg px-3 md:px-5 py-2 shadow-lg backdrop-blur-sm"
                        >
                            <AccordionTrigger className="text-left text-sm md:text-base font-medium text-white hover:no-underline">
                                {item.question}
                            </AccordionTrigger>
                            <AccordionContent className="text-sm md:text-base text-white/80">
                                {item.answer}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
            
            <div className="w-full lg:w-1/2 order-1 lg:order-2">
                {/* Right side space for banner image content */}
            </div>
        </div>
    </div>
)

export default FAQ