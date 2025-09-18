'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'
import ThemeToggle from './ThemeToggle'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
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
                height={64}
                width={160}
                className="h-16 w-auto object-contain"
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
            <Link 
              href="/estimate" 
              className="bg-army-gold text-army-black px-6 py-2 rounded-md font-semibold hover:bg-yellow-500 transition-colors"
            >
              Get Estimate
            </Link>
          </nav>

          {/* Mobile menu button and theme toggle */}
          <div className="md:hidden flex items-center space-x-3">
            <ThemeToggle />
            <button
              onClick={toggleMenu}
              className="text-army-black dark:text-dark-text hover:text-mh-forest-green dark:hover:text-army-gold"
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
                className="block px-3 py-2 text-army-black dark:text-dark-text hover:text-mh-forest-green dark:hover:text-army-gold transition-colors font-medium"
                onClick={closeMenu}
              >
                About
              </Link>
              <Link 
                href="/services" 
                className="block px-3 py-2 text-army-black dark:text-dark-text hover:text-mh-forest-green dark:hover:text-army-gold transition-colors font-medium"
                onClick={closeMenu}
              >
                Services
              </Link>
              <Link 
                href="/projects" 
                className="block px-3 py-2 text-army-black dark:text-dark-text hover:text-mh-forest-green dark:hover:text-army-gold transition-colors font-medium"
                onClick={closeMenu}
              >
                Projects
              </Link>
              <Link 
                href="/wounded-warrior" 
                className="block px-3 py-2 text-army-black dark:text-dark-text hover:text-mh-forest-green dark:hover:text-army-gold transition-colors font-medium"
                onClick={closeMenu}
              >
                Wounded Warrior
              </Link>
              <Link 
                href="/contact" 
                className="block px-3 py-2 text-army-black dark:text-dark-text hover:text-mh-forest-green dark:hover:text-army-gold transition-colors font-medium"
                onClick={closeMenu}
              >
                Contact
              </Link>
              <Link 
                href="/estimate" 
                className="block mx-3 my-2 px-4 py-2 bg-army-gold text-army-black rounded-md font-semibold text-center hover:bg-yellow-500 transition-colors"
                onClick={closeMenu}
              >
                Get Estimate
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header
