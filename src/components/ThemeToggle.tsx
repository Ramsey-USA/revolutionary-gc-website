'use client'

import { useTheme } from '../contexts/ThemeContext'
import { Sun, Moon } from 'lucide-react'

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme()

  // Style 1: Modern Rounded Toggle (Current - Enhanced)
  const ModernToggle = () => (
    <button
      onClick={toggleTheme}
      className="relative inline-flex items-center justify-center w-14 h-7 bg-gray-200 dark:bg-gray-700 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-army-gold focus:ring-offset-2 dark:focus:ring-offset-dark-surface hover:scale-105 group"
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      {/* Background gradient */}
      <div className={`absolute inset-0 rounded-full transition-all duration-300 ${
        theme === 'dark' 
          ? 'bg-gradient-to-r from-indigo-600 to-purple-600' 
          : 'bg-gradient-to-r from-amber-400 to-orange-500'
      }`}></div>
      
      {/* Sliding circle with glow */}
      <div
        className={`absolute w-6 h-6 bg-white rounded-full shadow-lg transform transition-all duration-300 flex items-center justify-center ${
          theme === 'dark' ? 'translate-x-7' : 'translate-x-0'
        } group-hover:shadow-xl`}
      >
        {theme === 'light' ? (
          <Sun size={14} className="text-amber-500" />
        ) : (
          <Moon size={14} className="text-indigo-600" />
        )}
      </div>
    </button>
  )

  // Style 2: Split Button Design
  const SplitToggle = () => (
    <div className="relative inline-flex bg-gray-100 dark:bg-gray-800 rounded-lg p-1 transition-colors duration-300">
      <button
        onClick={toggleTheme}
        className={`relative flex items-center justify-center w-8 h-8 rounded-md transition-all duration-300 ${
          theme === 'light' 
            ? 'bg-white shadow-md text-amber-500' 
            : 'text-gray-400 hover:text-gray-300'
        }`}
        aria-label="Light mode"
      >
        <Sun size={16} />
      </button>
      <button
        onClick={toggleTheme}
        className={`relative flex items-center justify-center w-8 h-8 rounded-md transition-all duration-300 ${
          theme === 'dark' 
            ? 'bg-gray-700 shadow-md text-indigo-400' 
            : 'text-gray-400 hover:text-gray-600'
        }`}
        aria-label="Dark mode"
      >
        <Moon size={16} />
      </button>
    </div>
  )

  // Style 3: Floating Icon Button
  const FloatingToggle = () => (
    <button
      onClick={toggleTheme}
      className="relative inline-flex items-center justify-center w-10 h-10 bg-white dark:bg-gray-800 rounded-full shadow-lg dark:shadow-gray-900/50 border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:scale-110 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-army-gold focus:ring-offset-2 dark:focus:ring-offset-dark-surface"
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      <div className="relative">
        {theme === 'light' ? (
          <Moon size={18} className="text-gray-700 dark:text-gray-300 transition-all duration-300" />
        ) : (
          <Sun size={18} className="text-amber-500 transition-all duration-300" />
        )}
      </div>
    </button>
  )

  // Style 4: Military-themed Toggle
  const MilitaryToggle = () => (
    <button
      onClick={toggleTheme}
      className="relative inline-flex items-center justify-center w-12 h-7 bg-army-black dark:bg-gray-800 rounded border border-army-gold dark:border-army-gold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-army-gold focus:ring-offset-2 dark:focus:ring-offset-dark-surface hover:bg-gray-800 dark:hover:bg-gray-700 group"
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      {/* Military-style indicator */}
      <div className={`absolute w-2 h-2 bg-army-gold rounded-full transition-all duration-300 ${
        theme === 'dark' ? 'translate-x-4' : '-translate-x-4'
      }`}></div>
      
      {/* Icons */}
      <div className="flex items-center justify-between w-full px-2">
        <Sun size={12} className={`transition-all duration-300 ${
          theme === 'light' ? 'text-army-gold' : 'text-gray-500'
        }`} />
        <Moon size={12} className={`transition-all duration-300 ${
          theme === 'dark' ? 'text-army-gold' : 'text-gray-500'
        }`} />
      </div>
    </button>
  )

  // Style 5: Neumorphism Toggle
  const NeumorphismToggle = () => (
    <button
      onClick={toggleTheme}
      className="relative inline-flex items-center justify-center w-14 h-8 bg-gray-100 dark:bg-gray-800 rounded-full transition-all duration-300 focus:outline-none hover:scale-105"
      style={{
        boxShadow: theme === 'light' 
          ? 'inset 6px 6px 12px #d1d5db, inset -6px -6px 12px #ffffff'
          : 'inset 6px 6px 12px #1f2937, inset -6px -6px 12px #374151'
      }}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      <div
        className={`absolute w-6 h-6 bg-white dark:bg-gray-700 rounded-full transition-all duration-300 flex items-center justify-center ${
          theme === 'dark' ? 'translate-x-6' : 'translate-x-0'
        }`}
        style={{
          boxShadow: theme === 'light'
            ? '4px 4px 8px #d1d5db, -4px -4px 8px #ffffff'
            : '4px 4px 8px #1f2937, -4px -4px 8px #374151'
        }}
      >
        {theme === 'light' ? (
          <Sun size={14} className="text-amber-500" />
        ) : (
          <Moon size={14} className="text-indigo-400" />
        )}
      </div>
    </button>
  )

  // Return the Military-themed toggle by default (matches brand)
  return <MilitaryToggle />
}

export default ThemeToggle