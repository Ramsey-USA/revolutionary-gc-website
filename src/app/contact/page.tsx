'use client'

import { useState } from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import WhyChooseSection from '../../components/WhyChooseSection'
import StarDecorations from '../../components/StarDecorations'

export default function ContactPage() {
  const [contactData, setContactData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    projectType: '',
    projectLocation: '',
    projectTimeline: '',
    budget: '',
    message: ''
  })

  const [isSubmittingContact, setIsSubmittingContact] = useState(false)

  const handleContactChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setContactData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmittingContact(true)
    
    // Simulate form submission
    setTimeout(() => {
      alert('Thank you for your message! We will get back to you within 24 hours.')
      setContactData({
        name: '',
        company: '',
        email: '',
        phone: '',
        projectType: '',
        projectLocation: '',
        projectTimeline: '',
        budget: '',
        message: ''
      })
      setIsSubmittingContact(false)
    }, 1000)
  }

  return (
    <main className="min-h-screen flex flex-col pt-20">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-army-green via-mh-forest-green to-army-green text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        
        {/* Star decorations */}
        <StarDecorations />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-army-gold rounded-full mb-6 mx-auto">
            <svg className="w-10 h-10 text-army-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Get Your Project Started
          </h1>
          <p className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed opacity-90">
            Ready to build something exceptional? Let's discuss your project and create a customized solution that meets your needs with military precision and excellence.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-army-black mb-6">
                  <span className="bg-gradient-to-r from-mh-forest-green to-army-green bg-clip-text text-transparent">
                    Let's Build Together
                  </span>
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Our team is ready to turn your vision into reality. Whether it's a government facility, educational building, or commercial project, we bring veteran leadership and construction excellence to every job.
                </p>
              </div>

              {/* Contact Cards */}
              <div className="space-y-6">
                <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-mh-forest-green rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-army-black mb-2">Phone</h3>
                      <p className="text-gray-600">Call us directly for immediate assistance</p>
                      <a href="tel:+15095551234" className="text-mh-forest-green font-semibold hover:text-army-green transition-colors">
                        (509) 555-1234
                      </a>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-army-gold rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-army-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-army-black mb-2">Email</h3>
                      <p className="text-gray-600">Send us your project details</p>
                      <a href="mailto:info@mhconstruction.com" className="text-army-gold font-semibold hover:text-amber-600 transition-colors">
                        info@mhconstruction.com
                      </a>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-army-black mb-2">Office Location</h3>
                      <p className="text-gray-600">Visit us for in-person consultations</p>
                      <p className="text-blue-600 font-semibold">
                        Tri-Cities, Washington<br />
                        <span className="text-sm text-gray-500">(Serving the Columbia River Region)</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Business Hours */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <h3 className="text-lg font-bold text-army-black mb-4 flex items-center">
                  <svg className="w-5 h-5 mr-2 text-mh-forest-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Business Hours
                </h3>
                <div className="space-y-2 text-gray-600">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span className="font-semibold">7:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span className="font-semibold">8:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span className="font-semibold">Closed</span>
                  </div>
                  <div className="text-sm text-mh-forest-green mt-3">
                    * Emergency services available 24/7
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl border border-gray-100">
              <div className="text-center mb-8">
                <h3 className="text-2xl md:text-3xl font-bold text-army-black mb-4">
                  Start Your Project
                </h3>
                <p className="text-gray-600">
                  Tell us about your project and we'll provide a detailed proposal
                </p>
              </div>

              <form onSubmit={handleContactSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="block text-sm font-medium text-army-black">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={contactData.name}
                      onChange={handleContactChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-mh-forest-green focus:border-mh-forest-green transition-colors bg-white hover:border-gray-400"
                      placeholder="Your full name"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="company" className="block text-sm font-medium text-army-black">
                      Organization
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={contactData.company}
                      onChange={handleContactChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-mh-forest-green focus:border-mh-forest-green transition-colors bg-white hover:border-gray-400"
                      placeholder="Company or organization"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="email" className="block text-sm font-medium text-army-black">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={contactData.email}
                      onChange={handleContactChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-mh-forest-green focus:border-mh-forest-green transition-colors bg-white hover:border-gray-400"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="phone" className="block text-sm font-medium text-army-black">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={contactData.phone}
                      onChange={handleContactChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-mh-forest-green focus:border-mh-forest-green transition-colors bg-white hover:border-gray-400"
                      placeholder="(509) 555-0123"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="projectType" className="block text-sm font-medium text-army-black">
                      Project Type *
                    </label>
                    <select
                      id="projectType"
                      name="projectType"
                      required
                      value={contactData.projectType}
                      onChange={handleContactChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-mh-forest-green focus:border-mh-forest-green transition-colors bg-white hover:border-gray-400"
                    >
                      <option value="">Select project type</option>
                      <option value="government">Government Building</option>
                      <option value="educational">Educational Facility</option>
                      <option value="healthcare">Healthcare Facility</option>
                      <option value="emergency">Emergency Services</option>
                      <option value="commercial">Commercial Building</option>
                      <option value="industrial">Industrial Facility</option>
                      <option value="religious">Religious Building</option>
                      <option value="recreational">Recreational Facility</option>
                      <option value="renovation">Renovation/Remodel</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="projectLocation" className="block text-sm font-medium text-army-black">
                      Project Location *
                    </label>
                    <input
                      type="text"
                      id="projectLocation"
                      name="projectLocation"
                      required
                      value={contactData.projectLocation}
                      onChange={handleContactChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-mh-forest-green focus:border-mh-forest-green transition-colors bg-white hover:border-gray-400"
                      placeholder="City, State"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="projectTimeline" className="block text-sm font-medium text-army-black">
                      Project Timeline *
                    </label>
                    <select
                      id="projectTimeline"
                      name="projectTimeline"
                      required
                      value={contactData.projectTimeline}
                      onChange={handleContactChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-mh-forest-green focus:border-mh-forest-green transition-colors bg-white hover:border-gray-400"
                    >
                      <option value="">Select timeline</option>
                      <option value="immediate">Immediate (within 30 days)</option>
                      <option value="2-3-months">2-3 months</option>
                      <option value="3-6-months">3-6 months</option>
                      <option value="6-12-months">6-12 months</option>
                      <option value="1-year-plus">1+ years</option>
                      <option value="planning">Still planning</option>
                    </select>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="budget" className="block text-sm font-medium text-army-black">
                      Project Budget
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      value={contactData.budget}
                      onChange={handleContactChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-mh-forest-green focus:border-mh-forest-green transition-colors bg-white hover:border-gray-400"
                    >
                      <option value="">Select budget range</option>
                      <option value="under-500k">Under $500K</option>
                      <option value="500k-1m">$500K - $1M</option>
                      <option value="1m-5m">$1M - $5M</option>
                      <option value="5m-10m">$5M - $10M</option>
                      <option value="10m-plus">$10M+</option>
                      <option value="discuss">Prefer to discuss</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="block text-sm font-medium text-army-black">
                    Project Details *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    value={contactData.message}
                    onChange={handleContactChange}
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-mh-forest-green focus:border-mh-forest-green transition-colors bg-white hover:border-gray-400 resize-none"
                    placeholder="Please describe your project, including size, specific requirements, and any special considerations..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmittingContact}
                  className="w-full bg-gradient-to-r from-mh-forest-green to-army-green text-white px-8 py-4 rounded-xl text-lg font-bold hover:from-army-green hover:to-mh-forest-green transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none shadow-lg hover:shadow-2xl flex items-center justify-center"
                >
                  {isSubmittingContact ? (
                    <span className="flex items-center">
                      <svg className="animate-spin -ml-1 mr-3 h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending Message...
                    </span>
                  ) : (
                    <>
                      <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                      </svg>
                      Send Project Inquiry
                    </>
                  )}
                </button>

                <p className="text-center text-sm text-gray-500">
                  * Required fields. We typically respond within 24 hours.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose MH Construction Section */}
      <WhyChooseSection />

      <Footer />
    </main>
  )
}
