'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, Calendar, ChevronDown, MoreHorizontal } from 'lucide-react'
import ThemeToggle from './ThemeToggle'
import CalendarScheduler from './CalendarScheduler'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isCalendarOpen, setIsCalendarOpen] = useState(false)
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false)
  const [isMoreMenuOpen, setIsMoreMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  const openCalendar = () => {
    setIsCalendarOpen(true)
    setIsMenuOpen(false) // Close mobile menu if open
  }

  const closeCalendar = () => {
    setIsCalendarOpen(false)
  }

  const toggleMoreMenu = () => {
    setIsMoreMenuOpen(!isMoreMenuOpen)
  }

  const closeMoreMenu = () => {
    setIsMoreMenuOpen(false)
  }

  return (
  <header className="bg-white dark:bg-dark-surface shadow-lg fixed top-0 left-0 right-0 z-[100] backdrop-blur-sm border-b border-gray-200 dark:border-dark-border transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center hover:scale-105 hover:drop-shadow-lg transition-all duration-300 group">
              <Image
                src="/images/mhc-logo-light.png"
                alt="MH Construction Logo"
                width={160}
                height={64}
                className="object-contain group-hover:brightness-110 transition-all duration-300"
                style={{ height: "4rem", width: "auto" }}
                priority
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center space-x-6">
            <Link href="/team" className="nav-link text-gray-700 dark:text-gray-300 hover:text-mh-hunter-green dark:hover:text-mh-leather-tan hover:bg-mh-hunter-green/5 dark:hover:bg-mh-leather-tan/5 transition-all duration-300 font-medium px-4 py-2 rounded-lg">
              About
            </Link>
            
            <Link href="/wounded-warrior" className="nav-link text-gray-700 dark:text-gray-300 hover:text-mh-hunter-green dark:hover:text-mh-leather-tan hover:bg-mh-hunter-green/5 dark:hover:bg-mh-leather-tan/5 transition-all duration-300 font-medium px-4 py-2 rounded-lg">
              Veterans
            </Link>

            {/* Services Dropdown */}
            <div className="relative group">
              <button className="nav-link text-gray-700 dark:text-gray-300 hover:text-mh-hunter-green dark:hover:text-mh-leather-tan hover:bg-mh-hunter-green/5 dark:hover:bg-mh-leather-tan/5 transition-all duration-300 font-medium px-4 py-2 rounded-lg flex items-center space-x-1">
                <span>Services</span>
                <ChevronDown size={16} className="transition-transform group-hover:rotate-180" />
              </button>
              <div className="absolute top-full left-0 mt-1 w-48 bg-white dark:bg-dark-surface-2 shadow-lg rounded-lg border border-gray-200 dark:border-dark-border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <Link href="/services" className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:text-mh-hunter-green dark:hover:text-mh-leather-tan hover:bg-mh-hunter-green/5 dark:hover:bg-mh-leather-tan/5 transition-all duration-300 rounded-t-lg">
                  All Services
                </Link>
                <Link href="/ai-estimator" className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:text-mh-hunter-green dark:hover:text-mh-leather-tan hover:bg-mh-hunter-green/5 dark:hover:bg-mh-leather-tan/5 transition-all duration-300">
                  AI Estimator
                </Link>
                <Link href="/safety" className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:text-mh-hunter-green dark:hover:text-mh-leather-tan hover:bg-mh-hunter-green/5 dark:hover:bg-mh-leather-tan/5 transition-all duration-300">
                  Safety
                </Link>
                <Link href="/government" className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:text-mh-hunter-green dark:hover:text-mh-leather-tan hover:bg-mh-hunter-green/5 dark:hover:bg-mh-leather-tan/5 transition-all duration-300 rounded-b-lg">
                  Government
                </Link>
              </div>
            </div>

            {/* More Menu for Additional Items */}
            <div className="relative">
              <button
                onClick={toggleMoreMenu}
                className="nav-link text-gray-700 dark:text-gray-300 hover:text-mh-hunter-green dark:hover:text-mh-leather-tan hover:bg-mh-hunter-green/5 dark:hover:bg-mh-leather-tan/5 transition-all duration-300 font-medium px-4 py-2 rounded-lg flex items-center space-x-1"
                aria-label="More menu items"
              >
                <MoreHorizontal size={20} className="icon-nav" />
                <span>More</span>
              </button>
              
              {isMoreMenuOpen && (
                <div className="absolute top-full right-0 mt-1 w-56 bg-white dark:bg-dark-surface-2 shadow-lg rounded-lg border border-gray-200 dark:border-dark-border z-50">
                  <div className="py-2">
                    <Link 
                      href="/" 
                      className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:text-mh-hunter-green dark:hover:text-mh-leather-tan hover:bg-mh-hunter-green/5 dark:hover:bg-mh-leather-tan/5 transition-all duration-300"
                      onClick={closeMoreMenu}
                    >
                      Home
                    </Link>
                    <Link 
                      href="/projects" 
                      className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:text-mh-hunter-green dark:hover:text-mh-leather-tan hover:bg-mh-hunter-green/5 dark:hover:bg-mh-leather-tan/5 transition-all duration-300"
                      onClick={closeMoreMenu}
                    >
                      Projects
                    </Link>
                    <Link 
                      href="/3d-explorer" 
                      className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:text-mh-hunter-green dark:hover:text-mh-leather-tan hover:bg-mh-hunter-green/5 dark:hover:bg-mh-leather-tan/5 transition-all duration-300"
                      onClick={closeMoreMenu}
                    >
                      3D Explorer
                    </Link>
                    <Link 
                      href="/subcontractors" 
                      className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:text-mh-hunter-green dark:hover:text-mh-leather-tan hover:bg-mh-hunter-green/5 dark:hover:bg-mh-leather-tan/5 transition-all duration-300"
                      onClick={closeMoreMenu}
                    >
                      Subcontractors
                    </Link>
                    <Link 
                      href="/careers" 
                      className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:text-mh-hunter-green dark:hover:text-mh-leather-tan hover:bg-mh-hunter-green/5 dark:hover:bg-mh-leather-tan/5 transition-all duration-300"
                      onClick={closeMoreMenu}
                    >
                      Careers
                    </Link>
                    <Link 
                      href="/blog" 
                      className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:text-mh-hunter-green dark:hover:text-mh-leather-tan hover:bg-mh-hunter-green/5 dark:hover:bg-mh-leather-tan/5 transition-all duration-300"
                      onClick={closeMoreMenu}
                    >
                      News & Blog
                    </Link>
                    <Link 
                      href="/testimonials" 
                      className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:text-mh-hunter-green dark:hover:text-mh-leather-tan hover:bg-mh-hunter-green/5 dark:hover:bg-mh-leather-tan/5 transition-all duration-300"
                      onClick={closeMoreMenu}
                    >
                      Testimonials
                    </Link>
                    <Link 
                      href="/faqs" 
                      className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:text-mh-hunter-green dark:hover:text-mh-leather-tan hover:bg-mh-hunter-green/5 dark:hover:bg-mh-leather-tan/5 transition-all duration-300"
                      onClick={closeMoreMenu}
                    >
                      FAQs
                    </Link>
                    <Link 
                      href="/sandbox" 
                      className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:text-mh-hunter-green dark:hover:text-mh-leather-tan hover:bg-mh-hunter-green/5 dark:hover:bg-mh-leather-tan/5 transition-all duration-300"
                      onClick={closeMoreMenu}
                    >
                      Sandbox
                    </Link>
                    <Link 
                      href="/contact" 
                      className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:text-mh-hunter-green dark:hover:text-mh-leather-tan hover:bg-mh-hunter-green/5 dark:hover:bg-mh-leather-tan/5 transition-all duration-300"
                      onClick={closeMoreMenu}
                    >
                      Contact
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Theme Toggle */}
            <ThemeToggle />

            {/* CTA Button */}
            <button 
              onClick={openCalendar}
              className="min-w-[44px] min-h-[44px] flex items-center space-x-2 px-6 py-3 bg-mh-hunter-green hover:bg-mh-hunter-green/90 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl hover:shadow-mh-hunter-green/25 transition-all duration-300 transform hover:scale-105 hover:-translate-y-0.5"
            >
              <Calendar size={18} className="icon-calendar text-white" />
              <span className="hidden 2xl:inline text-white">Schedule Consultation</span>
              <span className="2xl:hidden text-white">Schedule</span>
            </button>
          </nav>

          {/* Mobile menu button and theme toggle */}
          <div className="xl:hidden flex items-center space-x-3">
            <ThemeToggle />
            <button
              onClick={toggleMenu}
              className="btn-ghost min-w-[44px] min-h-[44px] flex items-center justify-center p-2 -m-2 text-gray-700 dark:text-gray-300 hover:text-mh-hunter-green dark:hover:text-mh-leather-tan hover:bg-mh-hunter-green/10 dark:hover:bg-mh-leather-tan/10 transition-all duration-300 rounded-lg"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? <X size={24} className="icon-nav icon-animate-pulse" /> : <Menu size={24} className="icon-nav icon-animate-pulse" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="xl:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white dark:bg-dark-surface border-t border-gray-200 dark:border-dark-border max-h-[70vh] overflow-y-auto">
              <Link 
                href="/" 
                className="nav-link min-h-[44px] flex items-center w-full text-gray-700 dark:text-gray-300 hover:text-mh-hunter-green dark:hover:text-mh-leather-tan hover:bg-mh-hunter-green/10 dark:hover:bg-mh-leather-tan/10 transition-all duration-300 rounded-lg px-3 py-2 font-medium"
                onClick={closeMenu}
              >
                Home
              </Link>
              <Link 
                href="/team" 
                className="nav-link min-h-[44px] flex items-center w-full text-gray-700 dark:text-gray-300 hover:text-mh-hunter-green dark:hover:text-mh-leather-tan hover:bg-mh-hunter-green/10 dark:hover:bg-mh-leather-tan/10 transition-all duration-300 rounded-lg px-3 py-2 font-medium"
                onClick={closeMenu}
              >
                About
              </Link>
              
              {/* Services Section */}
              <div className="space-y-1">
                <Link 
                  href="/services" 
                  className="nav-link min-h-[44px] flex items-center w-full text-gray-700 dark:text-gray-300 hover:text-mh-hunter-green dark:hover:text-mh-leather-tan hover:bg-mh-hunter-green/10 dark:hover:bg-mh-leather-tan/10 transition-all duration-300 rounded-lg px-3 py-2 font-medium"
                  onClick={closeMenu}
                >
                  Services
                </Link>
                <Link 
                  href="/ai-estimator" 
                  className="nav-link min-h-[44px] flex items-center w-full text-gray-600 dark:text-gray-400 hover:text-mh-hunter-green dark:hover:text-mh-leather-tan hover:bg-mh-hunter-green/10 dark:hover:bg-mh-leather-tan/10 transition-all duration-300 rounded-lg px-6 py-2 font-medium text-sm"
                  onClick={closeMenu}
                >
                  • AI Estimator
                </Link>
                <Link 
                  href="/safety" 
                  className="nav-link min-h-[44px] flex items-center w-full text-gray-600 dark:text-gray-400 hover:text-mh-hunter-green dark:hover:text-mh-leather-tan hover:bg-mh-hunter-green/10 dark:hover:bg-mh-leather-tan/10 transition-all duration-300 rounded-lg px-6 py-2 font-medium text-sm"
                  onClick={closeMenu}
                >
                  • Safety
                </Link>
                <Link 
                  href="/government" 
                  className="nav-link min-h-[44px] flex items-center w-full text-gray-600 dark:text-gray-400 hover:text-mh-hunter-green dark:hover:text-mh-leather-tan hover:bg-mh-hunter-green/10 dark:hover:bg-mh-leather-tan/10 transition-all duration-300 rounded-lg px-6 py-2 font-medium text-sm"
                  onClick={closeMenu}
                >
                  • Government
                </Link>
              </div>

              <Link 
                href="/projects" 
                className="nav-link min-h-[44px] flex items-center w-full text-gray-700 dark:text-gray-300 hover:text-mh-hunter-green dark:hover:text-mh-leather-tan hover:bg-mh-hunter-green/10 dark:hover:bg-mh-leather-tan/10 transition-all duration-300 rounded-lg px-3 py-2 font-medium"
                onClick={closeMenu}
              >
                Projects
              </Link>
              <Link 
                href="/3d-explorer" 
                className="nav-link min-h-[44px] flex items-center w-full text-gray-700 dark:text-gray-300 hover:text-mh-hunter-green dark:hover:text-mh-leather-tan hover:bg-mh-hunter-green/10 dark:hover:bg-mh-leather-tan/10 transition-all duration-300 rounded-lg px-3 py-2 font-medium"
                onClick={closeMenu}
              >
                3D Explorer
              </Link>
              <Link 
                href="/wounded-warrior" 
                className="nav-link min-h-[44px] flex items-center w-full text-gray-700 dark:text-gray-300 hover:text-mh-hunter-green dark:hover:text-mh-leather-tan hover:bg-mh-hunter-green/10 dark:hover:bg-mh-leather-tan/10 transition-all duration-300 rounded-lg px-3 py-2 font-medium"
                onClick={closeMenu}
              >
                Veterans
              </Link>
              <Link 
                href="/subcontractors" 
                className="nav-link min-h-[44px] flex items-center w-full text-gray-700 dark:text-gray-300 hover:text-mh-hunter-green dark:hover:text-mh-leather-tan hover:bg-mh-hunter-green/10 dark:hover:bg-mh-leather-tan/10 transition-all duration-300 rounded-lg px-3 py-2 font-medium"
                onClick={closeMenu}
              >
                Subcontractors
              </Link>
              <Link 
                href="/careers" 
                className="nav-link min-h-[44px] flex items-center w-full text-gray-700 dark:text-gray-300 hover:text-mh-hunter-green dark:hover:text-mh-leather-tan hover:bg-mh-hunter-green/10 dark:hover:bg-mh-leather-tan/10 transition-all duration-300 rounded-lg px-3 py-2 font-medium"
                onClick={closeMenu}
              >
                Careers
              </Link>
              <Link 
                href="/blog" 
                className="nav-link min-h-[44px] flex items-center w-full text-gray-700 dark:text-gray-300 hover:text-mh-hunter-green dark:hover:text-mh-leather-tan hover:bg-mh-hunter-green/10 dark:hover:bg-mh-leather-tan/10 transition-all duration-300 rounded-lg px-3 py-2 font-medium"
                onClick={closeMenu}
              >
                News
              </Link>
              <Link 
                href="/testimonials" 
                className="nav-link min-h-[44px] flex items-center w-full text-gray-700 dark:text-gray-300 hover:text-mh-hunter-green dark:hover:text-mh-leather-tan hover:bg-mh-hunter-green/10 dark:hover:bg-mh-leather-tan/10 transition-all duration-300 rounded-lg px-3 py-2 font-medium"
                onClick={closeMenu}
              >
                Reviews
              </Link>
              <Link 
                href="/faqs" 
                className="nav-link min-h-[44px] flex items-center w-full text-gray-700 dark:text-gray-300 hover:text-mh-hunter-green dark:hover:text-mh-leather-tan hover:bg-mh-hunter-green/10 dark:hover:bg-mh-leather-tan/10 transition-all duration-300 rounded-lg px-3 py-2 font-medium"
                onClick={closeMenu}
              >
                FAQs
              </Link>
              <Link 
                href="/sandbox" 
                className="nav-link min-h-[44px] flex items-center w-full text-gray-700 dark:text-gray-300 hover:text-mh-hunter-green dark:hover:text-mh-leather-tan hover:bg-mh-hunter-green/10 dark:hover:bg-mh-leather-tan/10 transition-all duration-300 rounded-lg px-3 py-2 font-medium"
                onClick={closeMenu}
              >
                Sandbox
              </Link>
              <Link 
                href="/contact" 
                className="nav-link min-h-[44px] flex items-center w-full text-gray-700 dark:text-gray-300 hover:text-mh-hunter-green dark:hover:text-mh-leather-tan hover:bg-mh-hunter-green/10 dark:hover:bg-mh-leather-tan/10 transition-all duration-300 rounded-lg px-3 py-2 font-medium"
                onClick={closeMenu}
              >
                Contact
              </Link>
              <button 
                onClick={openCalendar}
                className="mx-3 my-3 min-h-[44px] flex items-center justify-center space-x-2 w-full px-6 py-3 bg-mh-hunter-green hover:bg-mh-hunter-green/90 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Calendar size={18} className="text-white" />
                <span className="text-white">Schedule Consultation</span>
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Overlay to close more menu when clicking outside */}
      {isMoreMenuOpen && (
        <div 
          className="fixed inset-0 z-40" 
          onClick={closeMoreMenu}
          aria-hidden="true"
        />
      )}

      {/* Calendar Scheduler Modal */}
      <CalendarScheduler isOpen={isCalendarOpen} onClose={closeCalendar} />
    </header>
  )
}

export default Header
