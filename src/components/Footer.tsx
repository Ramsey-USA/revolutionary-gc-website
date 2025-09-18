'use client'

import Link from 'next/link'
import Image from 'next/image'
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
    { name: 'Careers', href: '/careers' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact Us', href: '/contact' },
    { name: 'Subcontractors', href: '/subcontractors' },
    { name: 'FAQs', href: '/faqs' },
    { name: 'Estimate', href: '/estimate' },
    { name: '3D Explorer', href: '/3d-explorer' },
    { name: 'Sandbox', href: '/sandbox' }
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
    <footer className="bg-army-black text-white relative overflow-hidden">
      {/* Star decorations */}
      <div className="absolute top-4 right-4 md:top-8 md:right-16 text-army-gold/20 text-2xl md:text-4xl animate-pulse">★</div>
      <div className="absolute top-12 right-1/4 text-white/10 text-xl md:text-2xl animate-pulse delay-300">★</div>
      <div className="absolute top-20 right-2 md:top-32 md:right-8 text-army-gold/15 text-2xl md:text-3xl animate-pulse delay-700">★</div>
      <div className="absolute bottom-8 left-4 md:bottom-12 md:left-16 text-white/20 text-3xl md:text-5xl animate-pulse delay-500">★</div>
      <div className="absolute bottom-16 left-1/3 md:bottom-28 text-army-gold/25 text-xl md:text-2xl animate-pulse delay-1000">★</div>
      <div className="absolute bottom-4 left-2 md:bottom-8 md:left-8 text-white/15 text-2xl md:text-3xl animate-pulse delay-200">★</div>
      <div className="absolute top-1/2 right-6 md:right-12 text-army-gold/10 text-xl md:text-2xl animate-pulse delay-800">★</div>
      <div className="absolute top-1/3 left-8 md:left-20 text-white/10 text-2xl md:text-4xl animate-pulse delay-600">★</div>
      
      {/* Main Footer Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-start">
          {/* Column 1: Logo */}
          <div className="flex justify-center md:justify-start">
            <Link href="/" className="flex items-center">
              <Image
                src="/images/mhc-logo-light.png"
                alt="MH Construction Logo"
                height={192}
                width={480}
                className="h-48 w-auto object-contain"
                priority
              />
            </Link>
          </div>

          {/* Column 2: Company Info & Contact */}
          <div>
            <h3 className="text-army-gold font-bold text-lg mb-6">Company Info</h3>
            <p className="text-gray-300 mb-6 leading-relaxed text-sm">
              Building tomorrow with today's technology. Veteran-owned construction excellence 
              powered by cutting-edge AI technology throughout the Pacific Northwest.
            </p>
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin size={16} className="text-army-gold flex-shrink-0" />
                <span className="text-gray-300 text-sm">
                  3111 N. Capital Ave., Pasco, WA 99301
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={16} className="text-army-gold flex-shrink-0" />
                <a 
                  href="tel:+15093086489" 
                  className="text-gray-300 text-sm hover:text-army-gold transition-colors"
                >
                  (509) 308-6489
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={16} className="text-army-gold flex-shrink-0" />
                <a 
                  href="mailto:info@mhc-gc.com" 
                  className="text-gray-300 text-sm hover:text-army-gold transition-colors"
                >
                  info@mhc-gc.com
                </a>
              </div>
            </div>
          </div>

          {/* Column 3: Quick Links */}
          <div>
            <h3 className="text-army-gold font-bold text-lg mb-6">Quick Links</h3>
            <div className="grid grid-cols-2 gap-x-4">
              <ul className="space-y-3">
                {quickLinks.slice(0, Math.ceil(quickLinks.length / 2)).map((link) => (
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
              <ul className="space-y-3">
                {quickLinks.slice(Math.ceil(quickLinks.length / 2)).map((link) => (
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
          </div>

          {/* Column 4: Connect With Us */}
          <div>
            <h3 className="text-army-gold font-bold text-lg mb-6">Connect With Us</h3>
            {/* Social Media Links */}
            <div className="flex flex-wrap gap-3 mb-6">
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
      <div className="border-t border-gray-800 relative">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
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
