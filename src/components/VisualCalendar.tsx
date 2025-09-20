'use client'

import { useState, useEffect } from 'react'
import { Calendar, Clock, CheckCircle, User, ArrowLeft, ArrowRight } from 'lucide-react'
import { db } from '../lib/firebase'
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'
import { sendTeamNotification, sendClientConfirmation } from '../lib/notifications'

interface VisualCalendarProps {
  onScheduleComplete?: () => void
}

interface TimeSlot {
  time: string
  available: boolean
  id: string
}

interface BookingFormData {
  name: string
  email: string
  phone: string
  company: string
  projectType: string
  message: string
}

const VisualCalendar = ({ onScheduleComplete }: VisualCalendarProps) => {
  const [currentDate, setCurrentDate] = useState(new Date())
  const [selectedDate, setSelectedDate] = useState<Date | null>(null)
  const [selectedTime, setSelectedTime] = useState<string | null>(null)
  const [showBookingForm, setShowBookingForm] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [formData, setFormData] = useState<BookingFormData>({
    name: '',
    email: '',
    phone: '',
    company: '',
    projectType: '',
    message: ''
  })

  // Available consultation hours (8am to 3pm Pacific) - more logical structure
  const generateTimeSlots = (): TimeSlot[] => {
    const slots: TimeSlot[] = []
    for (let hour = 8; hour <= 15; hour++) {
      const time12hr = hour <= 12 ? `${hour}:00 ${hour === 12 ? 'PM' : 'AM'}` : `${hour - 12}:00 PM`
      const timeId = hour.toString().padStart(2, '0') + ':00'
      
      slots.push({
        time: time12hr,
        available: true, // In a real app, this would check availability from a database
        id: timeId
      })
    }
    return slots
  }

  const consultationSlots = generateTimeSlots()

  // Enhanced calendar days generation with better logic
  const getCalendarDays = (): Date[] => {
    const year = currentDate.getFullYear()
    const month = currentDate.getMonth()
    
    // First day of the month
    const firstDay = new Date(year, month, 1)
    // Last day of the month
    const lastDay = new Date(year, month + 1, 0)
    
    // Start date (Sunday of the week containing the first day)
    const startDate = new Date(firstDay)
    startDate.setDate(startDate.getDate() - startDate.getDay())
    
    // End date (Saturday of the week containing the last day)
    const endDate = new Date(lastDay)
    endDate.setDate(endDate.getDate() + (6 - endDate.getDay()))

    const days: Date[] = []
    const currentDay = new Date(startDate)
    
    // Generate all days in the calendar grid
    while (currentDay <= endDate) {
      days.push(new Date(currentDay))
      currentDay.setDate(currentDay.getDate() + 1)
    }
    
    return days
  }

  // Improved date availability logic
  const isDateAvailable = (date: Date): boolean => {
    const today = new Date()
    today.setHours(0, 0, 0, 0)
    
    const dateToCheck = new Date(date)
    dateToCheck.setHours(0, 0, 0, 0)
    
    // Only allow future dates and weekdays (Monday-Friday)
    const dayOfWeek = dateToCheck.getDay()
    const isWeekday = dayOfWeek >= 1 && dayOfWeek <= 5
    const isFutureDate = dateToCheck >= today
    
    // Add holiday checking logic here if needed
    // const isHoliday = checkIfHoliday(dateToCheck)
    
    return isFutureDate && isWeekday
  }

  // Improved month formatting
  const formatMonth = (date: Date): string => {
    return date.toLocaleDateString('en-US', { 
      month: 'long', 
      year: 'numeric' 
    })
  }

  // Enhanced month navigation with boundary checking
  const navigateMonth = (direction: 'prev' | 'next'): void => {
    const newDate = new Date(currentDate)
    const currentMonth = newDate.getMonth()
    const currentYear = newDate.getFullYear()
    
    if (direction === 'next') {
      newDate.setMonth(currentMonth + 1)
    } else {
      // Don't allow navigation to past months
      const today = new Date()
      if (currentYear > today.getFullYear() || 
          (currentYear === today.getFullYear() && currentMonth > today.getMonth())) {
        newDate.setMonth(currentMonth - 1)
      }
    }
    
    setCurrentDate(newDate)
  }

  // Enhanced date selection with validation
  const handleDateSelect = (date: Date): void => {
    if (isDateAvailable(date)) {
      setSelectedDate(date)
      setSelectedTime(null) // Reset time selection when date changes
    }
  }

  // Enhanced time selection with validation
  const handleTimeSelect = (timeSlot: TimeSlot): void => {
    if (timeSlot.available && selectedDate) {
      setSelectedTime(timeSlot.time)
      setShowBookingForm(true)
    }
  }

  // Enhanced form change handler with validation
  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>): void => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value.trim()
    }))
  }

  // Enhanced form validation
  const isFormValid = (): boolean => {
    return !!(
      formData.name.trim() &&
      formData.email.trim() &&
      formData.phone.trim() &&
      selectedDate &&
      selectedTime
    )
  }

  // Enhanced booking submission with better error handling
  const handleBookingSubmit = async (e: React.FormEvent): Promise<void> => {
    e.preventDefault()
    
    // Validation check
    if (!isFormValid()) {
      alert('Please fill in all required fields.')
      return
    }

    if (!selectedDate || !selectedTime) {
      alert('Please select a date and time for your consultation.')
      return
    }

    setIsSubmitting(true)

    try {
      // Save consultation to Firebase
      const consultationRef = await addDoc(collection(db, 'consultationScheduling'), {
        ...formData,
        preferredDate: selectedDate.toISOString().split('T')[0],
        preferredTime: selectedTime,
        status: 'pending',
        createdAt: serverTimestamp(),
        type: 'personal-consultation'
      })

      // Send team notification
      await sendTeamNotification({
        type: 'consultation-scheduled',
        title: 'New Personal Consultation Scheduled',
        message: `${formData.name} has scheduled a personal consultation for ${selectedDate.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' })} at ${selectedTime}.`,
        clientInfo: {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          company: formData.company
        },
        appointmentDetails: {
          date: selectedDate.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' }),
          time: selectedTime,
          projectType: formData.projectType,
          location: 'MH Construction Office - 3111 N. Capital Ave., Pasco, WA 99301'
        },
        priority: 'medium',
        metadata: {
          consultationId: consultationRef.id,
          scheduledVia: 'visual-calendar',
          timezone: 'Pacific Time'
        }
      })

      // Send client confirmation
      await sendClientConfirmation({
        type: 'consultation-scheduled',
        title: 'Consultation Confirmation - MH Construction',
        message: `Thank you for scheduling a consultation with MH Construction. We've received your request for ${selectedDate.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' })} at ${selectedTime}. Our team will contact you within 24 hours to confirm your appointment and provide any additional details.`,
        clientInfo: {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          company: formData.company
        },
        appointmentDetails: {
          date: selectedDate.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' }),
          time: selectedTime,
          projectType: formData.projectType,
          location: 'MH Construction Office - 3111 N. Capital Ave., Pasco, WA 99301'
        },
        priority: 'medium'
      })

      setSubmitSuccess(true)
      
      // Reset form with improved cleanup
      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          projectType: '',
          message: ''
        })
        setSelectedDate(null)
        setSelectedTime(null)
        setShowBookingForm(false)
        setSubmitSuccess(false)
        setIsSubmitting(false)
        onScheduleComplete?.()
      }, 3000)

    } catch (error) {
      console.error('Error booking consultation:', error)
      alert('There was an error booking your consultation. Please try again or call us directly at (509) 308-6489.')
      setIsSubmitting(false)
    }
  }

  const calendarDays = getCalendarDays()

  return (
    <div className="bg-white dark:bg-dark-surface-2 rounded-2xl p-6 md:p-8 shadow-xl border border-gray-100 dark:border-dark-border">
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-mh-hunter-green to-mh-leather-tan rounded-full mb-4">
          <Calendar className="w-8 h-8 text-white" />
        </div>
        <h3 className="text-2xl md:text-3xl font-bold text-black dark:text-dark-text mb-2">
          Schedule Personal Consultation
        </h3>
        <p className="text-gray-600 dark:text-dark-text-secondary">
          Available Monday-Friday, 8:00 AM - 3:00 PM (Pacific Time)
        </p>
      </div>

      {/* Success Message */}
      {submitSuccess && (
        <div className="bg-mh-hunter-green/10 dark:bg-mh-hunter-green/20 border border-mh-hunter-green/30 dark:border-mh-hunter-green/40 p-4 rounded-lg mb-6">
          <div className="flex items-center space-x-3">
            <CheckCircle className="w-6 h-6 text-mh-hunter-green" />
            <div>
              <h4 className="font-semibold text-mh-hunter-green dark:text-mh-hunter-green">Consultation Scheduled!</h4>
              <p className="text-mh-hunter-green dark:text-mh-hunter-green text-sm">We'll contact you within 24 hours to confirm your appointment.</p>
            </div>
          </div>
        </div>
      )}

      {!showBookingForm ? (
        <>
          {/* Calendar Navigation */}
          <div className="flex items-center justify-between mb-6">
            <button
              onClick={() => navigateMonth('prev')}
              className="p-2 hover:bg-gray-100 dark:hover:bg-dark-surface-3 rounded-lg transition-colors"
            >
              <ArrowLeft className="w-5 h-5 text-gray-600 dark:text-dark-text-secondary" />
            </button>
            <h4 className="text-xl font-semibold text-black dark:text-dark-text">
              {formatMonth(currentDate)}
            </h4>
            <button
              onClick={() => navigateMonth('next')}
              className="p-2 hover:bg-gray-100 dark:hover:bg-dark-surface-3 rounded-lg transition-colors"
            >
              <ArrowRight className="w-5 h-5 text-gray-600 dark:text-dark-text-secondary" />
            </button>
          </div>

          {/* Calendar Grid */}
          <div className="mb-8">
            {/* Weekday Headers */}
            <div className="grid grid-cols-7 gap-1 mb-2">
              {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
                <div key={day} className="p-2 text-center text-sm font-medium text-gray-500 dark:text-dark-text-secondary">
                  {day}
                </div>
              ))}
            </div>

            {/* Calendar Days */}
            <div className="grid grid-cols-7 gap-1">
              {calendarDays.map((day, index) => {
                const isCurrentMonth = day.getMonth() === currentDate.getMonth()
                const isAvailable = isDateAvailable(day)
                const isSelected = selectedDate?.toDateString() === day.toDateString()
                const isToday = day.toDateString() === new Date().toDateString()

                return (
                  <button
                    key={index}
                    onClick={() => handleDateSelect(day)}
                    disabled={!isAvailable}
                    className={`
                      p-2 text-center text-sm font-medium rounded-lg transition-all duration-200
                      ${!isCurrentMonth 
                        ? 'text-gray-300 dark:text-gray-600 cursor-not-allowed' 
                        : isAvailable
                          ? isSelected
                            ? 'bg-mh-hunter-green text-white shadow-lg'
                            : isToday
                              ? 'bg-mh-leather-tan text-white font-bold'
                              : 'text-black dark:text-dark-text hover:bg-gray-100 dark:hover:bg-dark-surface-3'
                          : 'text-gray-400 dark:text-gray-500 cursor-not-allowed'
                      }
                    `}
                  >
                    {day.getDate()}
                  </button>
                )
              })}
            </div>
          </div>

          {/* Time Slots */}
          {selectedDate && (
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Clock className="w-5 h-5 text-mh-hunter-green" />
                <h4 className="text-lg font-semibold text-black dark:text-dark-text">
                  Available Times for {selectedDate.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}
                </h4>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {consultationSlots.map((slot) => (
                  <button
                    key={slot.id}
                    onClick={() => handleTimeSelect(slot)}
                    disabled={!slot.available}
                    className={`
                      p-3 rounded-lg border-2 text-center font-medium transition-all duration-200
                      ${slot.available
                        ? selectedTime === slot.time
                          ? 'border-mh-hunter-green bg-mh-hunter-green text-white shadow-lg'
                          : 'border-gray-300 dark:border-dark-border text-black dark:text-dark-text hover:border-mh-hunter-green hover:bg-mh-hunter-green/10'
                        : 'border-gray-200 dark:border-gray-600 text-gray-400 dark:text-gray-500 cursor-not-allowed'
                      }
                    `}
                  >
                    {slot.time}
                  </button>
                ))}
              </div>

              <p className="text-sm text-gray-600 dark:text-dark-text-secondary text-center">
                Select a time slot to proceed with booking your consultation
              </p>
            </div>
          )}
        </>
      ) : (
        /* Booking Form */
        <div className="space-y-6">
          <div className="bg-mh-hunter-green/10 dark:bg-mh-hunter-green/20 p-4 rounded-lg">
            <h4 className="font-semibold text-black dark:text-dark-text mb-2">Selected Appointment</h4>
            <p className="text-mh-hunter-green dark:text-mh-hunter-green">
              {selectedDate?.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' })} at {selectedTime}
            </p>
          </div>

          <form onSubmit={handleBookingSubmit} className="space-y-4">
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
                  onChange={handleFormChange}
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
                  onChange={handleFormChange}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-dark-border rounded-lg focus:ring-2 focus:ring-mh-hunter-green focus:border-mh-hunter-green transition-all duration-300 bg-white dark:bg-dark-surface-3 dark:text-dark-text"
                  placeholder="Company name"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-dark-text-secondary mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleFormChange}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-dark-border rounded-lg focus:ring-2 focus:ring-mh-hunter-green focus:border-mh-hunter-green transition-all duration-300 bg-white dark:bg-dark-surface-3 dark:text-dark-text"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-dark-text-secondary mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleFormChange}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-dark-border rounded-lg focus:ring-2 focus:ring-mh-hunter-green focus:border-mh-hunter-green transition-all duration-300 bg-white dark:bg-dark-surface-3 dark:text-dark-text"
                  placeholder="(509) 308-6489"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-dark-text-secondary mb-2">
                Project Type
              </label>
              <select
                name="projectType"
                value={formData.projectType}
                onChange={handleFormChange}
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
                Project Details & Requirements
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleFormChange}
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 dark:border-dark-border rounded-lg focus:ring-2 focus:ring-mh-hunter-green focus:border-mh-hunter-green transition-all duration-300 bg-white dark:bg-dark-surface-3 dark:text-dark-text resize-none"
                placeholder="Please describe your project, including size, timeline, and any specific requirements..."
              />
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <button
                type="button"
                onClick={() => {
                  setShowBookingForm(false)
                  setSelectedTime(null)
                }}
                className="flex-1 px-6 py-3 border-2 border-gray-300 dark:border-dark-border text-gray-700 dark:text-dark-text-secondary rounded-lg font-semibold hover:bg-gray-50 dark:hover:bg-dark-surface-3 transition-all duration-300"
              >
                Back to Calendar
              </button>
              <button
                type="submit"
                disabled={isSubmitting || !isFormValid()}
                className="flex-1 bg-gradient-to-r from-mh-hunter-green to-mh-leather-tan text-white px-6 py-3 rounded-lg font-semibold hover:from-mh-leather-tan hover:to-mh-hunter-green transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none shadow-lg hover:shadow-xl flex items-center justify-center"
              >
                {isSubmitting ? (
                  <span className="flex items-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Booking Consultation...
                  </span>
                ) : (
                  <>
                    <User className="w-5 h-5 mr-2" />
                    Book Consultation
                  </>
                )}
              </button>
            </div>

            <p className="text-center text-sm text-gray-500 dark:text-dark-text-secondary">
              * We'll contact you within 24 hours to confirm your consultation appointment.
            </p>
          </form>
        </div>
      )}
    </div>
  )
}

export default VisualCalendar