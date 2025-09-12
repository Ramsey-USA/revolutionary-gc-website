'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, ChevronDown } from 'lucide-react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isTeamDropdownOpen, setIsTeamDropdownOpen] = useState(false)
  const [isContactDropdownOpen, setIsContactDropdownOpen] = useState(false)
  let teamDropdownTimeout: NodeJS.Timeout | null = null
  let contactDropdownTimeout: NodeJS.Timeout | null = null

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <header className="bg-white shadow-lg fixed top-0 left-0 right-0 z-[100] backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <div className="bg-mh-forest-green text-white p-2 rounded-lg">
                <span className="text-xl font-bold">MH</span>
              </div>
              <div className="flex flex-col">
                <span className="text-mh-forest-green font-bold text-lg">MH Construction</span>
                <span className="text-army-gold text-xs font-semibold">VETERAN OWNED</span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-army-black hover:text-mh-forest-green transition-colors font-medium">
              Home
            </Link>
            <Link href="/projects" className="text-army-black hover:text-mh-forest-green transition-colors font-medium">
              Projects
            </Link>
            <Link href="/services" className="text-army-black hover:text-mh-forest-green transition-colors font-medium">
              Services
            </Link>
            
            {/* Team Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => {
                if (teamDropdownTimeout) clearTimeout(teamDropdownTimeout)
                setIsTeamDropdownOpen(true)
              }}
              onMouseLeave={() => {
                teamDropdownTimeout = setTimeout(() => setIsTeamDropdownOpen(false), 120)
              }}
            >
              <button
                className="flex items-center text-army-black hover:text-mh-forest-green transition-colors font-medium"
                onClick={e => {
                  e.preventDefault()
                  setIsTeamDropdownOpen(open => !open)
                }}
                aria-haspopup="true"
                aria-expanded={isTeamDropdownOpen}
                tabIndex={0}
                onFocus={() => setIsTeamDropdownOpen(true)}
                onBlur={e => {
                  // Only close if focus moves outside the dropdown
                  if (!e.currentTarget.contains(e.relatedTarget)) {
                    setIsTeamDropdownOpen(false)
                  }
                }}
              >
                Team
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {isTeamDropdownOpen && (
                <div
                  className="absolute top-full left-0 mt-2 w-48 bg-white rounded-md shadow-lg border border-gray-200 py-2"
                  onMouseEnter={() => {
                    if (teamDropdownTimeout) clearTimeout(teamDropdownTimeout)
                    setIsTeamDropdownOpen(true)
                  }}
                  onMouseLeave={() => {
                    teamDropdownTimeout = setTimeout(() => setIsTeamDropdownOpen(false), 120)
                  }}
                >
                  <Link href="/team" className="block px-4 py-2 text-army-black hover:bg-mh-forest-green hover:text-white transition-colors">
                    Meet Our Team
                  </Link>
                  <Link href="/team#leadership" className="block px-4 py-2 text-army-black hover:bg-mh-forest-green hover:text-white transition-colors">
                    Leadership
                  </Link>
                  <Link href="/team#project-management" className="block px-4 py-2 text-army-black hover:bg-mh-forest-green hover:text-white transition-colors">
                    Project Management
                  </Link>
                  <Link href="/team#field-operations" className="block px-4 py-2 text-army-black hover:bg-mh-forest-green hover:text-white transition-colors">
                    Field Operations
                  </Link>
                  <Link href="/team#administration" className="block px-4 py-2 text-army-black hover:bg-mh-forest-green hover:text-white transition-colors">
                    Administration & Support
                  </Link>
                </div>
              )}
            </div>

            <Link href="/blog" className="text-army-black hover:text-mh-forest-green transition-colors font-medium">
              News
            </Link>
            <Link href="/careers" className="text-army-black hover:text-mh-forest-green transition-colors font-medium">
              Careers
            </Link>
            <Link href="/faqs" className="text-army-black hover:text-mh-forest-green transition-colors font-medium">
              FAQs
            </Link>
            
            {/* Contact Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => {
                if (contactDropdownTimeout) clearTimeout(contactDropdownTimeout)
                setIsContactDropdownOpen(true)
              }}
              onMouseLeave={() => {
                contactDropdownTimeout = setTimeout(() => setIsContactDropdownOpen(false), 120)
              }}
            >
              <button
                className="flex items-center text-army-black hover:text-mh-forest-green transition-colors font-medium"
                onClick={e => {
                  e.preventDefault()
                  setIsContactDropdownOpen(open => !open)
                }}
                aria-haspopup="true"
                aria-expanded={isContactDropdownOpen}
                tabIndex={0}
                onFocus={() => setIsContactDropdownOpen(true)}
                onBlur={e => {
                  // Only close if focus moves outside the dropdown
                  if (!e.currentTarget.contains(e.relatedTarget)) {
                    setIsContactDropdownOpen(false)
                  }
                }}
              >
                Contact
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {isContactDropdownOpen && (
                <div
                  className="absolute top-full left-0 mt-2 w-56 bg-white rounded-md shadow-lg border border-gray-200 py-2"
                  onMouseEnter={() => {
                    if (contactDropdownTimeout) clearTimeout(contactDropdownTimeout)
                    setIsContactDropdownOpen(true)
                  }}
                  onMouseLeave={() => {
                    contactDropdownTimeout = setTimeout(() => setIsContactDropdownOpen(false), 120)
                  }}
                >
                  <Link href="/contact" className="block px-4 py-2 text-army-black hover:bg-mh-forest-green hover:text-white transition-colors">
                    <div className="flex items-center">
                      <svg className="w-4 h-4 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                      </svg>
                      <div>
                        <div className="font-medium">Contact Us</div>
                        <div className="text-xs text-gray-500">Project inquiries & questions</div>
                      </div>
                    </div>
                  </Link>
                  <Link href="/subcontractors" className="block px-4 py-2 text-army-black hover:bg-mh-forest-green hover:text-white transition-colors">
                    <div className="flex items-center">
                      <svg className="w-4 h-4 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                      <div>
                        <div className="font-medium">Subcontractors</div>
                        <div className="text-xs text-gray-500">Join our bid list network</div>
                      </div>
                    </div>
                  </Link>
                </div>
              )}
            </div>

            {/* CTA Button */}
            <Link 
              href="/estimate" 
              className="bg-army-gold text-army-black px-6 py-2 rounded-md font-semibold hover:bg-yellow-500 transition-colors"
            >
              Get AI Estimate
            </Link>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-army-black hover:text-mh-forest-green"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-200">
              <Link 
                href="/" 
                className="block px-3 py-2 text-army-black hover:text-mh-forest-green transition-colors font-medium"
                onClick={closeMenu}
              >
                Home
              </Link>
              <Link 
                href="/projects" 
                className="block px-3 py-2 text-army-black hover:text-mh-forest-green transition-colors font-medium"
                onClick={closeMenu}
              >
                Projects
              </Link>
              <Link 
                href="/services" 
                className="block px-3 py-2 text-army-black hover:text-mh-forest-green transition-colors font-medium"
                onClick={closeMenu}
              >
                Services
              </Link>
              <Link 
                href="/team" 
                className="block px-3 py-2 text-army-black hover:text-mh-forest-green transition-colors font-medium"
                onClick={closeMenu}
              >
                Team
              </Link>
              <Link 
                href="/blog" 
                className="block px-3 py-2 text-army-black hover:text-mh-forest-green transition-colors font-medium"
                onClick={closeMenu}
              >
                News
              </Link>
              <Link 
                href="/careers" 
                className="block px-3 py-2 text-army-black hover:text-mh-forest-green transition-colors font-medium"
                onClick={closeMenu}
              >
                Careers
              </Link>
              <Link 
                href="/faqs" 
                className="block px-3 py-2 text-army-black hover:text-mh-forest-green transition-colors font-medium"
                onClick={closeMenu}
              >
                FAQs
              </Link>
              <Link 
                href="/contact" 
                className="block px-3 py-2 text-army-black hover:text-mh-forest-green transition-colors font-medium"
                onClick={closeMenu}
              >
                Contact Us
              </Link>
              <Link 
                href="/subcontractors" 
                className="block px-3 py-2 text-army-black hover:text-mh-forest-green transition-colors font-medium"
                onClick={closeMenu}
              >
                Subcontractors
              </Link>
              <Link 
                href="/estimate" 
                className="block mx-3 my-2 px-4 py-2 bg-army-gold text-army-black rounded-md font-semibold text-center hover:bg-yellow-500 transition-colors"
                onClick={closeMenu}
              >
                Get AI Estimate
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header
