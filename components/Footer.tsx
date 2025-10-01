import Link from 'next/link'
import Image from 'next/image'
import { Mail, Phone, MapPin, Linkedin, Instagram, Facebook, Twitter } from 'lucide-react'
import FAQ from './FAQ'

export default function Footer() {
  return (
    <>
      <FAQ />
      <footer className="bg-gray-900 border-t border-gray-800">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
          {/* Company Info */}
          <div className="space-y-4">
            <Image
              src="/footerLogo.svg"
              alt="Devshock Logo"
              width={150}
              height={50}
              className="w-auto h-12"
            />
            <p className="text-white leading-relaxed">
              Built by founders, powered by elite engineering. We deliver SaaS, MVPs, and AI-driven solutions.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-gray-800 hover:bg-blue-500 hover:text-white transition-all duration-300">
                <Linkedin size={20} />
              </a>
              <a href="#" className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-gray-800 hover:bg-blue-500 hover:text-white transition-all duration-300">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-gray-800 hover:bg-blue-500 hover:text-white transition-all duration-300">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-gray-800 hover:bg-blue-500 hover:text-white transition-all duration-300">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Quick Links</h4>
            <div className="space-y-2">
              <Link href="/" className="block text-white hover:text-blue-400 transition-colors">
                Home
              </Link>
              <Link href="/about" className="block text-white hover:text-blue-400 transition-colors">
                About Us
              </Link>
              <Link href="/contact" className="block text-white hover:text-blue-400 transition-colors">
                Contact Us
              </Link>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Services</h4>
            <div className="space-y-2">
              <p className="text-white">MVP Development</p>
              <p className="text-white">SaaS Scaling</p>
              <p className="text-white">AI Solutions</p>
              <p className="text-white">Dedicated Teams</p>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-white">
                <Mail size={16} />
                <span>hello@devshock.com</span>
              </div>
              <div className="flex items-center space-x-3 text-white">
                <Phone size={16} />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3 text-white">
                <MapPin size={16} />
                <span>Global Remote Team</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-white">
          <p>&copy; 2025 Devshock. Built by founders, powered by elite engineering talent.</p>
        </div>
      </div>
    </footer>
    </>
  )
}