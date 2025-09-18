'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function WoundedWarriorPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white pt-20">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-16 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Building Homes for Our
              <span className="text-blue-600 block">Wounded Warriors</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-8">
              Revolutionary General Contracting is proud to partner with veterans organizations 
              to build adaptive, accessible homes for our wounded heroes who sacrificed so much for our freedom.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors">
                Get Involved
              </button>
              <button className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-50 transition-colors">
                Learn More
              </button>
            </div>
          </div>
          
          {/* Hero Image/Video Placeholder */}
          <div className="relative rounded-xl overflow-hidden shadow-2xl">
            <div className="aspect-video bg-gradient-to-r from-blue-600 to-blue-800 flex items-center justify-center">
              <div className="text-center text-white">
                <svg className="w-24 h-24 mx-auto mb-4 opacity-75" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/>
                  <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd"/>
                </svg>
                <p className="text-lg">Hero Video: Building Hope, Building Homes</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Our Mission</h2>
          <div className="text-lg text-gray-600 space-y-6">
            <p>
              Our wounded warriors returned home having given everything for our country. Now it's our turn to give back. 
              Through this initiative, we're building specially designed, adaptive homes that provide comfort, accessibility, 
              and independence for veterans who were injured in service.
            </p>
            <p>
              Every home we build is more than just construction—it's a symbol of gratitude, a foundation for healing, 
              and a promise that we will never forget the sacrifices made for our freedom.
            </p>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-blue-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">Making a Difference</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">3</div>
              <div className="text-lg font-semibold text-gray-900 mb-2">Homes Built</div>
              <div className="text-gray-600">Adaptive homes completed for wounded veterans</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">2</div>
              <div className="text-lg font-semibold text-gray-900 mb-2">In Progress</div>
              <div className="text-gray-600">Homes currently under construction</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">50+</div>
              <div className="text-lg font-semibold text-gray-900 mb-2">Volunteers</div>
              <div className="text-gray-600">Community members helping build</div>
            </div>
          </div>
        </div>
      </section>

      {/* How You Can Help */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">How You Can Help</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Volunteer Card */}
            <div className="border-2 border-blue-200 rounded-xl p-8 text-center hover:border-blue-400 transition-colors bg-white shadow-lg">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Volunteer</h3>
              <p className="text-gray-600 mb-6">Join our construction crews, help with logistics, or provide specialized skills</p>
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors w-full">
                Sign Up to Volunteer
              </button>
            </div>

            {/* Donate Card */}
            <div className="border-2 border-green-200 rounded-xl p-8 text-center hover:border-green-400 transition-colors bg-white shadow-lg">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Donate</h3>
              <p className="text-gray-600 mb-6">Help fund materials, adaptive equipment, and specialized construction needs</p>
              <button className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors w-full">
                Make a Donation
              </button>
            </div>

            {/* Partner Card */}
            <div className="border-2 border-orange-200 rounded-xl p-8 text-center hover:border-orange-400 transition-colors bg-white shadow-lg">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2V8a2 2 0 012-2V6"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Business Partnership</h3>
              <p className="text-gray-600 mb-6">Partner with us through materials donation, services, or corporate sponsorship</p>
              <button className="bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors w-full">
                Become a Partner
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Current Project Spotlight */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">Current Project</h2>
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/2">
                <div className="aspect-video bg-gradient-to-r from-gray-400 to-gray-600 flex items-center justify-center">
                  <div className="text-center text-white">
                    <svg className="w-16 h-16 mx-auto mb-4 opacity-75" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/>
                      <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd"/>
                    </svg>
                    <p>Project Progress Photos</p>
                  </div>
                </div>
              </div>
              <div className="md:w-1/2 p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Home for Sergeant Martinez</h3>
                <p className="text-gray-600 mb-6">
                  Currently building an adaptive home for Sergeant Maria Martinez, who was injured in Afghanistan. 
                  The home features wheelchair accessibility, adaptive kitchen design, and smart home technology 
                  for enhanced independence.
                </p>
                <div className="space-y-3 mb-6">
                  <div>
                    <div className="flex justify-between text-sm font-medium text-gray-900 mb-1">
                      <span>Construction Progress</span>
                      <span>75%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-blue-600 h-2 rounded-full" style={{width: '75%'}}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm font-medium text-gray-900 mb-1">
                      <span>Funding Goal</span>
                      <span>$185K / $220K</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-green-600 h-2 rounded-full" style={{width: '84%'}}></div>
                    </div>
                  </div>
                </div>
                <p className="text-sm text-gray-500 mb-4">Estimated completion: March 2024</p>
                <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
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