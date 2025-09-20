'use client'

import { useState } from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import WhyChooseSection from '../../components/WhyChooseSection'
import UniversalHeroSection from '../../components/UniversalHeroSection'

export default function FAQsPage() {
  const [activeCategory, setActiveCategory] = useState('general')
  const [openFAQ, setOpenFAQ] = useState<string | null>(null)
  const [searchTerm, setSearchTerm] = useState('')

  const categories = [
    { id: 'general', label: 'General', icon: '🏢' },
    { id: 'government', label: 'Government Projects', icon: '��️' },
    { id: 'subcontractors', label: 'Subcontractors', icon: '🤝' },
    { id: 'projects', label: 'Project Process', icon: '⚙️' }
  ]

  const faqs = [
    {
      id: 'gen1',
      category: 'general',
      question: 'What services does MH Construction provide?',
      answer: 'MH Construction provides comprehensive construction services including new construction, renovations, design-build, project management, and specialty construction for government, commercial, healthcare, and educational facilities.'
    },
    {
      id: 'gen2',
      category: 'general',
      question: 'What makes MH Construction different from other contractors?',
      answer: 'As a veteran-owned business, we bring military precision, discipline, and leadership to every project. Our team understands government requirements, security protocols, and the importance of mission-critical deadlines.'
    },
    {
      id: 'gen3',
      category: 'general',
      question: 'What geographic areas do you serve?',
      answer: 'We are based at 3111 N. Capital Ave., Pasco, WA 99301 and primarily serve the Columbia River region, Eastern Washington, and the broader Pacific Northwest. For larger projects or specialized work, we can expand our service area.'
    },
    {
      id: 'gen4',
      category: 'general',
      question: 'What certifications and licenses does MH Construction hold?',
      answer: 'MH Construction holds all required state and federal licensing for commercial construction. We maintain current certifications for government contracting, security clearances for sensitive projects, and specialized trade certifications.'
    },
    {
      id: 'gov1',
      category: 'government',
      question: 'Do you work with government contracts and what experience do you have?',
      answer: 'Yes, government contracting is one of our specialties. Our veteran leadership team has extensive experience with federal, state, and local government projects. We understand the unique requirements, security protocols, and compliance standards required for government work.'
    },
    {
      id: 'gov2',
      category: 'government',
      question: 'What security clearances can your team obtain for sensitive projects?',
      answer: 'Our team can obtain various levels of security clearances including Secret and Top Secret clearances when required for military installations or other sensitive government facilities. Our veteran background facilitates this process.'
    },
    {
      id: 'gov3',
      category: 'government',
      question: 'How do you handle prevailing wage requirements on government projects?',
      answer: 'We have extensive experience with prevailing wage requirements and ensure full compliance with all federal and state wage determinations. Our payroll and project management systems are designed to track and document prevailing wage compliance throughout the project lifecycle.'
    },
    {
      id: 'gov4',
      category: 'government',
      question: 'What is your experience with LEED and sustainable building requirements?',
      answer: 'We have significant experience with LEED certification requirements and sustainable building practices. Many government projects require LEED Silver or Gold certification, and our team is trained in green building techniques and materials.'
    },
    {
      id: 'sub1',
      category: 'subcontractors',
      question: 'How do I join your subcontractor bid list?',
      answer: 'You can join our elite subcontractor network by completing our comprehensive registration form on the Subcontractors page. We review all applications and contact qualified subcontractors when suitable projects become available.'
    },
    {
      id: 'sub2',
      category: 'subcontractors',
      question: 'What are the requirements to become a subcontractor with MH Construction?',
      answer: 'We require current state licensing, appropriate insurance coverage (minimum $1M), bonding capacity, and a proven track record of quality work. We also look for subcontractors who share our commitment to excellence and professional standards.'
    },
    {
      id: 'sub3',
      category: 'subcontractors',
      question: 'How quickly do you pay subcontractors?',
      answer: 'We maintain a 98% on-time payment record and typically process payments within 30 days of approved invoicing. For government projects, payments are processed as soon as we receive payment from the client, often faster than industry standard.'
    },
    {
      id: 'sub4',
      category: 'subcontractors',
      question: 'What types of projects can subcontractors expect to bid on?',
      answer: 'Our subcontractors work on a variety of high-value projects including government buildings, schools, hospitals, emergency services facilities, and commercial buildings. Project sizes typically range from $100K to $10M+.'
    },
    {
      id: 'proj1',
      category: 'projects',
      question: 'What is your typical project timeline from start to finish?',
      answer: 'Project timelines vary based on scope and complexity. Small renovations may take 2-3 months, while large new construction projects can take 12-24 months. We provide detailed timeline estimates during the planning phase and maintain regular progress updates.'
    },
    {
      id: 'proj2',
      category: 'projects',
      question: 'How do you ensure quality control throughout the construction process?',
      answer: 'We implement military-grade quality control procedures with regular inspections, photographic documentation, and compliance checklists. Our project managers conduct daily site visits and maintain detailed progress reports to ensure every aspect meets our high standards.'
    },
    {
      id: 'proj3',
      category: 'projects',
      question: 'What happens if there are changes or modifications needed during construction?',
      answer: 'We have a formal change order process that documents all modifications, cost impacts, and timeline adjustments. All changes are reviewed and approved by the client before implementation, ensuring transparency and proper budget management.'
    },
    {
      id: 'proj4',
      category: 'projects',
      question: 'Do you provide warranty coverage on your work?',
      answer: 'Yes, we provide comprehensive warranty coverage on all our work. Standard warranties range from 1-2 years depending on the type of work, with extended warranties available for critical systems. We also maintain strong relationships with manufacturers to ensure product warranty support.'
    }
  ]

  const filteredFAQs = faqs.filter(faq => {
    const matchesCategory = faq.category === activeCategory
    const matchesSearch = searchTerm === '' || 
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const toggleFAQ = (id: string) => {
    setOpenFAQ(openFAQ === id ? null : id)
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <UniversalHeroSection
          title="Frequently Asked"
          titleHighlight="Questions"
          subtitle="Find comprehensive answers to questions about our construction services, government contracting expertise, and partnership opportunities. Get the information you need to make informed decisions."
          primaryButton={{
            text: "Browse FAQ Categories",
            href: "#faq-content"
          }}
          secondaryButton={{
            text: "Contact Our Team",
            href: "/contact"
          }}
        />

        {/* FAQ Statistics */}
        <section className="py-16 bg-white dark:bg-dark-surface-2 transition-colors duration-300">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center group min-h-[180px] flex flex-col justify-center">
                <div className="bg-mh-hunter-green/10 dark:bg-mh-hunter-green/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:bg-mh-leather-tan dark:group-hover:bg-mh-leather-tan group-hover:bg-opacity-90 dark:group-hover:bg-opacity-90 transition-all duration-300 group-hover:scale-110">
                  <span className="text-2xl">❓</span>
                </div>
                <div className="text-2xl md:text-3xl font-bold text-mh-leather-tan dark:text-mh-leather-tan mb-2">16+</div>
                <div className="text-sm md:text-base text-gray-600 dark:text-dark-text-secondary">Comprehensive FAQs</div>
              </div>
              
              <div className="text-center group min-h-[180px] flex flex-col justify-center">
                <div className="bg-mh-hunter-green/10 dark:bg-mh-hunter-green/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:bg-mh-leather-tan dark:group-hover:bg-mh-leather-tan group-hover:bg-opacity-90 dark:group-hover:bg-opacity-90 transition-all duration-300 group-hover:scale-110">
                  <span className="text-2xl">📁</span>
                </div>
                <div className="text-2xl md:text-3xl font-bold text-mh-leather-tan dark:text-mh-leather-tan mb-2">4</div>
                <div className="text-sm md:text-base text-gray-600 dark:text-dark-text-secondary">Topic Categories</div>
              </div>
              
              <div className="text-center group min-h-[180px] flex flex-col justify-center">
                <div className="bg-mh-hunter-green/10 dark:bg-mh-hunter-green/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:bg-mh-leather-tan dark:group-hover:bg-mh-leather-tan group-hover:bg-opacity-90 dark:group-hover:bg-opacity-90 transition-all duration-300 group-hover:scale-110">
                  <span className="text-2xl">⚡</span>
                </div>
                <div className="text-2xl md:text-3xl font-bold text-mh-leather-tan dark:text-mh-leather-tan mb-2">&lt;2hrs</div>
                <div className="text-sm md:text-base text-gray-600 dark:text-dark-text-secondary">Response Time</div>
              </div>
              
              <div className="text-center group min-h-[180px] flex flex-col justify-center">
                <div className="bg-mh-hunter-green/10 dark:bg-mh-hunter-green/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:bg-mh-leather-tan dark:group-hover:bg-mh-leather-tan group-hover:bg-opacity-90 dark:group-hover:bg-opacity-90 transition-all duration-300 group-hover:scale-110">
                  <span className="text-2xl">✅</span>
                </div>
                <div className="text-2xl md:text-3xl font-bold text-mh-leather-tan dark:text-mh-leather-tan mb-2">97%</div>
                <div className="text-sm md:text-base text-gray-600 dark:text-dark-text-secondary">Satisfaction Rate</div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Content */}
        <section id="faq-content" className="py-20 bg-gray-50 dark:bg-dark-surface transition-colors duration-300">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Section Header */}
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-mh-hunter-green dark:text-dark-text mb-4">
                Browse by Category
              </h2>
              <p className="text-xl text-gray-600 dark:text-dark-text-secondary max-w-3xl mx-auto">
                Select a category below to find answers to specific questions about our services and processes.
              </p>
            </div>

            {/* Category Navigation */}
            <div className="flex flex-wrap justify-center gap-6 mb-16">
              {categories.map(category => (
                <button
                  key={category.id}
                  onClick={() => {
                    setActiveCategory(category.id)
                    setOpenFAQ(null)
                  }}
                  className={`group px-8 py-4 rounded-xl font-semibold transition-all duration-500 flex items-center space-x-3 transform hover:scale-105 hover:-translate-y-1 shadow-lg hover:shadow-2xl min-h-[70px] min-w-[200px] justify-center ${
                    activeCategory === category.id
                      ? 'bg-gradient-to-r from-mh-hunter-green to-mh-leather-tan text-white shadow-2xl scale-105'
                      : 'bg-white dark:bg-dark-surface-2 text-gray-700 dark:text-dark-text hover:bg-gradient-to-r hover:from-mh-hunter-green/10 hover:to-mh-leather-tan/10 border border-gray-200 dark:border-dark-border hover:border-mh-hunter-green/30'
                  }`}
                >
                  <span className={`text-xl transition-transform duration-300 ${
                    activeCategory === category.id ? 'scale-110' : 'group-hover:scale-110 group-hover:rotate-12'
                  }`}>
                    {category.icon}
                  </span>
                  <span className="relative">
                    {category.label}
                    {activeCategory === category.id && (
                      <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-white/50 rounded-full"></div>
                    )}
                  </span>
                  {activeCategory === category.id && (
                    <svg className="w-5 h-5 text-white animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  )}
                </button>
              ))}
            </div>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-12">
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <svg className="h-5 w-5 sm:h-6 sm:w-6 text-mh-hunter-green group-focus-within:text-mh-leather-tan transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <input
                  type="text"
                  placeholder="Search frequently asked questions..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="block w-full pl-10 sm:pl-12 pr-12 py-3 sm:py-4 border-2 border-gray-300 dark:border-dark-border rounded-xl focus:outline-none focus:ring-0 focus:border-mh-hunter-green hover:border-mh-hunter-green/50 bg-white dark:bg-dark-surface-2 dark:text-dark-text transition-all duration-300 text-base sm:text-lg placeholder-gray-500 dark:placeholder-dark-text-secondary shadow-lg focus:shadow-2xl transform focus:scale-[1.02] touch-manipulation"
                />
                {searchTerm && (
                  <button
                    onClick={() => setSearchTerm('')}
                    className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-mh-hunter-green transition-colors duration-300 touch-manipulation min-w-[44px] min-h-[44px] justify-center"
                  >
                    <svg className="h-5 w-5 sm:h-6 sm:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                )}
              </div>
              {searchTerm && (
                <div className="mt-3 text-center text-gray-600 dark:text-dark-text-secondary text-sm sm:text-base">
                  {filteredFAQs.length} result{filteredFAQs.length !== 1 ? 's' : ''} found for "{searchTerm}"
                </div>
              )}
            </div>

            {/* FAQ List */}
            <div className="space-y-6">
              {filteredFAQs.length === 0 ? (
                <div className="text-center py-16">
                  <div className="w-24 h-24 bg-gray-100 dark:bg-dark-surface-2 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-12 h-12 text-gray-400 dark:text-dark-text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-600 dark:text-dark-text-secondary mb-2">No FAQs found</h3>
                  <p className="text-gray-500 dark:text-dark-text-secondary">Try adjusting your search terms or browse a different category.</p>
                </div>
              ) : (
                filteredFAQs.map((faq, index) => (
                  <div
                    key={faq.id}
                    className="group bg-white dark:bg-dark-surface-2 rounded-xl shadow-lg border border-gray-100 dark:border-dark-border overflow-hidden transition-all duration-500 hover:shadow-2xl transform hover:-translate-y-1 hover:scale-[1.02] animate-fade-in-up min-h-[120px] flex flex-col"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <button
                      onClick={() => toggleFAQ(faq.id)}
                      className="w-full px-8 py-6 text-left hover:bg-gradient-to-r hover:from-mh-hunter-green/5 hover:to-mh-leather-tan/5 dark:hover:from-mh-hunter-green/10 dark:hover:to-mh-leather-tan/10 transition-all duration-300 flex items-center justify-between group-hover:px-10 flex-1"
                    >
                      <div className="flex items-center space-x-4 flex-1">
                        <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 flex-shrink-0 ${
                          openFAQ === faq.id 
                            ? 'bg-gradient-to-r from-mh-hunter-green to-mh-leather-tan text-white shadow-lg scale-110' 
                            : 'bg-mh-hunter-green/10 dark:bg-mh-hunter-green/20 text-mh-hunter-green group-hover:bg-mh-hunter-green/20 dark:group-hover:bg-mh-hunter-green/30 group-hover:scale-110'
                        }`}>
                          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <h3 className="text-lg font-semibold text-black dark:text-dark-text pr-4 group-hover:text-mh-hunter-green transition-colors duration-300 leading-relaxed">
                          {faq.question}
                        </h3>
                      </div>
                      <div className={`flex items-center space-x-2 transition-all duration-300 flex-shrink-0 ${
                        openFAQ === faq.id ? 'text-mh-hunter-green' : 'text-gray-400 group-hover:text-mh-hunter-green'
                      }`}>
                        <span className="text-sm font-medium hidden sm:block">
                          {openFAQ === faq.id ? 'Close' : 'Open'}
                        </span>
                        <svg
                          className={`w-6 h-6 transform transition-all duration-300 ${
                            openFAQ === faq.id ? 'rotate-180 scale-110' : 'group-hover:scale-110'
                          }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </button>
                    
                    {openFAQ === faq.id && (
                      <div className="px-8 pb-8 animate-fade-in-up">
                        <div className="pt-6 border-t border-gradient-to-r from-mh-hunter-green/20 to-mh-leather-tan/20">
                          <div className="bg-gradient-to-r from-mh-hunter-green/5 to-mh-leather-tan/5 dark:from-mh-hunter-green/10 dark:to-mh-leather-tan/10 rounded-lg p-6 border-l-4 border-mh-hunter-green">
                            <p className="text-gray-700 dark:text-dark-text-secondary leading-relaxed text-base">
                              {faq.answer}
                            </p>
                          </div>
                          <div className="mt-4 flex items-center justify-between text-sm text-gray-500 dark:text-dark-text-secondary">
                            <div className="flex items-center space-x-2">
                              <svg className="w-4 h-4 text-mh-hunter-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                              <span>Helpful?</span>
                            </div>
                            <div className="flex items-center space-x-3">
                              <button className="flex items-center space-x-1 text-mh-hunter-green hover:text-mh-leather-tan transition-colors duration-300">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                                </svg>
                                <span>Yes</span>
                              </button>
                              <button className="flex items-center space-x-1 text-gray-400 hover:text-mh-leather-tan transition-colors duration-300">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14H5.236a2 2 0 01-1.789-2.894l3.5-7A2 2 0 018.736 3h4.018c.163 0 .326.02.485.06L17 4m-7 10v2a2 2 0 002 2h.095c.5 0 .905-.405.905-.905 0-.714.211-1.412.608-2.006L17 13V4m-7 10h2m5-10h2a2 2 0 012 2v6a2 2 0 01-2 2h-2.5" />
                                </svg>
                                <span>No</span>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ))
              )}
            </div>

            {/* Helpful Resources Section */}
            <div className="mt-20 mb-16">
              <div className="text-center mb-12">
                <h3 className="text-2xl md:text-3xl font-bold text-black dark:text-dark-text mb-4">
                  Additional Resources
                </h3>
                <p className="text-gray-600 dark:text-dark-text-secondary max-w-2xl mx-auto">
                  Explore more resources to help you understand our services and processes.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Project Guide */}
                <div className="group bg-white dark:bg-dark-surface-2 rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:rotate-1 border border-gray-100 dark:border-dark-border min-h-[280px] flex flex-col">
                  <div className="w-16 h-16 bg-gradient-to-r from-mh-hunter-green to-mh-leather-tan rounded-full flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 flex-shrink-0">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <h4 className="text-xl font-bold text-black dark:text-dark-text mb-3 group-hover:text-mh-hunter-green transition-colors duration-300">Project Planning Guide</h4>
                      <p className="text-gray-600 dark:text-dark-text-secondary mb-4 leading-relaxed">Comprehensive guide to planning your construction project from start to finish.</p>
                    </div>
                    <a href="/guides/project-planning" className="inline-flex items-center text-mh-hunter-green hover:text-mh-leather-tan font-semibold transition-colors duration-300 mt-auto">
                      Download Guide
                      <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                      </svg>
                    </a>
                  </div>
                </div>

                {/* Government Contracting */}
                <div className="group bg-white dark:bg-dark-surface-2 rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:-rotate-1 border border-gray-100 dark:border-dark-border min-h-[280px] flex flex-col">
                  <div className="w-16 h-16 bg-gradient-to-r from-mh-leather-tan to-mh-hunter-green rounded-full flex items-center justify-center mb-6 group-hover:scale-110 group-hover:-rotate-12 transition-all duration-300 flex-shrink-0">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <h4 className="text-xl font-bold text-black dark:text-dark-text mb-3 group-hover:text-mh-hunter-green transition-colors duration-300">Government Contracting Info</h4>
                      <p className="text-gray-600 dark:text-dark-text-secondary mb-4 leading-relaxed">Learn about our government contracting capabilities and experience.</p>
                    </div>
                    <a href="/services" className="inline-flex items-center text-mh-hunter-green hover:text-mh-leather-tan font-semibold transition-colors duration-300 mt-auto">
                      Learn More
                      <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </a>
                  </div>
                </div>

                {/* Contact Support */}
                <div className="group bg-white dark:bg-dark-surface-2 rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:rotate-1 border border-gray-100 dark:border-dark-border min-h-[280px] flex flex-col">
                  <div className="w-16 h-16 bg-gradient-to-r from-mh-hunter-green to-mh-leather-tan rounded-full flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 flex-shrink-0">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </div>
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <h4 className="text-xl font-bold text-black dark:text-dark-text mb-3 group-hover:text-mh-hunter-green transition-colors duration-300">24/7 Support</h4>
                      <p className="text-gray-600 dark:text-dark-text-secondary mb-4 leading-relaxed">Get immediate assistance from our dedicated support team.</p>
                    </div>
                    <a href="/contact" className="inline-flex items-center text-mh-hunter-green hover:text-mh-leather-tan font-semibold transition-colors duration-300 mt-auto">
                      Get Support
                      <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact CTA */}
            <div className="mt-16 text-center">
              <div className="bg-gradient-to-r from-mh-hunter-green/5 to-mh-leather-tan/5 border border-mh-hunter-green/20 rounded-2xl p-8 md:p-12 shadow-xl max-w-4xl mx-auto">
                <div className="mb-8">
                  <h3 className="text-3xl md:text-4xl font-bold text-black dark:text-dark-text mb-4">
                    Still Have Questions?
                  </h3>
                  <p className="text-xl text-gray-600 dark:text-dark-text-secondary mb-6 max-w-2xl mx-auto">
                    Our expert team is here to help! Contact us for personalized answers about your specific project requirements and how we can serve you.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  {/* Phone */}
                  <div className="group bg-white dark:bg-dark-surface-2 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1 border border-gray-100 dark:border-dark-border min-h-[180px] flex flex-col justify-center">
                    <div className="w-12 h-12 bg-mh-hunter-green/10 dark:bg-mh-hunter-green/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-mh-hunter-green/20 dark:group-hover:bg-mh-hunter-green/30 group-hover:scale-110 transition-all duration-300">
                      <svg className="w-6 h-6 text-mh-hunter-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div className="text-center">
                      <h4 className="font-bold text-black dark:text-dark-text mb-2">Call Us</h4>
                      <p className="text-gray-600 dark:text-dark-text-secondary text-sm mb-3">Speak directly with our team</p>
                      <p className="text-mh-hunter-green font-semibold">(509) 555-0123</p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="group bg-white dark:bg-dark-surface-2 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1 border border-gray-100 dark:border-dark-border min-h-[180px] flex flex-col justify-center">
                    <div className="w-12 h-12 bg-mh-leather-tan/10 dark:bg-mh-leather-tan/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-mh-leather-tan/20 dark:group-hover:bg-mh-leather-tan/30 group-hover:scale-110 transition-all duration-300">
                      <svg className="w-6 h-6 text-mh-leather-tan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div className="text-center">
                      <h4 className="font-bold text-black dark:text-dark-text mb-2">Email Us</h4>
                      <p className="text-gray-600 dark:text-dark-text-secondary text-sm mb-3">Get detailed responses</p>
                      <p className="text-mh-leather-tan font-semibold">info@mhconstruction.com</p>
                    </div>
                  </div>

                  {/* Office */}
                  <div className="group bg-white dark:bg-dark-surface-2 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1 border border-gray-100 dark:border-dark-border min-h-[180px] flex flex-col justify-center">
                    <div className="w-12 h-12 bg-mh-hunter-green/10 dark:bg-mh-hunter-green/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-mh-hunter-green/20 dark:group-hover:bg-mh-hunter-green/30 group-hover:scale-110 transition-all duration-300">
                      <svg className="w-6 h-6 text-mh-hunter-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div className="text-center">
                      <h4 className="font-bold text-black dark:text-dark-text mb-2">Visit Us</h4>
                      <p className="text-gray-600 dark:text-dark-text-secondary text-sm mb-3">Schedule a consultation</p>
                      <p className="text-mh-hunter-green font-semibold text-sm leading-relaxed">3111 N. Capital Ave.<br />Pasco, WA 99301</p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-6 justify-center items-center max-w-lg mx-auto">
                  <a
                    href="/contact"
                    className="inline-flex items-center bg-gradient-to-r from-mh-hunter-green to-mh-leather-tan text-white font-bold py-4 px-8 rounded-xl hover:from-mh-hunter-green/90 hover:to-mh-leather-tan/90 hover:shadow-2xl transform hover:scale-105 hover:-translate-y-1 transition-all duration-500 group w-full sm:w-auto min-w-[200px] justify-center"
                  >
                    Contact Our Team
                    <svg className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </a>
                  
                  <a
                    href="/estimate"
                    className="inline-flex items-center border-2 border-mh-hunter-green text-mh-hunter-green dark:text-mh-hunter-green font-bold py-4 px-8 rounded-xl hover:bg-mh-hunter-green hover:text-white hover:shadow-2xl transform hover:scale-105 hover:-translate-y-1 transition-all duration-500 group w-full sm:w-auto min-w-[200px] justify-center"
                  >
                    Get Free Estimate
                    <svg className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <WhyChooseSection />
      </main>

      <Footer />
    </div>
  )
}
