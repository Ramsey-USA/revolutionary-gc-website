'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function WoundedWarriorPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-dark-surface pt-20 transition-colors duration-300">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-army-black via-mh-hunter-green to-army-green dark:from-dark-surface dark:via-dark-surface-2 dark:to-dark-surface-3 overflow-hidden pt-24">
        {/* Animated Stars Background */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 text-army-gold text-2xl animate-pulse">★</div>
          <div className="absolute top-1/3 right-1/3 text-white/30 text-xl animate-pulse delay-300">★</div>
          <div className="absolute bottom-1/4 right-1/4 text-army-gold text-3xl animate-pulse delay-500">★</div>
          <div className="absolute top-1/2 left-1/6 text-white/20 text-2xl animate-pulse delay-700">★</div>
          <div className="absolute bottom-1/3 left-1/3 text-army-gold text-xl animate-pulse delay-1000">★</div>
          <div className="absolute top-1/6 right-1/6 text-white/40 text-2xl animate-pulse delay-200">★</div>
          <div className="absolute bottom-1/6 right-1/2 text-army-gold text-2xl animate-pulse delay-800">★</div>
          <div className="absolute top-3/4 left-1/8 text-white/25 text-xl animate-pulse delay-600">★</div>
          <div className="absolute top-1/8 left-1/2 text-army-gold text-xl animate-pulse delay-400">★</div>
          <div className="absolute bottom-1/8 left-3/4 text-white/35 text-3xl animate-pulse delay-900">★</div>
        </div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-army-black/50 to-transparent"></div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white dark:text-dark-text mb-6 leading-tight">
              Building Homes for Our
              <span className="text-army-gold dark:text-army-gold block mt-4">Wounded Warriors</span>
            </h1>
            <p className="text-xl md:text-2xl lg:text-3xl text-gray-200 dark:text-dark-text-secondary max-w-4xl mx-auto mb-12 leading-relaxed">
              Revolutionary General Contracting is proud to partner with veterans organizations 
              to build adaptive, accessible homes for our wounded heroes who sacrificed everything for our freedom.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
              <button className="bg-army-gold dark:bg-army-gold text-army-black dark:text-army-black px-10 py-4 rounded-lg text-lg font-bold hover:bg-yellow-500 dark:hover:bg-yellow-500 transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 shadow-lg hover:shadow-xl">
                Get Involved Today
              </button>
              <button className="border-2 border-army-gold dark:border-army-gold text-army-gold dark:text-army-gold px-10 py-4 rounded-lg text-lg font-bold hover:bg-army-gold dark:hover:bg-army-gold hover:text-army-black dark:hover:text-army-black transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 shadow-lg">
                Learn More
              </button>
            </div>

            {/* Mission Badge */}
            <div className="inline-flex items-center bg-mh-hunter-green/80 dark:bg-mh-hunter-green/80 backdrop-blur-sm px-6 py-3 rounded-full transition-all duration-300 hover:bg-mh-hunter-green dark:hover:bg-mh-hunter-green hover:scale-105">
              <div className="w-8 h-8 bg-army-gold dark:bg-army-gold rounded-full flex items-center justify-center mr-3 transition-transform duration-300 hover:rotate-12">
                <svg className="w-5 h-5 text-army-black dark:text-army-black" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                </svg>
              </div>
              <span className="text-white dark:text-white font-semibold">Honor • Service • Sacrifice • Gratitude</span>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-army-gold animate-bounce">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3"/>
          </svg>
        </div>
      </section>

      {/* Mission Statement */}
            {/* Mission Statement */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900 border-l-8 border-mh-hunter-green dark:border-mh-hunter-green">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center bg-mh-hunter-green/10 dark:bg-mh-hunter-green/10 px-6 py-2 rounded-full mb-8 transition-all duration-300 hover:bg-mh-hunter-green/20 dark:hover:bg-mh-hunter-green/20">
              <svg className="w-5 h-5 text-mh-hunter-green dark:text-mh-hunter-green mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
              <span className="text-mh-hunter-green dark:text-mh-hunter-green font-semibold">Our Mission</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-8 text-charcoal dark:text-cream leading-tight">
              Building <span className="text-mh-hunter-green dark:text-mh-hunter-green">Hope</span> for Those Who Served
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
              <div className="bg-mh-hunter-green/5 dark:bg-mh-hunter-green/5 p-8 rounded-2xl border border-mh-hunter-green/20 dark:border-mh-hunter-green/20 mt-8 transition-all duration-300 hover:bg-mh-hunter-green/10 dark:hover:bg-mh-hunter-green/10">
                <p className="text-2xl font-semibold text-mh-hunter-green dark:text-mh-hunter-green italic">
                  "Service doesn't end when the uniform comes off. It evolves into a lifetime commitment to lifting each other up."
                </p>
                <p className="text-lg text-gray-500 dark:text-gray-400 mt-4">— MH Construction Wounded Warrior Initiative</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-mh-leather-tan/10 dark:bg-dark-surface-2 transition-colors duration-300">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-army-black dark:text-dark-text mb-16">Making a Difference</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center bg-white dark:bg-dark-surface-2 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 border border-transparent dark:border-dark-border transform hover:scale-105 hover:-translate-y-2 group">
              <div className="text-5xl md:text-6xl font-bold text-army-gold dark:text-army-gold mb-4 transition-all duration-300 group-hover:scale-110">3</div>
              <div className="text-xl font-bold text-army-black dark:text-dark-text mb-2">Homes Built</div>
              <div className="text-field-gray dark:text-dark-text-secondary">Adaptive homes completed for wounded veterans</div>
            </div>
            <div className="text-center bg-white dark:bg-dark-surface-2 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 border border-gray-100 dark:border-dark-border transform hover:scale-105 hover:-translate-y-2 group">
              <div className="text-5xl md:text-6xl font-bold text-mh-hunter-green dark:text-army-gold mb-4 transition-all duration-300 group-hover:scale-110">2</div>
              <div className="text-xl font-bold text-army-black dark:text-army-gold mb-2">In Progress</div>
              <div className="text-field-gray dark:text-dark-text-secondary">Homes currently under construction</div>
            </div>
            <div className="text-center bg-white dark:bg-dark-surface-2 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 border border-gray-100 dark:border-dark-border transform hover:scale-105 hover:-translate-y-2 group">
              <div className="text-5xl md:text-6xl font-bold text-army-green dark:text-army-gold mb-4 transition-all duration-300 group-hover:scale-110">50+</div>
              <div className="text-xl font-bold text-army-black dark:text-army-gold mb-2">Volunteers</div>
              <div className="text-field-gray dark:text-dark-text-secondary">Community members helping build</div>
            </div>
          </div>
        </div>
      </section>

      {/* How You Can Help */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-army-black mb-16">How You Can Help</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Volunteer Card */}
            <div className="border-2 border-army-gold/30 dark:border-army-gold/50 rounded-xl p-8 text-center hover:border-army-gold transition-all duration-500 bg-white dark:bg-dark-surface-2 shadow-lg hover:shadow-xl transform hover:-translate-y-2 group">
              <div className="w-16 h-16 bg-army-gold/10 dark:bg-army-gold/20 rounded-full flex items-center justify-center mx-auto mb-6 transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110">
                <svg className="w-8 h-8 text-army-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-army-black dark:text-army-gold mb-4">Volunteer</h3>
              <p className="text-field-gray dark:text-dark-text mb-6 leading-relaxed">Join our construction crews, help with logistics, or provide specialized skills</p>
              <button className="bg-army-gold text-army-black px-8 py-3 rounded-lg font-bold hover:bg-yellow-500 transition-all duration-300 w-full transform hover:scale-105">
                Sign Up to Volunteer
              </button>
            </div>

            {/* Donate Card */}
            <div className="border-2 border-mh-hunter-green/30 dark:border-mh-hunter-green/50 rounded-xl p-8 text-center hover:border-mh-hunter-green transition-all duration-500 bg-white dark:bg-dark-surface-2 shadow-lg hover:shadow-xl transform hover:-translate-y-2 group">
              <div className="w-16 h-16 bg-mh-hunter-green/10 dark:bg-mh-hunter-green/20 rounded-full flex items-center justify-center mx-auto mb-6 transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110">
                <svg className="w-8 h-8 text-mh-hunter-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-army-black dark:text-army-gold mb-4">Donate</h3>
              <p className="text-field-gray dark:text-dark-text mb-6 leading-relaxed">Help fund materials, adaptive equipment, and specialized construction needs</p>
              <button className="bg-mh-hunter-green text-white px-8 py-3 rounded-lg font-bold hover:bg-green-700 transition-all duration-300 w-full transform hover:scale-105">
                Make a Donation
              </button>
            </div>

            {/* Partner Card */}
            <div className="border-2 border-army-green/30 dark:border-army-green/50 rounded-xl p-8 text-center hover:border-army-green transition-all duration-500 bg-white dark:bg-dark-surface-2 shadow-lg hover:shadow-xl transform hover:-translate-y-2 group">
              <div className="w-16 h-16 bg-army-green/10 dark:bg-army-green/20 rounded-full flex items-center justify-center mx-auto mb-6 transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110">
                <svg className="w-8 h-8 text-army-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2V8a2 2 0 012-2V6"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-army-black dark:text-army-gold mb-4">Business Partnership</h3>
              <p className="text-field-gray dark:text-dark-text mb-6 leading-relaxed">Partner with us through materials donation, services, or corporate sponsorship</p>
              <button className="bg-army-green text-white px-8 py-3 rounded-lg font-bold hover:bg-green-700 transition-all duration-300 w-full transform hover:scale-105">
                Become a Partner
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Current Project Spotlight */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-dark-surface transition-colors duration-300">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-army-black dark:text-army-gold mb-16">Current Project</h2>
          <div className="bg-white dark:bg-dark-surface-2 rounded-xl shadow-xl overflow-hidden border border-gray-100 dark:border-dark-border">
            <div className="md:flex">
              <div className="md:w-1/2">
                <div className="aspect-video bg-gradient-to-r from-army-black to-mh-hunter-green flex items-center justify-center transition-all duration-500 hover:from-mh-hunter-green hover:to-army-black">
                  <div className="text-center text-white">
                    <svg className="w-16 h-16 mx-auto mb-4 opacity-75 transition-transform duration-300 hover:scale-110" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/>
                      <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd"/>
                    </svg>
                    <p className="text-lg">Project Progress Photos</p>
                  </div>
                </div>
              </div>
              <div className="md:w-1/2 p-8">
                <h3 className="text-3xl font-bold text-army-black dark:text-army-gold mb-4">Home for Sergeant Martinez</h3>
                <p className="text-field-gray dark:text-dark-text mb-6 leading-relaxed">
                  Currently building an adaptive home for Sergeant Maria Martinez, who was injured in Afghanistan. 
                  The home features wheelchair accessibility, adaptive kitchen design, and smart home technology 
                  for enhanced independence.
                </p>
                <div className="space-y-4 mb-8">
                  <div>
                    <div className="flex justify-between text-sm font-bold text-army-black dark:text-army-gold mb-2">
                      <span>Construction Progress</span>
                      <span>75%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-dark-surface-3 rounded-full h-3">
                      <div className="bg-army-gold h-3 rounded-full transition-all duration-500" style={{width: '75%'}}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm font-bold text-army-black dark:text-army-gold mb-2">
                      <span>Funding Goal</span>
                      <span>$185K / $220K</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-dark-surface-3 rounded-full h-3">
                      <div className="bg-mh-hunter-green h-3 rounded-full transition-all duration-500" style={{width: '84%'}}></div>
                    </div>
                  </div>
                </div>
                <p className="text-sm text-field-gray dark:text-dark-text-secondary mb-6 font-semibold">Estimated completion: March 2024</p>
                <button className="bg-army-gold text-army-black px-8 py-4 rounded-lg font-bold hover:bg-yellow-500 transition-all duration-300 transform hover:scale-105">
                  Support This Project
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}