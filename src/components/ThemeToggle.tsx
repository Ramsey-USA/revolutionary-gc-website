'use client'

import { useTheme } from '../contexts/ThemeContext'
import { Sun, Moon } from 'lucide-react'

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme()

  // Style 1: Modern Rounded Toggle (Current - Enhanced)
  const ModernToggle = () => (
    <button
      onClick={toggleTheme}
      className="relative inline-flex items-center justify-center w-14 h-7 bg-gray-200 dark:bg-gray-700 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-mh-leather-tan focus:ring-offset-2 dark:focus:ring-offset-dark-surface hover:scale-105 group"
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      {/* Background gradient */}
      <div className={`absolute inset-0 rounded-full transition-all duration-300 ${
        theme === 'dark' 
          ? 'bg-gradient-to-r from-mh-hunter-green to-mh-leather-tan' 
          : 'bg-gradient-to-r from-mh-leather-tan to-mh-hunter-green'
      }`}></div>
      
      {/* Sliding circle with glow */}
      <div
        className={`absolute w-6 h-6 bg-white rounded-full shadow-lg transform transition-all duration-300 flex items-center justify-center ${
          theme === 'dark' ? 'translate-x-7' : 'translate-x-0'
        } group-hover:shadow-xl`}
      >
        {theme === 'light' ? (
          <Sun size={14} className="text-mh-leather-tan" />
        ) : (
          <Moon size={14} className="text-mh-hunter-green" />
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
            ? 'bg-white shadow-md text-mh-leather-tan' 
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
            ? 'bg-gray-700 shadow-md text-mh-hunter-green' 
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
      className="relative inline-flex items-center justify-center w-10 h-10 bg-white dark:bg-gray-800 rounded-full shadow-lg dark:shadow-gray-900/50 border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:scale-110 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-mh-hunter-green focus:ring-offset-2 dark:focus:ring-offset-dark-surface"
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      <div className="relative">
        {theme === 'light' ? (
          <Moon size={18} className="text-gray-700 dark:text-gray-300 transition-all duration-300" />
        ) : (
          <Sun size={18} className="text-mh-leather-tan transition-all duration-300" />
        )}
      </div>
    </button>
  )

  // Style 4: Enhanced Military Toggle - Matches brand design
  const MilitaryToggle = () => (
    <button
      onClick={toggleTheme}
      className="relative inline-flex items-center justify-center w-16 h-8 bg-gradient-to-r from-mh-hunter-green to-mh-leather-tan dark:from-dark-surface-2 dark:to-dark-surface-3 rounded-lg border-2 border-mh-hunter-green dark:border-mh-hunter-green transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-mh-hunter-green focus:ring-offset-2 dark:focus:ring-offset-dark-surface hover:shadow-lg hover:scale-105 group"
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      {/* Background Track */}
      <div className="absolute inset-1 bg-black dark:bg-dark-surface rounded-md">
        {/* Track indicators */}
        <div className="absolute left-1 top-1/2 transform -translate-y-1/2 w-1 h-3 bg-mh-hunter-green dark:bg-mh-hunter-green rounded-full opacity-50"></div>
        <div className="absolute right-1 top-1/2 transform -translate-y-1/2 w-1 h-3 bg-mh-hunter-green dark:bg-mh-hunter-green rounded-full opacity-50"></div>
      </div>
      
      {/* Sliding Handle */}
      <div className={`relative z-10 w-6 h-6 bg-gradient-to-b from-mh-leather-tan to-mh-leather-tan dark:from-mh-hunter-green dark:to-mh-leather-tan rounded-md transition-all duration-500 ease-out transform shadow-lg ${
        theme === 'dark' ? 'translate-x-4' : '-translate-x-4'
      } group-hover:shadow-xl border border-mh-leather-tan dark:border-mh-hunter-green`}>
        {/* Handle texture lines */}
        <div className="absolute inset-1 flex flex-col justify-center items-center space-y-0.5">
          <div className="w-3 h-0.5 bg-black/30 rounded-full"></div>
          <div className="w-3 h-0.5 bg-black/30 rounded-full"></div>
        </div>
        
        {/* Active mode indicator */}
        <div className="absolute -top-1 -right-1 w-2 h-2 rounded-full transition-all duration-300">
          {theme === 'light' ? (
            <Sun size={8} className="text-mh-leather-tan drop-shadow-sm" />
          ) : (
            <Moon size={8} className="text-mh-hunter-green drop-shadow-sm" />
          )}
        </div>
      </div>
      
      {/* Mode Labels */}
      <div className="absolute -top-6 left-1 text-xs font-mono font-bold text-mh-hunter-green dark:text-mh-hunter-green tracking-wider">
        LT
      </div>
      <div className="absolute -top-6 right-1 text-xs font-mono font-bold text-mh-hunter-green dark:text-mh-hunter-green tracking-wider">
        DK
      </div>
      
      {/* Status LEDs */}
      <div className={`absolute -bottom-1 left-2 w-1.5 h-1.5 rounded-full transition-all duration-300 ${
        theme === 'light' ? 'bg-mh-leather-tan shadow-mh-leather-tan/60 shadow-md' : 'bg-gray-400'
      }`}></div>
      <div className={`absolute -bottom-1 right-2 w-1.5 h-1.5 rounded-full transition-all duration-300 ${
        theme === 'dark' ? 'bg-mh-hunter-green shadow-mh-hunter-green/60 shadow-md' : 'bg-gray-400'
      }`}></div>
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
          <Sun size={14} className="text-mh-leather-tan" />
        ) : (
          <Moon size={14} className="text-mh-hunter-green" />
        )}
      </div>
    </button>
  )

  // Return the Military-themed toggle by default (matches brand)
  return <MilitaryToggle />
}

export default ThemeToggle