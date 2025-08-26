import Link from 'next/link'
import { Mail, Phone, MapPin, Linkedin, Twitter, Github } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-red-500">Devshock</h3>
            <p className="text-gray-400 leading-relaxed">
              Built by founders, powered by elite engineering. We deliver SaaS, MVPs, and AI-driven solutions.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-red-500 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-red-500 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-red-500 transition-colors">
                <Github size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Quick Links</h4>
            <div className="space-y-2">
              <Link href="/" className="block text-gray-400 hover:text-red-400 transition-colors">
                Home
              </Link>
              <Link href="/about" className="block text-gray-400 hover:text-red-400 transition-colors">
                About Us
              </Link>
              <Link href="/case-studies" className="block text-gray-400 hover:text-red-400 transition-colors">
                Case Studies
              </Link>
              <Link href="/contact" className="block text-gray-400 hover:text-red-400 transition-colors">
                Contact Us
              </Link>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Services</h4>
            <div className="space-y-2">
              <p className="text-gray-400">MVP Development</p>
              <p className="text-gray-400">SaaS Scaling</p>
              <p className="text-gray-400">AI Solutions</p>
              <p className="text-gray-400">Dedicated Teams</p>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-400">
                <Mail size={16} />
                <span>hello@devshock.com</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400">
                <Phone size={16} />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400">
                <MapPin size={16} />
                <span>Global Remote Team</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Devshock. Built by founders, powered by elite engineering talent.</p>
        </div>
      </div>
    </footer>
  )
}