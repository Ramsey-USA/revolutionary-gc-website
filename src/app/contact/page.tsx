'use client'

import { useState } from 'react'
import { Phone, Mail, MapPin, Clock, Calendar, Send, User, Building, MessageSquare } from 'lucide-react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import WhyChooseSection from '../../components/WhyChooseSection'
import UniversalHeroSection from '../../components/UniversalHeroSection'
import VisualCalendar from '../../components/VisualCalendar'
import ScheduleButton from '../../components/ScheduleButton'

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
    <main className="min-h-screen flex flex-col pt-20 bg-white dark:bg-dark-surface transition-colors duration-300">
      <Header />
      
      <UniversalHeroSection
        title="Get Your Project"
        titleHighlight="Started"
        subtitle="Ready to build something exceptional? Let's discuss your project and create a customized solution that meets your needs with military precision and excellence."
        primaryButton={{
          text: "Schedule Consultation",
          href: "#contact-form"
        }}
        secondaryButton={{
          text: "View Our Services",
          href: "/services"
        }}
      />

      {/* Contact Section */}
      <section id="contact-form" className="py-20 bg-white/25 dark:bg-dark-surface/35 backdrop-blur-sm transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Contact Information */}
            <div className="space-y-8">
              <div className="section-header">
                <h2 className="section-title">
                  <span className="bg-gradient-to-r from-mh-hunter-green to-mh-leather-tan bg-clip-text text-transparent">
                    Let's Build Together
                  </span>
                </h2>
                <p className="section-subtitle">
                  Our team is ready to turn your vision into reality. Whether it's a government facility, educational building, or commercial project, we bring veteran leadership and construction excellence to every job.
                </p>
              </div>

              {/* Contact Cards */}
              <div className="space-y-6">
                <div className="feature-card group">
                  <div className="flex items-start space-x-5">
                    <div className="feature-icon-container feature-icon-primary flex-shrink-0">
                      <Phone size={24} className="icon-utility icon-animate-glow transition-transform duration-300 group-hover:scale-110" />
                    </div>
                    <div className="flex-1">
                      <h3 className="feature-title feature-title-primary mb-2">Phone</h3>
                      <p className="feature-description mb-3">Call us directly for immediate assistance</p>
                      <div className="contact-info">
                        <a href="tel:+15093086489" className="text-mh-hunter-green dark:text-mh-leather-tan hover:text-mh-leather-tan dark:hover:text-mh-hunter-green font-semibold transition-colors duration-300 touch-manipulation text-lg">
                          (509) 308-6489
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="feature-card group">
                  <div className="flex items-start space-x-5">
                    <div className="feature-icon-container feature-icon-secondary flex-shrink-0">
                      <Mail size={24} className="icon-utility icon-animate-float transition-transform duration-300 group-hover:scale-110" />
                    </div>
                    <div className="flex-1">
                      <h3 className="feature-title feature-title-secondary mb-2">Email</h3>
                      <p className="feature-description mb-3">Send us your project details</p>
                      <div className="contact-info">
                        <a href="mailto:info@mhconstruction.com" className="text-mh-leather-tan dark:text-mh-hunter-green hover:text-mh-hunter-green dark:hover:text-mh-leather-tan font-semibold transition-colors duration-300 touch-manipulation text-lg break-words">
                          info@mhconstruction.com
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="feature-card group">
                  <div className="flex items-start space-x-5">
                    <div className="feature-icon-container feature-icon-primary flex-shrink-0">
                      <MapPin size={24} className="icon-utility icon-animate-pulse transition-transform duration-300 group-hover:scale-110" />
                    </div>
                    <div className="flex-1">
                      <h3 className="feature-title feature-title-primary mb-2">Office Location</h3>
                      <p className="feature-description mb-3">Visit us for in-person consultations</p>
                      <div className="contact-info">
                        <div className="text-mh-hunter-green dark:text-mh-leather-tan font-semibold text-lg">
                          <p>3111 N. Capital Ave.</p>
                          <p>Pasco, WA 99301</p>
                          <p className="text-sm text-gray-500 dark:text-dark-text-secondary font-normal mt-2">(Serving the Columbia River Region)</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Business Hours */}
              <div className="feature-card">
                <div className="flex items-start space-x-5 mb-6">
                  <div className="feature-icon-container feature-icon-primary flex-shrink-0">
                    <Clock size={24} className="icon-utility icon-animate-glow" />
                  </div>
                  <div className="flex-1">
                    <h3 className="feature-title feature-title-primary text-xl mb-4">Business Hours</h3>
                    <div className="space-y-3 text-gray-600 dark:text-dark-text-secondary">
                      <div className="flex justify-between items-center">
                        <span className="font-medium">Monday - Friday</span>
                        <span className="font-semibold text-mh-hunter-green dark:text-mh-leather-tan">7:00 AM - 6:00 PM</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="font-medium">Saturday</span>
                        <span className="font-semibold text-mh-hunter-green dark:text-mh-leather-tan">8:00 AM - 4:00 PM</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="font-medium">Sunday</span>
                        <span className="font-semibold text-mh-hunter-green dark:text-mh-leather-tan">Closed</span>
                      </div>
                      <div className="text-sm text-mh-hunter-green dark:text-mh-leather-tan mt-4 pt-3 border-t border-gray-200 dark:border-dark-border">
                        * Emergency services available 24/7
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white/80 dark:bg-dark-surface-2/80 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-xl border border-gray-100 dark:border-dark-border transition-all duration-500 hover:shadow-2xl">
              <div className="section-header text-center mb-8">
                <div className="flex items-center justify-center mb-4">
                  <div className="feature-icon-container feature-icon-primary mr-4">
                    <MessageSquare size={28} className="icon-utility icon-animate-float" />
                  </div>
                  <h3 className="section-title text-2xl md:text-3xl mb-0">
                    <span className="bg-gradient-to-r from-mh-hunter-green to-mh-leather-tan bg-clip-text text-transparent">
                      Start Your Project
                    </span>
                  </h3>
                </div>
                <p className="section-subtitle">
                  Tell us about your project and we'll provide a detailed proposal
                </p>
              </div>

              <form onSubmit={handleContactSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="feature-title feature-title-primary text-sm flex items-center">
                      <User size={16} className="mr-2 text-mh-hunter-green dark:text-mh-leather-tan icon-utility" />
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={contactData.name}
                      onChange={handleContactChange}
                      className="w-full px-4 py-3 bg-white/90 dark:bg-dark-surface/90 backdrop-blur-sm rounded-lg border border-gray-200 dark:border-dark-border text-black dark:text-dark-text placeholder-gray-500 dark:placeholder-dark-text-secondary focus:border-mh-hunter-green dark:focus:border-mh-leather-tan focus:ring-2 focus:ring-mh-hunter-green/20 dark:focus:ring-mh-leather-tan/20 transition-all duration-300 touch-manipulation hover:border-gray-400 dark:hover:border-gray-500 hover:shadow-md"
                      placeholder="Your full name"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="company" className="feature-title feature-title-secondary text-sm flex items-center">
                      <Building size={16} className="mr-2 text-mh-leather-tan dark:text-mh-hunter-green icon-utility" />
                      Organization
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={contactData.company}
                      onChange={handleContactChange}
                      className="w-full px-4 py-3 bg-white/90 dark:bg-dark-surface/90 backdrop-blur-sm rounded-lg border border-gray-200 dark:border-dark-border text-black dark:text-dark-text placeholder-gray-500 dark:placeholder-dark-text-secondary focus:border-mh-leather-tan dark:focus:border-mh-hunter-green focus:ring-2 focus:ring-mh-leather-tan/20 dark:focus:ring-mh-hunter-green/20 transition-all duration-300 touch-manipulation hover:border-gray-400 dark:hover:border-gray-500 hover:shadow-md"
                      placeholder="Company or organization"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="email" className="feature-title feature-title-primary text-sm flex items-center">
                      <Mail size={16} className="mr-2 text-mh-hunter-green dark:text-mh-leather-tan icon-utility" />
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={contactData.email}
                      onChange={handleContactChange}
                      className="w-full px-4 py-3 bg-white/90 dark:bg-dark-surface/90 backdrop-blur-sm rounded-lg border border-gray-200 dark:border-dark-border text-black dark:text-dark-text placeholder-gray-500 dark:placeholder-dark-text-secondary focus:border-mh-hunter-green dark:focus:border-mh-leather-tan focus:ring-2 focus:ring-mh-hunter-green/20 dark:focus:ring-mh-leather-tan/20 transition-all duration-300 touch-manipulation hover:border-gray-400 dark:hover:border-gray-500 hover:shadow-md"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="phone" className="feature-title feature-title-secondary text-sm flex items-center">
                      <Phone size={16} className="mr-2 text-mh-leather-tan dark:text-mh-hunter-green icon-utility" />
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={contactData.phone}
                      onChange={handleContactChange}
                      className="w-full px-4 py-3 bg-white/90 dark:bg-dark-surface/90 backdrop-blur-sm rounded-lg border border-gray-200 dark:border-dark-border text-black dark:text-dark-text placeholder-gray-500 dark:placeholder-dark-text-secondary focus:border-mh-leather-tan dark:focus:border-mh-hunter-green focus:ring-2 focus:ring-mh-leather-tan/20 dark:focus:ring-mh-hunter-green/20 transition-all duration-300 touch-manipulation hover:border-gray-400 dark:hover:border-gray-500 hover:shadow-md"
                      placeholder="(509) 308-6489"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="projectType" className="feature-title feature-title-primary text-sm">
                      Project Type *
                    </label>
                    <select
                      id="projectType"
                      name="projectType"
                      required
                      value={contactData.projectType}
                      onChange={handleContactChange}
                      className="w-full px-4 py-3 bg-white/90 dark:bg-dark-surface/90 backdrop-blur-sm rounded-lg border border-gray-200 dark:border-dark-border text-black dark:text-dark-text focus:border-mh-hunter-green dark:focus:border-mh-leather-tan focus:ring-2 focus:ring-mh-hunter-green/20 dark:focus:ring-mh-leather-tan/20 transition-all duration-300 touch-manipulation hover:border-gray-400 dark:hover:border-gray-500 hover:shadow-md"
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
                    <label htmlFor="projectLocation" className="feature-title feature-title-secondary text-sm flex items-center">
                      <MapPin size={16} className="mr-2 text-mh-leather-tan dark:text-mh-hunter-green icon-utility" />
                      Project Location *
                    </label>
                    <input
                      type="text"
                      id="projectLocation"
                      name="projectLocation"
                      required
                      value={contactData.projectLocation}
                      onChange={handleContactChange}
                      className="w-full px-4 py-3 bg-white/90 dark:bg-dark-surface/90 backdrop-blur-sm rounded-lg border border-gray-200 dark:border-dark-border text-black dark:text-dark-text placeholder-gray-500 dark:placeholder-dark-text-secondary focus:border-mh-leather-tan dark:focus:border-mh-hunter-green focus:ring-2 focus:ring-mh-leather-tan/20 dark:focus:ring-mh-hunter-green/20 transition-all duration-300 touch-manipulation hover:border-gray-400 dark:hover:border-gray-500 hover:shadow-md"
                      placeholder="City, State"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="projectTimeline" className="feature-title feature-title-primary text-sm flex items-center">
                      <Calendar size={16} className="mr-2 text-mh-hunter-green dark:text-mh-leather-tan icon-utility" />
                      Project Timeline *
                    </label>
                    <select
                      id="projectTimeline"
                      name="projectTimeline"
                      required
                      value={contactData.projectTimeline}
                      onChange={handleContactChange}
                      className="w-full px-4 py-3 bg-white/90 dark:bg-dark-surface/90 backdrop-blur-sm rounded-lg border border-gray-200 dark:border-dark-border text-black dark:text-dark-text focus:border-mh-hunter-green dark:focus:border-mh-leather-tan focus:ring-2 focus:ring-mh-hunter-green/20 dark:focus:ring-mh-leather-tan/20 transition-all duration-300 touch-manipulation hover:border-gray-400 dark:hover:border-gray-500 hover:shadow-md"
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
                    <label htmlFor="budget" className="feature-title feature-title-secondary text-sm">
                      Project Budget
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      value={contactData.budget}
                      onChange={handleContactChange}
                      className="w-full px-4 py-3 bg-white/90 dark:bg-dark-surface/90 backdrop-blur-sm rounded-lg border border-gray-200 dark:border-dark-border text-black dark:text-dark-text focus:border-mh-leather-tan dark:focus:border-mh-hunter-green focus:ring-2 focus:ring-mh-leather-tan/20 dark:focus:ring-mh-hunter-green/20 transition-all duration-300 touch-manipulation hover:border-gray-400 dark:hover:border-gray-500 hover:shadow-md"
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
                  <label htmlFor="message" className="feature-title feature-title-secondary text-sm">
                    Project Details *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    value={contactData.message}
                    onChange={handleContactChange}
                    rows={6}
                    className="w-full px-4 py-3 bg-white/90 dark:bg-dark-surface/90 backdrop-blur-sm rounded-lg border border-gray-200 dark:border-dark-border text-black dark:text-dark-text placeholder-gray-500 dark:placeholder-dark-text-secondary focus:border-mh-leather-tan dark:focus:border-mh-hunter-green focus:ring-2 focus:ring-mh-leather-tan/20 dark:focus:ring-mh-hunter-green/20 transition-all duration-300 resize-none hover:shadow-md touch-manipulation"
                    placeholder="Please describe your project, including size, specific requirements, and any special considerations..."
                  />
                </div>

                {/* Submit Button */}
                <div className="pt-6">
                  <button
                    type="submit"
                    disabled={isSubmittingContact}
                    className="w-full bg-gradient-to-r from-mh-hunter-green to-mh-leather-tan text-white font-bold py-4 px-8 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center touch-manipulation group text-lg min-h-[64px]"
                  >
                    {isSubmittingContact ? (
                      <span className="flex items-center space-x-3">
                        <svg className="animate-spin h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        <span>Sending Message...</span>
                      </span>
                    ) : (
                      <span className="flex items-center space-x-3">
                        <Send size={24} className="icon-action icon-animate-glow group-hover:scale-110 transition-transform duration-300" />
                        <span>Send Project Inquiry</span>
                      </span>
                    )}
                  </button>
                  <p className="text-center text-sm text-gray-500 dark:text-dark-text-secondary mt-4">
                    * Required fields. We typically respond within 24 hours during business days.
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Calendar Section */}
      <section className="py-20 bg-white/50 dark:bg-dark-surface/50 backdrop-blur-sm transition-colors duration-300">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <VisualCalendar />
        </div>
      </section>

      {/* Alternative Scheduling Options */}
      <section className="py-16 bg-gray-50/75 dark:bg-dark-surface-2/75 backdrop-blur-sm transition-colors duration-300">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="section-header mb-12">
            <h3 className="section-title text-2xl md:text-3xl">
              <span className="bg-gradient-to-r from-mh-hunter-green to-mh-leather-tan bg-clip-text text-transparent">
                Prefer a Different Approach?
              </span>
            </h3>
            <p className="section-subtitle text-lg max-w-2xl mx-auto">
              We offer multiple ways to connect with our team. Choose the option that works best for your schedule and preferences.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Quick Scheduling */}
            <div className="feature-card group text-center flex flex-col h-full">
              <div className="feature-icon-container feature-icon-primary mx-auto mb-6">
                <Calendar size={32} className="icon-utility icon-animate-glow transition-transform duration-300 group-hover:scale-110" />
              </div>
              <h4 className="feature-title feature-title-primary text-xl mb-3">Quick Scheduling</h4>
              <p className="feature-description mb-8 flex-grow">
                Use our streamlined scheduling system for fast consultation booking
              </p>
              <div className="mt-auto">
                <ScheduleButton variant="primary" size="md" className="w-full">
                  Schedule Now
                </ScheduleButton>
              </div>
            </div>

            {/* Direct Contact */}
            <div className="feature-card group text-center flex flex-col h-full">
              <div className="feature-icon-container feature-icon-secondary mx-auto mb-6">
                <Phone size={32} className="icon-utility icon-animate-float transition-transform duration-300 group-hover:scale-110" />
              </div>
              <h4 className="feature-title feature-title-secondary text-xl mb-3">Direct Contact</h4>
              <p className="feature-description mb-8 flex-grow">
                Call us directly for immediate assistance and consultation
              </p>
              <div className="mt-auto">
                <a
                  href="tel:+15093086489"
                  className="inline-flex items-center justify-center w-full px-6 py-4 bg-gradient-to-r from-mh-leather-tan to-mh-hunter-green hover:from-mh-hunter-green hover:to-mh-leather-tan text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 touch-manipulation min-h-[56px]"
                >
                  <Phone size={20} className="mr-3 icon-action" />
                  <span>(509) 308-6489</span>
                </a>
              </div>
            </div>

            {/* Email Contact */}
            <div className="feature-card group text-center flex flex-col h-full">
              <div className="feature-icon-container feature-icon-primary mx-auto mb-6">
                <Mail size={32} className="icon-utility icon-animate-pulse transition-transform duration-300 group-hover:scale-110" />
              </div>
              <h4 className="feature-title feature-title-primary text-xl mb-3">Email Inquiry</h4>
              <p className="feature-description mb-8 flex-grow">
                Send detailed project information for comprehensive consultation
              </p>
              <div className="mt-auto">
                <a
                  href="mailto:info@mhconstruction.com"
                  className="inline-flex items-center justify-center w-full px-6 py-4 bg-gradient-to-r from-mh-hunter-green to-mh-leather-tan hover:from-mh-leather-tan hover:to-mh-hunter-green text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 touch-manipulation min-h-[56px]"
                >
                  <Mail size={20} className="mr-3 icon-action" />
                  <span>Send Email</span>
                </a>
              </div>
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
