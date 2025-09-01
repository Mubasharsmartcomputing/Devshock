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
	<div className="container py-10 md:pb-20 mt-5 rounded-lg">
		<h1 className="text-3xl font-bold text-start md:text-center mb-3">FAQ</h1>
		<p className="text-base text-start md:text-center mb-5 md:mb-12 text-gray-600">
			Prime Marketing Experts solves your digital marketing and website bottlenecks.
		</p>

		<div className="flex flex-col lg:flex-row rounded-2xl h-full gap-8 md:border md:p-10">
			<div className="lg:w-1/2 flex justify-center mt-10 items-center">
				<Image
					src="/images/faq.png"
					alt="FAQ Illustration"
					width={500}
					height={800}
					className="md:rounded-lg md:shadow-md w-full h-auto object-cover"
				/>
			</div>
			<div className="lg:w-1/2 h-auto flex items-center">
				<Accordion type="single" collapsible className="w-full space-y-4">
					{accordionData.map((item, index) => (
						<AccordionItem
							value={`item-${index}`}
							key={index}
							className="md:border md:shadow-none border-gray-200 md:rounded-lg px-2 md:px-5 py-2"
						>
							<AccordionTrigger className="text-start">{item.question}</AccordionTrigger>
							<AccordionContent>{item.answer}</AccordionContent>
						</AccordionItem>
					))}
				</Accordion>
			</div>
		</div>
	</div>
)

export default FAQ