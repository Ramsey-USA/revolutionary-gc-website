'use client'

import { useState } from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import WhyChooseSection from '../../components/WhyChooseSection'
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react'

// Only import Firebase in client environment with proper error handling
let db: any = null
let functions: any = null
let addDoc: any = null
let collection: any = null
let Timestamp: any = null
let httpsCallable: any = null

if (typeof window !== 'undefined') {
  try {
    const firebaseLib = require('../../lib/firebase')
    const firestoreLib = require('firebase/firestore')
    const functionsLib = require('firebase/functions')
    
    db = firebaseLib.db
    functions = firebaseLib.functions
    addDoc = firestoreLib.addDoc
    collection = firestoreLib.collection
    Timestamp = firestoreLib.Timestamp
    httpsCallable = functionsLib.httpsCallable
  } catch (error) {
    console.warn('Firebase not available:', error)
  }
}

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    projectType: '',
    message: '',
    jobRole: '',
    projectStage: '',
    projectTypeDetail: '',
    budgetRange: '',
    howHeard: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      // Check if Firebase is available
      if (!db || !addDoc || !collection || !Timestamp) {
        throw new Error('Firebase not configured')
      }
      
      // Save to Firestore
      await addDoc(collection(db, 'contacts'), {
        ...formData,
        createdAt: Timestamp.now()
      })
      
      // Try to call Cloud Function if available
      if (functions && httpsCallable) {
        try {
          const sendContactEmail = httpsCallable(functions, 'sendContactEmail')
          await sendContactEmail({ ...formData })
        } catch (funcError) {
          console.warn('Email function not available:', funcError)
        }
      }
      
      alert('Thank you for your message! We will get back to you within 24 hours.')
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        projectType: '',
        message: '',
        jobRole: '',
        projectStage: '',
        projectTypeDetail: '',
        budgetRange: '',
        howHeard: ''
      })
    } catch (error) {
      console.error('Form submission error:', error)
      alert('There was an error submitting your message. Please try again later or call us directly.')
    }
    
    setIsSubmitting(false)
  }

  const contactInfo = [
    {
      icon: MapPin,
      title: "Service Area",
  details: ["Pasco, Washington", "Greater Pacific Northwest", "Custom projects nationwide"]
    },
    {
      icon: Phone,
      title: "Phone",
      details: ["(509) 308-6489", "Available 7 days a week"]
    },
    {
      icon: Mail,
      title: "Email",
  details: ["info@mhc-gc.com", "estimates@mhc-gc.com"]
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: ["Monday - Friday: 7:00 AM - 6:00 PM", "Saturday: 8:00 AM - 4:00 PM", "Sunday: Emergency calls only"]
    }
  ]

  return (
  <main className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section with Statistics */}
      <section className="relative py-20 bg-gradient-to-r from-mh-hunter-green to-mh-hunter-green/80 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in-up">
              Get In Touch
            </h1>
            <p className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed opacity-90">
              Ready to start your construction project? Contact our veteran-owned team 
              for a free consultation and AI-powered estimate.
            </p>
          </div>

          {/* Contact Statistics */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:bg-white/15 transition-all duration-300 transform hover:scale-105">
              <div className="text-3xl md:text-4xl font-bold text-mh-leather-tan mb-2 animate-fade-in-up">&lt;24h</div>
              <div className="text-white/90 font-medium">Response Time</div>
            </div>
            
            <div className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:bg-white/15 transition-all duration-300 transform hover:scale-105">
              <div className="text-3xl md:text-4xl font-bold text-mh-leather-tan mb-2 animate-fade-in-up">100+</div>
              <div className="text-white/90 font-medium">Miles Service Area</div>
            </div>
            
            <div className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:bg-white/15 transition-all duration-300 transform hover:scale-105">
              <div className="text-3xl md:text-4xl font-bold text-mh-leather-tan mb-2 animate-fade-in-up">500+</div>
              <div className="text-white/90 font-medium">Projects Completed</div>
            </div>
            
            <div className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:bg-white/15 transition-all duration-300 transform hover:scale-105">
              <div className="text-3xl md:text-4xl font-bold text-mh-leather-tan mb-2 animate-fade-in-up">98%</div>
              <div className="text-white/90 font-medium">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Methods Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
              How to Reach Us
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the best way to contact our team. We're here to help with your construction needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Phone Contact */}
            <div className="group bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-l-4 border-mh-hunter-green">
              <div className="w-16 h-16 bg-mh-hunter-green/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-mh-hunter-green/20 transition-colors">
                <Phone className="w-8 h-8 text-mh-hunter-green" />
              </div>
              <h3 className="text-xl font-bold text-black mb-4">Call Us</h3>
              <div className="space-y-2 mb-4">
                <p className="text-gray-600 font-semibold">(509) 308-6489</p>
                <p className="text-gray-500 text-sm">Available 7 days a week</p>
                <p className="text-gray-500 text-sm">Mon-Fri: 7AM-6PM</p>
                <p className="text-gray-500 text-sm">Sat: 8AM-4PM</p>
              </div>
              <a 
                href="tel:+15093086489" 
                className="inline-flex items-center px-4 py-2 bg-mh-hunter-green text-white rounded-lg font-medium hover:bg-mh-hunter-green/80 transition-colors"
              >
                Call Now
                <Phone className="w-4 h-4 ml-2" />
              </a>
            </div>

            {/* Email Contact */}
            <div className="group bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-l-4 border-mh-leather-tan">
              <div className="w-16 h-16 bg-mh-leather-tan/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-mh-leather-tan/20 transition-colors">
                <Mail className="w-8 h-8 text-mh-leather-tan" />
              </div>
              <h3 className="text-xl font-bold text-black mb-4">Email Us</h3>
              <div className="space-y-2 mb-4">
                <p className="text-gray-600 font-semibold">info@mhc-gc.com</p>
                <p className="text-gray-500 text-sm">General inquiries</p>
                <p className="text-gray-600 font-semibold">estimates@mhc-gc.com</p>
                <p className="text-gray-500 text-sm">Project estimates</p>
              </div>
              <a 
                href="mailto:info@mhc-gc.com" 
                className="inline-flex items-center px-4 py-2 bg-mh-leather-tan text-black rounded-lg font-medium hover:bg-mh-leather-tan/80 transition-colors"
              >
                Send Email
                <Mail className="w-4 h-4 ml-2" />
              </a>
            </div>

            {/* Location */}
            <div className="group bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-l-4 border-mh-hunter-green">
              <div className="w-16 h-16 bg-mh-hunter-green/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-mh-hunter-green/20 transition-colors">
                <MapPin className="w-8 h-8 text-mh-hunter-green" />
              </div>
              <h3 className="text-xl font-bold text-black mb-4">Visit Us</h3>
              <div className="space-y-2 mb-4">
                <p className="text-gray-600 font-semibold">3111 N. Capital Ave</p>
                <p className="text-gray-600">Pasco, WA 99301</p>
                <p className="text-gray-500 text-sm">100-mile service radius</p>
                <p className="text-gray-500 text-sm">Pacific Northwest</p>
              </div>
              <button 
                onClick={() => document.getElementById('service-map')?.scrollIntoView({ behavior: 'smooth' })}
                className="inline-flex items-center px-4 py-2 bg-mh-hunter-green text-white rounded-lg font-medium hover:bg-mh-hunter-green/80 transition-colors"
              >
                View Map
                <MapPin className="w-4 h-4 ml-2" />
              </button>
            </div>

            {/* Emergency Contact */}
            <div className="group bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-l-4 border-mh-leather-tan">
              <div className="w-16 h-16 bg-mh-leather-tan/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-mh-leather-tan/20 transition-colors">
                <svg className="w-8 h-8 text-mh-leather-tan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-black mb-4">Emergency</h3>
              <div className="space-y-2 mb-4">
                <p className="text-gray-600 font-semibold">(509) 555-HELP</p>
                <p className="text-gray-500 text-sm">24/7 Emergency Line</p>
                <p className="text-gray-500 text-sm">Construction emergencies</p>
                <p className="text-gray-500 text-sm">Urgent project issues</p>
              </div>
              <a 
                href="tel:+15095554357" 
                className="inline-flex items-center px-4 py-2 bg-mh-leather-tan text-black rounded-lg font-medium hover:bg-mh-leather-tan/80 transition-colors"
              >
                Emergency Call
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form and Information */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* Contact Form - Takes 2/3 width */}
            <div className="lg:col-span-2">
              <div className="bg-gray-50 rounded-2xl p-8 md:p-12 shadow-xl border border-gray-100">
                <div className="text-center mb-8 pb-6 border-b border-gray-200">
                  <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
                    Send Us a Message
                  </h2>
                  <p className="text-gray-600">
                    Fill out the form below and we'll get back to you within 24 hours
                  </p>
                </div>
                
                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* Personal Information Section */}
                  <div className="space-y-6">
                    <h3 className="text-lg font-semibold text-black flex items-center">
                      <svg className="w-5 h-5 mr-2 text-mh-forest-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                      Personal Information
                    </h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="name" className="block text-sm font-medium text-black">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-mh-forest-green focus:border-mh-forest-green transition-colors bg-white hover:border-gray-400"
                          placeholder="Your full name"
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <label htmlFor="email" className="block text-sm font-medium text-black">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-mh-forest-green focus:border-mh-forest-green transition-colors bg-white hover:border-gray-400"
                          placeholder="your.email@example.com"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="phone" className="block text-sm font-medium text-black">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-mh-forest-green focus:border-mh-forest-green transition-colors bg-white hover:border-gray-400"
                          placeholder="(509) 555-0123"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="company" className="block text-sm font-medium text-black">
                          Company/Organization
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-mh-forest-green focus:border-mh-forest-green transition-colors bg-white hover:border-gray-400"
                          placeholder="Your company name"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Project Information Section */}
                  <div className="space-y-6">
                    <h3 className="text-lg font-semibold text-black flex items-center">
                      <svg className="w-5 h-5 mr-2 text-mh-forest-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                      Project Information
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="jobRole" className="block text-sm font-medium text-black">
                          Your Role *
                        </label>
                        <select
                          id="jobRole"
                          name="jobRole"
                          required
                          value={formData.jobRole || ''}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-mh-forest-green focus:border-mh-forest-green transition-colors bg-white hover:border-gray-400"
                        >
                          <option value="">Select your role</option>
                          <option value="owner">Owner/Decision Maker</option>
                          <option value="architect">Architect/Designer</option>
                          <option value="engineer">Engineer</option>
                          <option value="contractor">Contractor/Subcontractor</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="projectStage" className="block text-sm font-medium text-black">
                          Project Stage *
                        </label>
                        <select
                          id="projectStage"
                          name="projectStage"
                          required
                          value={formData.projectStage || ''}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-mh-forest-green focus:border-mh-forest-green transition-colors bg-white hover:border-gray-400"
                        >
                          <option value="">Select stage</option>
                          <option value="planning">Planning/Concept</option>
                          <option value="design">Design/Engineering</option>
                          <option value="bidding">Bidding/Estimating</option>
                          <option value="construction">Under Construction</option>
                          <option value="completed">Completed</option>
                        </select>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="projectType" className="block text-sm font-medium text-black">
                          Project Type *
                        </label>
                        <select
                          id="projectType"
                          name="projectType"
                          required
                          value={formData.projectType}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-mh-forest-green focus:border-mh-forest-green transition-colors bg-white hover:border-gray-400"
                        >
                          <option value="">Select project type</option>
                          <option value="commercial">Commercial Building</option>
                          <option value="industrial">Industrial Facility</option>
                          <option value="healthcare">Healthcare Facility</option>
                          <option value="emergency">Emergency Services</option>
                          <option value="specialty">Specialty Project</option>
                          <option value="renovation">Renovation/Remodel</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="budgetRange" className="block text-sm font-medium text-black">
                          Budget Range *
                        </label>
                        <select
                          id="budgetRange"
                          name="budgetRange"
                          required
                          value={formData.budgetRange || ''}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-mh-forest-green focus:border-mh-forest-green transition-colors bg-white hover:border-gray-400"
                        >
                          <option value="">Select range</option>
                          <option value="under-250k">Under $250,000</option>
                          <option value="250k-1m">$250,000 - $1M</option>
                          <option value="1m-5m">$1M - $5M</option>
                          <option value="5m-10m">$5M - $10M</option>
                          <option value="10m-plus">$10M+</option>
                        </select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="howHeard" className="block text-sm font-medium text-black">
                        How Did You Hear About Us? *
                      </label>
                      <select
                        id="howHeard"
                        name="howHeard"
                        required
                        value={formData.howHeard || ''}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-mh-forest-green focus:border-mh-forest-green transition-colors bg-white hover:border-gray-400"
                      >
                        <option value="">Select option</option>
                        <option value="referral">Referral/Word of Mouth</option>
                        <option value="search">Search Engine</option>
                        <option value="social">Social Media</option>
                        <option value="event">Event/Trade Show</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  {/* Project Details Section */}
                  <div className="space-y-6">
                    <h3 className="text-lg font-semibold text-black flex items-center">
                      <svg className="w-5 h-5 mr-2 text-mh-forest-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      Project Details
                    </h3>

                    <div className="space-y-2">
                      <label htmlFor="message" className="block text-sm font-medium text-black">
                        Project Description
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={6}
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-mh-forest-green focus:border-mh-forest-green transition-colors bg-white hover:border-gray-400 resize-vertical"
                        placeholder="Please describe your project, timeline, specific requirements, and any questions you have..."
                      />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-6 border-t border-gray-200">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-mh-leather-tan text-black px-8 py-4 rounded-lg text-lg font-semibold hover:bg-mh-leather-tan/90 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none shadow-lg hover:shadow-xl flex items-center justify-center"
                    >
                      {isSubmitting ? (
                        <span className="flex items-center">
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Sending Message...
                        </span>
                      ) : (
                        <>
                          Send Message
                          <Send className="ml-2" size={20} />
                        </>
                      )}
                    </button>

                    <p className="text-center text-sm text-gray-500 mt-4">
                      * Required fields. We typically respond within 24 hours.
                    </p>
                  </div>
                </form>
              </div>
            </div>

            {/* Contact Information Sidebar - Takes 1/3 width */}
            <div className="space-y-8">
              <h2 className="text-2xl font-bold text-black mb-6">
                Quick Contact Info
              </h2>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon
                  return (
                    <div key={index} className="flex items-start space-x-4 p-4 bg-white rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
                      <div className="flex items-center justify-center w-12 h-12 bg-mh-forest-green text-white rounded-lg flex-shrink-0">
                        <IconComponent size={20} />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-black mb-2">
                          {info.title}
                        </h3>
                        {info.details.map((detail, detailIndex) => (
                          <p key={detailIndex} className="text-gray-600 text-sm">
                            {detail}
                          </p>
                        ))}
                      </div>
                    </div>
                  )
                })}
              </div>

              {/* Quick Actions */}
              <div className="space-y-4 pt-6 border-t border-gray-200">
                <h3 className="text-lg font-bold text-black mb-4">
                  Quick Actions
                </h3>
                <div className="space-y-3">
                  <a
                    href="/estimate"
                    className="block bg-mh-forest-green text-white px-6 py-3 rounded-lg font-semibold hover:bg-mh-hunter-green transition-colors text-center"
                  >
                    Get AI Estimate
                  </a>
                  <a
                    href="/services"
                    className="block border border-mh-forest-green text-mh-forest-green px-6 py-3 rounded-lg font-semibold hover:bg-mh-forest-green hover:text-white transition-colors text-center"
                  >
                    View Our Services
                  </a>
                  <a
                    href="/projects"
                    className="block border border-mh-forest-green text-mh-forest-green px-6 py-3 rounded-lg font-semibold hover:bg-mh-forest-green hover:text-white transition-colors text-center"
                  >
                    See Our Work
                  </a>
                </div>
              </div>

              {/* Emergency Contact Card */}
              <div className="p-6 bg-red-50 border border-red-300 rounded-lg">
                <h3 className="text-xl font-bold text-red-900 mb-2 flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                  </svg>
                  Emergency Contact
                </h3>
                <p className="text-red-800 mb-3 text-sm">
                  For construction emergencies or urgent project issues, call our 24/7 emergency line:
                </p>
                <a 
                  href="tel:+15095554357"
                  className="inline-flex items-center px-4 py-2 bg-red-700 text-white rounded-lg font-medium hover:bg-red-800 transition-colors"
                >
                  <span className="text-lg font-bold">(509) 555-HELP</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Common questions about our contact process and services
            </p>
          </div>

          <div className="space-y-6">
            {/* FAQ 1 */}
            <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
              <h3 className="text-lg font-bold text-black mb-3">
                How quickly will you respond to my inquiry?
              </h3>
              <p className="text-gray-600">
                We typically respond to all inquiries within 24 hours, often much sooner. For urgent matters or emergencies, please call our emergency line at (509) 555-HELP for immediate assistance.
              </p>
            </div>

            {/* FAQ 2 */}
            <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
              <h3 className="text-lg font-bold text-black mb-3">
                What information should I include in my project inquiry?
              </h3>
              <p className="text-gray-600">
                Please include your project type, approximate budget range, timeline, location, and any specific requirements. The more details you provide, the more accurate our initial assessment and response will be.
              </p>
            </div>

            {/* FAQ 3 */}
            <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
              <h3 className="text-lg font-bold text-black mb-3">
                Do you provide free estimates?
              </h3>
              <p className="text-gray-600">
                Yes! We provide free initial consultations and estimates for all projects. Our AI-powered estimation tool can also provide quick preliminary estimates through our website.
              </p>
            </div>

            {/* FAQ 4 */}
            <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
              <h3 className="text-lg font-bold text-black mb-3">
                What is your service area?
              </h3>
              <p className="text-gray-600">
                We serve a 100-mile radius from our headquarters in Pasco, Washington, covering the greater Pacific Northwest. For larger or specialized projects, we can work nationwide.
              </p>
            </div>

            {/* FAQ 5 */}
            <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
              <h3 className="text-lg font-bold text-black mb-3">
                What types of projects do you handle?
              </h3>
              <p className="text-gray-600">
                We specialize in commercial buildings, industrial facilities, healthcare facilities, emergency services buildings, and specialty projects. We handle everything from new construction to renovations and tenant improvements.
              </p>
            </div>

            {/* FAQ 6 */}
            <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
              <h3 className="text-lg font-bold text-black mb-3">
                Can I schedule an on-site consultation?
              </h3>
              <p className="text-gray-600">
                Absolutely! After our initial discussion, we can schedule an on-site consultation to better understand your project requirements and provide a more detailed assessment and proposal.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Map Section */}
      <section id="service-map" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
              Our Service Area
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Serving a 100-mile radius from our headquarters in Pasco, Washington. Proudly serving the Pacific Northwest with military precision and excellence.
            </p>
          </div>
          
          {/* Service Area Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center p-6 bg-gray-50 rounded-xl">
              <div className="w-16 h-16 bg-mh-forest-green rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-black mb-2">Headquarters</h3>
              <p className="text-gray-600">3111 N. Capital Ave<br />Pasco, WA 99301</p>
            </div>
            
            <div className="text-center p-6 bg-gray-50 rounded-xl">
              <div className="w-16 h-16 bg-mh-leather-tan rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-black mb-2">Service Radius</h3>
              <p className="text-gray-600">100-Mile Coverage<br />Pacific Northwest</p>
            </div>
            
            <div className="text-center p-6 bg-gray-50 rounded-xl">
              <div className="w-16 h-16 bg-mh-hunter-green rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-black mb-2">Special Projects</h3>
              <p className="text-gray-600">Nationwide<br />Custom Solutions</p>
            </div>
          </div>
          
          {/* Interactive Google Map */}
          <div className="bg-gray-300 h-96 rounded-xl overflow-hidden shadow-xl border border-gray-200">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d731073.1551939894!2d-119.70000000000002!3d46.2396!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54984c8f8c8c8c8c%3A0x8c8c8c8c8c8c8c8c!2s3111%20N%20Capital%20Ave%2C%20Pasco%2C%20WA%2099301%2C%20USA!5e0!3m2!1sen!2sus!4v1726167700000!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="MH Construction - 3111 N Capital Ave, Pasco, WA - 100 Mile Service Area"
            ></iframe>
          </div>
          
          {/* Service Area Description */}
          <div className="mt-12 text-center">
            <div className="bg-mh-forest-green/5 border border-mh-forest-green/20 rounded-xl p-8 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-black mb-4">Ready to Start Your Project?</h3>
              <p className="text-gray-600 mb-6">
                Whether you're in our local service area or need a custom solution anywhere in the country, our veteran-owned team is ready to bring military-grade precision to your construction project.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => document.querySelector('form')?.scrollIntoView({ behavior: 'smooth' })}
                  className="inline-flex items-center px-8 py-3 bg-mh-leather-tan text-black rounded-lg font-semibold hover:bg-mh-leather-tan/90 transition-colors"
                >
                  Get Started Today
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </button>
                <a
                  href="tel:+15095550123"
                  className="inline-flex items-center px-8 py-3 border-2 border-mh-forest-green text-mh-forest-green rounded-lg font-semibold hover:bg-mh-forest-green hover:text-white transition-colors"
                >
                  Call Now
                  <Phone className="w-5 h-5 ml-2" />
                </a>
              </div>
            </div>
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
