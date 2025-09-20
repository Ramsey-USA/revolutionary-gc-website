'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function WoundedWarriorPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-dark-surface pt-20 transition-colors duration-300">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-mh-hunter-green to-mh-leather-tan dark:from-dark-surface dark:via-dark-surface-2 dark:to-dark-surface-3 overflow-hidden pt-24">
        {/* Animated Stars Background */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 text-mh-leather-tan text-2xl animate-pulse">★</div>
          <div className="absolute top-1/3 right-1/3 text-white/30 text-xl animate-pulse delay-300">★</div>
          <div className="absolute bottom-1/4 right-1/4 text-mh-leather-tan text-3xl animate-pulse delay-500">★</div>
          <div className="absolute top-1/2 left-1/6 text-white/20 text-2xl animate-pulse delay-700">★</div>
          <div className="absolute bottom-1/3 left-1/3 text-mh-leather-tan text-xl animate-pulse delay-1000">★</div>
          <div className="absolute top-1/6 right-1/6 text-white/40 text-2xl animate-pulse delay-200">★</div>
          <div className="absolute bottom-1/6 right-1/2 text-mh-leather-tan text-2xl animate-pulse delay-800">★</div>
          <div className="absolute top-3/4 left-1/8 text-white/25 text-xl animate-pulse delay-600">★</div>
          <div className="absolute top-1/8 left-1/2 text-mh-leather-tan text-xl animate-pulse delay-400">★</div>
          <div className="absolute bottom-1/8 left-3/4 text-white/35 text-3xl animate-pulse delay-900">★</div>
        </div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white dark:text-dark-text mb-6 leading-tight">
              Building Homes for Our
              <span className="text-mh-leather-tan dark:text-mh-leather-tan block mt-4">Wounded Warriors</span>
            </h1>
            <p className="text-xl md:text-2xl lg:text-3xl text-gray-200 dark:text-dark-text-secondary max-w-4xl mx-auto mb-12 leading-relaxed">
              Revolutionary General Contracting is proud to partner with veterans organizations 
              to build adaptive, accessible homes for our wounded heroes who sacrificed everything for our freedom.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
              <button className="bg-mh-leather-tan dark:bg-mh-leather-tan text-white dark:text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-mh-hunter-green dark:hover:bg-mh-hunter-green transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 shadow-lg hover:shadow-xl">
                Get Involved Today
              </button>
              <button className="border-2 border-mh-leather-tan dark:border-mh-leather-tan text-mh-leather-tan dark:text-mh-leather-tan px-8 py-4 rounded-lg text-lg font-bold hover:bg-mh-leather-tan dark:hover:bg-mh-leather-tan hover:text-white dark:hover:text-white transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 shadow-lg">
                Learn More
              </button>
            </div>

            {/* Mission Badge */}
            <div className="inline-flex items-center bg-mh-hunter-green/80 dark:bg-mh-hunter-green/80 backdrop-blur-sm px-6 py-3 rounded-full transition-all duration-300 hover:bg-mh-hunter-green dark:hover:bg-mh-hunter-green hover:scale-105">
              <div className="w-8 h-8 bg-mh-leather-tan dark:bg-mh-leather-tan rounded-full flex items-center justify-center mr-3 transition-transform duration-300 hover:rotate-12">
                <svg className="w-5 h-5 text-white dark:text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                </svg>
              </div>
              <span className="text-white dark:text-white font-semibold">Honor • Service • Sacrifice • Gratitude</span>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-mh-leather-tan animate-bounce">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3"/>
          </svg>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-mh-hunter-green/5 dark:from-gray-900 dark:via-dark-surface dark:to-mh-hunter-green/10 border-l-8 border-mh-hunter-green dark:border-mh-hunter-green transition-all duration-300">
        {/* Decorative Elements */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(56,104,81,0.03),transparent_50%)] dark:bg-[radial-gradient(circle_at_top_right,rgba(56,104,81,0.05),transparent_50%)]"></div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <div className="inline-flex items-center bg-gradient-to-r from-mh-hunter-green/10 to-mh-leather-tan/10 dark:from-mh-hunter-green/10 dark:to-mh-leather-tan/10 px-8 py-3 rounded-full mb-8 transition-all duration-500 hover:from-mh-hunter-green/20 hover:to-mh-leather-tan/20 dark:hover:from-mh-hunter-green/20 dark:hover:to-mh-leather-tan/20 border border-mh-hunter-green/20 dark:border-mh-hunter-green/20 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              <svg className="w-5 h-5 text-mh-hunter-green dark:text-mh-hunter-green mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
              <span className="text-mh-hunter-green dark:text-mh-hunter-green font-semibold">Our Mission</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-black dark:text-dark-text leading-tight">
              Building <span className="text-mh-hunter-green dark:text-mh-hunter-green bg-gradient-to-r from-mh-hunter-green to-mh-leather-tan bg-clip-text text-transparent">Hope</span> for Those Who Served
            </h2>
            <div className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto">
              <p className="mb-6">
                At MH Construction, we believe our nation's veterans deserve more than gratitude—they deserve action. 
                Our Wounded Warrior initiative is a comprehensive program designed to provide tangible support to 
                veterans and their families in their time of greatest need.
              </p>
              <p className="mb-6">
                Through free home modifications, accessibility improvements, and emergency repairs, we're ensuring 
                that the brave men and women who sacrificed for our freedom have safe, comfortable homes to call their own.
              </p>
              <div className="bg-gradient-to-br from-mh-hunter-green/5 via-white to-mh-leather-tan/5 dark:from-mh-hunter-green/5 dark:via-dark-surface dark:to-mh-leather-tan/5 p-8 rounded-2xl border border-mh-hunter-green/20 dark:border-mh-hunter-green/20 mt-8 transition-all duration-500 hover:from-mh-hunter-green/10 hover:to-mh-leather-tan/10 dark:hover:from-mh-hunter-green/10 dark:hover:to-mh-leather-tan/10 shadow-lg hover:shadow-xl transform hover:-translate-y-2 backdrop-blur-sm">
                <p className="text-2xl font-semibold text-mh-hunter-green dark:text-mh-hunter-green italic bg-gradient-to-r from-mh-hunter-green to-mh-leather-tan bg-clip-text text-transparent">
                  "Service doesn't end when the uniform comes off. It evolves into a lifetime commitment to lifting each other up."
                </p>
                <p className="text-lg text-gray-500 dark:text-gray-400 mt-4">— MH Construction Wounded Warrior Initiative</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-gradient-to-br from-mh-leather-tan/10 via-white to-mh-hunter-green/5 dark:from-dark-surface-2 dark:via-dark-surface dark:to-mh-hunter-green/10 transition-colors duration-300">
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(189,146,100,0.05),transparent_50%)] dark:bg-[radial-gradient(circle_at_bottom_left,rgba(189,146,100,0.03),transparent_50%)]"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-mh-hunter-green/5 to-transparent rounded-full blur-3xl"></div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-gradient-to-r from-mh-leather-tan/10 to-mh-hunter-green/10 px-6 py-2 rounded-full mb-6 border border-mh-leather-tan/20 dark:border-mh-leather-tan/20">
              <span className="text-mh-leather-tan dark:text-mh-leather-tan font-semibold">Our Impact</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-black dark:text-dark-text mb-4">Making a Difference</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">See the tangible impact we're making in our veterans' lives through our construction initiatives</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center relative group">
              <div className="bg-gradient-to-br from-white via-mh-leather-tan/5 to-mh-leather-tan/10 dark:from-dark-surface-2 dark:via-dark-surface dark:to-mh-leather-tan/5 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-mh-leather-tan/20 dark:border-dark-border transform hover:scale-105 hover:-translate-y-3 backdrop-blur-sm min-h-[280px] flex flex-col justify-center">
                <div className="absolute inset-0 bg-gradient-to-br from-mh-leather-tan/5 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-mh-leather-tan to-mh-hunter-green bg-clip-text text-transparent mb-4 transition-all duration-300 group-hover:scale-110">3</div>
                  <div className="text-xl font-bold text-black dark:text-dark-text mb-2">Homes Built</div>
                  <div className="text-base text-gray-600 dark:text-dark-text-secondary">Adaptive homes completed for wounded veterans</div>
                  <div className="w-16 h-1 bg-gradient-to-r from-mh-leather-tan to-mh-hunter-green mx-auto mt-4 rounded-full transition-all duration-300 group-hover:w-24"></div>
                </div>
              </div>
            </div>
            
            <div className="text-center relative group">
              <div className="bg-gradient-to-br from-white via-mh-hunter-green/5 to-mh-hunter-green/10 dark:from-dark-surface-2 dark:via-dark-surface dark:to-mh-hunter-green/5 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-mh-hunter-green/20 dark:border-dark-border transform hover:scale-105 hover:-translate-y-3 backdrop-blur-sm min-h-[280px] flex flex-col justify-center">
                <div className="absolute inset-0 bg-gradient-to-br from-mh-hunter-green/5 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-mh-hunter-green to-mh-leather-tan bg-clip-text text-transparent mb-4 transition-all duration-300 group-hover:scale-110">2</div>
                  <div className="text-xl font-bold text-black dark:text-mh-leather-tan mb-2">In Progress</div>
                  <div className="text-base text-gray-600 dark:text-dark-text-secondary">Homes currently under construction</div>
                  <div className="w-16 h-1 bg-gradient-to-r from-mh-hunter-green to-mh-leather-tan mx-auto mt-4 rounded-full transition-all duration-300 group-hover:w-24"></div>
                </div>
              </div>
            </div>
            
            <div className="text-center relative group">
              <div className="bg-gradient-to-br from-white via-mh-hunter-green/5 to-mh-leather-tan/5 dark:from-dark-surface-2 dark:via-dark-surface dark:to-mh-leather-tan/5 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-mh-hunter-green/20 dark:border-dark-border transform hover:scale-105 hover:-translate-y-3 backdrop-blur-sm min-h-[280px] flex flex-col justify-center">
                <div className="absolute inset-0 bg-gradient-to-br from-mh-leather-tan/5 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-mh-hunter-green to-mh-leather-tan bg-clip-text text-transparent mb-4 transition-all duration-300 group-hover:scale-110">50+</div>
                  <div className="text-xl font-bold text-black dark:text-mh-leather-tan mb-2">Volunteers</div>
                  <div className="text-base text-gray-600 dark:text-dark-text-secondary">Community members helping build</div>
                  <div className="w-16 h-1 bg-gradient-to-r from-mh-hunter-green to-mh-leather-tan mx-auto mt-4 rounded-full transition-all duration-300 group-hover:w-24"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How You Can Help */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-gradient-to-br from-white via-gray-50 to-mh-hunter-green/5 dark:from-dark-surface dark:via-dark-surface-2 dark:to-mh-hunter-green/10">
        {/* Decorative Elements */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(56,104,81,0.03),transparent_70%)] dark:bg-[radial-gradient(circle_at_center,rgba(56,104,81,0.05),transparent_70%)]"></div>
        <div className="absolute top-10 left-10 w-32 h-32 bg-mh-leather-tan/10 rounded-full blur-2xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-mh-hunter-green/10 rounded-full blur-2xl"></div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-gradient-to-r from-mh-hunter-green/10 to-mh-leather-tan/10 px-6 py-2 rounded-full mb-6 border border-mh-hunter-green/20 dark:border-mh-hunter-green/20">
              <span className="text-mh-hunter-green dark:text-mh-hunter-green font-semibold">Get Involved</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">How You Can Help</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">Join our mission to support wounded warriors through various meaningful ways to contribute</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Volunteer Card */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-mh-leather-tan/20 to-mh-hunter-green/10 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-110"></div>
              <div className="relative bg-gradient-to-br from-white via-mh-leather-tan/5 to-white dark:from-dark-surface-2 dark:via-mh-leather-tan/5 dark:to-dark-surface-2 border-2 border-mh-leather-tan/30 dark:border-mh-leather-tan/50 rounded-xl p-8 text-center hover:border-mh-leather-tan transition-all duration-500 shadow-lg hover:shadow-2xl transform hover:-translate-y-3 backdrop-blur-sm min-h-[380px] flex flex-col justify-between">
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-mh-leather-tan/20 to-mh-leather-tan/10 dark:from-mh-leather-tan/20 dark:to-mh-leather-tan/10 rounded-full flex items-center justify-center mx-auto mb-6 transition-all duration-500 group-hover:rotate-12 group-hover:scale-110 shadow-lg group-hover:shadow-xl border border-mh-leather-tan/20">
                    <svg className="w-8 h-8 text-mh-leather-tan transition-transform duration-300 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-black dark:text-mh-leather-tan mb-4">Volunteer</h3>
                  <p className="text-base text-gray-600 dark:text-dark-text mb-6 leading-relaxed">Join our construction crews, help with logistics, or provide specialized skills</p>
                </div>
                <button className="bg-gradient-to-r from-mh-leather-tan to-mh-hunter-green text-white px-8 py-3 rounded-lg font-bold hover:from-mh-hunter-green hover:to-mh-leather-tan transition-all duration-300 w-full transform hover:scale-105 shadow-lg hover:shadow-xl">
                  Sign Up to Volunteer
                </button>
              </div>
            </div>

            {/* Donate Card */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-mh-hunter-green/20 to-mh-leather-tan/10 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-110"></div>
              <div className="relative bg-gradient-to-br from-white via-mh-hunter-green/5 to-white dark:from-dark-surface-2 dark:via-mh-hunter-green/5 dark:to-dark-surface-2 border-2 border-mh-hunter-green/30 dark:border-mh-hunter-green/50 rounded-xl p-8 text-center hover:border-mh-hunter-green transition-all duration-500 shadow-lg hover:shadow-2xl transform hover:-translate-y-3 backdrop-blur-sm min-h-[380px] flex flex-col justify-between">
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-mh-hunter-green/20 to-mh-hunter-green/10 dark:from-mh-hunter-green/20 dark:to-mh-hunter-green/10 rounded-full flex items-center justify-center mx-auto mb-6 transition-all duration-500 group-hover:rotate-12 group-hover:scale-110 shadow-lg group-hover:shadow-xl border border-mh-hunter-green/20">
                    <svg className="w-8 h-8 text-mh-hunter-green transition-transform duration-300 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"/>
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-black dark:text-mh-leather-tan mb-4">Donate</h3>
                  <p className="text-base text-gray-600 dark:text-dark-text mb-6 leading-relaxed">Help fund materials, adaptive equipment, and specialized construction needs</p>
                </div>
                <button className="bg-gradient-to-r from-mh-hunter-green to-mh-leather-tan text-white px-8 py-3 rounded-lg font-bold hover:from-mh-leather-tan hover:to-mh-hunter-green transition-all duration-300 w-full transform hover:scale-105 shadow-lg hover:shadow-xl">
                  Make a Donation
                </button>
              </div>
            </div>

            {/* Partner Card */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-mh-hunter-green/20 to-mh-leather-tan/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-110"></div>
              <div className="relative bg-gradient-to-br from-white via-mh-hunter-green/5 to-mh-leather-tan/5 dark:from-dark-surface-2 dark:via-mh-hunter-green/5 dark:to-mh-leather-tan/5 border-2 border-mh-hunter-green/30 dark:border-mh-hunter-green/50 rounded-xl p-8 text-center hover:border-mh-hunter-green transition-all duration-500 shadow-lg hover:shadow-2xl transform hover:-translate-y-3 backdrop-blur-sm min-h-[380px] flex flex-col justify-between">
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-mh-hunter-green/20 to-mh-leather-tan/10 dark:from-mh-hunter-green/20 dark:to-mh-leather-tan/10 rounded-full flex items-center justify-center mx-auto mb-6 transition-all duration-500 group-hover:rotate-12 group-hover:scale-110 shadow-lg group-hover:shadow-xl border border-mh-hunter-green/20">
                    <svg className="w-8 h-8 text-mh-hunter-green transition-transform duration-300 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2V8a2 2 0 012-2V6"/>
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-black dark:text-mh-leather-tan mb-4">Business Partnership</h3>
                  <p className="text-base text-gray-600 dark:text-dark-text mb-6 leading-relaxed">Partner with us through materials donation, services, or corporate sponsorship</p>
                </div>
                <button className="bg-gradient-to-r from-mh-hunter-green to-mh-leather-tan text-white px-8 py-3 rounded-lg font-bold hover:from-mh-leather-tan hover:to-mh-hunter-green transition-all duration-300 w-full transform hover:scale-105 shadow-lg hover:shadow-xl">
                  Become a Partner
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Current Project Spotlight */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-mh-leather-tan/5 dark:from-dark-surface dark:via-dark-surface-2 dark:to-mh-leather-tan/10 transition-colors duration-300">
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(189,146,100,0.05),transparent_50%)] dark:bg-[radial-gradient(circle_at_top_left,rgba(189,146,100,0.03),transparent_50%)]"></div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-mh-hunter-green/10 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-mh-leather-tan/10 to-transparent rounded-full blur-2xl"></div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-gradient-to-r from-mh-leather-tan/10 to-mh-hunter-green/10 px-6 py-2 rounded-full mb-6 border border-mh-leather-tan/20 dark:border-mh-leather-tan/20">
              <span className="text-mh-leather-tan dark:text-mh-leather-tan font-semibold">In Progress</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-black dark:text-mh-leather-tan mb-4">Current Project</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">Follow the progress of our latest wounded warrior home construction project</p>
          </div>
          
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-mh-leather-tan/10 to-mh-hunter-green/10 rounded-xl blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-105"></div>
            <div className="relative bg-gradient-to-br from-white via-gray-50 to-mh-leather-tan/5 dark:from-dark-surface-2 dark:via-dark-surface dark:to-mh-leather-tan/5 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 dark:border-dark-border backdrop-blur-sm">
              <div className="md:flex">
                <div className="md:w-1/2 relative overflow-hidden">
                  <div className="aspect-video bg-gradient-to-r from-black via-mh-hunter-green to-mh-leather-tan flex items-center justify-center transition-all duration-500 hover:from-mh-hunter-green hover:via-mh-leather-tan hover:to-black group relative">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="text-center text-white relative z-10">
                      <div className="relative">
                        <svg className="w-16 h-16 mx-auto mb-4 opacity-75 transition-all duration-500 group-hover:scale-110 group-hover:opacity-100" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/>
                          <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd"/>
                        </svg>
                        <div className="absolute inset-0 bg-white/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      </div>
                      <p className="text-lg font-semibold transition-all duration-300 group-hover:scale-105">Project Progress Photos</p>
                      <p className="text-sm text-gray-200 mt-2 opacity-75 group-hover:opacity-100 transition-opacity duration-300">Click to view gallery</p>
                    </div>
                  </div>
                </div>
                <div className="md:w-1/2 p-8 relative">
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-3xl font-bold bg-gradient-to-r from-mh-hunter-green to-mh-leather-tan bg-clip-text text-transparent mb-4">Home for Sergeant Martinez</h3>
                      <p className="text-gray-600 dark:text-dark-text leading-relaxed">
                        Currently building an adaptive home for Sergeant Maria Martinez, who was injured in Afghanistan. 
                        The home features wheelchair accessibility, adaptive kitchen design, and smart home technology 
                        for enhanced independence.
                      </p>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="bg-gradient-to-r from-mh-leather-tan/5 to-transparent p-4 rounded-lg border border-mh-leather-tan/20">
                        <div className="flex justify-between text-sm font-bold text-black dark:text-mh-leather-tan mb-2">
                          <span>Construction Progress</span>
                          <span>75%</span>
                        </div>
                        <div className="w-full bg-gray-200 dark:bg-dark-surface-3 rounded-full h-3 relative overflow-hidden">
                          <div className="absolute inset-0 bg-gradient-to-r from-gray-200 to-gray-300 dark:from-dark-surface-3 dark:to-dark-surface-2"></div>
                          <div className="bg-gradient-to-r from-mh-leather-tan to-mh-hunter-green h-3 rounded-full transition-all duration-1000 relative z-10 shadow-lg" style={{width: '75%'}}></div>
                        </div>
                      </div>
                      
                      <div className="bg-gradient-to-r from-mh-hunter-green/5 to-transparent p-4 rounded-lg border border-mh-hunter-green/20">
                        <div className="flex justify-between text-sm font-bold text-black dark:text-mh-leather-tan mb-2">
                          <span>Funding Goal</span>
                          <span>$185K / $220K</span>
                        </div>
                        <div className="w-full bg-gray-200 dark:bg-dark-surface-3 rounded-full h-3 relative overflow-hidden">
                          <div className="absolute inset-0 bg-gradient-to-r from-gray-200 to-gray-300 dark:from-dark-surface-3 dark:to-dark-surface-2"></div>
                          <div className="bg-gradient-to-r from-mh-hunter-green to-mh-leather-tan h-3 rounded-full transition-all duration-1000 relative z-10 shadow-lg" style={{width: '84%'}}></div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-gradient-to-r from-mh-hunter-green/5 to-mh-leather-tan/5 p-4 rounded-lg border border-mh-hunter-green/20">
                      <p className="text-sm text-gray-600 dark:text-dark-text-secondary font-semibold flex items-center">
                        <svg className="w-4 h-4 mr-2 text-mh-hunter-green" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"/>
                        </svg>
                        Estimated completion: March 2024
                      </p>
                    </div>
                    
                    <button className="bg-gradient-to-r from-mh-leather-tan to-mh-hunter-green text-white px-8 py-4 rounded-lg font-bold hover:from-mh-hunter-green hover:to-mh-leather-tan transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl w-full md:w-auto">
                      Support This Project
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}