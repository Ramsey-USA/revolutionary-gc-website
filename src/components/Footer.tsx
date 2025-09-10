'use client'

import Link from 'next/link'
import { 
  MapPin, 
  Phone, 
  Mail, 
  Facebook, 
  Linkedin, 
  Instagram, 
  Youtube,
  Twitter
} from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'Projects', href: '/projects' },
    { name: 'Services', href: '/services' },
    { name: 'Team', href: '/team' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' }
  ]

  const services = [
    { name: 'Commercial Construction', href: '/services/commercial' },
    { name: 'Industrial Building', href: '/services/industrial' },
    { name: 'Healthcare Facilities', href: '/services/healthcare' },
    { name: 'Fire Stations', href: '/services/fire-stations' },
    { name: 'AI Estimating', href: '/estimate' },
    { name: '3D Visualization', href: '/3d-explorer' }
  ]

  const socialLinks = [
    { 
      name: 'Facebook', 
      href: 'https://facebook.com/mhconstruction', 
      icon: Facebook 
    },
    { 
      name: 'LinkedIn', 
      href: 'https://linkedin.com/company/mhconstruction', 
      icon: Linkedin 
    },
    { 
      name: 'Instagram', 
      href: 'https://instagram.com/mhconstruction', 
      icon: Instagram 
    },
    { 
      name: 'YouTube', 
      href: 'https://youtube.com/mhconstruction', 
      icon: Youtube 
    },
    { 
      name: 'Twitter', 
      href: 'https://twitter.com/mhconstruction', 
      icon: Twitter 
    }
  ]

  return (
    <footer className="bg-army-black text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="bg-mh-forest-green text-white p-2 rounded-lg">
                <span className="text-xl font-bold">MH</span>
              </div>
              <div className="flex flex-col">
                <span className="text-white font-bold text-lg">MH Construction</span>
                <span className="text-army-gold text-xs font-semibold">VETERAN OWNED</span>
              </div>
            </div>
            
            <p className="text-gray-300 mb-6 leading-relaxed">
              Building tomorrow with today's technology. Veteran-owned construction excellence 
              powered by cutting-edge AI technology throughout the Pacific Northwest.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin size={16} className="text-army-gold flex-shrink-0" />
                <span className="text-gray-300 text-sm">
                  Yakima, Washington & Surrounding Areas
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={16} className="text-army-gold flex-shrink-0" />
                <a 
                  href="tel:+1-509-555-0123" 
                  className="text-gray-300 text-sm hover:text-army-gold transition-colors"
                >
                  (509) 555-0123
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={16} className="text-army-gold flex-shrink-0" />
                <a 
                  href="mailto:info@mhconstruction.com" 
                  className="text-gray-300 text-sm hover:text-army-gold transition-colors"
                >
                  info@mhconstruction.com
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-army-gold font-bold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-gray-300 hover:text-army-gold transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-army-gold font-bold text-lg mb-6">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <Link 
                    href={service.href}
                    className="text-gray-300 hover:text-army-gold transition-colors text-sm"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media & Newsletter */}
          <div>
            <h3 className="text-army-gold font-bold text-lg mb-6">Connect With Us</h3>
            
            {/* Social Media Links */}
            <div className="flex space-x-4 mb-6">
              {socialLinks.map((social) => {
                const IconComponent = social.icon
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-800 p-2 rounded-lg hover:bg-mh-forest-green transition-colors transition-transform duration-300 hover:scale-110 hover:-translate-y-1"
                    aria-label={`Follow us on ${social.name}`}
                  >
                    <IconComponent size={20} />
                  </a>
                )
              })}
            </div>

            {/* Newsletter Signup */}
            <div>
              <p className="text-gray-300 text-sm mb-4">
                Stay updated with our latest projects and construction insights.
              </p>
              <form className="space-y-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 bg-gray-800 text-white rounded-lg border border-gray-700 focus:border-army-gold focus:outline-none"
                />
                <button
                  type="submit"
                  className="w-full bg-army-gold text-army-black px-4 py-2 rounded-lg font-semibold hover:bg-yellow-500 transition-colors"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © {currentYear} MH Construction. All rights reserved.
            </div>
            
            <div className="flex flex-wrap items-center space-x-6 text-sm">
              <Link 
                href="/privacy-policy" 
                className="text-gray-400 hover:text-army-gold transition-colors"
              >
                Privacy Policy
              </Link>
              <Link 
                href="/terms-of-service" 
                className="text-gray-400 hover:text-army-gold transition-colors"
              >
                Terms of Service
              </Link>
              <Link 
                href="/accessibility" 
                className="text-gray-400 hover:text-army-gold transition-colors"
              >
                Accessibility
              </Link>
              <span className="text-gray-400">
                Veteran-Owned Business
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
