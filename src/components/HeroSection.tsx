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
          className="w-full h-full object-cover"
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
        
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black bg-opacity-50 dark:bg-black dark:bg-opacity-60"></div>
      </div>

      {/* Video Controls */}
      <button
        onClick={toggleVideo}
        className="absolute top-4 right-4 z-20 bg-black dark:bg-dark-surface bg-opacity-50 dark:bg-opacity-80 text-white dark:text-dark-text p-2 rounded-full hover:bg-opacity-70 dark:hover:bg-opacity-90 transition-colors"
        aria-label={isVideoPlaying ? 'Pause video' : 'Play video'}
      >
        {isVideoPlaying ? <Pause size={20} /> : <Play size={20} />}
      </button>

      {/* Hero Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white dark:text-white mb-6 leading-tight">
          Building Tomorrow with{' '}
          <span className="text-army-gold dark:text-army-gold">Today's Technology</span>
        </h1>
        
        <p className="text-lg md:text-xl lg:text-2xl text-gray-200 dark:text-gray-100 mb-8 max-w-3xl mx-auto leading-relaxed">
          Veteran-owned construction excellence powered by cutting-edge AI technology. 
          Experience the future of construction with transparent pricing, immersive project 
          visualization, and military-grade precision.
        </p>

        {/* Call to Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href="/estimate"
            className="bg-army-gold dark:bg-army-gold text-army-black dark:text-army-black px-8 py-4 rounded-lg text-lg font-semibold hover:bg-yellow-500 dark:hover:bg-yellow-500 transition-colors transform hover:scale-105 shadow-lg"
          >
            Get Your AI Estimate
          </Link>
          
          <Link
            href="/projects"
            className="bg-transparent border-2 border-white dark:border-white text-white dark:text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white dark:hover:bg-white hover:text-army-black dark:hover:text-army-black transition-colors transform hover:scale-105"
          >
            Explore Our Projects
          </Link>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white dark:border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white dark:bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
