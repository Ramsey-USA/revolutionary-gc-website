'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { MapPin, Phone, Mail, Facebook, Linkedin, Instagram, Youtube, Twitter, CheckCircle, Calendar } from 'lucide-react'
import CalendarScheduler from './CalendarScheduler'
import { db } from '../lib/firebase'
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  const [email, setEmail] = useState('')
  const [isSubscribing, setIsSubscribing] = useState(false)
  const [subscribeSuccess, setSubscribeSuccess] = useState(false)
  const [subscribeError, setSubscribeError] = useState('')
  const [isCalendarOpen, setIsCalendarOpen] = useState(false)

  const openCalendar = () => {
    setIsCalendarOpen(true)
  }

  const closeCalendar = () => {
    setIsCalendarOpen(false)
  }

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!email.trim()) {
      setSubscribeError('Please enter a valid email address')
      return
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      setSubscribeError('Please enter a valid email address')
      return
    }

    setIsSubscribing(true)
    setSubscribeError('')

    try {
      if (db) {
        // Save subscription to Firebase
        await addDoc(collection(db, 'newsletterSubscriptions'), {
          email: email.toLowerCase(),
          status: 'active',
          source: 'footer-subscribe',
          subscribedAt: serverTimestamp(),
          ipAddress: null, // Could be added with server-side processing
          userAgent: navigator.userAgent
        })

        // Also create a notification for the team
        await addDoc(collection(db, 'teamNotifications'), {
          type: 'newsletter-subscription',
          title: 'New Newsletter Subscription',
          message: `New subscriber: ${email}`,
          clientInfo: {
            email: email.toLowerCase(),
            name: 'Newsletter Subscriber',
            phone: '',
            company: ''
          },
          priority: 'low',
          status: 'unread',
          createdAt: serverTimestamp(),
          recipients: ['info@mhconstruction.com'],
          metadata: {
            source: 'footer-subscribe',
            userAgent: navigator.userAgent
          }
        })
      }

      setSubscribeSuccess(true)
      setEmail('')
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubscribeSuccess(false)
      }, 5000)

    } catch (error) {
      console.error('Error subscribing to newsletter:', error)
      setSubscribeError('There was an error subscribing. Please try again.')
    } finally {
      setIsSubscribing(false)
    }
  }

  return (
  <footer className="bg-black dark:bg-dark-charcoal text-white relative transition-colors duration-300">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-8 right-16 w-32 h-32 bg-mh-hunter-green/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-16 left-16 w-40 h-40 bg-mh-leather-tan/8 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-mh-hunter-green/5 rounded-full blur-2xl"></div>
        <div className="absolute bottom-1/4 right-1/3 w-28 h-28 bg-mh-leather-tan/6 rounded-full blur-2xl"></div>
      </div>
      
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
            <h3 className="text-mh-hunter-green dark:text-mh-leather-tan hover:text-mh-leather-tan dark:hover:text-mh-hunter-green font-bold text-xl mb-6 tracking-wide transition-colors duration-300 cursor-default">Company Info</h3>
            <p className="text-gray-300 mb-6 leading-relaxed text-base font-medium">
              Building tomorrow with today's technology. Veteran-owned construction excellence.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin size={18} className="text-mh-leather-tan flex-shrink-0 mt-1 icon-utility" />
                <span className="text-gray-200 text-base leading-relaxed">123 Construction Way, Yakima, WA 98901</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={18} className="text-mh-leather-tan flex-shrink-0 icon-utility" />
                <div>
                  <span className="text-gray-200 text-base font-medium">(509) 555-0123</span>
                  <span className="text-gray-400 text-sm block mt-1">Mon-Fri: 7:00 AM - 5:00 PM</span>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={18} className="text-mh-leather-tan flex-shrink-0 icon-utility" />
                <span className="text-gray-200 text-base">info@mhconstruction.com</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-mh-hunter-green dark:text-mh-leather-tan hover:text-mh-leather-tan dark:hover:text-mh-hunter-green font-bold text-xl mb-6 tracking-wide transition-colors duration-300 cursor-default">Quick Links</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6">
              <ul className="space-y-3">
                <li><Link href="/" className="block text-gray-300 hover:text-mh-leather-tan transition-colors duration-300 text-base py-1 touch-manipulation font-medium">Home</Link></li>
                <li><Link href="/projects" className="block text-gray-300 hover:text-mh-leather-tan transition-colors duration-300 text-base py-1 touch-manipulation font-medium">Projects</Link></li>
                <li><Link href="/services" className="block text-gray-300 hover:text-mh-leather-tan transition-colors duration-300 text-base py-1 touch-manipulation font-medium">Services</Link></li>
                <li><Link href="/team" className="block text-gray-300 hover:text-mh-leather-tan transition-colors duration-300 text-base py-1 touch-manipulation font-medium">Team</Link></li>
                <li><Link href="/blog" className="block text-gray-300 hover:text-mh-leather-tan transition-colors duration-300 text-base py-1 touch-manipulation font-medium">Blog</Link></li>
                <li><Link href="/contact" className="block text-gray-300 hover:text-mh-leather-tan transition-colors duration-300 text-base py-1 touch-manipulation font-medium">Contact Us</Link></li>
                <li><Link href="/careers" className="block text-gray-300 hover:text-mh-leather-tan transition-colors duration-300 text-base py-1 touch-manipulation font-medium">Careers</Link></li>
                <li><Link href="/subcontractors" className="block text-gray-300 hover:text-mh-leather-tan transition-colors duration-300 text-base py-1 touch-manipulation font-medium">Subcontractors</Link></li>
              </ul>
              <ul className="space-y-3 mt-4 sm:mt-0">
                <li><Link href="/estimate" className="block text-gray-300 hover:text-mh-leather-tan transition-colors duration-300 text-base py-1 touch-manipulation font-medium">AI Estimator</Link></li>
                <li><Link href="/3d-explorer" className="block text-gray-300 hover:text-mh-leather-tan transition-colors duration-300 text-base py-1 touch-manipulation font-medium">3D Explorer</Link></li>
                <li><Link href="/sandbox" className="block text-gray-300 hover:text-mh-leather-tan transition-colors duration-300 text-base py-1 touch-manipulation font-medium">Sandbox</Link></li>
                <li><Link href="/faqs" className="block text-gray-300 hover:text-mh-leather-tan transition-colors duration-300 text-base py-1 touch-manipulation font-medium">FAQs</Link></li>
                <li>                
                  <Link 
                    href="/services#testimonials" 
                    className="block text-gray-300 hover:text-mh-leather-tan transition-colors duration-300 text-base py-1 touch-manipulation font-medium"
                  >
                    Testimonials
                  </Link>
                </li>
                <li><Link href="/safety" className="block text-gray-300 hover:text-mh-leather-tan transition-colors duration-300 text-base py-1 touch-manipulation font-medium">Safety</Link></li>
                <li><Link href="/government-contracting" className="block text-gray-300 hover:text-mh-leather-tan transition-colors duration-300 text-base py-1 touch-manipulation font-medium">Government Contracting</Link></li>
              </ul>
            </div>
          </div>

          <div>
            <h3 className="text-mh-hunter-green dark:text-mh-leather-tan hover:text-mh-leather-tan dark:hover:text-mh-hunter-green font-bold text-xl mb-6 tracking-wide transition-colors duration-300 cursor-default">Connect With Us</h3>
            
            <div className="flex flex-wrap gap-3 mb-6">
              <a href="https://facebook.com/mhconstruction" target="_blank" rel="noopener noreferrer" 
                 className="bg-gray-800 p-3 rounded-lg hover:bg-mh-hunter-green dark:hover:bg-mh-leather-tan hover:text-white transition-all duration-300 touch-manipulation min-w-[44px] min-h-[44px] flex items-center justify-center hover:scale-105 hover:shadow-lg group">
                <Facebook size={20} className="icon-social icon-interactive-secondary transition-transform duration-300 group-hover:scale-110" />
              </a>
              <a href="https://linkedin.com/company/mhconstruction" target="_blank" rel="noopener noreferrer"
                 className="bg-gray-800 p-3 rounded-lg hover:bg-mh-hunter-green dark:hover:bg-mh-leather-tan hover:text-white transition-all duration-300 touch-manipulation min-w-[44px] min-h-[44px] flex items-center justify-center hover:scale-105 hover:shadow-lg group">
                <Linkedin size={20} className="icon-social icon-animate-float transition-transform duration-300 group-hover:scale-110" />
              </a>
              <a href="https://instagram.com/mhconstruction" target="_blank" rel="noopener noreferrer"
                 className="bg-gray-800 p-3 rounded-lg hover:bg-mh-hunter-green dark:hover:bg-mh-leather-tan hover:text-white transition-all duration-300 touch-manipulation min-w-[44px] min-h-[44px] flex items-center justify-center hover:scale-105 hover:shadow-lg group">
                <Instagram size={20} className="icon-social icon-interactive-primary transition-transform duration-300 group-hover:scale-110" />
              </a>
              <a href="https://youtube.com/mhconstruction" target="_blank" rel="noopener noreferrer"
                 className="bg-gray-800 p-3 rounded-lg hover:bg-mh-hunter-green dark:hover:bg-mh-leather-tan hover:text-white transition-all duration-300 touch-manipulation min-w-[44px] min-h-[44px] flex items-center justify-center hover:scale-105 hover:shadow-lg group">
                <Youtube size={20} className="icon-social icon-animate-glow transition-transform duration-300 group-hover:scale-110" />
              </a>
              <a href="https://twitter.com/mhconstruction" target="_blank" rel="noopener noreferrer"
                 className="bg-gray-800 p-3 rounded-lg hover:bg-mh-hunter-green dark:hover:bg-mh-leather-tan hover:text-white transition-all duration-300 touch-manipulation min-w-[44px] min-h-[44px] flex items-center justify-center hover:scale-105 hover:shadow-lg group">
                <Twitter size={20} className="icon-social icon-animate-pulse transition-transform duration-300 group-hover:scale-110" />
              </a>
            </div>

            {/* Calendar Button */}
            <div className="mb-6">
              <button 
                onClick={openCalendar}
                className="w-full bg-mh-hunter-green hover:bg-mh-leather-tan dark:bg-mh-leather-tan dark:hover:bg-mh-hunter-green text-white px-4 py-3 rounded-lg font-bold transition-all duration-300 text-base touch-manipulation min-h-[48px] flex items-center justify-center space-x-2 hover:shadow-lg hover:scale-[1.02] group"
              >
                <Calendar size={18} className="icon-calendar icon-animate-glow transition-transform duration-300 group-hover:scale-110" />
                <span>Schedule Consultation</span>
              </button>
            </div>
            
            <div>
              <p className="text-gray-300 text-base mb-4 font-medium">Stay updated with our latest projects and insights.</p>
              
              {/* Success Message */}
              {subscribeSuccess && (
                <div className="bg-emerald-900/30 border border-emerald-600/50 rounded-lg p-4 mb-4 flex items-center space-x-3">
                  <CheckCircle size={18} className="text-emerald-400 flex-shrink-0 icon-success" />
                  <span className="text-emerald-300 text-base font-medium">Successfully subscribed! Thank you for joining our newsletter.</span>
                </div>
              )}

              {/* Error Message */}
              {subscribeError && (
                <div className="bg-red-900/30 border border-red-600/50 rounded-lg p-4 mb-4">
                  <span className="text-red-300 text-base font-medium">{subscribeError}</span>
                </div>
              )}

              <form onSubmit={handleSubscribe} className="space-y-3">
                <input 
                  type="email" 
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value)
                    setSubscribeError('') // Clear error when user types
                  }}
                  disabled={isSubscribing}
                  className="w-full px-4 py-3 bg-gray-800 text-white rounded-lg border border-gray-600 focus:border-mh-leather-tan focus:outline-none focus:ring-2 focus:ring-mh-leather-tan/20 transition-all duration-300 text-base touch-manipulation disabled:opacity-50 disabled:cursor-not-allowed placeholder-gray-400" 
                />
                <button 
                  type="submit"
                  disabled={isSubscribing || !email.trim()}
                  className="w-full bg-mh-leather-tan text-white px-4 py-3 rounded-lg font-bold hover:bg-mh-hunter-green transition-colors duration-300 text-base touch-manipulation min-h-[48px] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-mh-leather-tan flex items-center justify-center hover:shadow-lg"
                >
                  {isSubscribing ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Subscribing...
                    </>
                  ) : (
                    'Subscribe to Newsletter'
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 relative">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-300 text-base font-medium">© {currentYear} MH Construction. All rights reserved.</div>
            <div className="flex flex-wrap items-center space-x-6 text-base">
              <Link href="/privacy-policy" className="text-gray-300 hover:text-mh-leather-tan transition-colors duration-300 font-medium">Privacy Policy</Link>
              <Link href="/terms-of-service" className="text-gray-300 hover:text-mh-leather-tan transition-colors duration-300 font-medium">Terms of Service</Link>
              <span className="text-mh-leather-tan font-bold">Veteran-Owned Business</span>
            </div>
          </div>
        </div>
      </div>

      {/* Calendar Scheduler Modal */}
      <CalendarScheduler isOpen={isCalendarOpen} onClose={closeCalendar} />
    </footer>
  )
}

export default Footer
