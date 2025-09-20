'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Play, Pause } from 'lucide-react'

const HeroSection = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(true)

  const toggleVideo = () => {
    const video = document.querySelector('video') as HTMLVideoElement
    if (video) {
      if (isVideoPlaying) {
        video.pause()
      } else {
        video.play()
      }
      setIsVideoPlaying(!isVideoPlaying)
    }
  }

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden pt-24">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover transition-all duration-1000"
          poster="/images/hero-poster.jpg"
        >
          <source src="/videos/summers-hub-timelapse.mp4" type="video/mp4" />
          <source src="/videos/summers-hub-timelapse.webm" type="video/webm" />
          {/* Fallback image if video fails */}
          <img 
            src="/images/hero-poster.jpg" 
            alt="MH Construction Project" 
            className="w-full h-full object-cover"
          />
        </video>
        
        {/* Enhanced dark overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/60 dark:from-black/50 dark:via-black/60 dark:to-black/70 transition-all duration-300"></div>
      </div>

      {/* Video Controls - Enhanced styling */}
      <button
        onClick={toggleVideo}
        className="absolute top-4 right-4 sm:top-6 sm:right-6 z-20 bg-black/60 dark:bg-dark-surface/80 backdrop-blur-sm text-white dark:text-dark-text p-2 sm:p-3 rounded-full hover:bg-black/70 dark:hover:bg-dark-surface/90 transition-all duration-300 hover:scale-110 shadow-lg touch-manipulation min-w-[44px] min-h-[44px] flex items-center justify-center"
        aria-label={isVideoPlaying ? 'Pause video' : 'Play video'}
      >
        {isVideoPlaying ? <Pause size={18} className="sm:w-5 sm:h-5" /> : <Play size={18} className="sm:w-5 sm:h-5" />}
      </button>

      {/* Hero Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white dark:text-white mb-6 leading-tight">
          Building Tomorrow with{' '}
          <span className="text-mh-leather-tan dark:text-mh-leather-tan">Today's Technology</span>
        </h1>
        
        <p className="text-lg md:text-xl lg:text-2xl text-gray-200 dark:text-gray-100 mb-8 max-w-3xl mx-auto leading-relaxed">
          Veteran-owned construction excellence powered by cutting-edge AI technology. 
          Experience the future of construction with transparent pricing, immersive project 
          visualization, and military-grade precision.
        </p>

        {/* Call to Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4">
          <Link
            href="/estimate"
            className="w-full sm:w-auto bg-mh-hunter-green dark:bg-mh-hunter-green text-white dark:text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold hover:bg-mh-leather-tan dark:hover:bg-mh-leather-tan transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 shadow-lg hover:shadow-xl touch-manipulation min-h-[48px] text-center"
          >
            Get Your AI Estimate
          </Link>
          
          <Link
            href="/projects"
            className="w-full sm:w-auto bg-transparent border-2 border-white dark:border-white text-white dark:text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold hover:bg-white dark:hover:bg-white hover:text-charcoal dark:hover:text-charcoal transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 shadow-lg touch-manipulation min-h-[48px] text-center"
          >
            Explore Our Projects
          </Link>
        </div>

        {/* Enhanced scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/80 dark:border-white/80 rounded-full flex justify-center backdrop-blur-sm">
            <div className="w-1 h-3 bg-white dark:bg-white rounded-full mt-2 animate-pulse shadow-sm"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
