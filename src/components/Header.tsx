'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, ChevronDown } from 'lucide-react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isTeamDropdownOpen, setIsTeamDropdownOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
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
              onMouseEnter={() => setIsTeamDropdownOpen(true)}
              onMouseLeave={() => setIsTeamDropdownOpen(false)}
            >
              <button className="flex items-center text-army-black hover:text-mh-forest-green transition-colors font-medium">
                Team
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              
              {isTeamDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-md shadow-lg border border-gray-200 py-2">
                  <Link href="/team" className="block px-4 py-2 text-army-black hover:bg-mh-forest-green hover:text-white transition-colors">
                    Meet Our Team
                  </Link>
                  <Link href="/team/leadership" className="block px-4 py-2 text-army-black hover:bg-mh-forest-green hover:text-white transition-colors">
                    Leadership
                  </Link>
                  <Link href="/team/project-management" className="block px-4 py-2 text-army-black hover:bg-mh-forest-green hover:text-white transition-colors">
                    Project Management
                  </Link>
                  <Link href="/team/field-operations" className="block px-4 py-2 text-army-black hover:bg-mh-forest-green hover:text-white transition-colors">
                    Field Operations
                  </Link>
                </div>
              )}
            </div>

            <Link href="/blog" className="text-army-black hover:text-mh-forest-green transition-colors font-medium">
              News
            </Link>
            <Link href="/contact" className="text-army-black hover:text-mh-forest-green transition-colors font-medium">
              Contact
            </Link>
            
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
                href="/contact" 
                className="block px-3 py-2 text-army-black hover:text-mh-forest-green transition-colors font-medium"
                onClick={closeMenu}
              >
                Contact
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
