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
                width={40}
                height={40}
                className="w-35 h-18"
              />
            </div>
            
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 transition-colors font-medium" style={{'--hover-color': '#4169E1'}} onMouseEnter={(e) => e.currentTarget.style.color = '#4169E1'} onMouseLeave={(e) => e.currentTarget.style.color = ''}>
              Home
            </Link>
             <Link href="/about" className="text-gray-700 transition-colors font-medium" onMouseEnter={(e) => e.currentTarget.style.color = '#4169E1'} onMouseLeave={(e) => e.currentTarget.style.color = ''}>
              About Us
            </Link>
            <Link href="/services" className="text-gray-700 transition-colors font-medium" onMouseEnter={(e) => e.currentTarget.style.color = '#4169E1'} onMouseLeave={(e) => e.currentTarget.style.color = ''}>
              Services
            </Link>
            <Link href="/case-studies" className="text-gray-700 transition-colors font-medium" onMouseEnter={(e) => e.currentTarget.style.color = '#4169E1'} onMouseLeave={(e) => e.currentTarget.style.color = ''}>
              Case Studies
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
              <Link href="/services" className="text-gray-700 transition-colors font-medium" onClick={() => setIsMenuOpen(false)} onMouseEnter={(e) => e.currentTarget.style.color = '#4169E1'} onMouseLeave={(e) => e.currentTarget.style.color = ''}>
                Services
              </Link>
              <Link href="/about" className="text-gray-700 transition-colors font-medium" onClick={() => setIsMenuOpen(false)} onMouseEnter={(e) => e.currentTarget.style.color = '#4169E1'} onMouseLeave={(e) => e.currentTarget.style.color = ''}>
                About Us
              </Link>
              <Link href="/case-studies" className="text-gray-700 transition-colors font-medium" onClick={() => setIsMenuOpen(false)} onMouseEnter={(e) => e.currentTarget.style.color = '#4169E1'} onMouseLeave={(e) => e.currentTarget.style.color = ''}>
                Case Studies
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