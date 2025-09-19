'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, Calendar } from 'lucide-react'
import ThemeToggle from './ThemeToggle'
import CalendarScheduler from './CalendarScheduler'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isCalendarOpen, setIsCalendarOpen] = useState(false)

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

  return (
    <header className="bg-white dark:bg-dark-surface shadow-lg fixed top-0 left-0 right-0 z-[100] backdrop-blur-sm border-b border-gray-100 dark:border-dark-border transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Image
                src="/images/mhc-logo-light.png"
                alt="MH Construction Logo"
                width={160}
                height={64}
                className="object-contain"
                style={{ height: "4rem", width: "auto" }}
                priority
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/team" className="text-army-black dark:text-dark-text hover:text-mh-forest-green dark:hover:text-army-gold transition-colors font-medium">
              About
            </Link>
            <Link href="/services" className="text-army-black dark:text-dark-text hover:text-mh-forest-green dark:hover:text-army-gold transition-colors font-medium">
              Services
            </Link>
            <Link href="/projects" className="text-army-black dark:text-dark-text hover:text-mh-forest-green dark:hover:text-army-gold transition-colors font-medium">
              Projects
            </Link>
            <Link href="/wounded-warrior" className="text-army-black dark:text-dark-text hover:text-mh-forest-green dark:hover:text-army-gold transition-colors font-medium">
              Wounded Warrior
            </Link>
            <Link href="/contact" className="text-army-black dark:text-dark-text hover:text-mh-forest-green dark:hover:text-army-gold transition-colors font-medium">
              Contact
            </Link>

            {/* Theme Toggle */}
            <ThemeToggle />

            {/* CTA Button */}
            <button 
              onClick={openCalendar}
              className="bg-army-gold text-army-black px-6 py-2 rounded-md font-semibold hover:bg-yellow-500 transition-colors flex items-center space-x-2"
            >
              <Calendar size={18} />
              <span>Schedule Consultation</span>
            </button>
          </nav>

          {/* Mobile menu button and theme toggle */}
          <div className="md:hidden flex items-center space-x-3">
            <ThemeToggle />
            <button
              onClick={toggleMenu}
              className="text-army-black dark:text-dark-text hover:text-mh-forest-green dark:hover:text-army-gold p-2 -m-2 min-w-[44px] min-h-[44px] flex items-center justify-center"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white dark:bg-dark-surface border-t border-gray-200 dark:border-dark-border">
              <Link 
                href="/team" 
                className="px-3 py-3 text-army-black dark:text-dark-text hover:text-mh-forest-green dark:hover:text-army-gold transition-colors font-medium rounded-lg hover:bg-gray-50 dark:hover:bg-dark-surface-3 min-h-[44px] flex items-center"
                onClick={closeMenu}
              >
                About
              </Link>
              <Link 
                href="/services" 
                className="px-3 py-3 text-army-black dark:text-dark-text hover:text-mh-forest-green dark:hover:text-army-gold transition-colors font-medium rounded-lg hover:bg-gray-50 dark:hover:bg-dark-surface-3 min-h-[44px] flex items-center"
                onClick={closeMenu}
              >
                Services
              </Link>
              <Link 
                href="/projects" 
                className="px-3 py-3 text-army-black dark:text-dark-text hover:text-mh-forest-green dark:hover:text-army-gold transition-colors font-medium rounded-lg hover:bg-gray-50 dark:hover:bg-dark-surface-3 min-h-[44px] flex items-center"
                onClick={closeMenu}
              >
                Projects
              </Link>
              <Link 
                href="/wounded-warrior" 
                className="px-3 py-3 text-army-black dark:text-dark-text hover:text-mh-forest-green dark:hover:text-army-gold transition-colors font-medium rounded-lg hover:bg-gray-50 dark:hover:bg-dark-surface-3 min-h-[44px] flex items-center"
                onClick={closeMenu}
              >
                Wounded Warrior
              </Link>
              <Link 
                href="/contact" 
                className="px-3 py-3 text-army-black dark:text-dark-text hover:text-mh-forest-green dark:hover:text-army-gold transition-colors font-medium rounded-lg hover:bg-gray-50 dark:hover:bg-dark-surface-3 min-h-[44px] flex items-center"
                onClick={closeMenu}
              >
                Contact
              </Link>
              <button 
                onClick={openCalendar}
                className="mx-3 my-3 px-4 py-3 bg-army-gold text-army-black rounded-lg font-semibold text-center hover:bg-yellow-500 transition-colors flex items-center justify-center space-x-2 w-full min-h-[44px]"
              >
                <Calendar size={18} />
                <span>Schedule Consultation</span>
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Calendar Scheduler Modal */}
      <CalendarScheduler isOpen={isCalendarOpen} onClose={closeCalendar} />
    </header>
  )
}

export default Header
