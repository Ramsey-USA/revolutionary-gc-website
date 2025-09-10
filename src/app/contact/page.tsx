'use client'

import { useState } from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    projectType: '',
    message: ''
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
    
    // Simulate form submission
    setTimeout(() => {
      alert('Thank you for your message! We will get back to you within 24 hours.')
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        projectType: '',
        message: ''
      })
      setIsSubmitting(false)
    }, 2000)
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
      details: ["(509) 555-0123", "Available 7 days a week"]
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
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-mh-forest-green to-army-green text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Get In Touch
            </h1>
            <p className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed">
              Ready to start your construction project? Contact our veteran-owned team 
              for a free consultation and AI-powered estimate.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-army-black mb-8">
                Send Us a Message
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-army-black mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-mh-forest-green focus:border-mh-forest-green"
                      placeholder="Your full name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-army-black mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-mh-forest-green focus:border-mh-forest-green"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-army-black mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-mh-forest-green focus:border-mh-forest-green"
                      placeholder="(509) 555-0123"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-army-black mb-2">
                      Company/Organization
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-mh-forest-green focus:border-mh-forest-green"
                      placeholder="Your company name"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="projectType" className="block text-sm font-medium text-army-black mb-2">
                    Project Type
                  </label>
                  <select
                    id="projectType"
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-mh-forest-green focus:border-mh-forest-green"
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

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-army-black mb-2">
                    Project Details *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-mh-forest-green focus:border-mh-forest-green"
                    placeholder="Please describe your project, timeline, budget range, and any specific requirements..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-army-gold text-army-black px-8 py-4 rounded-lg text-lg font-semibold hover:bg-yellow-500 transition-colors transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                >
                  {isSubmitting ? (
                    <span>Sending...</span>
                  ) : (
                    <>
                      Send Message
                      <Send size={20} className="ml-2" />
                    </>
                  )}
                </button>

                <p className="text-sm text-field-gray">
                  * Required fields. We typically respond within 24 hours.
                </p>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-army-black mb-8">
                Contact Information
              </h2>
              
              <div className="space-y-8">
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon
                  return (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="flex items-center justify-center w-12 h-12 bg-mh-forest-green text-white rounded-lg flex-shrink-0 transition-transform duration-300 hover:scale-110 hover:-translate-y-1">
                        <IconComponent size={24} />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-army-black mb-2">
                          {info.title}
                        </h3>
                        {info.details.map((detail, detailIndex) => (
                          <p key={detailIndex} className="text-field-gray">
                            {detail}
                          </p>
                        ))}
                      </div>
                    </div>
                  )
                })}
              </div>

              {/* Emergency Contact */}
              <div className="mt-12 p-6 bg-red-50 border border-red-200 rounded-lg">
                <h3 className="text-xl font-bold text-red-800 mb-3">
                  Emergency Contact
                </h3>
                <p className="text-red-700">
                  For construction emergencies or urgent project issues, call our 24/7 emergency line:
                </p>
                <p className="text-2xl font-bold text-red-800 mt-2">
                  (509) 555-HELP (4357)
                </p>
              </div>

              {/* Quick Links */}
              <div className="mt-8">
                <h3 className="text-xl font-bold text-army-black mb-4">
                  Quick Actions
                </h3>
                <div className="space-y-3">
                  <a
                    href="/estimate"
                    className="block bg-mh-forest-green text-white px-6 py-3 rounded-lg font-semibold hover:bg-army-green transition-colors text-center"
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
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-light-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-army-black mb-4">
              Our Service Area
            </h2>
            <p className="text-xl text-field-gray max-w-3xl mx-auto">
              Proudly serving the Pacific Northwest with headquarters in Pasco, Washington
            </p>
          </div>
          
          {/* Placeholder for map */}
          <div className="bg-gray-300 h-96 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <MapPin size={48} className="text-gray-500 mx-auto mb-4" />
              <p className="text-gray-600 text-lg">
                Interactive map integration coming soon
              </p>
                <p className="text-gray-500">
                  Currently serving Pasco, WA and surrounding areas
                </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
