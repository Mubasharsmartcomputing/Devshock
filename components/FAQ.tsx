'use client'
import React from 'react'
import Image from 'next/image'
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
		question: 'How can we generate more sales-qualified leads and revenue?',
		answer:
			'Are you looking to generate more leads and drive more revenue? We perform customized revenue marketing tactics to generate more high-quality sales opportunities.',
	},
	{
		question: 'Why is my website not attracting enough potential customers?',
		answer:
			'Does your business find getting qualified leads into your pipeline to be a challenge? Boost your lead generation potential with our tailored digital marketing strategies and website development services designed to meet your specific business requirements',
	},
	{
		question: 'Why is our marketing and sales data not interconnected?',
		answer:
			'We use marketing automation and CRM technology to align sales and marketing, maximizing ROI for each sales qualified lead (SQL). This will help you organize your data, so salespeople can analyze efforts for better results and reports.',
	},
	{
		question: 'Why does our website get very little traffic?',
		answer:
			"When your website has low traffic, you're missing out on potential business opportunities. offer customizable SEO services, social media management, and PPC advertising to improve your website's visibility and attract more visitors",
	},
	{
		question: 'Why does managing digital campaigns take so much time?',
		answer:
			'We help your company use the latest advertising strategies and technology to make the most of your advertising budget. Our experts will optimize your advertising budget by targeting ads, creating engaging graphics, and distributing your budget effectively across platforms.',
	},
]

const FAQ: React.FC = () => (
	<div className="container mx-auto px-4 py-8 md:py-16">
		<h1 className="text-2xl md:text-3xl font-bold text-center mb-3">FAQ</h1>
		<p className="text-sm md:text-base text-center mb-8 md:mb-12 text-white max-w-2xl mx-auto">
			Prime Marketing Experts solves your digital marketing and website bottlenecks.
		</p>

		<div className="flex flex-col lg:flex-row rounded-2xl gap-6 md:gap-8 md:border md:p-6 lg:p-10">
			<div className="w-full lg:w-1/2 order-2 lg:order-1">
				<Accordion type="single" collapsible className="w-full space-y-3 md:space-y-4">
					{accordionData.map((item, index) => (
						<AccordionItem
							value={`item-${index}`}
							key={index}
							className="!border !border-white rounded-lg px-3 md:px-5 py-2 shadow-sm"
						>
							<AccordionTrigger className="text-left text-sm md:text-base font-medium">{item.question}</AccordionTrigger>
							<AccordionContent className="text-sm md:text-base text-white">{item.answer}</AccordionContent>
						</AccordionItem>
					))}
				</Accordion>
			</div>
			<div className="w-full lg:w-1/2 order-1 lg:order-2 flex justify-center items-center">
				<Image
					src="/faq.png"
					alt="FAQ Illustration"
					width={500}
					height={200}
					className="rounded-lg shadow-md w-full max-w-md lg:max-w-full h-[45vh] object-cover"
				/>
			</div>
		</div>
	</div>
)

export default FAQ