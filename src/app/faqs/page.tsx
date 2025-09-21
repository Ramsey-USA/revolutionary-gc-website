'use client'

import { useState } from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import WhyChooseSection from '../../components/WhyChooseSection'
import UniversalHeroSection from '../../components/UniversalHeroSection'
import {
  Info, Landmark, Handshake, ClipboardList,
  HelpCircle, FolderOpen, Zap, CheckCircle,
  Search as SearchIcon, Phone, Mail, MapPin,
  FileText, LifeBuoy, ThumbsUp, ThumbsDown
} from 'lucide-react'

export default function FAQsPage() {
  const [activeCategory, setActiveCategory] = useState('general')
  const [openFAQ, setOpenFAQ] = useState<string | null>(null)
  const [searchTerm, setSearchTerm] = useState('')

  const categories = [
    { id: 'general', label: 'General', icon: <Info className="w-6 h-6" aria-hidden="true" /> },
    { id: 'government', label: 'Government Projects', icon: <Landmark className="w-6 h-6" aria-hidden="true" /> },
    { id: 'subcontractors', label: 'Subcontractors', icon: <Handshake className="w-6 h-6" aria-hidden="true" /> },
    { id: 'projects', label: 'Project Process', icon: <ClipboardList className="w-6 h-6" aria-hidden="true" /> }
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
    <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900">
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

        {/* FAQ Statistics (icon updates) */}
        <section className="py-16 bg-gradient-to-br from-mh-hunter-green/5 via-white to-mh-leather-tan/5 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-300">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center group min-h-[180px] flex flex-col justify-center">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 bg-mh-hunter-green/10 dark:bg-mh-hunter-green/20 group-hover:bg-mh-leather-tan/80 transition-all duration-300 group-hover:scale-110">
                  <HelpCircle className="w-8 h-8 text-mh-hunter-green group-hover:text-white" aria-hidden="true" />
                </div>
                <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-mh-leather-tan to-mh-hunter-green bg-clip-text text-transparent mb-2">16+</div>
                <div className="text-sm md:text-base text-gray-600 dark:text-dark-text-secondary">Comprehensive FAQs</div>
              </div>
              
              <div className="text-center group min-h-[180px] flex flex-col justify-center">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 bg-mh-hunter-green/10 dark:bg-mh-hunter-green/20 group-hover:bg-mh-leather-tan/80 transition-all duration-300 group-hover:scale-110">
                  <FolderOpen className="w-8 h-8 text-mh-hunter-green group-hover:text-white" aria-hidden="true" />
                </div>
                <div className="text-2xl md:text-3xl font-bold text-mh-leather-tan dark:text-mh-leather-tan mb-2">4</div>
                <div className="text-sm md:text-base text-gray-600 dark:text-dark-text-secondary">Topic Categories</div>
              </div>
              
              <div className="text-center group min-h-[180px] flex flex-col justify-center">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 bg-mh-hunter-green/10 dark:bg-mh-hunter-green/20 group-hover:bg-mh-leather-tan/80 transition-all duration-300 group-hover:scale-110">
                  <Zap className="w-8 h-8 text-mh-hunter-green group-hover:text-white" aria-hidden="true" />
                </div>
                <div className="text-2xl md:text-3xl font-bold text-mh-leather-tan dark:text-mh-leather-tan mb-2">&lt;2hrs</div>
                <div className="text-sm md:text-base text-gray-600 dark:text-dark-text-secondary">Response Time</div>
              </div>
              
              <div className="text-center group min-h-[180px] flex flex-col justify-center">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 bg-mh-hunter-green/10 dark:bg-mh-hunter-green/20 group-hover:bg-mh-leather-tan/80 transition-all duration-300 group-hover:scale-110">
                  <CheckCircle className="w-8 h-8 text-mh-hunter-green group-hover:text-white" aria-hidden="true" />
                </div>
                <div className="text-2xl md:text-3xl font-bold text-mh-leather-tan dark:text-mh-leather-tan mb-2">97%</div>
                <div className="text-sm md:text-base text-gray-600 dark:text-dark-text-secondary">Satisfaction Rate</div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Content */}
        <section id="faq-content" className="py-20 bg-mh-hunter-green/5 dark:bg-gray-900 transition-colors duration-300 relative">
          {/* Soft radial brand backdrop */}
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(56,104,81,0.08),transparent_70%)] dark:bg-[radial-gradient(circle_at_center,rgba(189,146,100,0.08),transparent_70%)]"></div>
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

            {/* Category Navigation (use component icons) */}
            <div className="flex flex-wrap justify-center gap-6 mb-16">
              {categories.map(category => (
                <button
                  key={category.id}
                  onClick={() => {
                    setActiveCategory(category.id)
                    setOpenFAQ(null)
                  }}
                  className={`group relative px-8 py-4 rounded-xl font-semibold transition-all duration-400 flex items-center space-x-3 transform hover:scale-105 hover:-translate-y-1 shadow-lg hover:shadow-2xl min-h-[70px] min-w-[200px] justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-mh-hunter-green ${
                    activeCategory === category.id
                      ? 'bg-gradient-to-r from-mh-hunter-green to-mh-leather-tan text-white shadow-2xl scale-105'
                      : 'bg-white dark:bg-gray-800 text-mh-hunter-green dark:text-mh-leather-tan border border-mh-hunter-green/30 dark:border-mh-leather-tan/30 hover:border-mh-leather-tan/60'
                  }`}
                  aria-pressed={activeCategory === category.id}
                >
                  <span className={`text-xl transition-transform duration-300 ${
                    activeCategory === category.id ? 'scale-110' : 'group-hover:scale-125 group-hover:rotate-12'
                  }`}>
                    {category.icon}
                  </span>
                  <span className="relative">
                    {category.label}
                    {activeCategory === category.id && (
                      <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-white/60 rounded-full"></span>
                    )}
                  </span>
                  {activeCategory === category.id && (
                    <span className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-white/80 shadow ring-2 ring-white/40 animate-pulse" />
                  )}
                </button>
              ))}
            </div>

            {/* Search Bar icon swap */}
            <div className="max-w-2xl mx-auto mb-12">
              <div className="relative group">
                {/* glow */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-mh-hunter-green/10 to-mh-leather-tan/10 opacity-0 group-focus-within:opacity-100 transition"></div>
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <SearchIcon className="h-5 w-5 sm:h-6 sm:w-6 text-mh-hunter-green group-focus-within:text-mh-leather-tan transition-colors duration-300" aria-hidden="true" />
                </div>
                <input
                  type="text"
                  placeholder="Search frequently asked questions..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="block w-full pl-10 sm:pl-12 pr-24 py-3 sm:py-4 rounded-xl border-2 border-mh-hunter-green/30 dark:border-mh-hunter-green/40 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:border-mh-hunter-green focus:ring-2 focus:ring-mh-hunter-green/40 transition shadow-lg focus:shadow-2xl"
                />
                {searchTerm && (
                  <button
                    onClick={() => setSearchTerm('')}
                    className="absolute top-1/2 -translate-y-1/2 right-12 text-sm font-semibold text-mh-hunter-green hover:text-mh-leather-tan transition"
                  >
                    Clear
                  </button>
                )}
                {/* Submit (optional hidden) */}
                <span className="absolute inset-y-0 right-2 flex items-center">
                  <span className="px-3 py-1 text-xs rounded-md bg-mh-hunter-green/10 text-mh-hunter-green dark:bg-mh-leather-tan/20 dark:text-mh-leather-tan">
                    {filteredFAQs.length}
                  </span>
                </span>
              </div>
              {(searchTerm || activeCategory !== 'general') && (
                <div className="mt-4 flex flex-wrap items-center justify-center gap-4">
                  <p
                    className="text-sm text-gray-600 dark:text-gray-400"
                    aria-live="polite"
                  >
                    {filteredFAQs.length} result{filteredFAQs.length !== 1 && 's'}
                  </p>
                  <button
                    onClick={() => { setSearchTerm(''); setActiveCategory('general'); setOpenFAQ(null) }}
                    className="text-sm font-medium text-mh-hunter-green dark:text-mh-leather-tan hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mh-hunter-green/50 rounded"
                  >
                    Reset Filters
                  </button>
                </div>
              )}
            </div>

            {/* FAQ List (accordion icon + feedback icons) */}
            <div className="space-y-6">
              {filteredFAQs.map((faq, index) => {
                const expanded = openFAQ === faq.id
                return (
                  <div
                    key={faq.id}
                    className="group relative bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-mh-hunter-green/20 dark:border-mh-hunter-green/30 overflow-hidden transition-all duration-500 hover:shadow-2xl hover:border-mh-leather-tan/40"
                    style={{ animationDelay: `${index * 60}ms` }}
                  >
                    <button
                      onClick={() => toggleFAQ(faq.id)}
                      aria-expanded={expanded}
                      aria-controls={`faq-panel-${faq.id}`}
                      id={`faq-trigger-${faq.id}`}
                      className={`w-full text-left px-8 py-6 flex items-center justify-between gap-6 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mh-hunter-green/60 transition ${
                        expanded
                          ? 'bg-gradient-to-r from-mh-hunter-green/5 to-mh-leather-tan/5'
                          : 'hover:bg-gradient-to-r hover:from-mh-hunter-green/5 hover:to-mh-leather-tan/5'
                      }`}
                    >
                      <div className="flex items-center gap-4 flex-1">
                        <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
                          expanded
                            ? 'bg-gradient-to-r from-mh-hunter-green to-mh-leather-tan text-white shadow-lg scale-110'
                            : 'bg-mh-hunter-green/10 dark:bg-mh-hunter-green/20 text-mh-hunter-green group-hover:bg-mh-hunter-green/20'
                        }`}>
                          <HelpCircle className="w-6 h-6" aria-hidden="true" />
                        </div>
                        <h3 className={`text-lg font-semibold leading-relaxed transition-colors ${
                          expanded
                            ? 'bg-gradient-to-r from-mh-hunter-green to-mh-leather-tan bg-clip-text text-transparent'
                            : 'text-gray-900 dark:text-white group-hover:text-mh-hunter-green dark:group-hover:text-mh-leather-tan'
                        }`}>
                          {faq.question}
                        </h3>
                      </div>
                      <span
                        className={`inline-flex items-center justify-center w-10 h-10 rounded-lg border transition-all ${
                          expanded
                            ? 'rotate-180 border-mh-leather-tan/50 text-mh-leather-tan'
                            : 'border-mh-hunter-green/30 text-mh-hunter-green group-hover:scale-110'
                        }`}
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </span>
                    </button>
                    {expanded && (
                      <div
                        id={`faq-panel-${faq.id}`}
                        role="region"
                        aria-labelledby={`faq-trigger-${faq.id}`}
                        className="px-8 pb-8 pt-4 animate-fade-in-up"
                      >
                        <div className="border-l-4 border-mh-hunter-green/70 pl-6 py-4 bg-gradient-to-r from-mh-hunter-green/5 to-mh-leather-tan/5 dark:from-mh-hunter-green/10 dark:to-mh-leather-tan/10 rounded-md">
                          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                        {/* Feedback row simplified */}
                        <div className="mt-5 flex items-center justify-end gap-4 text-xs text-gray-500">
                          <span>Was this helpful?</span>
                          <button className="px-3 py-1 rounded-md border border-mh-hunter-green/30 text-mh-hunter-green hover:bg-mh-hunter-green/10 transition inline-flex items-center gap-1">
                            <ThumbsUp className="w-4 h-4" aria-hidden="true" /> Yes
                          </button>
                          <button className="px-3 py-1 rounded-md border border-mh-leather-tan/30 text-mh-leather-tan hover:bg-mh-leather-tan/10 transition inline-flex items-center gap-1">
                            <ThumbsDown className="w-4 h-4" aria-hidden="true" /> No
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                )
              })}
            </div>

            {/* Additional Resources (icon swaps) */}
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
                <div className="group bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 border border-mh-hunter-green/20 dark:border-mh-hunter-green/30 hover:border-mh-leather-tan/40 hover:shadow-2xl transition-all duration-500">
                  <div className="w-16 h-16 bg-gradient-to-r from-mh-hunter-green to-mh-leather-tan rounded-full flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all">
                    <FileText className="w-8 h-8 text-white" aria-hidden="true" />
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
                <div className="group bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 border border-mh-hunter-green/20 dark:border-mh-hunter-green/30 hover:border-mh-leather-tan/40 hover:shadow-2xl transition-all duration-500">
                  <div className="w-16 h-16 bg-gradient-to-r from-mh-leather-tan to-mh-hunter-green rounded-full flex items-center justify-center mb-6 group-hover:scale-110 group-hover:-rotate-12 transition-all">
                    <Landmark className="w-8 h-8 text-white" aria-hidden="true" />
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
                <div className="group bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 border border-mh-hunter-green/20 dark:border-mh-hunter-green/30 hover:border-mh-leather-tan/40 hover:shadow-2xl transition-all duration-500">
                  <div className="w-16 h-16 bg-gradient-to-r from-mh-hunter-green to-mh-leather-tan rounded-full flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all">
                    <LifeBuoy className="w-8 h-8 text-white" aria-hidden="true" />
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

            {/* Contact CTA icons */}
            <div className="mt-16 text-center">
              <div className="bg-gradient-to-r from-mh-hunter-green/10 to-mh-leather-tan/10 border border-mh-hunter-green/30 dark:border-mh-leather-tan/40 rounded-2xl p-8 md:p-12 shadow-xl max-w-4xl mx-auto relative overflow-hidden">
                <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_top_right,rgba(56,104,81,0.15),transparent_60%)]" />
                <div className="mb-8">
                  <h3 className="text-3xl md:text-4xl font-bold text-black dark:text-dark-text mb-4">
                    Still Have Questions?
                  </h3>
                  <p className="text-xl text-gray-600 dark:text-dark-text-secondary mb-6 max-w-2xl mx-auto">
                    Our expert team is here to help! Contact us for personalized answers about your specific project requirements and how we can serve you.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  <div className="group bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1 border border-mh-hunter-green/20 dark:border-mh-hunter-green/30">
                    <div className="w-12 h-12 bg-mh-hunter-green/10 dark:bg-mh-hunter-green/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-mh-hunter-green/20 group-hover:scale-110 transition-all">
                      <Phone className="w-6 h-6 text-mh-hunter-green" aria-hidden="true" />
                    </div>
                    <div className="text-center">
                      <h4 className="font-bold text-black dark:text-dark-text mb-2">Call Us</h4>
                      <p className="text-gray-600 dark:text-dark-text-secondary text-sm mb-3">Speak directly with our team</p>
                      <p className="text-mh-hunter-green font-semibold">(509) 555-0123</p>
                    </div>
                  </div>

                  {/* Email (unified border classes) */}
                  <div className="group bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1 border border-mh-hunter-green/20 dark:border-mh-hunter-green/30 min-h-[180px] flex flex-col justify-center">
                    <div className="w-12 h-12 bg-mh-leather-tan/10 dark:bg-mh-leather-tan/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-mh-leather-tan/20 dark:group-hover:bg-mh-leather-tan/30 group-hover:scale-110 transition-all duration-300">
                      <Mail className="w-6 h-6 text-mh-leather-tan" aria-hidden="true" />
                    </div>
                    <div className="text-center">
                      <h4 className="font-bold text-black dark:text-dark-text mb-2">Email Us</h4>
                      <p className="text-gray-600 dark:text-dark-text-secondary text-sm mb-3">Get detailed responses</p>
                      <p className="text-mh-leather-tan font-semibold">info@mhconstruction.com</p>
                    </div>
                  </div>

                  {/* Office (unified border classes) */}
                  <div className="group bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1 border border-mh-hunter-green/20 dark:border-mh-hunter-green/30 min-h-[180px] flex flex-col justify-center">
                    <div className="w-12 h-12 bg-mh-hunter-green/10 dark:bg-mh-hunter-green/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-mh-hunter-green/20 dark:group-hover:bg-mh-hunter-green/30 group-hover:scale-110 transition-all duration-300">
                      <MapPin className="w-6 h-6 text-mh-hunter-green" aria-hidden="true" />
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