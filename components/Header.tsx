'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Menu, X } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="border-b border-gray-800 bg-black/95 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-red-500 hover:text-red-400 transition-colors">
            Devshock
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="hover:text-red-400 transition-colors">
              Home
            </Link>
            <Link href="/about" className="hover:text-red-400 transition-colors">
              About Us
            </Link>
            <Link href="/case-studies" className="hover:text-red-400 transition-colors">
              Case Studies
            </Link>
            <Link href="/contact" className="hover:text-red-400 transition-colors">
              Contact Us
            </Link>
            <Link href="/consultation">
              <Button
                variant="outline"
                className="border-red-500 text-red-500 hover:bg-red-500 hover:text-white bg-transparent"
              >
                Get Free Consultation
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-800">
            <div className="flex flex-col space-y-4 pt-4">
              <Link href="/" className="hover:text-red-400 transition-colors" onClick={() => setIsMenuOpen(false)}>
                Home
              </Link>
              <Link href="/about" className="hover:text-red-400 transition-colors" onClick={() => setIsMenuOpen(false)}>
                About Us
              </Link>
              <Link href="/case-studies" className="hover:text-red-400 transition-colors" onClick={() => setIsMenuOpen(false)}>
                Case Studies
              </Link>
              <Link href="/contact" className="hover:text-red-400 transition-colors" onClick={() => setIsMenuOpen(false)}>
                Contact Us
              </Link>
              <Link href="/consultation" onClick={() => setIsMenuOpen(false)}>
                <Button
                  variant="outline"
                  className="border-red-500 text-red-500 hover:bg-red-500 hover:text-white bg-transparent w-full"
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