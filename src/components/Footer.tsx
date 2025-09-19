'use client'

import Link from 'next/link'
import Image from 'next/image'
import { MapPin, Phone, Mail, Facebook, Linkedin, Instagram, Youtube, Twitter } from 'lucide-react'
import StarDecorations from './StarDecorations'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-army-black dark:bg-gray-900 text-white relative overflow-hidden transition-colors duration-300">
      <StarDecorations />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          
          <div className="flex justify-center md:justify-start mb-6 md:mb-0">
            <Link href="/" className="flex items-center">
              <Image
                src="/images/mhc-logo-light.png"
                alt="MH Construction Logo"
                width={480}
                height={192}
                className="object-contain"
                style={{ width: 'auto', height: '10rem' }}
                priority
              />
            </Link>
          </div>

          <div>
            <h3 className="text-army-gold font-bold text-lg mb-4 sm:mb-6">Company Info</h3>
            <p className="text-gray-300 mb-4 sm:mb-6 leading-relaxed text-sm">
              Building tomorrow with today's technology. Veteran-owned construction excellence.
            </p>
            
            <div className="space-y-2 sm:space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin size={16} className="text-army-gold flex-shrink-0 mt-0.5" />
                <span className="text-gray-300 text-sm">3111 N. Capital Ave., Pasco, WA 99301</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={16} className="text-army-gold flex-shrink-0" />
                <a href="tel:+15093086489" className="text-gray-300 text-sm hover:text-army-gold transition-colors touch-manipulation">
                  (509) 308-6489
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={16} className="text-army-gold flex-shrink-0" />
                <a href="mailto:info@mhc-gc.com" className="text-gray-300 text-sm hover:text-army-gold transition-colors touch-manipulation">
                  info@mhc-gc.com
                </a>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-army-gold font-bold text-lg mb-4 sm:mb-6">Quick Links</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4">
              <ul className="space-y-2 sm:space-y-3">
                <li><Link href="/" className="block text-gray-300 hover:text-army-gold transition-colors text-sm py-1 touch-manipulation">Home</Link></li>
                <li><Link href="/projects" className="block text-gray-300 hover:text-army-gold transition-colors text-sm py-1 touch-manipulation">Projects</Link></li>
                <li><Link href="/services" className="block text-gray-300 hover:text-army-gold transition-colors text-sm py-1 touch-manipulation">Services</Link></li>
                <li><Link href="/team" className="block text-gray-300 hover:text-army-gold transition-colors text-sm py-1 touch-manipulation">Team</Link></li>
                <li><Link href="/blog" className="block text-gray-300 hover:text-army-gold transition-colors text-sm py-1 touch-manipulation">Blog</Link></li>
                <li><Link href="/contact" className="block text-gray-300 hover:text-army-gold transition-colors text-sm py-1 touch-manipulation">Contact Us</Link></li>
                <li><Link href="/careers" className="block text-gray-300 hover:text-army-gold transition-colors text-sm py-1 touch-manipulation">Careers</Link></li>
                <li><Link href="/subcontractors" className="block text-gray-300 hover:text-army-gold transition-colors text-sm py-1 touch-manipulation">Subcontractors</Link></li>
              </ul>
              <ul className="space-y-2 sm:space-y-3 mt-4 sm:mt-0">
                <li><Link href="/estimate" className="block text-gray-300 hover:text-army-gold transition-colors text-sm py-1 touch-manipulation">AI Estimator</Link></li>
                <li><Link href="/3d-explorer" className="block text-gray-300 hover:text-army-gold transition-colors text-sm py-1 touch-manipulation">3D Explorer</Link></li>
                <li><Link href="/sandbox" className="block text-gray-300 hover:text-army-gold transition-colors text-sm py-1 touch-manipulation">Sandbox</Link></li>
                <li><Link href="/faqs" className="block text-gray-300 hover:text-army-gold transition-colors text-sm py-1 touch-manipulation">FAQs</Link></li>
                <li><Link href="/projects" className="text-gray-300 hover:text-army-gold transition-colors text-sm">Gallery</Link></li>
                <li>                <Link 
                  href="/services#testimonials" 
                  className="text-gray-400 hover:text-white transition-colors duration-300 hover:underline"
                >
                  Testimonials
                </Link></li>
                <li><Link href="/safety" className="text-gray-300 hover:text-army-gold transition-colors text-sm">Safety</Link></li>
                <li><Link href="/government-contracting" className="text-gray-300 hover:text-army-gold transition-colors text-sm">Government Contracting</Link></li>
              </ul>
            </div>
          </div>

          <div>
            <h3 className="text-army-gold font-bold text-lg mb-4 sm:mb-6">Connect With Us</h3>
            
            <div className="flex flex-wrap gap-2 sm:gap-3 mb-4 sm:mb-6">
              <a href="https://facebook.com/mhconstruction" target="_blank" rel="noopener noreferrer" 
                 className="bg-gray-800 p-2 sm:p-2.5 rounded-lg hover:bg-army-gold hover:text-army-black transition-all duration-300 touch-manipulation min-w-[44px] min-h-[44px] flex items-center justify-center">
                <Facebook size={18} className="sm:w-5 sm:h-5" />
              </a>
              <a href="https://linkedin.com/company/mhconstruction" target="_blank" rel="noopener noreferrer"
                 className="bg-gray-800 p-2 sm:p-2.5 rounded-lg hover:bg-army-gold hover:text-army-black transition-all duration-300 touch-manipulation min-w-[44px] min-h-[44px] flex items-center justify-center">
                <Linkedin size={18} className="sm:w-5 sm:h-5" />
              </a>
              <a href="https://instagram.com/mhconstruction" target="_blank" rel="noopener noreferrer"
                 className="bg-gray-800 p-2 sm:p-2.5 rounded-lg hover:bg-army-gold hover:text-army-black transition-all duration-300 touch-manipulation min-w-[44px] min-h-[44px] flex items-center justify-center">
                <Instagram size={18} className="sm:w-5 sm:h-5" />
              </a>
              <a href="https://youtube.com/mhconstruction" target="_blank" rel="noopener noreferrer"
                 className="bg-gray-800 p-2 sm:p-2.5 rounded-lg hover:bg-army-gold hover:text-army-black transition-all duration-300 touch-manipulation min-w-[44px] min-h-[44px] flex items-center justify-center">
                <Youtube size={18} className="sm:w-5 sm:h-5" />
              </a>
              <a href="https://twitter.com/mhconstruction" target="_blank" rel="noopener noreferrer"
                 className="bg-gray-800 p-2 sm:p-2.5 rounded-lg hover:bg-army-gold hover:text-army-black transition-all duration-300 touch-manipulation min-w-[44px] min-h-[44px] flex items-center justify-center">
                <Twitter size={18} className="sm:w-5 sm:h-5" />
              </a>
            </div>
            
            <div>
              <p className="text-gray-300 text-sm mb-3 sm:mb-4">Stay updated with our latest projects.</p>
              <form className="space-y-2 sm:space-y-3">
                <input type="email" placeholder="Enter your email"
                       className="w-full px-3 sm:px-4 py-2.5 sm:py-2 bg-gray-800 text-white rounded-lg border border-gray-700 focus:border-army-gold focus:outline-none transition-colors text-sm touch-manipulation" />
                <button type="submit"
                        className="w-full bg-army-gold text-army-black px-3 sm:px-4 py-2.5 sm:py-2 rounded-lg font-semibold hover:bg-yellow-500 transition-colors text-sm touch-manipulation min-h-[44px]">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800 relative">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">© {currentYear} MH Construction. All rights reserved.</div>
            <div className="flex flex-wrap items-center space-x-6 text-sm">
              <Link href="/privacy-policy" className="text-gray-400 hover:text-army-gold transition-colors">Privacy Policy</Link>
              <Link href="/terms-of-service" className="text-gray-400 hover:text-army-gold transition-colors">Terms of Service</Link>
              <span className="text-gray-400">Veteran-Owned Business</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
