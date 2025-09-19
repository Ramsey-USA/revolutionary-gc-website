import type { Metadata } from 'next'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import WhyChooseSection from '../../components/WhyChooseSection'

export const metadata: Metadata = {
  title: 'Safety Excellence | MH Construction',
  description: 'Discover MH Construction\'s commitment to safety excellence through awards, certifications, OSHA compliance, and proven safety protocols. Building safely for our team and clients.',
  keywords: 'construction safety, OSHA compliance, safety awards, safety certifications, workplace safety, construction protocols, safety excellence',
}

export default function SafetyPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-dark-surface transition-colors duration-300">
      <Header />
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-mh-hunter-green via-army-black to-mh-hunter-green overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Safety
                <span className="block text-army-gold">Excellence</span>
              </h1>
              <p className="text-xl lg:text-2xl mb-8 text-gray-200 leading-relaxed">
                Every project starts with safety. Our unwavering commitment to protecting our team, 
                clients, and communities drives everything we do.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <a 
                  href="#awards" 
                  className="group bg-army-gold hover:bg-army-gold/90 text-army-black px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 text-center"
                >
                  View Awards
                  <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300 inline-block">→</span>
                </a>
                <a 
                  href="#certifications" 
                  className="group border border-army-gold text-army-gold hover:bg-army-gold hover:text-army-black px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 text-center"
                >
                  Our Certifications
                  <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300 inline-block">→</span>
                </a>
              </div>
            </div>
            
            <div className="relative">
              {/* Safety Statistics Cards */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 transform hover:scale-105 transition-all duration-300">
                  <div className="text-3xl font-bold text-army-gold mb-2">0</div>
                  <div className="text-sm text-gray-200">Lost Time Incidents</div>
                  <div className="text-xs text-gray-300 mt-1">Last 24 Months</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 transform hover:scale-105 transition-all duration-300">
                  <div className="text-3xl font-bold text-army-gold mb-2">500K+</div>
                  <div className="text-sm text-gray-200">Safe Work Hours</div>
                  <div className="text-xs text-gray-300 mt-1">Without Incident</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 transform hover:scale-105 transition-all duration-300">
                  <div className="text-3xl font-bold text-army-gold mb-2">15</div>
                  <div className="text-sm text-gray-200">Safety Awards</div>
                  <div className="text-xs text-gray-300 mt-1">Industry Recognition</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 transform hover:scale-105 transition-all duration-300">
                  <div className="text-3xl font-bold text-army-gold mb-2">0.12</div>
                  <div className="text-sm text-gray-200">EMR Rating</div>
                  <div className="text-xs text-gray-300 mt-1">Industry Leading</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Safety Awards Section */}
      <section id="awards" className="py-20 bg-gray-50 dark:bg-dark-surface-2 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-army-black dark:text-dark-text mb-4">
              Safety Awards & Recognition
            </h2>
            <p className="text-xl text-gray-600 dark:text-dark-text-secondary max-w-3xl mx-auto">
              Our commitment to safety excellence has been recognized by industry leaders, 
              regulatory bodies, and client organizations across the Pacific Northwest.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Award 1 */}
            <div className="group bg-white dark:bg-dark-surface rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:rotate-1 border border-gray-100 dark:border-dark-border">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-army-gold to-mh-hunter-green rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-army-black dark:text-dark-text mb-3 group-hover:text-army-gold transition-colors duration-300">
                  OSHA VPP Star Award
                </h3>
                <p className="text-gray-600 dark:text-dark-text-secondary mb-4">
                  Highest recognition for workplace safety and health excellence, demonstrating outstanding injury and illness prevention programs.
                </p>
                <div className="text-sm text-mh-hunter-green font-semibold">2023 • Federal Recognition</div>
              </div>
            </div>

            {/* Award 2 */}
            <div className="group bg-white dark:bg-dark-surface rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:-rotate-1 border border-gray-100 dark:border-dark-border">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-army-gold rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:-rotate-12 transition-all duration-300">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-army-black dark:text-dark-text mb-3 group-hover:text-blue-600 transition-colors duration-300">
                  AGC Safety Excellence
                </h3>
                <p className="text-gray-600 dark:text-dark-text-secondary mb-4">
                  Associated General Contractors recognition for outstanding safety performance and commitment to protecting construction workers.
                </p>
                <div className="text-sm text-blue-600 font-semibold">2023 • Industry Leadership</div>
              </div>
            </div>

            {/* Award 3 */}
            <div className="group bg-white dark:bg-dark-surface rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:rotate-1 border border-gray-100 dark:border-dark-border">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-green-600 to-mh-hunter-green rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-army-black dark:text-dark-text mb-3 group-hover:text-green-600 transition-colors duration-300">
                  Zero Incident Recognition
                </h3>
                <p className="text-gray-600 dark:text-dark-text-secondary mb-4">
                  Multiple client awards recognizing our achievement of zero recordable incidents across major construction projects.
                </p>
                <div className="text-sm text-green-600 font-semibold">2022-2023 • Client Recognition</div>
              </div>
            </div>

            {/* Award 4 */}
            <div className="group bg-white dark:bg-dark-surface rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:-rotate-1 border border-gray-100 dark:border-dark-border">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-purple-600 to-army-gold rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:-rotate-12 transition-all duration-300">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-army-black dark:text-dark-text mb-3 group-hover:text-purple-600 transition-colors duration-300">
                  Safety Innovation Award
                </h3>
                <p className="text-gray-600 dark:text-dark-text-secondary mb-4">
                  Recognition for implementing innovative safety technologies and protocols that set new industry standards.
                </p>
                <div className="text-sm text-purple-600 font-semibold">2023 • Technology Innovation</div>
              </div>
            </div>

            {/* Award 5 */}
            <div className="group bg-white dark:bg-dark-surface rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:rotate-1 border border-gray-100 dark:border-dark-border">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-red-600 to-mh-hunter-green rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-army-black dark:text-dark-text mb-3 group-hover:text-red-600 transition-colors duration-300">
                  Electrical Safety Excellence
                </h3>
                <p className="text-gray-600 dark:text-dark-text-secondary mb-4">
                  NECA recognition for outstanding electrical safety practices and zero electrical incidents across all projects.
                </p>
                <div className="text-sm text-red-600 font-semibold">2023 • Specialty Recognition</div>
              </div>
            </div>

            {/* Award 6 */}
            <div className="group bg-white dark:bg-dark-surface rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:-rotate-1 border border-gray-100 dark:border-dark-border">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-orange-600 to-army-gold rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:-rotate-12 transition-all duration-300">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-army-black dark:text-dark-text mb-3 group-hover:text-orange-600 transition-colors duration-300">
                  Community Safety Partner
                </h3>
                <p className="text-gray-600 dark:text-dark-text-secondary mb-4">
                  Local recognition for promoting construction safety awareness and education in the community.
                </p>
                <div className="text-sm text-orange-600 font-semibold">2023 • Community Impact</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Safety Certifications Section */}
      <section id="certifications" className="py-20 bg-white dark:bg-dark-surface transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-army-black dark:text-dark-text mb-4">
              Safety Certifications & Compliance
            </h2>
            <p className="text-xl text-gray-600 dark:text-dark-text-secondary max-w-3xl mx-auto">
              Our comprehensive certification program ensures all team members meet the highest safety standards 
              and regulatory requirements in the construction industry.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {/* Certification 1 */}
            <div className="group text-center bg-gray-50 dark:bg-dark-surface-2 rounded-xl p-6 hover:shadow-lg transition-all duration-300 transform hover:scale-105">
              <div className="w-16 h-16 bg-mh-hunter-green rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-army-gold transition-colors duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-bold text-army-black dark:text-dark-text mb-2 group-hover:text-mh-hunter-green transition-colors duration-300">OSHA 30-Hour</h3>
              <p className="text-sm text-gray-600 dark:text-dark-text-secondary">Construction Safety & Health</p>
            </div>

            {/* Certification 2 */}
            <div className="group text-center bg-gray-50 dark:bg-dark-surface-2 rounded-xl p-6 hover:shadow-lg transition-all duration-300 transform hover:scale-105">
              <div className="w-16 h-16 bg-mh-hunter-green rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-army-gold transition-colors duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="font-bold text-army-black dark:text-dark-text mb-2 group-hover:text-mh-hunter-green transition-colors duration-300">First Aid/CPR</h3>
              <p className="text-sm text-gray-600 dark:text-dark-text-secondary">Emergency Response Certified</p>
            </div>

            {/* Certification 3 */}
            <div className="group text-center bg-gray-50 dark:bg-dark-surface-2 rounded-xl p-6 hover:shadow-lg transition-all duration-300 transform hover:scale-105">
              <div className="w-16 h-16 bg-mh-hunter-green rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-army-gold transition-colors duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="font-bold text-army-black dark:text-dark-text mb-2 group-hover:text-mh-hunter-green transition-colors duration-300">Forklift Operator</h3>
              <p className="text-sm text-gray-600 dark:text-dark-text-secondary">Heavy Equipment Certified</p>
            </div>

            {/* Certification 4 */}
            <div className="group text-center bg-gray-50 dark:bg-dark-surface-2 rounded-xl p-6 hover:shadow-lg transition-all duration-300 transform hover:scale-105">
              <div className="w-16 h-16 bg-mh-hunter-green rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-army-gold transition-colors duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="font-bold text-army-black dark:text-dark-text mb-2 group-hover:text-mh-hunter-green transition-colors duration-300">Confined Space</h3>
              <p className="text-sm text-gray-600 dark:text-dark-text-secondary">Entry & Rescue Certified</p>
            </div>
          </div>

          {/* Additional Certifications Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            <div className="text-center p-4 bg-gray-50 dark:bg-dark-surface-2 rounded-lg hover:bg-mh-hunter-green/10 transition-colors duration-300">
              <div className="font-semibold text-sm text-army-black dark:text-dark-text">Fall Protection</div>
            </div>
            <div className="text-center p-4 bg-gray-50 dark:bg-dark-surface-2 rounded-lg hover:bg-mh-hunter-green/10 transition-colors duration-300">
              <div className="font-semibold text-sm text-army-black dark:text-dark-text">Scaffold Safety</div>
            </div>
            <div className="text-center p-4 bg-gray-50 dark:bg-dark-surface-2 rounded-lg hover:bg-mh-hunter-green/10 transition-colors duration-300">
              <div className="font-semibold text-sm text-army-black dark:text-dark-text">Crane Operation</div>
            </div>
            <div className="text-center p-4 bg-gray-50 dark:bg-dark-surface-2 rounded-lg hover:bg-mh-hunter-green/10 transition-colors duration-300">
              <div className="font-semibold text-sm text-army-black dark:text-dark-text">Electrical Safety</div>
            </div>
            <div className="text-center p-4 bg-gray-50 dark:bg-dark-surface-2 rounded-lg hover:bg-mh-hunter-green/10 transition-colors duration-300">
              <div className="font-semibold text-sm text-army-black dark:text-dark-text">Hazmat Handling</div>
            </div>
            <div className="text-center p-4 bg-gray-50 dark:bg-dark-surface-2 rounded-lg hover:bg-mh-hunter-green/10 transition-colors duration-300">
              <div className="font-semibold text-sm text-army-black dark:text-dark-text">Site Security</div>
            </div>
          </div>
        </div>
      </section>

      {/* Safety Protocols Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white dark:from-dark-surface-2 dark:to-dark-surface transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-army-black dark:text-dark-text mb-4">
              Safety Protocols & Procedures
            </h2>
            <p className="text-xl text-gray-600 dark:text-dark-text-secondary max-w-3xl mx-auto">
              Our comprehensive safety management system ensures every project maintains the highest safety standards 
              from planning to completion.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-2xl font-bold text-army-black dark:text-dark-text mb-6">Daily Safety Protocols</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-mh-hunter-green rounded-full flex items-center justify-center mr-4 mt-1">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-army-black dark:text-dark-text mb-1">Morning Safety Briefings</h4>
                    <p className="text-gray-600 dark:text-dark-text-secondary">Daily team meetings covering site-specific hazards, weather conditions, and safety priorities.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-mh-hunter-green rounded-full flex items-center justify-center mr-4 mt-1">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-army-black dark:text-dark-text mb-1">Equipment Inspections</h4>
                    <p className="text-gray-600 dark:text-dark-text-secondary">Pre-use safety checks on all tools, equipment, and personal protective equipment.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-mh-hunter-green rounded-full flex items-center justify-center mr-4 mt-1">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-army-black dark:text-dark-text mb-1">Continuous Monitoring</h4>
                    <p className="text-gray-600 dark:text-dark-text-secondary">Ongoing safety supervision and hazard identification throughout the work day.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-mh-hunter-green rounded-full flex items-center justify-center mr-4 mt-1">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-army-black dark:text-dark-text mb-1">Incident Reporting</h4>
                    <p className="text-gray-600 dark:text-dark-text-secondary">Immediate documentation and investigation of all safety incidents and near-misses.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-dark-surface rounded-xl shadow-lg p-8">
              <h3 className="text-xl font-bold text-army-black dark:text-dark-text mb-6 text-center">Safety Performance Metrics</h3>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-600 dark:text-dark-text-secondary">OSHA Recordable Rate</span>
                    <span className="font-semibold text-mh-hunter-green">0.8</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-mh-hunter-green h-2 rounded-full" style={{width: '20%'}}></div>
                  </div>
                  <div className="text-xs text-gray-500 dark:text-dark-text-secondary mt-1">Industry Average: 4.2</div>
                </div>
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-600 dark:text-dark-text-secondary">Lost Time Rate</span>
                    <span className="font-semibold text-army-gold">0.2</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-army-gold h-2 rounded-full" style={{width: '10%'}}></div>
                  </div>
                  <div className="text-xs text-gray-500 dark:text-dark-text-secondary mt-1">Industry Average: 2.1</div>
                </div>
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-600 dark:text-dark-text-secondary">Near Miss Reporting</span>
                    <span className="font-semibold text-blue-600">145%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{width: '95%'}}></div>
                  </div>
                  <div className="text-xs text-gray-500 dark:text-dark-text-secondary mt-1">Target: 100%</div>
                </div>
              </div>
            </div>
          </div>

          {/* Emergency Procedures */}
          <div className="bg-gradient-to-r from-mh-hunter-green to-army-black rounded-xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-6 text-center">Emergency Response Procedures</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.464 0L4.34 16.5c-.77.833.192 2.5 1.732 2.5z" />
                  </svg>
                </div>
                <h4 className="font-semibold mb-2">Medical Emergency</h4>
                <p className="text-sm text-gray-300">Immediate first aid response, emergency services contact, and incident documentation.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                  </svg>
                </div>
                <h4 className="font-semibold mb-2">Fire Emergency</h4>
                <p className="text-sm text-gray-300">Evacuation procedures, fire suppression systems, and emergency assembly points.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h4 className="font-semibold mb-2">Severe Weather</h4>
                <p className="text-sm text-gray-300">Weather monitoring, work stoppage protocols, and shelter procedures.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-army-black">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Partner with a Safety-First Construction Company
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            When you choose MH Construction, you're choosing a partner committed to the highest safety standards. 
            Let's discuss how our safety-first approach can benefit your next project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="group bg-army-gold hover:bg-army-gold/90 text-army-black px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              Request Safety Consultation
              <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300 inline-block">→</span>
            </a>
            <a 
              href="/services" 
              className="group border border-army-gold text-army-gold hover:bg-army-gold hover:text-army-black px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              View Our Services
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