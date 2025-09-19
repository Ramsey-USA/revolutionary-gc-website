'use client'

import { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'
import { X, Calendar, Clock, User, Phone, Mail, Building, MapPin } from 'lucide-react'
import { db } from '../lib/firebase'
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'
import { sendTeamNotification, sendClientConfirmation } from '../lib/notifications'

interface CalendarSchedulerProps {
  isOpen: boolean
  onClose: () => void
}

const CalendarScheduler = ({ isOpen, onClose }: CalendarSchedulerProps) => {
  const [mounted, setMounted] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    projectType: '',
    projectLocation: '',
    preferredDate: '',
    preferredTime: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  // Handle mounting for portal
  useEffect(() => {
    setMounted(true)
    return () => setMounted(false)
  }, [])

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Save to Firebase Firestore
      const consultationRef = await addDoc(collection(db, 'consultationScheduling'), {
        ...formData,
        status: 'pending',
        createdAt: serverTimestamp(),
        type: 'consultation'
      })

      // Send team notification
      await sendTeamNotification({
        type: 'consultation-scheduled',
        title: 'New Consultation Request',
        message: `${formData.name} has requested a consultation for ${formData.preferredDate} at ${formData.preferredTime}. Project type: ${formData.projectType || 'Not specified'}.`,
        clientInfo: {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          company: formData.company
        },
        appointmentDetails: {
          date: formData.preferredDate,
          time: formData.preferredTime,
          projectType: formData.projectType,
          location: formData.projectLocation
        },
        priority: 'medium',
        metadata: {
          consultationId: consultationRef.id,
          scheduledVia: 'schedule-button',
          message: formData.message
        }
      })

      // Send client confirmation
      await sendClientConfirmation({
        type: 'consultation-scheduled',
        title: 'Consultation Request Received - MH Construction',
        message: `Thank you for your consultation request. We've received your request for ${formData.preferredDate} at ${formData.preferredTime}. Our team will contact you within 24 hours to confirm your appointment and discuss your project needs.`,
        clientInfo: {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          company: formData.company
        },
        appointmentDetails: {
          date: formData.preferredDate,
          time: formData.preferredTime,
          projectType: formData.projectType,
          location: formData.projectLocation
        },
        priority: 'medium'
      })

      setSubmitSuccess(true)
      
      // Reset form after 2 seconds and close modal
      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          projectType: '',
          projectLocation: '',
          preferredDate: '',
          preferredTime: '',
          message: ''
        })
        setSubmitSuccess(false)
        setIsSubmitting(false)
        onClose()
      }, 2000)

    } catch (error) {
      console.error('Error scheduling consultation:', error)
      alert('There was an error scheduling your consultation. Please try again or call us directly at (509) 308-6489.')
      setIsSubmitting(false)
    }
  }

  // Generate time slots
  const timeSlots = [
    '8:00 AM', '9:00 AM', '10:00 AM', '11:00 AM', 
    '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM'
  ]

  if (!isOpen || !mounted) return null

  const modalContent = (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[9999] flex items-center justify-center p-2 sm:p-4">
      <div className="bg-white dark:bg-dark-surface-2 rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] relative mx-2 sm:mx-0 flex flex-col">
        {/* Header */}
        <div className="bg-gradient-to-r from-mh-hunter-green to-army-gold p-4 sm:p-6 rounded-t-2xl flex-shrink-0">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2 sm:space-x-3">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white/20 rounded-full flex items-center justify-center">
                <Calendar size={20} className="text-white sm:w-6 sm:h-6" />
              </div>
              <div>
                <h2 className="text-lg sm:text-2xl font-bold text-white">Schedule Consultation</h2>
                <p className="text-white/90 text-sm sm:text-base hidden sm:block">Book a personal consultation with our experts</p>
                <p className="text-white/90 text-xs sm:hidden">Book a consultation</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="text-white/80 hover:text-white transition-colors p-1 sm:p-2 hover:bg-white/10 rounded-full touch-manipulation"
            >
              <X size={20} className="sm:w-6 sm:h-6" />
            </button>
          </div>
        </div>

        {/* Success Message */}
        {submitSuccess && (
          <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 p-3 sm:p-4 m-3 sm:m-6 rounded-lg flex-shrink-0">
            <div className="flex items-center space-x-3">
              <div className="w-6 h-6 sm:w-8 sm:h-8 bg-green-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xs sm:text-sm">✓</span>
              </div>
              <div>
                <h3 className="font-semibold text-green-800 dark:text-green-200 text-sm sm:text-base">Consultation Scheduled!</h3>
                <p className="text-green-700 dark:text-green-300 text-xs sm:text-sm">We'll contact you within 24 hours to confirm your appointment.</p>
              </div>
            </div>
          </div>
        )}

        {/* Form - Scrollable Content */}
        <div className="flex-1 overflow-y-auto">
          <form onSubmit={handleSubmit} className="p-4 sm:p-6 space-y-4 sm:space-y-6">
            {/* Personal Information */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-army-black dark:text-dark-text flex items-center">
                <User size={20} className="mr-2 text-mh-hunter-green" />
                Personal Information
              </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-dark-text-secondary mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-dark-border rounded-lg focus:ring-2 focus:ring-mh-hunter-green focus:border-mh-hunter-green transition-all duration-300 bg-white dark:bg-dark-surface-3 dark:text-dark-text"
                  placeholder="Your full name"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-dark-text-secondary mb-2">
                  Company/Organization
                </label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-dark-border rounded-lg focus:ring-2 focus:ring-mh-hunter-green focus:border-mh-hunter-green transition-all duration-300 bg-white dark:bg-dark-surface-3 dark:text-dark-text"
                  placeholder="Company name"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-dark-text-secondary mb-2">
                  <Mail size={16} className="inline mr-1" />
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-dark-border rounded-lg focus:ring-2 focus:ring-mh-hunter-green focus:border-mh-hunter-green transition-all duration-300 bg-white dark:bg-dark-surface-3 dark:text-dark-text"
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-dark-text-secondary mb-2">
                  <Phone size={16} className="inline mr-1" />
                  Phone Number *
                </label>
                <input
                  type="tel"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-dark-border rounded-lg focus:ring-2 focus:ring-mh-hunter-green focus:border-mh-hunter-green transition-all duration-300 bg-white dark:bg-dark-surface-3 dark:text-dark-text"
                  placeholder="(509) 308-6489"
                />
              </div>
            </div>
          </div>

          {/* Project Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-army-black dark:text-dark-text flex items-center">
              <Building size={20} className="mr-2 text-mh-hunter-green" />
              Project Information
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-dark-text-secondary mb-2">
                  Project Type *
                </label>
                <select
                  name="projectType"
                  required
                  value={formData.projectType}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-dark-border rounded-lg focus:ring-2 focus:ring-mh-hunter-green focus:border-mh-hunter-green transition-all duration-300 bg-white dark:bg-dark-surface-3 dark:text-dark-text"
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
              
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-dark-text-secondary mb-2">
                  <MapPin size={16} className="inline mr-1" />
                  Project Location *
                </label>
                <input
                  type="text"
                  name="projectLocation"
                  required
                  value={formData.projectLocation}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-dark-border rounded-lg focus:ring-2 focus:ring-mh-hunter-green focus:border-mh-hunter-green transition-all duration-300 bg-white dark:bg-dark-surface-3 dark:text-dark-text"
                  placeholder="City, State"
                />
              </div>
            </div>
          </div>

          {/* Scheduling */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-army-black dark:text-dark-text flex items-center">
              <Clock size={20} className="mr-2 text-mh-hunter-green" />
              Preferred Schedule
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-dark-text-secondary mb-2">
                  Preferred Date *
                </label>
                <input
                  type="date"
                  name="preferredDate"
                  required
                  value={formData.preferredDate}
                  onChange={handleInputChange}
                  min={new Date().toISOString().split('T')[0]}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-dark-border rounded-lg focus:ring-2 focus:ring-mh-hunter-green focus:border-mh-hunter-green transition-all duration-300 bg-white dark:bg-dark-surface-3 dark:text-dark-text"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-dark-text-secondary mb-2">
                  Preferred Time *
                </label>
                <select
                  name="preferredTime"
                  required
                  value={formData.preferredTime}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-dark-border rounded-lg focus:ring-2 focus:ring-mh-hunter-green focus:border-mh-hunter-green transition-all duration-300 bg-white dark:bg-dark-surface-3 dark:text-dark-text"
                >
                  <option value="">Select time</option>
                  {timeSlots.map(time => (
                    <option key={time} value={time}>{time}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Additional Details */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-dark-text-secondary mb-2">
              Project Details & Requirements
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              rows={4}
              className="w-full px-4 py-3 border border-gray-300 dark:border-dark-border rounded-lg focus:ring-2 focus:ring-mh-hunter-green focus:border-mh-hunter-green transition-all duration-300 bg-white dark:bg-dark-surface-3 dark:text-dark-text resize-none"
              placeholder="Please describe your project, including size, specific requirements, timeline, and any special considerations..."
            />
          </div>

          {/* Submit Button */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-4 sm:px-6 py-3 sm:py-3 border-2 border-gray-300 dark:border-dark-border text-gray-700 dark:text-dark-text-secondary rounded-lg font-semibold hover:bg-gray-50 dark:hover:bg-dark-surface-3 transition-all duration-300 touch-manipulation min-h-[48px]"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className="flex-1 bg-gradient-to-r from-mh-hunter-green to-army-green text-white px-4 sm:px-6 py-3 sm:py-3 rounded-lg font-semibold hover:from-army-green hover:to-mh-hunter-green transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none shadow-lg hover:shadow-xl flex items-center justify-center touch-manipulation min-h-[48px]"
            >
              {isSubmitting ? (
                <span className="flex items-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Scheduling...
                </span>
              ) : (
                <>
                  <Calendar size={18} className="mr-1 sm:mr-2" />
                  <span className="text-sm sm:text-base">Schedule Consultation</span>
                </>
              )}
            </button>
          </div>

          <p className="text-center text-xs sm:text-sm text-gray-500 dark:text-dark-text-secondary">
            * Required fields. We'll contact you within 24 hours to confirm your consultation appointment.
          </p>
        </form>
        </div>
      </div>
    </div>
  )

  return createPortal(modalContent, document.body)
}

export default CalendarScheduler