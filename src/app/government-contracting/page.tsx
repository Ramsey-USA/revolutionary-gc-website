import type { Metadata } from 'next'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import WhyChooseSection from '../../components/WhyChooseSection'

export const metadata: Metadata = {
  title: 'Government Contracting | MH Construction',
  description: 'MH Construction specializes in federal government contracts with security clearances, CAGE codes, and extensive experience in military, federal, and municipal construction projects.',
  keywords: 'government contracting, federal contracts, military construction, CAGE code, security clearance, GSA schedule, government projects, federal compliance',
}

export default function GovernmentContractingPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-dark-surface transition-colors duration-300">
      <Header />
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-army-black via-mh-hunter-green to-army-black overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Government
                <span className="block text-army-gold">Contracting</span>
              </h1>
              <p className="text-xl lg:text-2xl mb-8 text-gray-200 leading-relaxed">
                Serving federal, state, and local governments with veteran-led expertise, 
                security clearances, and proven compliance across critical infrastructure projects.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <a 
                  href="#capabilities" 
                  className="group bg-army-gold hover:bg-army-gold/90 text-army-black px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 text-center"
                >
                  Our Capabilities
                  <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300 inline-block">→</span>
                </a>
                <a 
                  href="#portfolio" 
                  className="group border border-army-gold text-army-gold hover:bg-army-gold hover:text-army-black px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 text-center"
                >
                  View Projects
                  <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300 inline-block">→</span>
                </a>
              </div>
            </div>
            
            <div className="relative">
              {/* Government Stats Cards */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 transform hover:scale-105 transition-all duration-300">
                  <div className="text-3xl font-bold text-army-gold mb-2">$50M+</div>
                  <div className="text-sm text-gray-200">Federal Contracts</div>
                  <div className="text-xs text-gray-300 mt-1">Completed Value</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 transform hover:scale-105 transition-all duration-300">
                  <div className="text-3xl font-bold text-army-gold mb-2">15+</div>
                  <div className="text-sm text-gray-200">Years Experience</div>
                  <div className="text-xs text-gray-300 mt-1">Government Sector</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 transform hover:scale-105 transition-all duration-300">
                  <div className="text-3xl font-bold text-army-gold mb-2">Secret</div>
                  <div className="text-sm text-gray-200">Security Clearance</div>
                  <div className="text-xs text-gray-300 mt-1">Key Personnel</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 transform hover:scale-105 transition-all duration-300">
                  <div className="text-3xl font-bold text-army-gold mb-2">100%</div>
                  <div className="text-sm text-gray-200">Compliance Rate</div>
                  <div className="text-xs text-gray-300 mt-1">Federal Standards</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Government Capabilities Section */}
      <section id="capabilities" className="py-20 bg-gray-50 dark:bg-dark-surface-2 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-army-black dark:text-dark-text mb-4">
              Government Contracting Capabilities
            </h2>
            <p className="text-xl text-gray-600 dark:text-dark-text-secondary max-w-3xl mx-auto">
              Our veteran-led team brings military precision and federal compliance expertise 
              to every government construction project, from small facility upgrades to major infrastructure developments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Federal Contracts */}
            <div className="group bg-white dark:bg-dark-surface rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:rotate-1 border border-gray-100 dark:border-dark-border">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-army-gold rounded-full flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-army-black dark:text-dark-text mb-4 group-hover:text-blue-600 transition-colors duration-300">
                Federal Contracting
              </h3>
              <p className="text-gray-600 dark:text-dark-text-secondary mb-4">
                Direct contracts with federal agencies including DoD, GSA, VA, and other federal departments for critical infrastructure projects.
              </p>
              <ul className="text-sm text-gray-500 dark:text-dark-text-secondary space-y-2">
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Prime & Subcontractor Experience
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  GSA Schedule Holder
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  CAGE Code: 7XYZ9
                </li>
              </ul>
            </div>

            {/* Military Projects */}
            <div className="group bg-white dark:bg-dark-surface rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:-rotate-1 border border-gray-100 dark:border-dark-border">
              <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-mh-hunter-green rounded-full flex items-center justify-center mb-6 group-hover:scale-110 group-hover:-rotate-12 transition-all duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-army-black dark:text-dark-text mb-4 group-hover:text-green-600 transition-colors duration-300">
                Military Construction
              </h3>
              <p className="text-gray-600 dark:text-dark-text-secondary mb-4">
                Specialized experience in military base construction, renovation, and security infrastructure for all branches of the armed forces.
              </p>
              <ul className="text-sm text-gray-500 dark:text-dark-text-secondary space-y-2">
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-green-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Security Clearance Personnel
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-green-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  MILCON Experience
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-green-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Base Access Protocols
                </li>
              </ul>
            </div>

            {/* Municipal Projects */}
            <div className="group bg-white dark:bg-dark-surface rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:rotate-1 border border-gray-100 dark:border-dark-border">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-army-gold rounded-full flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-army-black dark:text-dark-text mb-4 group-hover:text-purple-600 transition-colors duration-300">
                State & Municipal
              </h3>
              <p className="text-gray-600 dark:text-dark-text-secondary mb-4">
                Comprehensive services for state agencies, counties, cities, and local government entities across the Pacific Northwest.
              </p>
              <ul className="text-sm text-gray-500 dark:text-dark-text-secondary space-y-2">
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-purple-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Public Works Projects
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-purple-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Prevailing Wage Compliance
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-purple-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Local Hiring Programs
                </li>
              </ul>
            </div>

            {/* Security & Compliance */}
            <div className="group bg-white dark:bg-dark-surface rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:-rotate-1 border border-gray-100 dark:border-dark-border">
              <div className="w-16 h-16 bg-gradient-to-r from-red-600 to-mh-hunter-green rounded-full flex items-center justify-center mb-6 group-hover:scale-110 group-hover:-rotate-12 transition-all duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-army-black dark:text-dark-text mb-4 group-hover:text-red-600 transition-colors duration-300">
                Security & Compliance
              </h3>
              <p className="text-gray-600 dark:text-dark-text-secondary mb-4">
                Full compliance with federal security protocols, clearance requirements, and specialized facility construction standards.
              </p>
              <ul className="text-sm text-gray-500 dark:text-dark-text-secondary space-y-2">
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-red-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Secret Clearance Personnel
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-red-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  ITAR Compliance
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-red-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  SCIF Construction
                </li>
              </ul>
            </div>

            {/* Emergency Services */}
            <div className="group bg-white dark:bg-dark-surface rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:rotate-1 border border-gray-100 dark:border-dark-border">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-600 to-army-gold rounded-full flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.464 0L4.34 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-army-black dark:text-dark-text mb-4 group-hover:text-orange-600 transition-colors duration-300">
                Emergency Services
              </h3>
              <p className="text-gray-600 dark:text-dark-text-secondary mb-4">
                Rapid response construction and repair services for government facilities during emergencies and disaster recovery operations.
              </p>
              <ul className="text-sm text-gray-500 dark:text-dark-text-secondary space-y-2">
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-orange-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  24/7 Emergency Response
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-orange-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Disaster Recovery
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-orange-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Critical Infrastructure
                </li>
              </ul>
            </div>

            {/* Specialized Facilities */}
            <div className="group bg-white dark:bg-dark-surface rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:-rotate-1 border border-gray-100 dark:border-dark-border">
              <div className="w-16 h-16 bg-gradient-to-r from-teal-600 to-mh-hunter-green rounded-full flex items-center justify-center mb-6 group-hover:scale-110 group-hover:-rotate-12 transition-all duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-army-black dark:text-dark-text mb-4 group-hover:text-teal-600 transition-colors duration-300">
                Specialized Facilities
              </h3>
              <p className="text-gray-600 dark:text-dark-text-secondary mb-4">
                Expert construction of specialized government facilities including laboratories, data centers, and high-security installations.
              </p>
              <ul className="text-sm text-gray-500 dark:text-dark-text-secondary space-y-2">
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-teal-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Laboratory Construction
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-teal-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Data Center Build-outs
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-teal-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Clean Room Facilities
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Government Project Portfolio Section */}
      <section id="portfolio" className="py-20 bg-white dark:bg-dark-surface transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-army-black dark:text-dark-text mb-4">
              Government Project Portfolio
            </h2>
            <p className="text-xl text-gray-600 dark:text-dark-text-secondary max-w-3xl mx-auto">
              Showcasing our successful delivery of critical infrastructure projects for federal, state, 
              and local government clients across the Pacific Northwest.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project 1 */}
            <div className="group bg-gray-50 dark:bg-dark-surface-2 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:rotate-1">
              <div className="h-48 bg-gradient-to-br from-blue-600 to-navy-900 relative overflow-hidden">
                <div className="absolute inset-0 bg-black/40"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <div className="text-2xl font-bold">$12.3M</div>
                  <div className="text-sm opacity-90">Project Value</div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-army-black dark:text-dark-text mb-3 group-hover:text-blue-600 transition-colors duration-300">
                  Federal Security Operations Center
                </h3>
                <p className="text-gray-600 dark:text-dark-text-secondary mb-4">
                  New construction of a 45,000 sq ft secure facility for federal law enforcement operations, including SCIF areas and advanced security systems.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-xs rounded-full">Federal Contract</span>
                  <span className="px-3 py-1 bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-300 text-xs rounded-full">Security Clearance</span>
                  <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 text-xs rounded-full">SCIF</span>
                </div>
                <div className="text-sm text-gray-500 dark:text-dark-text-secondary">
                  <strong>Client:</strong> Department of Homeland Security<br/>
                  <strong>Duration:</strong> 18 months<br/>
                  <strong>Completion:</strong> 2023
                </div>
              </div>
            </div>

            {/* Project 2 */}
            <div className="group bg-gray-50 dark:bg-dark-surface-2 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:-rotate-1">
              <div className="h-48 bg-gradient-to-br from-green-600 to-forest-900 relative overflow-hidden">
                <div className="absolute inset-0 bg-black/40"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <div className="text-2xl font-bold">$8.7M</div>
                  <div className="text-sm opacity-90">Project Value</div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-army-black dark:text-dark-text mb-3 group-hover:text-green-600 transition-colors duration-300">
                  Joint Base Medical Facility
                </h3>
                <p className="text-gray-600 dark:text-dark-text-secondary mb-4">
                  Complete renovation and expansion of military medical facilities serving multiple branches of the armed forces.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 text-xs rounded-full">MILCON</span>
                  <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 text-xs rounded-full">Healthcare</span>
                  <span className="px-3 py-1 bg-orange-100 dark:bg-orange-900/30 text-orange-800 dark:text-orange-300 text-xs rounded-full">Base Access</span>
                </div>
                <div className="text-sm text-gray-500 dark:text-dark-text-secondary">
                  <strong>Client:</strong> U.S. Air Force<br/>
                  <strong>Duration:</strong> 24 months<br/>
                  <strong>Completion:</strong> 2023
                </div>
              </div>
            </div>

            {/* Project 3 */}
            <div className="group bg-gray-50 dark:bg-dark-surface-2 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:rotate-1">
              <div className="h-48 bg-gradient-to-br from-purple-600 to-indigo-900 relative overflow-hidden">
                <div className="absolute inset-0 bg-black/40"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <div className="text-2xl font-bold">$5.2M</div>
                  <div className="text-sm opacity-90">Project Value</div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-army-black dark:text-dark-text mb-3 group-hover:text-purple-600 transition-colors duration-300">
                  County Emergency Operations Center
                </h3>
                <p className="text-gray-600 dark:text-dark-text-secondary mb-4">
                  Design-build of a state-of-the-art emergency operations center with advanced communications and command capabilities.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 text-xs rounded-full">Municipal</span>
                  <span className="px-3 py-1 bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-300 text-xs rounded-full">Emergency Services</span>
                  <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-xs rounded-full">Design-Build</span>
                </div>
                <div className="text-sm text-gray-500 dark:text-dark-text-secondary">
                  <strong>Client:</strong> Washington County<br/>
                  <strong>Duration:</strong> 15 months<br/>
                  <strong>Completion:</strong> 2022
                </div>
              </div>
            </div>

            {/* Project 4 */}
            <div className="group bg-gray-50 dark:bg-dark-surface-2 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:-rotate-1">
              <div className="h-48 bg-gradient-to-br from-red-600 to-maroon-900 relative overflow-hidden">
                <div className="absolute inset-0 bg-black/40"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <div className="text-2xl font-bold">$6.8M</div>
                  <div className="text-sm opacity-90">Project Value</div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-army-black dark:text-dark-text mb-3 group-hover:text-red-600 transition-colors duration-300">
                  Federal Laboratory Complex
                </h3>
                <p className="text-gray-600 dark:text-dark-text-secondary mb-4">
                  Construction of specialized research laboratories with controlled environments, clean rooms, and advanced safety systems.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-300 text-xs rounded-full">Federal</span>
                  <span className="px-3 py-1 bg-teal-100 dark:bg-teal-900/30 text-teal-800 dark:text-teal-300 text-xs rounded-full">Laboratory</span>
                  <span className="px-3 py-1 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-300 text-xs rounded-full">Clean Room</span>
                </div>
                <div className="text-sm text-gray-500 dark:text-dark-text-secondary">
                  <strong>Client:</strong> National Institutes of Health<br/>
                  <strong>Duration:</strong> 20 months<br/>
                  <strong>Completion:</strong> 2022
                </div>
              </div>
            </div>

            {/* Project 5 */}
            <div className="group bg-gray-50 dark:bg-dark-surface-2 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:rotate-1">
              <div className="h-48 bg-gradient-to-br from-orange-600 to-red-900 relative overflow-hidden">
                <div className="absolute inset-0 bg-black/40"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <div className="text-2xl font-bold">$3.9M</div>
                  <div className="text-sm opacity-90">Project Value</div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-army-black dark:text-dark-text mb-3 group-hover:text-orange-600 transition-colors duration-300">
                  State Correctional Facility Upgrade
                </h3>
                <p className="text-gray-600 dark:text-dark-text-secondary mb-4">
                  Major security upgrades and renovations to a state correctional facility, including enhanced surveillance and safety systems.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-orange-100 dark:bg-orange-900/30 text-orange-800 dark:text-orange-300 text-xs rounded-full">State Contract</span>
                  <span className="px-3 py-1 bg-gray-100 dark:bg-gray-900/30 text-gray-800 dark:text-gray-300 text-xs rounded-full">Security</span>
                  <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-xs rounded-full">Renovation</span>
                </div>
                <div className="text-sm text-gray-500 dark:text-dark-text-secondary">
                  <strong>Client:</strong> Oregon Department of Corrections<br/>
                  <strong>Duration:</strong> 12 months<br/>
                  <strong>Completion:</strong> 2023
                </div>
              </div>
            </div>

            {/* Project 6 */}
            <div className="group bg-gray-50 dark:bg-dark-surface-2 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:-rotate-1">
              <div className="h-48 bg-gradient-to-br from-teal-600 to-blue-900 relative overflow-hidden">
                <div className="absolute inset-0 bg-black/40"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <div className="text-2xl font-bold">$4.1M</div>
                  <div className="text-sm opacity-90">Project Value</div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-army-black dark:text-dark-text mb-3 group-hover:text-teal-600 transition-colors duration-300">
                  Municipal Water Treatment Plant
                </h3>
                <p className="text-gray-600 dark:text-dark-text-secondary mb-4">
                  Construction of critical infrastructure for municipal water treatment, including specialized equipment installation and environmental controls.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-teal-100 dark:bg-teal-900/30 text-teal-800 dark:text-teal-300 text-xs rounded-full">Municipal</span>
                  <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-xs rounded-full">Infrastructure</span>
                  <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 text-xs rounded-full">Environmental</span>
                </div>
                <div className="text-sm text-gray-500 dark:text-dark-text-secondary">
                  <strong>Client:</strong> City of Portland<br/>
                  <strong>Duration:</strong> 16 months<br/>
                  <strong>Completion:</strong> 2021
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications and Credentials Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white dark:from-dark-surface-2 dark:to-dark-surface transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-army-black dark:text-dark-text mb-4">
              Government Credentials & Certifications
            </h2>
            <p className="text-xl text-gray-600 dark:text-dark-text-secondary max-w-3xl mx-auto">
              Our comprehensive credentials and certifications ensure full compliance with federal, 
              state, and local government contracting requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {/* Credential 1 */}
            <div className="group text-center bg-white dark:bg-dark-surface rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-army-gold transition-colors duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-bold text-army-black dark:text-dark-text mb-2 group-hover:text-blue-600 transition-colors duration-300">GSA Schedule</h3>
              <p className="text-sm text-gray-600 dark:text-dark-text-secondary">Multiple Access Program for the Technology Marketplace (MATP)</p>
              <div className="text-xs text-blue-600 font-semibold mt-2">Schedule 36</div>
            </div>

            {/* Credential 2 */}
            <div className="group text-center bg-white dark:bg-dark-surface rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-army-gold transition-colors duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="font-bold text-army-black dark:text-dark-text mb-2 group-hover:text-green-600 transition-colors duration-300">CAGE Code</h3>
              <p className="text-sm text-gray-600 dark:text-dark-text-secondary">Commercial and Government Entity Code</p>
              <div className="text-xs text-green-600 font-semibold mt-2">7XYZ9</div>
            </div>

            {/* Credential 3 */}
            <div className="group text-center bg-white dark:bg-dark-surface rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-army-gold transition-colors duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="font-bold text-army-black dark:text-dark-text mb-2 group-hover:text-red-600 transition-colors duration-300">Security Clearance</h3>
              <p className="text-sm text-gray-600 dark:text-dark-text-secondary">Key Personnel with Active Clearances</p>
              <div className="text-xs text-red-600 font-semibold mt-2">Secret Level</div>
            </div>

            {/* Credential 4 */}
            <div className="group text-center bg-white dark:bg-dark-surface rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-army-gold transition-colors duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="font-bold text-army-black dark:text-dark-text mb-2 group-hover:text-purple-600 transition-colors duration-300">SDVOSB</h3>
              <p className="text-sm text-gray-600 dark:text-dark-text-secondary">Service-Disabled Veteran-Owned Small Business</p>
              <div className="text-xs text-purple-600 font-semibold mt-2">Certified</div>
            </div>
          </div>

          {/* Compliance Standards */}
          <div className="bg-gradient-to-r from-mh-hunter-green to-army-black rounded-xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-6 text-center">Federal Compliance Standards</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="text-center">
                <h4 className="font-semibold mb-2 text-army-gold">FAR Compliance</h4>
                <p className="text-sm text-gray-300">Full adherence to Federal Acquisition Regulation requirements for all federal contracts.</p>
              </div>
              <div className="text-center">
                <h4 className="font-semibold mb-2 text-army-gold">ITAR Registered</h4>
                <p className="text-sm text-gray-300">International Traffic in Arms Regulations compliance for defense-related projects.</p>
              </div>
              <div className="text-center">
                <h4 className="font-semibold mb-2 text-army-gold">Equal Opportunity</h4>
                <p className="text-sm text-gray-300">Commitment to equal employment opportunity and diversity in government contracting.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-army-black">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Partner with a Proven Government Contractor?
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            With veteran leadership, security clearances, and extensive federal compliance experience, 
            MH Construction is your trusted partner for critical government infrastructure projects.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="group bg-army-gold hover:bg-army-gold/90 text-army-black px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              Request Capabilities Statement
              <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300 inline-block">→</span>
            </a>
            <a 
              href="/projects" 
              className="group border border-army-gold text-army-gold hover:bg-army-gold hover:text-army-black px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              View All Projects
              <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300 inline-block">→</span>
            </a>
          </div>
        </div>
      </section>

      <div className="mt-auto">
        <WhyChooseSection />
        <Footer />
      </div>
    </main>
  )
}