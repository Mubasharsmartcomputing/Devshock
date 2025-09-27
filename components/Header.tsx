'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Menu, X, ChevronDown } from 'lucide-react'

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
            <Link href="/" className="text-gray-700 transition-colors font-medium" style={{'--hover-color': '#4169E1'}} onMouseEnter={(e) => e.currentTarget.style.color = '#4169E1'} onMouseLeave={(e) => e.currentTarget.style.color = ''}>
              Home
            </Link>
            <div className="relative group">
              <button className="text-gray-700 transition-colors font-medium flex items-center" onMouseEnter={(e) => e.currentTarget.style.color = '#4169E1'} onMouseLeave={(e) => e.currentTarget.style.color = ''}>
                Services <ChevronDown size={16} className="ml-1" />
              </button>
              <div className="absolute top-full left-0 mt-2 w-80 bg-white rounded-lg shadow-lg border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-800 mb-1">Our Solutions</h3>
                  <p className="text-sm text-gray-600 mb-3">Comprehensive development services tailored to your business needs</p>
                  <div className="space-y-1">
                    <a href="#" className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md transition-colors">MVP Development</a>
                    <a href="#" className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md transition-colors">SaaS Scaling</a>
                    <a href="#" className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md transition-colors">AI Solutions</a>
                    <a href="#" className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md transition-colors">Mobile App Development</a>
                    <a href="#" className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md transition-colors">DevOps</a>
                    <a href="#" className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md transition-colors">Dedicated Teams</a>
                  </div>
                </div>
              </div>
            </div>
            <Link href="/about" className="text-gray-700 transition-colors font-medium" onMouseEnter={(e) => e.currentTarget.style.color = '#4169E1'} onMouseLeave={(e) => e.currentTarget.style.color = ''}>
              About Us
            </Link>
            <Link href="/contact" className="text-gray-700 transition-colors font-medium" onMouseEnter={(e) => e.currentTarget.style.color = '#4169E1'} onMouseLeave={(e) => e.currentTarget.style.color = ''}>
              Contact Us
            </Link>
            <Link href="/consultation">
              <Button className="text-white px-6 py-2 rounded-lg transition-colors" style={{backgroundColor: '#4169E1'}} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#3A5FCD'} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#4169E1'}>
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
              <Link href="/" className="text-gray-700 transition-colors font-medium" onClick={() => setIsMenuOpen(false)} onMouseEnter={(e) => e.currentTarget.style.color = '#4169E1'} onMouseLeave={(e) => e.currentTarget.style.color = ''}>
                Home
              </Link>
              <div className="text-gray-700 font-medium">
                Services
                <div className="ml-4 mt-2 space-y-2">
                  <a href="#" className="block text-sm text-gray-600 hover:text-blue-600">MVP Development</a>
                  <a href="#" className="block text-sm text-gray-600 hover:text-blue-600">SaaS Scaling</a>
                  <a href="#" className="block text-sm text-gray-600 hover:text-blue-600">AI Solutions</a>
                  <a href="#" className="block text-sm text-gray-600 hover:text-blue-600">Mobile App Development</a>
                  <a href="#" className="block text-sm text-gray-600 hover:text-blue-600">DevOps</a>
                  <a href="#" className="block text-sm text-gray-600 hover:text-blue-600">Dedicated Teams</a>
                </div>
              </div>
              <Link href="/about" className="text-gray-700 transition-colors font-medium" onClick={() => setIsMenuOpen(false)} onMouseEnter={(e) => e.currentTarget.style.color = '#4169E1'} onMouseLeave={(e) => e.currentTarget.style.color = ''}>
                About Us
              </Link>
              <Link href="/contact" className="text-gray-700 transition-colors font-medium" onClick={() => setIsMenuOpen(false)} onMouseEnter={(e) => e.currentTarget.style.color = '#4169E1'} onMouseLeave={(e) => e.currentTarget.style.color = ''}>
                Contact Us
              </Link>
              <Link href="/consultation" onClick={() => setIsMenuOpen(false)}>
                <Button
                  variant="outline"
                  className="bg-white w-full text-white" style={{borderColor: '#4169E1', color: '#4169E1', backgroundColor: 'white'}} onMouseEnter={(e) => {e.currentTarget.style.backgroundColor = '#4169E1'; e.currentTarget.style.color = 'white'}} onMouseLeave={(e) => {e.currentTarget.style.backgroundColor = 'white'; e.currentTarget.style.color = '#4169E1'}}
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