'use client'

import { useState } from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import WhyChooseSection from '../../components/WhyChooseSection'
import StarDecorations from '../../components/StarDecorations'

export default function FAQsPage() {
  const [activeCategory, setActiveCategory] = useState('general')
  const [openFAQ, setOpenFAQ] = useState<string | null>(null)

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
      answer: 'We are based in the Tri-Cities area of Washington State and primarily serve the Columbia River region, Eastern Washington, and the broader Pacific Northwest. For larger projects or specialized work, we can expand our service area.'
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

  const filteredFAQs = faqs.filter(faq => faq.category === activeCategory)

  const toggleFAQ = (id: string) => {
    setOpenFAQ(openFAQ === id ? null : id)
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-mh-forest-green to-army-black py-32 overflow-hidden">
          <StarDecorations />
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                Frequently Asked <span className="text-army-gold">Questions</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Find answers to common questions about our construction services, 
                government contracting expertise, and subcontractor partnerships.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Content */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Category Navigation */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {categories.map(category => (
                <button
                  key={category.id}
                  onClick={() => {
                    setActiveCategory(category.id)
                    setOpenFAQ(null)
                  }}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center space-x-2 ${
                    activeCategory === category.id
                      ? 'bg-mh-forest-green text-white shadow-lg'
                      : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                  }`}
                >
                  <span className="text-lg">{category.icon}</span>
                  <span>{category.label}</span>
                </button>
              ))}
            </div>

            {/* FAQ List */}
            <div className="space-y-4">
              {filteredFAQs.map(faq => (
                <div
                  key={faq.id}
                  className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden"
                >
                  <button
                    onClick={() => toggleFAQ(faq.id)}
                    className="w-full px-8 py-6 text-left hover:bg-gray-50 transition-colors duration-200 flex items-center justify-between"
                  >
                    <h3 className="text-lg font-semibold text-army-black pr-4">
                      {faq.question}
                    </h3>
                    <svg
                      className={`w-6 h-6 text-mh-forest-green transform transition-transform duration-200 flex-shrink-0 ${
                        openFAQ === faq.id ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  
                  {openFAQ === faq.id && (
                    <div className="px-8 pb-6">
                      <div className="pt-4 border-t border-gray-100">
                        <p className="text-gray-600 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Contact CTA */}
            <div className="mt-16 text-center">
              <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
                <h3 className="text-2xl font-bold text-army-black mb-4">
                  Still Have Questions?
                </h3>
                <p className="text-gray-600 mb-6">
                  Our team is here to help! Contact us for more information about our services or to discuss your project requirements.
                </p>
                <a
                  href="/contact"
                  className="inline-flex items-center bg-gradient-to-r from-mh-forest-green to-army-gold text-white font-bold py-3 px-8 rounded-lg hover:from-mh-forest-green/90 hover:to-army-gold/90 transition-all duration-300"
                >
                  Contact Us Today
                  <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </a>
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
