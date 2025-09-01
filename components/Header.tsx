'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Menu, X } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="border-b border-gray-200 bg-white/95 backdrop-blur-sm sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
            <div className="bg-gray-100 p-2 rounded-lg">
              <Image
                src="/logo.png"
                alt="Devshock Logo"
                width={32}
                height={32}
                className="w-30 h-16"
              />
            </div>
            
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-red-500 transition-colors font-medium">
              Home
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-red-500 transition-colors font-medium">
              About Us
            </Link>
            <Link href="/case-studies" className="text-gray-700 hover:text-red-500 transition-colors font-medium">
              Case Studies
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-red-500 transition-colors font-medium">
              Contact Us
            </Link>
            <Link href="/consultation">
              <Button
                variant="outline"
                className="border-red-500 text-red-500 hover:bg-red-500 hover:text-white bg-white"
              >
                Get Free Consultation
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4 pt-4">
              <Link href="/" className="text-gray-700 hover:text-red-500 transition-colors font-medium" onClick={() => setIsMenuOpen(false)}>
                Home
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-red-500 transition-colors font-medium" onClick={() => setIsMenuOpen(false)}>
                About Us
              </Link>
              <Link href="/case-studies" className="text-gray-700 hover:text-red-500 transition-colors font-medium" onClick={() => setIsMenuOpen(false)}>
                Case Studies
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-red-500 transition-colors font-medium" onClick={() => setIsMenuOpen(false)}>
                Contact Us
              </Link>
              <Link href="/consultation" onClick={() => setIsMenuOpen(false)}>
                <Button
                  variant="outline"
                  className="border-red-500 text-red-500 hover:bg-red-500 hover:text-white bg-white w-full"
                >
                  Get Free Consultation
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}