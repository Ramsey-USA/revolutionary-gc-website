'use client';

import { useEffect, useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import StarDecorations from '@/components/StarDecorations';
import ScheduleButton from '@/components/ScheduleButton';

export default function WoundedWarriorPage() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="min-h-screen pt-20 transition-colors duration-300 relative">
      {/* Static Background Image */}
      <div 
        className="fixed inset-0 bg-cover bg-center bg-no-repeat z-0"
        style={{
          backgroundImage: 'url(/images/mh-veteran-bg.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
          backgroundAttachment: 'fixed'
        }}
      />
      
      {/* Global overlay for better readability */}
      <div className="fixed inset-0 bg-gradient-to-b from-black/30 via-black/15 to-black/30 z-0"></div>
      
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 z-10">
        {/* Additional hero-specific overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-black/20"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-mh-hunter-green/30 via-transparent to-mh-leather-tan/20"></div>

        {/* Animated Stars Background */}
        <div className={`absolute inset-0 opacity-40 transition-all duration-1000 ${isLoaded ? 'scale-100 opacity-40' : 'scale-110 opacity-0'}`}>
          <StarDecorations />
        </div>

        {/* Hero Content */}
        <div className={`relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center transition-all duration-1000 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <div className="section-header mb-12">
            <h1 className="section-title text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold text-white dark:text-dark-text mb-8 leading-[0.9] tracking-tight">
              Building Homes for Our
              <span className="text-mh-leather-tan dark:text-mh-leather-tan block mt-2 bg-gradient-to-r from-mh-leather-tan via-mh-leather-tan/80 to-mh-leather-tan bg-clip-text text-transparent animate-pulse">Wounded Warriors</span>
            </h1>
            <div className="max-w-5xl mx-auto">
              <p className="section-subtitle text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-100 dark:text-dark-text-secondary mb-12 leading-relaxed font-medium">
                Revolutionary General Contracting is proud to partner with veterans organizations 
                to build adaptive, accessible homes for our wounded heroes who sacrificed everything for our freedom.
              </p>
            </div>
            
            {/* Enhanced CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20" role="group" aria-label="Action buttons">
              <ScheduleButton 
                variant="primary"
                className="text-lg px-8 py-4 shadow-2xl hover:shadow-mh-leather-tan/25 transition-all duration-300 transform hover:-translate-y-1"
              >
                Get Involved Today
              </ScheduleButton>
              <button 
                className="btn btn-outline-secondary text-lg px-8 py-4 border-white text-white hover:text-white hover:bg-white/20 hover:border-white/50 transform hover:-translate-y-1 shadow-xl"
                aria-label="Learn more about our Wounded Warrior program"
                type="button"
                onClick={() => {
                  const missionSection = document.querySelector('section:nth-of-type(2)');
                  missionSection?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Learn More
              </button>
            </div>

            {/* Enhanced Mission Badge */}
            <div 
              className="inline-flex items-center bg-black/40 backdrop-blur-md px-8 py-4 rounded-full transition-all duration-300 hover:bg-black/50 hover:scale-105 border border-white/20 hover:border-white/30 shadow-2xl"
              role="banner"
              aria-label="Core values banner"
            >
              <div className="feature-icon-primary w-10 h-10 mr-4 bg-gradient-to-br from-mh-leather-tan to-mh-leather-tan/80 rounded-full p-2" aria-hidden="true">
                <svg className="w-6 h-6 text-white icon-feature" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                </svg>
              </div>
              <span className="text-white font-bold text-lg tracking-wide">Honor • Service • Sacrifice • Gratitude</span>
            </div>
          </div>
        </div>

        {/* Enhanced Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
          <div className="text-mh-leather-tan/80 text-sm font-medium mb-2 opacity-90">Scroll to explore</div>
          <button 
            className="bg-white/10 backdrop-blur-sm border-2 border-white/20 text-mh-leather-tan hover:text-white hover:bg-white/20 hover:border-white/40 animate-bounce p-4 rounded-full transition-all duration-300 transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-mh-leather-tan focus:ring-offset-2 focus:ring-offset-transparent shadow-lg hover:shadow-xl"
            aria-label="Scroll down to learn more about our mission"
            onClick={() => {
              const nextSection = document.querySelector('section:nth-of-type(2)');
              nextSection?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3"/>
            </svg>
          </button>
        </div>
      </section>

      {/* Mission Statement - 50% opacity */}
      <section className="py-24 relative overflow-hidden bg-white/50 dark:bg-dark-surface/50 backdrop-blur-sm transition-all duration-300 z-10">
        
        {/* Decorative Elements */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(56,104,81,0.03),transparent_70%)] dark:bg-[radial-gradient(circle_at_center,rgba(56,104,81,0.05),transparent_70%)]"></div>
        <div className="absolute top-20 left-20 w-40 h-40 bg-mh-hunter-green/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-mh-leather-tan/10 rounded-full blur-2xl"></div>
        
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="section-header text-center">
            <div className="inline-flex items-center bg-gradient-to-r from-mh-hunter-green/10 to-mh-leather-tan/10 dark:from-mh-hunter-green/20 dark:to-mh-leather-tan/20 px-8 py-4 rounded-full mb-12 transition-all duration-500 hover:from-mh-hunter-green/20 hover:to-mh-leather-tan/20 dark:hover:from-mh-hunter-green/30 dark:hover:to-mh-leather-tan/30 border border-mh-hunter-green/20 dark:border-mh-hunter-green/20 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              <svg className="w-6 h-6 text-mh-hunter-green dark:text-mh-hunter-green mr-3 icon-feature" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
              <span className="text-mh-hunter-green dark:text-mh-hunter-green font-bold text-lg">Our Mission</span>
            </div>
            <h2 className="section-title text-4xl md:text-6xl font-bold mb-12 text-black dark:text-white leading-tight">
              Building <span className="bg-gradient-to-r from-mh-hunter-green via-mh-hunter-green/80 to-mh-leather-tan bg-clip-text text-transparent">Hope</span> for Those Who Served
            </h2>
            <div className="section-subtitle text-xl text-gray-700 dark:text-gray-200 leading-relaxed max-w-4xl mx-auto">
              <p className="mb-8 text-lg text-gray-700 dark:text-gray-200">
                At MH Construction, we believe our nation's veterans deserve more than gratitude—they deserve action. 
                Our Wounded Warrior initiative is a comprehensive program designed to provide tangible support to 
                veterans and their families in their time of greatest need.
              </p>
              <p className="mb-10 text-lg text-gray-700 dark:text-gray-200">
                Through free home modifications, accessibility improvements, and emergency repairs, we're ensuring 
                that the brave men and women who sacrificed for our freedom have safe, comfortable homes to call their own.
              </p>
              <div className="relative group max-w-4xl mx-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-mh-hunter-green/10 to-mh-leather-tan/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-105"></div>
                <blockquote className="feature-card relative bg-gradient-to-br from-white via-mh-hunter-green/5 to-mh-leather-tan/5 dark:from-dark-surface-2 dark:via-mh-hunter-green/10 dark:to-mh-leather-tan/10 p-10 rounded-2xl border border-mh-hunter-green/20 dark:border-mh-hunter-green/30 shadow-xl hover:shadow-2xl transition-all duration-500 backdrop-blur-sm">
                  <p className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-mh-hunter-green via-mh-hunter-green/80 to-mh-leather-tan bg-clip-text text-transparent italic leading-relaxed">
                    "Service doesn't end when the uniform comes off. It evolves into a lifetime commitment to lifting each other up."
                  </p>
                  <footer className="text-lg text-gray-600 dark:text-gray-300 mt-6 font-medium">— MH Construction Wounded Warrior Initiative</footer>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stats - 60% opacity */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-white/60 dark:bg-dark-surface/60 backdrop-blur-sm transition-colors duration-300 z-10">
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(189,146,100,0.05),transparent_50%)] dark:bg-[radial-gradient(circle_at_bottom_left,rgba(189,146,100,0.03),transparent_50%)]"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-mh-hunter-green/10 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-mh-leather-tan/10 to-transparent rounded-full blur-3xl"></div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="section-header text-center mb-20">
            <div className="inline-flex items-center bg-gradient-to-r from-mh-leather-tan/10 to-mh-hunter-green/10 dark:from-mh-leather-tan/20 dark:to-mh-hunter-green/20 px-8 py-4 rounded-full mb-8 border border-mh-leather-tan/20 dark:border-mh-leather-tan/20 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <span className="text-mh-leather-tan dark:text-mh-leather-tan font-bold text-lg">Our Impact</span>
            </div>
            <h2 className="section-title text-4xl md:text-6xl font-bold text-black dark:text-white mb-6">Making a Difference</h2>
            <p className="section-subtitle text-xl text-gray-700 dark:text-gray-200 max-w-3xl mx-auto leading-relaxed">See the tangible impact we're making in our veterans' lives through our construction initiatives</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-mh-leather-tan/30 to-mh-hunter-green/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-110"></div>
              <div className="feature-card relative bg-gradient-to-br from-white via-mh-leather-tan/5 to-mh-leather-tan/10 dark:from-dark-surface-2 dark:via-dark-surface dark:to-mh-leather-tan/5 p-10 rounded-2xl min-h-[320px] flex flex-col justify-center shadow-xl border border-mh-leather-tan/20 dark:border-mh-leather-tan/20 hover:shadow-2xl transition-all duration-500 backdrop-blur-sm">
                <div className="relative z-10">
                  <div className="text-6xl md:text-7xl font-extrabold bg-gradient-to-br from-mh-leather-tan via-mh-leather-tan/80 to-mh-hunter-green bg-clip-text text-transparent mb-6 transition-all duration-300 group-hover:scale-110 leading-none">3</div>
                  <div className="text-2xl font-bold text-black dark:text-white mb-3">Homes Built</div>
                  <div className="text-lg text-gray-700 dark:text-gray-200 leading-relaxed">Adaptive homes completed for wounded veterans</div>
                  <div className="w-20 h-1.5 bg-gradient-to-r from-mh-leather-tan to-mh-hunter-green mx-auto mt-6 rounded-full transition-all duration-300 group-hover:w-28 shadow-lg"></div>
                </div>
              </div>
            </div>
            
            <div className="text-center relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-mh-hunter-green/30 to-mh-leather-tan/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-110"></div>
              <div className="feature-card relative bg-gradient-to-br from-white via-mh-hunter-green/5 to-mh-hunter-green/10 dark:from-dark-surface-2 dark:via-dark-surface dark:to-mh-hunter-green/5 p-10 rounded-2xl min-h-[320px] flex flex-col justify-center shadow-xl border border-mh-hunter-green/20 dark:border-mh-hunter-green/20 hover:shadow-2xl transition-all duration-500 backdrop-blur-sm">
                <div className="relative z-10">
                  <div className="text-6xl md:text-7xl font-extrabold bg-gradient-to-br from-mh-hunter-green via-mh-hunter-green/80 to-mh-leather-tan bg-clip-text text-transparent mb-6 transition-all duration-300 group-hover:scale-110 leading-none">2</div>
                  <div className="text-2xl font-bold text-black dark:text-white mb-3">In Progress</div>
                  <div className="text-lg text-gray-700 dark:text-gray-200 leading-relaxed">Homes currently under construction</div>
                  <div className="w-20 h-1.5 bg-gradient-to-r from-mh-hunter-green to-mh-leather-tan mx-auto mt-6 rounded-full transition-all duration-300 group-hover:w-28 shadow-lg"></div>
                </div>
              </div>
            </div>
            
            <div className="text-center relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-mh-hunter-green/30 to-mh-leather-tan/30 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-110"></div>
              <div className="feature-card relative bg-gradient-to-br from-white via-mh-hunter-green/5 to-mh-leather-tan/10 dark:from-dark-surface-2 dark:via-dark-surface dark:to-mh-leather-tan/5 p-10 rounded-2xl min-h-[320px] flex flex-col justify-center shadow-xl border border-mh-hunter-green/20 dark:border-mh-hunter-green/20 hover:shadow-2xl transition-all duration-500 backdrop-blur-sm">
                <div className="relative z-10">
                  <div className="text-6xl md:text-7xl font-extrabold bg-gradient-to-br from-mh-hunter-green via-mh-leather-tan to-mh-hunter-green bg-clip-text text-transparent mb-6 transition-all duration-300 group-hover:scale-110 leading-none">50+</div>
                  <div className="text-2xl font-bold text-black dark:text-white mb-3">Volunteers</div>
                  <div className="text-lg text-gray-700 dark:text-gray-200 leading-relaxed">Community members helping build</div>
                  <div className="w-20 h-1.5 bg-gradient-to-r from-mh-hunter-green to-mh-leather-tan mx-auto mt-6 rounded-full transition-all duration-300 group-hover:w-28 shadow-lg"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How You Can Help - 70% opacity */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-white/70 dark:bg-dark-surface/70 backdrop-blur-sm z-10">
        {/* Decorative Elements */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(56,104,81,0.03),transparent_70%)] dark:bg-[radial-gradient(circle_at_center,rgba(56,104,81,0.05),transparent_70%)]"></div>
        <div className="absolute top-10 left-10 w-40 h-40 bg-mh-leather-tan/15 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-48 h-48 bg-mh-hunter-green/15 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-mh-hunter-green/5 to-mh-leather-tan/5 rounded-full blur-3xl"></div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="section-header text-center mb-20">
            <div className="inline-flex items-center bg-gradient-to-r from-mh-hunter-green/100 to-mh-leather-tan dark:from-mh-hunter-green/800/20 dark:to-mh-leather-tan/800/20 px-8 py-4 rounded-full mb-8 border border-mh-hunter-green/200 dark:border-mh-hunter-green/20 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <span className="text-mh-hunter-green dark:text-mh-hunter-green font-bold text-lg">Get Involved</span>
            </div>
            <h2 className="section-title text-4xl md:text-6xl font-bold text-black dark:text-white mb-6">How You Can Help</h2>
            <p className="section-subtitle text-xl text-gray-700 dark:text-gray-200 max-w-3xl mx-auto leading-relaxed">Join our mission to support wounded warriors through various meaningful ways to contribute</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Volunteer Card */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-mh-leather-tan/40 to-mh-hunter-green/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-110"></div>
              <div className="feature-card relative bg-gradient-to-br from-white via-mh-leather-tan/30 to-white dark:from-dark-surface-2 dark:via-mh-leather-tan/5 dark:to-dark-surface-2 border-2 border-mh-leather-tan/60 dark:border-mh-leather-tan/600/50 rounded-2xl p-10 text-center hover:border-mh-leather-tan dark:hover:border-mh-leather-tan min-h-[420px] flex flex-col justify-between shadow-xl hover:shadow-2xl transition-all duration-500 backdrop-blur-sm">
                <div className="flex flex-col items-center">
                  <div className="feature-icon-secondary w-20 h-20 mx-auto mb-8 bg-gradient-to-br from-mh-leather-tan to-mh-leather-tan/600 rounded-2xl p-4 shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:-translate-y-1">
                    <svg className="w-12 h-12 text-white icon-action" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
                    </svg>
                  </div>
                  <h3 className="text-3xl font-bold text-black dark:text-white mb-6">Volunteer</h3>
                  <p className="text-lg text-gray-700 dark:text-gray-200 mb-8 leading-relaxed">Join our construction crews, help with logistics, or provide specialized skills to support our mission</p>
                </div>
                <ScheduleButton 
                  variant="primary" 
                  className="w-full py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  Sign Up to Volunteer
                </ScheduleButton>
              </div>
            </div>

            {/* Donate Card */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-mh-hunter-green/200/40 to-mh-leather-tan/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-110"></div>
              <div className="feature-card relative bg-gradient-to-br from-white via-mh-hunter-green/50/30 to-white dark:from-dark-surface-2 dark:via-mh-hunter-green/5 dark:to-dark-surface-2 border-2 border-mh-hunter-green/200/60 dark:border-mh-hunter-green/50 rounded-2xl p-10 text-center hover:border-mh-hunter-green dark:hover:border-mh-hunter-green min-h-[420px] flex flex-col justify-between shadow-xl hover:shadow-2xl transition-all duration-500 backdrop-blur-sm">
                <div className="flex flex-col items-center">
                  <div className="feature-icon-primary w-20 h-20 mx-auto mb-8 bg-gradient-to-br from-mh-hunter-green to-mh-hunter-green/700 rounded-2xl p-4 shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:-translate-y-1">
                    <svg className="w-12 h-12 text-white icon-action" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"/>
                    </svg>
                  </div>
                  <h3 className="text-3xl font-bold text-black dark:text-white mb-6">Donate</h3>
                  <p className="text-lg text-gray-700 dark:text-gray-200 mb-8 leading-relaxed">Help fund materials, adaptive equipment, and specialized construction needs for our projects</p>
                </div>
                <ScheduleButton 
                  variant="secondary" 
                  className="w-full py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  Make a Donation
                </ScheduleButton>
              </div>
            </div>

            {/* Partner Card */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-mh-hunter-green/200/40 to-mh-leather-tan/40 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-110"></div>
              <div className="feature-card relative bg-gradient-to-br from-white via-mh-hunter-green/50/20 to-mh-leather-tan/20 dark:from-dark-surface-2 dark:via-dark-green/5 dark:to-mh-leather-tan/5 border-2 border-mh-hunter-green/200/60 dark:border-mh-hunter-green/50 rounded-2xl p-10 text-center hover:border-mh-hunter-green dark:hover:border-mh-hunter-green min-h-[420px] flex flex-col justify-between shadow-xl hover:shadow-2xl transition-all duration-500 backdrop-blur-sm">
                <div className="flex flex-col items-center">
                  <div className="feature-icon-gradient w-20 h-20 mx-auto mb-8 bg-gradient-to-br from-mh-hunter-green via-mh-hunter-green to-mh-leather-tan rounded-2xl p-4 shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:-translate-y-1">
                    <svg className="w-12 h-12 text-white icon-action" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 712 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2V8a2 2 0 712-2V6"/>
                    </svg>
                  </div>
                  <h3 className="text-3xl font-bold text-black dark:text-white mb-6">Business Partnership</h3>
                  <p className="text-lg text-gray-700 dark:text-gray-200 mb-8 leading-relaxed">Partner with us through materials donation, services, or corporate sponsorship opportunities</p>
                </div>
                <ScheduleButton 
                  variant="primary" 
                  className="w-full py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  Become a Partner
                </ScheduleButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Current Project Spotlight - 80% opacity */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-white/80 dark:bg-dark-surface/80 backdrop-blur-sm transition-colors duration-300 z-10">
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(189,146,100,0.05),transparent_50%)] dark:bg-[radial-gradient(circle_at_top_left,rgba(189,146,100,0.03),transparent_50%)]"></div>
        <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-mh-hunter-green/15 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-mh-leather-tan/15 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-mh-hunter-green/5 to-mh-leather-tan/5 rounded-full blur-3xl"></div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="section-header text-center mb-20">
            <div className="inline-flex items-center bg-gradient-to-r from-mh-leather-tan to-mh-hunter-green/100 dark:from-mh-leather-tan/800/20 dark:to-mh-hunter-green/800/20 px-8 py-4 rounded-full mb-8 border border-mh-leather-tan dark:border-mh-leather-tan/20 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <span className="text-mh-leather-tan/600 dark:text-mh-leather-tan font-bold text-lg">In Progress</span>
            </div>
            <h2 className="section-title text-4xl md:text-6xl font-bold text-black dark:text-white mb-6">Current Project</h2>
            <p className="section-subtitle text-xl text-gray-700 dark:text-gray-200 max-w-3xl mx-auto leading-relaxed">Follow the progress of our latest wounded warrior home construction project</p>
          </div>
          
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-mh-leather-tan/20 to-mh-hunter-green/20 rounded-2xl blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-105"></div>
            <div className="feature-card relative bg-gradient-to-br from-white via-gray-50/50 to-mh-leather-tan/30 dark:from-dark-surface-2 dark:via-dark-surface dark:to-mh-leather-tan/5 rounded-2xl overflow-hidden border border-gray-200/50 dark:border-dark-border shadow-xl hover:shadow-2xl transition-all duration-500 backdrop-blur-sm">
              <div className="md:flex">
                <div className="md:w-1/2 relative overflow-hidden">
                  <div className="aspect-video bg-gradient-to-br from-black via-mh-hunter-green/700 to-mh-leather-tan/600 flex items-center justify-center transition-all duration-500 hover:from-mh-hunter-green/700 hover:via-mh-leather-tan/600 hover:to-black group relative">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="text-center text-white relative z-10">
                      <div className="relative">
                        <div className="bg-white/10 backdrop-blur-sm rounded-full p-6 mb-6 group-hover:bg-white/20 transition-all duration-300 transform group-hover:scale-110">
                          <svg className="w-16 h-16 mx-auto opacity-90 transition-all duration-500 group-hover:opacity-100 icon-feature" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/>
                            <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd"/>
                          </svg>
                        </div>
                        <div className="absolute inset-0 bg-white/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      </div>
                      <p className="text-xl font-bold transition-all duration-300 group-hover:scale-105 mb-2">Project Progress Photos</p>
                      <p className="text-sm text-gray-200 opacity-80 group-hover:opacity-100 transition-opacity duration-300">Click to view gallery</p>
                    </div>
                  </div>
                </div>
                <div className="md:w-1/2 p-10 relative">
                  <div className="space-y-8">
                    <div>
                      <h3 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-mh-hunter-green via-mh-hunter-green to-mh-leather-tan bg-clip-text text-transparent mb-6 leading-tight">Home for Sergeant Martinez</h3>
                      <p className="text-lg text-gray-700 dark:text-gray-200 leading-relaxed">
                        Currently building an adaptive home for Sergeant Maria Martinez, who was injured in Afghanistan. 
                        The home features wheelchair accessibility, adaptive kitchen design, and smart home technology 
                        for enhanced independence.
                      </p>
                    </div>
                    
                    <div className="space-y-6">
                      <div className="bg-gradient-to-r from-mh-leather-tan/80 to-mh-leather-tan/40 dark:from-mh-leather-tan/20 dark:to-mh-leather-tan/800/10 p-6 rounded-xl border border-mh-leather-tan/60 dark:border-mh-leather-tan/600/30 shadow-lg backdrop-blur-sm">
                        <div className="flex justify-between text-base font-bold text-black dark:text-white mb-3">
                          <span>Construction Progress</span>
                          <span>75%</span>
                        </div>
                        <div className="w-full bg-gray-200 dark:bg-dark-surface-3 rounded-full h-4 relative overflow-hidden shadow-inner">
                          <div className="absolute inset-0 bg-gradient-to-r from-gray-200 to-gray-300 dark:from-dark-surface-3 dark:to-dark-surface-2"></div>
                          <div className="bg-gradient-to-r from-mh-leather-tan via-mh-leather-tan to-mh-hunter-green h-4 rounded-full transition-all duration-1000 relative z-10 shadow-lg" style={{width: '75%'}}></div>
                        </div>
                      </div>
                      
                      <div className="bg-gradient-to-r from-mh-hunter-green/80 to-mh-hunter-green/40 dark:from-mh-hunter-green/20 dark:to-mh-hunter-green/10 p-6 rounded-xl border border-mh-hunter-green/60 dark:border-mh-hunter-green/30 shadow-lg backdrop-blur-sm">
                        <div className="flex justify-between text-base font-bold text-black dark:text-white mb-3">
                          <span>Funding Goal</span>
                          <span>$185K / $220K</span>
                        </div>
                        <div className="w-full bg-gray-200 dark:bg-dark-surface-3 rounded-full h-4 relative overflow-hidden shadow-inner">
                          <div className="absolute inset-0 bg-gradient-to-r from-gray-200 to-gray-300 dark:from-dark-surface-3 dark:to-dark-surface-2"></div>
                          <div className="bg-gradient-to-r from-mh-hunter-green via-mh-hunter-green to-mh-leather-tan h-4 rounded-full transition-all duration-1000 relative z-10 shadow-lg" style={{width: '84%'}}></div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-gradient-to-r from-mh-hunter-green/60 to-mh-leather-tan/60 dark:from-mh-hunter-green/15 dark:to-mh-leather-tan/15 p-6 rounded-xl border border-mh-hunter-green/50 dark:border-mh-hunter-green/30 shadow-lg backdrop-blur-sm">
                      <p className="text-base text-gray-700 dark:text-gray-200 font-semibold flex items-center">
                        <svg className="w-5 h-5 mr-3 text-mh-hunter-green dark:text-mh-hunter-green icon-utility" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"/>
                        </svg>
                        Estimated completion: March 2024
                      </p>
                    </div>
                    
                    <ScheduleButton 
                      variant="primary" 
                      className="w-full md:w-auto px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                    >
                      Support This Project
                    </ScheduleButton>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer with higher opacity for readability */}
      <div className="relative z-10 bg-white/90 dark:bg-dark-surface/90 backdrop-blur-sm">
        <Footer />
      </div>
    </div>
  );
}