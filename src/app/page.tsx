"use client"
import { useEffect, useState } from 'react'
import Header from '../components/Header'
import HomeHeroSection from '../components/HomeHeroSection'
import AIToolsSection from '../components/AIToolsSection'
import CoreValuesSection from '../components/CoreValuesSection'
import FeaturedProjectsSection from '../components/FeaturedProjectsSection'
import BlogNewsSection from '../components/BlogNewsSection'
import Footer from '../components/Footer'
import WhyChooseSection from '../components/WhyChooseSection'

export default function Home() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <main className="min-h-screen flex flex-col pt-20 bg-white dark:bg-dark-surface transition-colors duration-300 relative overflow-hidden">
      {/* Parallax Logo Background */}
      <div 
        className="fixed inset-0 z-0 pointer-events-none"
        style={{
          transform: `translateY(${scrollY * 0.15}px) scale(${1 + scrollY * 0.00008})`,
        }}
      >
        {/* Primary logo layer */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-[0.06] dark:opacity-[0.15] transition-opacity duration-700"
          style={{
            backgroundImage: "url('/images/mhc-logo-light.png')",
            backgroundSize: '80vh',
            backgroundPosition: 'center 30%',
            filter: 'grayscale(100%) contrast(1.8) brightness(0.7)',
          }}
        />
        
        {/* Secondary offset logo layer */}
        <div 
          className="absolute inset-0 opacity-[0.03] dark:opacity-[0.08] transition-opacity duration-700"
          style={{
            backgroundImage: "url('/images/mhc-logo-light.png')",
            backgroundSize: '50vh',
            backgroundPosition: 'center 70%',
            filter: 'grayscale(100%) contrast(2.2) brightness(0.4)',
            transform: `translateY(${scrollY * -0.08}px) rotate(2deg)`,
          }}
        />
        
        {/* Tertiary subtle pattern */}
        <div 
          className="absolute inset-0 opacity-[0.02] dark:opacity-[0.05] transition-opacity duration-700"
          style={{
            backgroundImage: "url('/images/mhc-logo-light.png')",
            backgroundSize: '120vh',
            backgroundPosition: 'center 90%',
            filter: 'grayscale(100%) contrast(1.5) brightness(0.8)',
            transform: `translateY(${scrollY * 0.25}px) scale(0.8)`,
          }}
        />
      </div>

      {/* Content with higher z-index */}
      <div className="relative z-10">
        <Header />
        <HomeHeroSection />
        <AIToolsSection />
        <CoreValuesSection />
        <FeaturedProjectsSection />
        <BlogNewsSection />
        <div className="mt-auto">
          <WhyChooseSection />
          <Footer />
        </div>
      </div>
    </main>
  )
}
