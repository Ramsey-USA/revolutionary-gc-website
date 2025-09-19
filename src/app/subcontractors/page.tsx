'use client'
import { useState } from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import WhyChooseSection from '../../components/WhyChooseSection'
import StarDecorations from '../../components/StarDecorations'

export default function SubcontractorsPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    companyName: '',
    yearsInBusiness: '',
    licenseNumber: '',
    insuranceAmount: '',
    contactName: '',
    title: '',
    email: '',
    phone: '',
    primaryTrade: '',
    additionalServices: '',
    message: ''
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      await new Promise(resolve => setTimeout(resolve, 2000))
      alert('Thank you for your interest! We will review your application and contact you soon.')
      setFormData({
        companyName: '',
        yearsInBusiness: '',
        licenseNumber: '',
        insuranceAmount: '',
        contactName: '',
        title: '',
        email: '',
        phone: '',
        primaryTrade: '',
        additionalServices: '',
        message: ''
      })
    } catch (error) {
      alert('There was an error submitting your application. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-mh-hunter-green to-army-black dark:from-dark-surface-2 dark:to-dark-surface-3 py-32 overflow-hidden">
          <StarDecorations />
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-7xl font-bold text-white dark:text-dark-text mb-6 animate-fade-in-up">
                Join Our <span className="text-army-gold dark:text-army-gold">Network</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 dark:text-dark-text-secondary max-w-3xl mx-auto leading-relaxed animate-fade-in-up">
                Partner with MH Construction for exceptional opportunities. We're building a network of 
                elite subcontractors who share our commitment to excellence and military-grade precision.
              </p>
            </div>

            {/* Partnership Statistics */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
              <div className="text-center p-6 bg-white/10 dark:bg-dark-surface/20 backdrop-blur-sm rounded-xl border border-white/20 dark:border-dark-border/30 hover:bg-white/20 dark:hover:bg-dark-surface/40 transition-all duration-500 transform hover:scale-105 hover:rotate-1 hover:shadow-2xl group">
                <div className="text-3xl md:text-4xl font-bold text-army-gold dark:text-army-gold mb-2 animate-fade-in-up group-hover:scale-110 transition-transform duration-300">150+</div>
                <div className="text-white/90 dark:text-dark-text/90 font-medium">Active Partners</div>
              </div>
              
              <div className="text-center p-6 bg-white/10 dark:bg-dark-surface/20 backdrop-blur-sm rounded-xl border border-white/20 dark:border-dark-border/30 hover:bg-white/20 dark:hover:bg-dark-surface/40 transition-all duration-500 transform hover:scale-105 hover:-rotate-1 hover:shadow-2xl group">
                <div className="text-3xl md:text-4xl font-bold text-army-gold dark:text-army-gold mb-2 animate-fade-in-up group-hover:scale-110 transition-transform duration-300">$50M+</div>
                <div className="text-white/90 dark:text-dark-text/90 font-medium">Annual Opportunities</div>
              </div>
              
              <div className="text-center p-6 bg-white/10 dark:bg-dark-surface/20 backdrop-blur-sm rounded-xl border border-white/20 dark:border-dark-border/30 hover:bg-white/20 dark:hover:bg-dark-surface/40 transition-all duration-500 transform hover:scale-105 hover:rotate-1 hover:shadow-2xl group">
                <div className="text-3xl md:text-4xl font-bold text-army-gold dark:text-army-gold mb-2 animate-fade-in-up group-hover:scale-110 transition-transform duration-300">98%</div>
                <div className="text-white/90 dark:text-dark-text/90 font-medium">Payment Rate</div>
              </div>
              
              <div className="text-center p-6 bg-white/10 dark:bg-dark-surface/20 backdrop-blur-sm rounded-xl border border-white/20 dark:border-dark-border/30 hover:bg-white/20 dark:hover:bg-dark-surface/40 transition-all duration-500 transform hover:scale-105 hover:-rotate-1 hover:shadow-2xl group">
                <div className="text-3xl md:text-4xl font-bold text-army-gold mb-2 animate-fade-in-up group-hover:scale-110 transition-transform duration-300">25</div>
                <div className="text-white/90 font-medium">Trade Categories</div>
              </div>
            </div>
          </div>
        </section>

        {/* Partnership Benefits Section */}
        <section className="py-20 bg-white dark:bg-dark-surface transition-colors duration-300">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-army-black dark:text-dark-text mb-4">
                Why Partner With MH Construction?
              </h2>
              <p className="text-xl text-gray-600 dark:text-dark-text-secondary max-w-3xl mx-auto">
                Join a network of elite subcontractors and benefit from our veteran-owned company's commitment to excellence, reliability, and mutual success.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Reliable Payments */}
              <div className="group bg-white dark:bg-dark-surface-2 rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:rotate-1 border-l-4 border-mh-hunter-green hover:border-l-8">
                <div className="w-16 h-16 bg-mh-hunter-green/10 dark:bg-mh-hunter-green/20 rounded-full flex items-center justify-center mb-6 group-hover:bg-mh-hunter-green/20 dark:group-hover:bg-mh-hunter-green/30 transition-all duration-500 group-hover:scale-110 group-hover:rotate-12">
                  <svg className="w-8 h-8 text-mh-hunter-green group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-army-black dark:text-dark-text mb-4 group-hover:text-mh-hunter-green dark:group-hover:text-mh-hunter-green transition-colors duration-300">Fast, Reliable Payments</h3>
                <p className="text-gray-600 dark:text-dark-text-secondary mb-4">Net 15-day payment terms with a 98% on-time payment rate. We value our partners and show it through prompt compensation.</p>
                <ul className="text-sm text-gray-500 dark:text-dark-text-secondary space-y-2">
                  <li>• Electronic payment options</li>
                  <li>• Clear invoicing process</li>
                  <li>• Dedicated accounting support</li>
                </ul>
              </div>

              {/* Consistent Work */}
              <div className="group bg-white dark:bg-dark-surface-2 rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:-rotate-1 border-l-4 border-army-gold hover:border-l-8">
                <div className="w-16 h-16 bg-army-gold/10 dark:bg-army-gold/20 rounded-full flex items-center justify-center mb-6 group-hover:bg-army-gold/20 dark:group-hover:bg-army-gold/30 transition-all duration-500 group-hover:scale-110 group-hover:-rotate-12">
                  <svg className="w-8 h-8 text-army-gold group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-army-black dark:text-dark-text mb-4 group-hover:text-army-gold dark:group-hover:text-army-gold transition-colors duration-300">Consistent Work Opportunities</h3>
                <p className="text-gray-600 dark:text-dark-text-secondary mb-4">Access to a steady pipeline of projects across residential, commercial, and municipal sectors throughout the Pacific Northwest.</p>
                <ul className="text-sm text-gray-500 dark:text-dark-text-secondary space-y-2">
                  <li>• Year-round project availability</li>
                  <li>• Multiple project types</li>
                  <li>• Geographic diversity</li>
                </ul>
              </div>

              {/* Professional Support */}
              <div className="group bg-white dark:bg-dark-surface-2 rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:rotate-1 border-l-4 border-blue-600 hover:border-l-8">
                <div className="w-16 h-16 bg-blue-600/10 dark:bg-blue-600/20 rounded-full flex items-center justify-center mb-6 group-hover:bg-blue-600/20 dark:group-hover:bg-blue-600/30 transition-all duration-500 group-hover:scale-110 group-hover:rotate-12">
                  <svg className="w-8 h-8 text-blue-600 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-army-black dark:text-dark-text mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-600 transition-colors duration-300">Professional Support</h3>
                <p className="text-gray-600 dark:text-dark-text-secondary mb-4">Dedicated project management and administrative support to help you focus on what you do best - quality workmanship.</p>
                <ul className="text-sm text-gray-500 dark:text-dark-text-secondary space-y-2">
                  <li>• Dedicated project managers</li>
                  <li>• Administrative assistance</li>
                  <li>• Technical support</li>
                </ul>
              </div>

              {/* Safety First */}
              <div className="group bg-white dark:bg-dark-surface-2 rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:-rotate-1 border-l-4 border-red-600 hover:border-l-8">
                <div className="w-16 h-16 bg-red-600/10 dark:bg-red-600/20 rounded-full flex items-center justify-center mb-6 group-hover:bg-red-600/20 dark:group-hover:bg-red-600/30 transition-all duration-500 group-hover:scale-110 group-hover:-rotate-12">
                  <svg className="w-8 h-8 text-red-600 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.031 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-army-black dark:text-dark-text mb-4 group-hover:text-red-600 dark:group-hover:text-red-600 transition-colors duration-300">Safety-First Culture</h3>
                <p className="text-gray-600 dark:text-dark-text-secondary mb-4">Comprehensive safety programs and training to ensure every project is completed without incidents. Safety is our top priority.</p>
                <ul className="text-sm text-gray-500 dark:text-dark-text-secondary space-y-2">
                  <li>• Safety training programs</li>
                  <li>• Regular safety meetings</li>
                  <li>• Incident prevention protocols</li>
                </ul>
              </div>

              {/* Growth Opportunities */}
              <div className="group bg-white dark:bg-dark-surface-2 rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:rotate-1 border-l-4 border-green-600 hover:border-l-8">
                <div className="w-16 h-16 bg-green-600/10 dark:bg-green-600/20 rounded-full flex items-center justify-center mb-6 group-hover:bg-green-600/20 dark:group-hover:bg-green-600/30 transition-all duration-500 group-hover:scale-110 group-hover:rotate-12">
                  <svg className="w-8 h-8 text-green-600 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-army-black dark:text-dark-text mb-4 group-hover:text-green-600 dark:group-hover:text-green-600 transition-colors duration-300">Growth Opportunities</h3>
                <p className="text-gray-600 dark:text-dark-text-secondary mb-4">Opportunities to expand your business through larger projects and long-term partnerships with our growing company.</p>
                <ul className="text-sm text-gray-500 dark:text-dark-text-secondary space-y-2">
                  <li>• Larger project opportunities</li>
                  <li>• Long-term partnerships</li>
                  <li>• Business development support</li>
                </ul>
              </div>

              {/* Military Values */}
              <div className="group bg-white dark:bg-dark-surface-2 rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:-rotate-1 border-l-4 border-army-green hover:border-l-8">
                <div className="w-16 h-16 bg-army-green/10 dark:bg-army-green/20 rounded-full flex items-center justify-center mb-6 group-hover:bg-army-green/20 dark:group-hover:bg-army-green/30 transition-all duration-500 group-hover:scale-110 group-hover:-rotate-12">
                  <svg className="w-8 h-8 text-army-green group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-army-black dark:text-dark-text mb-4 group-hover:text-army-green dark:group-hover:text-army-green transition-colors duration-300">Military Values</h3>
                <p className="text-gray-600 dark:text-dark-text-secondary mb-4">Work with a veteran-owned company that operates with integrity, discipline, and respect for all team members and partners.</p>
                <ul className="text-sm text-gray-500 dark:text-dark-text-secondary space-y-2">
                  <li>• Honor and integrity</li>
                  <li>• Disciplined approach</li>
                  <li>• Mutual respect</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Requirements & Qualifications Section */}
        <section className="py-20 bg-gray-50 dark:bg-dark-surface transition-colors duration-300">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-army-black dark:text-dark-text mb-4">
                Partnership Requirements
              </h2>
              <p className="text-xl text-gray-600 dark:text-dark-text-secondary max-w-3xl mx-auto">
                We maintain high standards to ensure quality and safety across all projects. Here's what we look for in our subcontractor partners.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Required Qualifications */}
              <div className="bg-white dark:bg-dark-surface-2 rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-mh-hunter-green rounded-full flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-army-black dark:text-dark-text">Required Qualifications</h3>
                </div>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-mh-hunter-green rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-army-black dark:text-dark-text mb-1">Licensing & Certification</h4>
                      <p className="text-gray-600 dark:text-dark-text-secondary text-sm">Current state contractor's license and all relevant trade certifications</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-mh-hunter-green rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-army-black dark:text-dark-text mb-1">Insurance Coverage</h4>
                      <p className="text-gray-600 dark:text-dark-text-secondary text-sm">General liability ($1M minimum), Workers' compensation, and Auto insurance</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-mh-hunter-green rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-army-black dark:text-dark-text mb-1">Experience Requirements</h4>
                      <p className="text-gray-600 dark:text-dark-text-secondary text-sm">Minimum 3 years in your trade with verifiable project references</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-mh-hunter-green rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-army-black dark:text-dark-text mb-1">Safety Certification</h4>
                      <p className="text-gray-600 dark:text-dark-text-secondary text-sm">OSHA 10 or 30 certification (we can help you obtain this)</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-mh-hunter-green rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-army-black dark:text-dark-text mb-1">Financial Stability</h4>
                      <p className="text-gray-600 dark:text-dark-text-secondary text-sm">Demonstrated financial capacity and credit references</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Preferred Qualities */}
              <div className="bg-white dark:bg-dark-surface-2 rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-army-gold rounded-full flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-army-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-army-black dark:text-dark-text">Preferred Qualities</h3>
                </div>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-army-gold rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-army-black dark:text-dark-text mb-1">Military Background</h4>
                      <p className="text-gray-600 dark:text-dark-text-secondary text-sm">Veterans and military spouses are especially encouraged to apply</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-army-gold rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-army-black dark:text-dark-text mb-1">Technology Adoption</h4>
                      <p className="text-gray-600 dark:text-dark-text-secondary text-sm">Willingness to use project management and communication technology</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-army-gold rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-army-black dark:text-dark-text mb-1">Quality Focus</h4>
                      <p className="text-gray-600 dark:text-dark-text-secondary text-sm">Commitment to superior craftsmanship and attention to detail</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-army-gold rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-army-black dark:text-dark-text mb-1">Local Presence</h4>
                      <p className="text-gray-600 dark:text-dark-text-secondary text-sm">Based in or able to work regularly in the Pacific Northwest region</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-army-gold rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-army-black dark:text-dark-text mb-1">Team Collaboration</h4>
                      <p className="text-gray-600 dark:text-dark-text-secondary text-sm">Strong communication skills and ability to work as part of a larger team</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="text-center mt-16">
              <div className="bg-mh-hunter-green/5 border border-mh-hunter-green/20 rounded-xl p-8 max-w-3xl mx-auto hover:bg-mh-hunter-green/10 transition-all duration-500 transform hover:scale-105">
                <h3 className="text-2xl font-bold text-army-black dark:text-dark-text mb-4">Meet Our Standards?</h3>
                <p className="text-gray-600 dark:text-dark-text-secondary mb-6">
                  If you meet our requirements and share our values, we'd love to discuss partnership opportunities with you.
                </p>
                <button
                  onClick={() => document.getElementById('application-form')?.scrollIntoView({ behavior: 'smooth' })}
                  className="inline-flex items-center px-8 py-3 bg-mh-hunter-green text-white rounded-lg font-semibold hover:bg-mh-hunter-green/90 transition-all duration-300 transform hover:scale-105 hover:shadow-lg group"
                >
                  Apply for Partnership
                  <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Application Process Timeline */}
        <section className="py-20 bg-white dark:bg-dark-surface transition-colors duration-300">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-army-black dark:text-dark-text mb-4">
                Partnership Application Process
              </h2>
              <p className="text-xl text-gray-600 dark:text-dark-text-secondary max-w-3xl mx-auto">
                Our streamlined process ensures we find the right partners quickly while maintaining our high standards.
              </p>
            </div>

            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-mh-hunter-green/20 dark:bg-mh-hunter-green/30 hidden lg:block"></div>

              <div className="space-y-12 lg:space-y-24">
                {/* Step 1: Application */}
                <div className="relative flex flex-col lg:flex-row items-center group">
                  <div className="lg:w-1/2 lg:pr-12 mb-8 lg:mb-0">
                    <div className="bg-white dark:bg-dark-surface-2 p-8 rounded-xl shadow-lg border-l-4 border-mh-hunter-green hover:shadow-2xl transition-all duration-500 transform group-hover:-translate-y-2 group-hover:rotate-1">
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 bg-mh-hunter-green rounded-full flex items-center justify-center mr-4 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                          <span className="text-white font-bold">1</span>
                        </div>
                        <h3 className="text-xl font-bold text-army-black dark:text-dark-text group-hover:text-mh-hunter-green transition-colors duration-300">Submit Application</h3>
                      </div>
                      <p className="text-gray-600 dark:text-dark-text-secondary mb-4">
                        Complete our comprehensive application form with your company details, experience, and capabilities.
                      </p>
                      <ul className="text-sm text-gray-500 dark:text-dark-text-secondary space-y-2">
                        <li>• Company information and history</li>
                        <li>• Trade specializations</li>
                        <li>• Project portfolio and references</li>
                        <li>• Insurance and licensing documentation</li>
                      </ul>
                    </div>
                  </div>
                  <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-mh-hunter-green rounded-full border-4 border-white dark:border-dark-surface shadow-lg group-hover:scale-125 group-hover:shadow-xl transition-all duration-300"></div>
                  <div className="lg:w-1/2 lg:pl-12">
                    <div className="text-center lg:text-left">
                      <div className="text-4xl font-bold text-mh-hunter-green mb-2 group-hover:scale-110 transition-transform duration-300">1-2 Days</div>
                      <div className="text-gray-600 dark:text-dark-text-secondary">Initial Review</div>
                    </div>
                  </div>
                </div>

                {/* Step 2: Review */}
                <div className="relative flex flex-col lg:flex-row-reverse items-center group">
                  <div className="lg:w-1/2 lg:pl-12 mb-8 lg:mb-0">
                    <div className="bg-white dark:bg-dark-surface-2 p-8 rounded-xl shadow-lg border-l-4 border-blue-600 hover:shadow-2xl transition-all duration-500 transform group-hover:-translate-y-2 group-hover:-rotate-1">
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mr-4 group-hover:scale-110 group-hover:-rotate-12 transition-all duration-300">
                          <span className="text-white font-bold">2</span>
                        </div>
                        <h3 className="text-xl font-bold text-army-black dark:text-dark-text group-hover:text-blue-600 transition-colors duration-300">Qualification Review</h3>
                      </div>
                      <p className="text-gray-600 dark:text-dark-text-secondary mb-4">
                        Our team reviews your application, verifies credentials, and checks references to ensure alignment with our standards.
                      </p>
                      <ul className="text-sm text-gray-500 dark:text-dark-text-secondary space-y-2">
                        <li>• License and insurance verification</li>
                        <li>• Reference checks</li>
                        <li>• Financial review</li>
                        <li>• Safety record assessment</li>
                      </ul>
                    </div>
                  </div>
                  <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white dark:border-dark-surface shadow-lg group-hover:scale-125 group-hover:shadow-xl transition-all duration-300"></div>
                  <div className="lg:w-1/2 lg:pr-12">
                    <div className="text-center lg:text-right">
                      <div className="text-4xl font-bold text-blue-600 mb-2 group-hover:scale-110 transition-transform duration-300">3-5 Days</div>
                      <div className="text-gray-600 dark:text-dark-text-secondary">Thorough Review</div>
                    </div>
                  </div>
                </div>

                {/* Step 3: Interview */}
                <div className="relative flex flex-col lg:flex-row items-center group">
                  <div className="lg:w-1/2 lg:pr-12 mb-8 lg:mb-0">
                    <div className="bg-white dark:bg-dark-surface-2 p-8 rounded-xl shadow-lg border-l-4 border-army-gold hover:shadow-2xl transition-all duration-500 transform group-hover:-translate-y-2 group-hover:rotate-1">
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 bg-army-gold rounded-full flex items-center justify-center mr-4 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                          <span className="text-army-black font-bold">3</span>
                        </div>
                        <h3 className="text-xl font-bold text-army-black dark:text-dark-text group-hover:text-army-gold transition-colors duration-300">Partnership Meeting</h3>
                      </div>
                      <p className="text-gray-600 dark:text-dark-text-secondary mb-4">
                        Meet with our team to discuss partnership opportunities, project types, and establish mutual expectations.
                      </p>
                      <ul className="text-sm text-gray-500 dark:text-dark-text-secondary space-y-2">
                        <li>• Company culture discussion</li>
                        <li>• Project requirements overview</li>
                        <li>• Communication protocols</li>
                        <li>• Payment terms and procedures</li>
                      </ul>
                    </div>
                  </div>
                  <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-army-gold rounded-full border-4 border-white dark:border-dark-surface shadow-lg group-hover:scale-125 group-hover:shadow-xl transition-all duration-300"></div>
                  <div className="lg:w-1/2 lg:pl-12">
                    <div className="text-center lg:text-left">
                      <div className="text-4xl font-bold text-army-gold mb-2 group-hover:scale-110 transition-transform duration-300">1 Hour</div>
                      <div className="text-gray-600 dark:text-dark-text-secondary">Partnership Discussion</div>
                    </div>
                  </div>
                </div>

                {/* Step 4: Approval */}
                <div className="relative flex flex-col lg:flex-row-reverse items-center group">
                  <div className="lg:w-1/2 lg:pl-12 mb-8 lg:mb-0">
                    <div className="bg-white dark:bg-dark-surface-2 p-8 rounded-xl shadow-lg border-l-4 border-green-600 hover:shadow-2xl transition-all duration-500 transform group-hover:-translate-y-2 group-hover:-rotate-1">
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mr-4 group-hover:scale-110 group-hover:-rotate-12 transition-all duration-300">
                          <span className="text-white font-bold">4</span>
                        </div>
                        <h3 className="text-xl font-bold text-army-black dark:text-dark-text group-hover:text-green-600 transition-colors duration-300">Partnership Approval</h3>
                      </div>
                      <p className="text-gray-600 dark:text-dark-text-secondary mb-4">
                        Welcome to the MH Construction network! Complete onboarding and start receiving project opportunities.
                      </p>
                      <ul className="text-sm text-gray-500 dark:text-dark-text-secondary space-y-2">
                        <li>• Partnership agreement execution</li>
                        <li>• System access and training</li>
                        <li>• Project notification setup</li>
                        <li>• First project assignment</li>
                      </ul>
                    </div>
                  </div>
                  <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-green-600 rounded-full border-4 border-white dark:border-dark-surface shadow-lg group-hover:scale-125 group-hover:shadow-xl transition-all duration-300"></div>
                  <div className="lg:w-1/2 lg:pr-12">
                    <div className="text-center lg:text-right">
                      <div className="text-4xl font-bold text-green-600 mb-2 group-hover:scale-110 transition-transform duration-300">1-2 Days</div>
                      <div className="text-gray-600 dark:text-dark-text-secondary">Welcome Onboard</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Timeline Summary */}
            <div className="text-center mt-16">
              <div className="bg-gradient-to-r from-mh-hunter-green/5 to-army-gold/5 border border-mh-hunter-green/20 rounded-xl p-8 max-w-3xl mx-auto">
                <h3 className="text-2xl font-bold text-army-black dark:text-dark-text mb-4">Total Timeline: 7-10 Business Days</h3>
                <p className="text-gray-600 dark:text-dark-text-secondary">
                  Our efficient process gets qualified subcontractors working on projects quickly while ensuring all requirements are met.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Subcontractor Testimonials Section */}
        <section className="py-20 bg-white dark:bg-dark-surface transition-colors duration-300">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-army-black dark:text-dark-text mb-4">
                What Our Partners Say
              </h2>
              <p className="text-xl text-gray-600 dark:text-dark-text-secondary max-w-3xl mx-auto">
                Hear from successful subcontractors who have built thriving partnerships with MH Construction.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Testimonial 1 */}
              <div className="group bg-white dark:bg-dark-surface-2 rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:rotate-1 border border-gray-100 dark:border-dark-border">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-mh-hunter-green to-army-gold rounded-full flex items-center justify-center mr-4 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                    <span className="text-white font-bold text-xl">TE</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-army-black dark:text-dark-text group-hover:text-mh-hunter-green transition-colors duration-300">Thompson Electric</h4>
                    <p className="text-gray-600 dark:text-dark-text-secondary text-sm">Electrical Contractor</p>
                    <div className="flex text-army-gold mt-1">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-700 dark:text-dark-text-secondary italic mb-4 group-hover:text-gray-900 dark:group-hover:text-dark-text transition-colors duration-300">
                  "Working with MH Construction has been a game-changer for our business. Their payment terms are unmatched, and the project quality is consistently excellent. We've grown our team by 40% since becoming a partner."
                </p>
                <div className="flex items-center text-sm text-gray-500 dark:text-dark-text-secondary">
                  <svg className="w-4 h-4 mr-2 text-mh-hunter-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  Partner since 2019 • Seattle, WA
                </div>
              </div>

              {/* Testimonial 2 */}
              <div className="group bg-white dark:bg-dark-surface-2 rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:-rotate-1 border border-gray-100 dark:border-dark-border">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-army-gold to-mh-hunter-green rounded-full flex items-center justify-center mr-4 group-hover:scale-110 group-hover:-rotate-12 transition-all duration-300">
                    <span className="text-white font-bold text-xl">PC</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-army-black dark:text-dark-text group-hover:text-army-gold transition-colors duration-300">Precision Concrete</h4>
                    <p className="text-gray-600 dark:text-dark-text-secondary text-sm">Concrete Specialist</p>
                    <div className="flex text-army-gold mt-1">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-700 dark:text-dark-text-secondary italic mb-4 group-hover:text-gray-900 dark:group-hover:text-dark-text transition-colors duration-300">
                  "The professionalism and support from MH Construction is outstanding. They treat us like true partners, not just subcontractors. The consistent work flow has allowed us to plan and invest in better equipment."
                </p>
                <div className="flex items-center text-sm text-gray-500 dark:text-dark-text-secondary">
                  <svg className="w-4 h-4 mr-2 text-army-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  Partner since 2020 • Tacoma, WA
                </div>
              </div>

              {/* Testimonial 3 */}
              <div className="group bg-white dark:bg-dark-surface-2 rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:rotate-1 border border-gray-100 dark:border-dark-border">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-mh-hunter-green rounded-full flex items-center justify-center mr-4 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                    <span className="text-white font-bold text-xl">AR</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-army-black dark:text-dark-text group-hover:text-blue-600 transition-colors duration-300">Alpine Roofing</h4>
                    <p className="text-gray-600 dark:text-dark-text-secondary text-sm">Roofing Contractor</p>
                    <div className="flex text-army-gold mt-1">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-700 dark:text-dark-text-secondary italic mb-4 group-hover:text-gray-900 dark:group-hover:text-dark-text transition-colors duration-300">
                  "MH Construction's commitment to safety and quality aligns perfectly with our values. The military precision and attention to detail in every project makes working with them a pleasure. Highly recommended!"
                </p>
                <div className="flex items-center text-sm text-gray-500 dark:text-dark-text-secondary">
                  <svg className="w-4 h-4 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  Partner since 2018 • Spokane, WA
                </div>
              </div>

              {/* Testimonial 4 */}
              <div className="group bg-white dark:bg-dark-surface-2 rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:-rotate-1 border border-gray-100 dark:border-dark-border">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-army-gold rounded-full flex items-center justify-center mr-4 group-hover:scale-110 group-hover:-rotate-12 transition-all duration-300">
                    <span className="text-white font-bold text-xl">VP</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-army-black dark:text-dark-text group-hover:text-green-600 transition-colors duration-300">Veteran Plumbing</h4>
                    <p className="text-gray-600 dark:text-dark-text-secondary text-sm">Plumbing Services</p>
                    <div className="flex text-army-gold mt-1">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-700 dark:text-dark-text-secondary italic mb-4 group-hover:text-gray-900 dark:group-hover:text-dark-text transition-colors duration-300">
                  "As a veteran-owned business, we appreciate MH Construction's military heritage and values. The brotherhood extends beyond contracts - they genuinely care about our success and growth."
                </p>
                <div className="flex items-center text-sm text-gray-500 dark:text-dark-text-secondary">
                  <svg className="w-4 h-4 mr-2 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  Partner since 2021 • Bellevue, WA
                </div>
              </div>

              {/* Testimonial 5 */}
              <div className="group bg-white dark:bg-dark-surface-2 rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:rotate-1 border border-gray-100 dark:border-dark-border">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-mh-hunter-green rounded-full flex items-center justify-center mr-4 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                    <span className="text-white font-bold text-xl">EH</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-army-black dark:text-dark-text group-hover:text-purple-600 transition-colors duration-300">Elite HVAC</h4>
                    <p className="text-gray-600 dark:text-dark-text-secondary text-sm">HVAC Contractor</p>
                    <div className="flex text-army-gold mt-1">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-700 dark:text-dark-text-secondary italic mb-4 group-hover:text-gray-900 dark:group-hover:text-dark-text transition-colors duration-300">
                  "The project management and communication from MH Construction is top-notch. They keep us informed every step of the way and always pay exactly when promised. It's refreshing to work with such a professional organization."
                </p>
                <div className="flex items-center text-sm text-gray-500 dark:text-dark-text-secondary">
                  <svg className="w-4 h-4 mr-2 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  Partner since 2022 • Everett, WA
                </div>
              </div>

              {/* Testimonial 6 */}
              <div className="group bg-white dark:bg-dark-surface-2 rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:-rotate-1 border border-gray-100 dark:border-dark-border">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-red-600 to-army-gold rounded-full flex items-center justify-center mr-4 group-hover:scale-110 group-hover:-rotate-12 transition-all duration-300">
                    <span className="text-white font-bold text-xl">SF</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-army-black dark:text-dark-text group-hover:text-red-600 transition-colors duration-300">Summit Flooring</h4>
                    <p className="text-gray-600 dark:text-dark-text-secondary text-sm">Flooring Specialist</p>
                    <div className="flex text-army-gold mt-1">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-700 dark:text-dark-text-secondary italic mb-4 group-hover:text-gray-900 dark:group-hover:text-dark-text transition-colors duration-300">
                  "MH Construction has helped us scale our business significantly. Their diverse project portfolio means consistent work year-round. The partnership has been instrumental in our growth and success."
                </p>
                <div className="flex items-center text-sm text-gray-500 dark:text-dark-text-secondary">
                  <svg className="w-4 h-4 mr-2 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  Partner since 2020 • Vancouver, WA
                </div>
              </div>
            </div>

            {/* Partnership Statistics */}
            <div className="mt-16 text-center">
              <div className="bg-gradient-to-r from-mh-hunter-green/5 to-army-gold/5 border border-mh-hunter-green/20 rounded-xl p-8 max-w-4xl mx-auto">
                <h3 className="text-2xl font-bold text-army-black dark:text-dark-text mb-6">Join Our Growing Network</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-mh-hunter-green mb-2">96%</div>
                    <div className="text-gray-600 dark:text-dark-text-secondary">Partner Retention Rate</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-army-gold mb-2">4.9/5</div>
                    <div className="text-gray-600 dark:text-dark-text-secondary">Average Partner Rating</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-mh-hunter-green mb-2">15 Days</div>
                    <div className="text-gray-600 dark:text-dark-text-secondary">Average Payment Time</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Trade Categories Section */}
        <section className="py-20 bg-gray-50 dark:bg-dark-surface transition-colors duration-300">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-army-black dark:text-dark-text mb-4">
                Trade Categories We Partner With
              </h2>
              <p className="text-xl text-gray-600 dark:text-dark-text-secondary max-w-3xl mx-auto">
                We welcome qualified subcontractors across all construction trades. Join our network of skilled professionals in your specialty.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {/* Electrical */}
              <div className="group bg-white dark:bg-dark-surface-2 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:rotate-1 border border-gray-100 dark:border-dark-border">
                <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-army-black dark:text-dark-text mb-2 group-hover:text-yellow-600 transition-colors duration-300">Electrical</h3>
                <p className="text-gray-600 dark:text-dark-text-secondary text-sm">Licensed electricians for residential, commercial, and industrial projects.</p>
              </div>

              {/* Plumbing */}
              <div className="group bg-white dark:bg-dark-surface-2 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:-rotate-1 border border-gray-100 dark:border-dark-border">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 group-hover:-rotate-12 transition-all duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-army-black dark:text-dark-text mb-2 group-hover:text-blue-600 transition-colors duration-300">Plumbing</h3>
                <p className="text-gray-600 dark:text-dark-text-secondary text-sm">Certified plumbers for new construction, remodels, and service work.</p>
              </div>

              {/* HVAC */}
              <div className="group bg-white dark:bg-dark-surface-2 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:rotate-1 border border-gray-100 dark:border-dark-border">
                <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-green-600 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-army-black dark:text-dark-text mb-2 group-hover:text-green-600 transition-colors duration-300">HVAC</h3>
                <p className="text-gray-600 dark:text-dark-text-secondary text-sm">Heating, ventilation, and air conditioning specialists for all climates.</p>
              </div>

              {/* Concrete */}
              <div className="group bg-white dark:bg-dark-surface-2 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:-rotate-1 border border-gray-100 dark:border-dark-border">
                <div className="w-16 h-16 bg-gradient-to-r from-gray-400 to-gray-600 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 group-hover:-rotate-12 transition-all duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-army-black dark:text-dark-text mb-2 group-hover:text-gray-600 transition-colors duration-300">Concrete</h3>
                <p className="text-gray-600 dark:text-dark-text-secondary text-sm">Foundation, flatwork, and decorative concrete specialists.</p>
              </div>

              {/* Framing */}
              <div className="group bg-white dark:bg-dark-surface-2 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:rotate-1 border border-gray-100 dark:border-dark-border">
                <div className="w-16 h-16 bg-gradient-to-r from-amber-400 to-amber-600 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-army-black dark:text-dark-text mb-2 group-hover:text-amber-600 transition-colors duration-300">Framing</h3>
                <p className="text-gray-600 dark:text-dark-text-secondary text-sm">Skilled framers for residential and commercial construction.</p>
              </div>

              {/* Roofing */}
              <div className="group bg-white dark:bg-dark-surface-2 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:-rotate-1 border border-gray-100 dark:border-dark-border">
                <div className="w-16 h-16 bg-gradient-to-r from-red-400 to-red-600 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 group-hover:-rotate-12 transition-all duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2 2z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 4l4-2 4 2v3H8V4z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-army-black dark:text-dark-text mb-2 group-hover:text-red-600 transition-colors duration-300">Roofing</h3>
                <p className="text-gray-600 dark:text-dark-text-secondary text-sm">Licensed roofers for all material types and weather conditions.</p>
              </div>

              {/* Flooring */}
              <div className="group bg-white dark:bg-dark-surface-2 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:rotate-1 border border-gray-100 dark:border-dark-border">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-purple-600 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-army-black dark:text-dark-text mb-2 group-hover:text-purple-600 transition-colors duration-300">Flooring</h3>
                <p className="text-gray-600 dark:text-dark-text-secondary text-sm">Hardwood, tile, carpet, and specialty flooring installation.</p>
              </div>

              {/* Drywall */}
              <div className="group bg-white dark:bg-dark-surface-2 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:-rotate-1 border border-gray-100 dark:border-dark-border">
                <div className="w-16 h-16 bg-gradient-to-r from-indigo-400 to-indigo-600 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 group-hover:-rotate-12 transition-all duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-army-black dark:text-dark-text mb-2 group-hover:text-indigo-600 transition-colors duration-300">Drywall</h3>
                <p className="text-gray-600 dark:text-dark-text-secondary text-sm">Professional drywall installation, finishing, and texturing.</p>
              </div>

              {/* Painting */}
              <div className="group bg-white dark:bg-dark-surface-2 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:rotate-1 border border-gray-100 dark:border-dark-border">
                <div className="w-16 h-16 bg-gradient-to-r from-pink-400 to-pink-600 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-army-black dark:text-dark-text mb-2 group-hover:text-pink-600 transition-colors duration-300">Painting</h3>
                <p className="text-gray-600 dark:text-dark-text-secondary text-sm">Interior and exterior painting for residential and commercial properties.</p>
              </div>

              {/* Excavation */}
              <div className="group bg-white dark:bg-dark-surface-2 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:-rotate-1 border border-gray-100 dark:border-dark-border">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 group-hover:-rotate-12 transition-all duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-army-black dark:text-dark-text mb-2 group-hover:text-orange-600 transition-colors duration-300">Excavation</h3>
                <p className="text-gray-600 dark:text-dark-text-secondary text-sm">Site preparation, grading, and earthwork specialists.</p>
              </div>

              {/* Landscaping */}
              <div className="group bg-white dark:bg-dark-surface-2 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:rotate-1 border border-gray-100 dark:border-dark-border">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-army-black dark:text-dark-text mb-2 group-hover:text-emerald-600 transition-colors duration-300">Landscaping</h3>
                <p className="text-gray-600 dark:text-dark-text-secondary text-sm">Complete landscaping services including design and installation.</p>
              </div>

              {/* Insulation */}
              <div className="group bg-white dark:bg-dark-surface-2 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:-rotate-1 border border-gray-100 dark:border-dark-border">
                <div className="w-16 h-16 bg-gradient-to-r from-teal-400 to-teal-600 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 group-hover:-rotate-12 transition-all duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-army-black dark:text-dark-text mb-2 group-hover:text-teal-600 transition-colors duration-300">Insulation</h3>
                <p className="text-gray-600 dark:text-dark-text-secondary text-sm">Energy-efficient insulation installation for optimal building performance.</p>
              </div>

              {/* Additional Trades Card */}
              <div className="group bg-gradient-to-r from-mh-hunter-green to-army-gold rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:rotate-1 text-white">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold mb-2">Many More Trades</h3>
                <p className="text-white/90 text-sm mb-4">We partner with specialists in carpentry, welding, masonry, windows, doors, and many other construction trades.</p>
                <div className="text-sm font-medium">Don't see your trade? Apply anyway!</div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="text-center mt-16">
              <div className="bg-white dark:bg-dark-surface-2 rounded-xl p-8 shadow-lg max-w-3xl mx-auto border border-gray-100 dark:border-dark-border">
                <h3 className="text-2xl font-bold text-army-black dark:text-dark-text mb-4">Ready to Join Our Network?</h3>
                <p className="text-gray-600 dark:text-dark-text-secondary mb-6">
                  Whether your trade is listed above or you specialize in something unique, we want to hear from you. 
                  Our diverse project portfolio means opportunities for skilled contractors across all construction disciplines.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="bg-gradient-to-r from-mh-hunter-green to-army-gold text-white font-bold py-3 px-6 rounded-lg hover:from-mh-hunter-green/90 hover:to-army-gold/90 transform hover:scale-105 transition-all duration-300">
                    Apply Now
                  </button>
                  <button className="border-2 border-mh-hunter-green text-mh-hunter-green dark:text-mh-hunter-green font-bold py-3 px-6 rounded-lg hover:bg-mh-hunter-green hover:text-white transform hover:scale-105 transition-all duration-300">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Application Form Section */}
        <section className="py-20 bg-gray-50 dark:bg-dark-surface transition-colors duration-300">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white dark:bg-dark-surface-2 rounded-2xl p-8 md:p-12 shadow-xl border border-gray-100 dark:border-dark-border transition-all duration-500 hover:shadow-2xl transform hover:scale-[1.02]">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-army-black dark:text-dark-text mb-4">
                  Partnership Application
                </h2>
                <p className="text-xl text-gray-600 dark:text-dark-text-secondary max-w-3xl mx-auto">
                  Join our network of elite subcontractors. Complete this comprehensive application to begin your partnership with MH Construction.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-10">
                {/* Company Information Section */}
                <div className="border-l-4 border-mh-hunter-green pl-6">
                  <h3 className="text-2xl font-bold text-army-black dark:text-dark-text mb-6 flex items-center">
                    <svg className="w-6 h-6 text-mh-hunter-green mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                    Company Information
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="group">
                      <label htmlFor="companyName" className="block text-sm font-semibold text-army-black dark:text-dark-text mb-2 group-focus-within:text-mh-hunter-green transition-colors duration-300">
                        Company Name *
                      </label>
                      <input
                        type="text"
                        id="companyName"
                        name="companyName"
                        value={formData.companyName}
                        onChange={handleInputChange}
                        required
                        className="block w-full px-4 py-3 border-2 border-gray-300 dark:border-dark-border rounded-lg focus:outline-none focus:ring-0 focus:border-mh-hunter-green hover:border-mh-hunter-green/50 bg-white dark:bg-dark-surface-3 dark:text-dark-text transition-all duration-300 transform focus:scale-105"
                        placeholder="Enter your company name"
                      />
                    </div>
                    
                    <div className="group">
                      <label htmlFor="yearsInBusiness" className="block text-sm font-semibold text-army-black dark:text-dark-text mb-2 group-focus-within:text-mh-hunter-green transition-colors duration-300">
                        Years in Business *
                      </label>
                      <select
                        id="yearsInBusiness"
                        name="yearsInBusiness"
                        value={formData.yearsInBusiness}
                        onChange={handleInputChange}
                        required
                        className="block w-full px-4 py-3 border-2 border-gray-300 dark:border-dark-border rounded-lg focus:outline-none focus:ring-0 focus:border-mh-hunter-green hover:border-mh-hunter-green/50 bg-white dark:bg-dark-surface-3 dark:text-dark-text transition-all duration-300 transform focus:scale-105"
                      >
                        <option value="">Select years</option>
                        <option value="1-2">1-2 years</option>
                        <option value="3-5">3-5 years</option>
                        <option value="6-10">6-10 years</option>
                        <option value="11-20">11-20 years</option>
                        <option value="20+">20+ years</option>
                      </select>
                    </div>
                    
                    <div className="group">
                      <label htmlFor="licenseNumber" className="block text-sm font-semibold text-army-black dark:text-dark-text mb-2 group-focus-within:text-mh-hunter-green transition-colors duration-300">
                        License Number *
                      </label>
                      <input
                        type="text"
                        id="licenseNumber"
                        name="licenseNumber"
                        value={formData.licenseNumber}
                        onChange={handleInputChange}
                        required
                        className="block w-full px-4 py-3 border-2 border-gray-300 dark:border-dark-border rounded-lg focus:outline-none focus:ring-0 focus:border-mh-hunter-green hover:border-mh-hunter-green/50 bg-white dark:bg-dark-surface-3 dark:text-dark-text transition-all duration-300 transform focus:scale-105"
                        placeholder="State license number"
                      />
                    </div>
                    
                    <div className="group">
                      <label htmlFor="insuranceAmount" className="block text-sm font-semibold text-army-black dark:text-dark-text mb-2 group-focus-within:text-mh-hunter-green transition-colors duration-300">
                        Insurance Coverage *
                      </label>
                      <select
                        id="insuranceAmount"
                        name="insuranceAmount"
                        value={formData.insuranceAmount}
                        onChange={handleInputChange}
                        required
                        className="block w-full px-4 py-3 border-2 border-gray-300 dark:border-dark-border rounded-lg focus:outline-none focus:ring-0 focus:border-mh-hunter-green hover:border-mh-hunter-green/50 bg-white dark:bg-dark-surface-3 dark:text-dark-text transition-all duration-300 transform focus:scale-105"
                      >
                        <option value="">Select coverage amount</option>
                        <option value="500k">$500,000</option>
                        <option value="1m">$1,000,000</option>
                        <option value="2m">$2,000,000</option>
                        <option value="5m">$5,000,000+</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Contact Information Section */}
                <div className="border-l-4 border-army-gold pl-6">
                  <h3 className="text-2xl font-bold text-army-black dark:text-dark-text mb-6 flex items-center">
                    <svg className="w-6 h-6 text-army-gold mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    Contact Information
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="group">
                      <label htmlFor="contactName" className="block text-sm font-semibold text-army-black dark:text-dark-text mb-2 group-focus-within:text-army-gold transition-colors duration-300">
                        Primary Contact Name *
                      </label>
                      <input
                        type="text"
                        id="contactName"
                        name="contactName"
                        value={formData.contactName}
                        onChange={handleInputChange}
                        required
                        className="block w-full px-4 py-3 border-2 border-gray-300 dark:border-dark-border rounded-lg focus:outline-none focus:ring-0 focus:border-army-gold hover:border-army-gold/50 bg-white dark:bg-dark-surface-3 dark:text-dark-text transition-all duration-300 transform focus:scale-105"
                        placeholder="Contact person name"
                      />
                    </div>
                    
                    <div className="group">
                      <label htmlFor="title" className="block text-sm font-semibold text-army-black dark:text-dark-text mb-2 group-focus-within:text-army-gold transition-colors duration-300">
                        Title/Position *
                      </label>
                      <input
                        type="text"
                        id="title"
                        name="title"
                        value={formData.title}
                        onChange={handleInputChange}
                        required
                        className="block w-full px-4 py-3 border-2 border-gray-300 dark:border-dark-border rounded-lg focus:outline-none focus:ring-0 focus:border-army-gold hover:border-army-gold/50 bg-white dark:bg-dark-surface-3 dark:text-dark-text transition-all duration-300 transform focus:scale-105"
                        placeholder="Owner, Project Manager, etc."
                      />
                    </div>
                    
                    <div className="group">
                      <label htmlFor="email" className="block text-sm font-semibold text-army-black dark:text-dark-text mb-2 group-focus-within:text-army-gold transition-colors duration-300">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="block w-full px-4 py-3 border-2 border-gray-300 dark:border-dark-border rounded-lg focus:outline-none focus:ring-0 focus:border-army-gold hover:border-army-gold/50 bg-white dark:bg-dark-surface-3 dark:text-dark-text transition-all duration-300 transform focus:scale-105"
                        placeholder="email@company.com"
                      />
                    </div>
                    
                    <div className="group">
                      <label htmlFor="phone" className="block text-sm font-semibold text-army-black dark:text-dark-text mb-2 group-focus-within:text-army-gold transition-colors duration-300">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className="block w-full px-4 py-3 border-2 border-gray-300 dark:border-dark-border rounded-lg focus:outline-none focus:ring-0 focus:border-army-gold hover:border-army-gold/50 bg-white dark:bg-dark-surface-3 dark:text-dark-text transition-all duration-300 transform focus:scale-105"
                        placeholder="(555) 123-4567"
                      />
                    </div>
                  </div>
                </div>

                {/* Services & Specialties Section */}
                <div className="border-l-4 border-blue-600 pl-6">
                  <h3 className="text-2xl font-bold text-army-black dark:text-dark-text mb-6 flex items-center">
                    <svg className="w-6 h-6 text-blue-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    Services & Specialties
                  </h3>
                  
                  <div className="space-y-6">
                    <div className="group">
                      <label htmlFor="primaryTrade" className="block text-sm font-semibold text-army-black dark:text-dark-text mb-2 group-focus-within:text-blue-600 transition-colors duration-300">
                        Primary Trade *
                      </label>
                      <select
                        id="primaryTrade"
                        name="primaryTrade"
                        value={formData.primaryTrade}
                        onChange={handleInputChange}
                        required
                        className="block w-full px-4 py-3 border-2 border-gray-300 dark:border-dark-border rounded-lg focus:outline-none focus:ring-0 focus:border-blue-600 hover:border-blue-600/50 bg-white dark:bg-dark-surface-3 dark:text-dark-text transition-all duration-300 transform focus:scale-105"
                      >
                        <option value="">Select primary trade</option>
                        <option value="electrical">Electrical</option>
                        <option value="plumbing">Plumbing</option>
                        <option value="hvac">HVAC</option>
                        <option value="concrete">Concrete</option>
                        <option value="framing">Framing</option>
                        <option value="roofing">Roofing</option>
                        <option value="flooring">Flooring</option>
                        <option value="drywall">Drywall</option>
                        <option value="painting">Painting</option>
                        <option value="excavation">Excavation</option>
                        <option value="landscaping">Landscaping</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    
                    <div className="group">
                      <label htmlFor="additionalServices" className="block text-sm font-semibold text-army-black dark:text-dark-text mb-2 group-focus-within:text-blue-600 transition-colors duration-300">
                        Additional Services
                      </label>
                      <textarea
                        id="additionalServices"
                        name="additionalServices"
                        rows={3}
                        value={formData.additionalServices}
                        onChange={handleInputChange}
                        className="block w-full px-4 py-3 border-2 border-gray-300 dark:border-dark-border rounded-lg focus:outline-none focus:ring-0 focus:border-blue-600 hover:border-blue-600/50 bg-white dark:bg-dark-surface-3 dark:text-dark-text transition-all duration-300 transform focus:scale-105"
                        placeholder="List any additional services or specialties you offer..."
                      />
                    </div>
                  </div>
                </div>

                {/* Company Description */}
                <div className="border-l-4 border-green-600 pl-6">
                  <h3 className="text-2xl font-bold text-army-black dark:text-dark-text mb-6 flex items-center">
                    <svg className="w-6 h-6 text-green-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    Company Description & Experience
                  </h3>
                  
                  <div className="group">
                    <label htmlFor="message" className="block text-sm font-semibold text-army-black dark:text-dark-text mb-2 group-focus-within:text-green-600 transition-colors duration-300">
                      Tell us about your company *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      placeholder="Please provide detailed information about your company including: company history, key personnel, project experience, quality certifications, safety record, equipment/capabilities, notable projects, and what makes your company unique..."
                      className="block w-full px-4 py-3 border-2 border-gray-300 dark:border-dark-border rounded-lg focus:outline-none focus:ring-0 focus:border-green-600 hover:border-green-600/50 bg-white dark:bg-dark-surface-3 dark:text-dark-text transition-all duration-300 transform focus:scale-105"
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <div className="pt-8">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-mh-hunter-green to-army-gold text-white font-bold py-4 px-8 rounded-xl hover:from-mh-hunter-green/90 hover:to-army-gold/90 hover:shadow-2xl transform hover:scale-105 hover:-translate-y-1 transition-all duration-500 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center group"
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Submitting Application...
                      </>
                    ) : (
                      <>
                        Submit Partnership Application
                        <svg className="ml-2 h-6 w-6 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </>
                    )}
                  </button>
                  
                  <p className="text-center text-sm text-gray-500 dark:text-dark-text-secondary mt-4">
                    By submitting this application, you agree to our terms and conditions. We'll review your application and contact you within 2 business days.
                  </p>
                </div>
              </form>
            </div>
          </div>
        </section>

        <WhyChooseSection />
      </main>

      <Footer />
    </div>
  )
}
