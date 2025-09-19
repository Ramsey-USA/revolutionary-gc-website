'use client'

import { useState, useEffect } from 'react'
import { Bell, Calendar, Clock, User, Phone, Mail, Building, MapPin, Check, X, AlertTriangle } from 'lucide-react'
import { subscribeToNotifications } from '../lib/notifications'
import { db } from '../lib/firebase'
import { doc, updateDoc, collection, query, orderBy, limit, onSnapshot } from 'firebase/firestore'

interface Notification {
  id: string
  type: string
  title: string
  message: string
  clientInfo: {
    name: string
    email: string
    phone: string
    company?: string
  }
  appointmentDetails?: {
    date: string
    time: string
    projectType?: string
    location?: string
  }
  priority: 'low' | 'medium' | 'high'
  status: 'unread' | 'read' | 'acknowledged'
  createdAt: any
}

interface ConsultationRequest {
  id: string
  name: string
  email: string
  phone: string
  company?: string
  projectType?: string
  projectLocation?: string
  preferredDate: string
  preferredTime: string
  message?: string
  status: 'pending' | 'confirmed' | 'completed' | 'cancelled'
  type: string
  createdAt: any
}

const TeamDashboard = () => {
  const [notifications, setNotifications] = useState<Notification[]>([])
  const [consultations, setConsultations] = useState<ConsultationRequest[]>([])
  const [selectedTab, setSelectedTab] = useState<'notifications' | 'consultations'>('notifications')
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    if (!db) {
      setIsLoading(false)
      return
    }

    // Subscribe to notifications
    const unsubscribeNotifications = subscribeToNotifications((newNotifications) => {
      setNotifications(newNotifications)
      setIsLoading(false)
    })

    // Subscribe to consultation requests
    const consultationsQuery = query(
      collection(db, 'consultationScheduling'),
      orderBy('createdAt', 'desc'),
      limit(20)
    )

    const unsubscribeConsultations = onSnapshot(consultationsQuery, (snapshot) => {
      const consultationData = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })) as ConsultationRequest[]
      setConsultations(consultationData)
    })

    return () => {
      unsubscribeNotifications()
      unsubscribeConsultations()
    }
  }, [])

  const markNotificationAsRead = async (notificationId: string) => {
    if (!db) return

    try {
      await updateDoc(doc(db, 'teamNotifications', notificationId), {
        status: 'read'
      })
    } catch (error) {
      console.error('Error marking notification as read:', error)
    }
  }

  const updateConsultationStatus = async (consultationId: string, status: ConsultationRequest['status']) => {
    if (!db) return

    try {
      await updateDoc(doc(db, 'consultationScheduling', consultationId), {
        status: status,
        updatedAt: new Date()
      })
    } catch (error) {
      console.error('Error updating consultation status:', error)
    }
  }

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'text-red-600 bg-red-100 dark:bg-red-900/20'
      case 'medium': return 'text-yellow-600 bg-yellow-100 dark:bg-yellow-900/20'
      case 'low': return 'text-green-600 bg-green-100 dark:bg-green-900/20'
      default: return 'text-gray-600 bg-gray-100 dark:bg-gray-900/20'
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending': return 'text-yellow-600 bg-yellow-100 dark:bg-yellow-900/20'
      case 'confirmed': return 'text-blue-600 bg-blue-100 dark:bg-blue-900/20'
      case 'completed': return 'text-green-600 bg-green-100 dark:bg-green-900/20'
      case 'cancelled': return 'text-red-600 bg-red-100 dark:bg-red-900/20'
      default: return 'text-gray-600 bg-gray-100 dark:bg-gray-900/20'
    }
  }

  const formatTimestamp = (timestamp: any) => {
    if (!timestamp || !timestamp.toDate) return 'Just now'
    return timestamp.toDate().toLocaleString()
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-dark-surface p-6 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-mh-hunter-green mx-auto mb-4"></div>
          <p className="text-gray-600 dark:text-dark-text-secondary">Loading team dashboard...</p>
        </div>
      </div>
    )
  }

  if (!db) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-dark-surface p-6 flex items-center justify-center">
        <div className="bg-white dark:bg-dark-surface-2 rounded-lg p-8 text-center max-w-md">
          <AlertTriangle className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
          <h2 className="text-xl font-bold text-gray-900 dark:text-dark-text mb-2">Firebase Not Connected</h2>
          <p className="text-gray-600 dark:text-dark-text-secondary">
            The team dashboard requires Firebase configuration to display consultation requests and notifications.
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-dark-surface">
      {/* Header */}
      <div className="bg-white dark:bg-dark-surface-2 shadow-sm border-b border-gray-200 dark:border-dark-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div>
              <h1 className="text-2xl font-bold text-gray-900 dark:text-dark-text">MH Construction Team Dashboard</h1>
              <p className="text-gray-600 dark:text-dark-text-secondary">Monitor consultation requests and notifications</p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Bell className="w-5 h-5 text-mh-hunter-green" />
                <span className="text-sm font-medium text-gray-900 dark:text-dark-text">
                  {notifications.filter(n => n.status === 'unread').length} unread
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar className="w-5 h-5 text-army-gold" />
                <span className="text-sm font-medium text-gray-900 dark:text-dark-text">
                  {consultations.filter(c => c.status === 'pending').length} pending
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex space-x-1 bg-gray-100 dark:bg-dark-surface-3 rounded-lg p-1 mb-6">
          <button
            onClick={() => setSelectedTab('notifications')}
            className={`flex-1 px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
              selectedTab === 'notifications'
                ? 'bg-white dark:bg-dark-surface-2 text-mh-hunter-green shadow-sm'
                : 'text-gray-600 dark:text-dark-text-secondary hover:text-gray-900 dark:hover:text-dark-text'
            }`}
          >
            <Bell className="w-4 h-4 inline mr-2" />
            Notifications ({notifications.filter(n => n.status === 'unread').length})
          </button>
          <button
            onClick={() => setSelectedTab('consultations')}
            className={`flex-1 px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
              selectedTab === 'consultations'
                ? 'bg-white dark:bg-dark-surface-2 text-mh-hunter-green shadow-sm'
                : 'text-gray-600 dark:text-dark-text-secondary hover:text-gray-900 dark:hover:text-dark-text'
            }`}
          >
            <Calendar className="w-4 h-4 inline mr-2" />
            Consultations ({consultations.length})
          </button>
        </div>

        {/* Content */}
        {selectedTab === 'notifications' ? (
          <div className="space-y-4">
            {notifications.length === 0 ? (
              <div className="bg-white dark:bg-dark-surface-2 rounded-lg p-8 text-center">
                <Bell className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 dark:text-dark-text mb-2">No notifications</h3>
                <p className="text-gray-600 dark:text-dark-text-secondary">
                  New consultation requests will appear here.
                </p>
              </div>
            ) : (
              notifications.map((notification) => (
                <div
                  key={notification.id}
                  className={`bg-white dark:bg-dark-surface-2 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-dark-border ${
                    notification.status === 'unread' ? 'border-l-4 border-l-mh-hunter-green' : ''
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-dark-text">
                          {notification.title}
                        </h3>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getPriorityColor(notification.priority)}`}>
                          {notification.priority.toUpperCase()}
                        </span>
                        {notification.status === 'unread' && (
                          <span className="w-2 h-2 bg-mh-hunter-green rounded-full"></span>
                        )}
                      </div>
                      <p className="text-gray-600 dark:text-dark-text-secondary mb-4">
                        {notification.message}
                      </p>

                      {/* Client Info */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4 p-4 bg-gray-50 dark:bg-dark-surface-3 rounded-lg">
                        <div className="space-y-2">
                          <div className="flex items-center space-x-2">
                            <User className="w-4 h-4 text-gray-500" />
                            <span className="text-sm text-gray-900 dark:text-dark-text font-medium">
                              {notification.clientInfo.name}
                            </span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Mail className="w-4 h-4 text-gray-500" />
                            <a
                              href={`mailto:${notification.clientInfo.email}`}
                              className="text-sm text-mh-hunter-green hover:underline"
                            >
                              {notification.clientInfo.email}
                            </a>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Phone className="w-4 h-4 text-gray-500" />
                            <a
                              href={`tel:${notification.clientInfo.phone}`}
                              className="text-sm text-mh-hunter-green hover:underline"
                            >
                              {notification.clientInfo.phone}
                            </a>
                          </div>
                          {notification.clientInfo.company && (
                            <div className="flex items-center space-x-2">
                              <Building className="w-4 h-4 text-gray-500" />
                              <span className="text-sm text-gray-900 dark:text-dark-text">
                                {notification.clientInfo.company}
                              </span>
                            </div>
                          )}
                        </div>

                        {notification.appointmentDetails && (
                          <div className="space-y-2">
                            <div className="flex items-center space-x-2">
                              <Calendar className="w-4 h-4 text-gray-500" />
                              <span className="text-sm text-gray-900 dark:text-dark-text">
                                {notification.appointmentDetails.date}
                              </span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Clock className="w-4 h-4 text-gray-500" />
                              <span className="text-sm text-gray-900 dark:text-dark-text">
                                {notification.appointmentDetails.time}
                              </span>
                            </div>
                            {notification.appointmentDetails.projectType && (
                              <div className="flex items-center space-x-2">
                                <Building className="w-4 h-4 text-gray-500" />
                                <span className="text-sm text-gray-900 dark:text-dark-text">
                                  {notification.appointmentDetails.projectType}
                                </span>
                              </div>
                            )}
                            {notification.appointmentDetails.location && (
                              <div className="flex items-center space-x-2">
                                <MapPin className="w-4 h-4 text-gray-500" />
                                <span className="text-sm text-gray-900 dark:text-dark-text">
                                  {notification.appointmentDetails.location}
                                </span>
                              </div>
                            )}
                          </div>
                        )}
                      </div>

                      <div className="text-xs text-gray-500 dark:text-dark-text-secondary">
                        {formatTimestamp(notification.createdAt)}
                      </div>
                    </div>

                    {notification.status === 'unread' && (
                      <button
                        onClick={() => markNotificationAsRead(notification.id)}
                        className="ml-4 p-2 text-gray-400 hover:text-mh-hunter-green transition-colors"
                        title="Mark as read"
                      >
                        <Check className="w-5 h-5" />
                      </button>
                    )}
                  </div>
                </div>
              ))
            )}
          </div>
        ) : (
          <div className="space-y-4">
            {consultations.length === 0 ? (
              <div className="bg-white dark:bg-dark-surface-2 rounded-lg p-8 text-center">
                <Calendar className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 dark:text-dark-text mb-2">No consultations</h3>
                <p className="text-gray-600 dark:text-dark-text-secondary">
                  Scheduled consultations will appear here.
                </p>
              </div>
            ) : (
              consultations.map((consultation) => (
                <div
                  key={consultation.id}
                  className="bg-white dark:bg-dark-surface-2 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-dark-border"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-dark-text">
                        {consultation.name}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-dark-text-secondary">
                        {consultation.email} • {consultation.phone}
                      </p>
                      {consultation.company && (
                        <p className="text-sm text-gray-600 dark:text-dark-text-secondary">
                          {consultation.company}
                        </p>
                      )}
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(consultation.status)}`}>
                        {consultation.status.toUpperCase()}
                      </span>
                      <span className="px-3 py-1 rounded-full text-xs font-medium bg-blue-100 dark:bg-blue-900/20 text-blue-600">
                        {consultation.type === 'personal-consultation' ? 'PERSONAL' : 'STANDARD'}
                      </span>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <div className="flex items-center space-x-2 mb-2">
                        <Calendar className="w-4 h-4 text-gray-500" />
                        <span className="text-sm font-medium text-gray-900 dark:text-dark-text">
                          {consultation.preferredDate}
                        </span>
                      </div>
                      <div className="flex items-center space-x-2 mb-2">
                        <Clock className="w-4 h-4 text-gray-500" />
                        <span className="text-sm font-medium text-gray-900 dark:text-dark-text">
                          {consultation.preferredTime}
                        </span>
                      </div>
                      {consultation.projectType && (
                        <div className="flex items-center space-x-2">
                          <Building className="w-4 h-4 text-gray-500" />
                          <span className="text-sm text-gray-900 dark:text-dark-text">
                            {consultation.projectType}
                          </span>
                        </div>
                      )}
                    </div>

                    <div>
                      {consultation.projectLocation && (
                        <div className="flex items-center space-x-2 mb-2">
                          <MapPin className="w-4 h-4 text-gray-500" />
                          <span className="text-sm text-gray-900 dark:text-dark-text">
                            {consultation.projectLocation}
                          </span>
                        </div>
                      )}
                      <div className="text-xs text-gray-500 dark:text-dark-text-secondary">
                        Requested: {formatTimestamp(consultation.createdAt)}
                      </div>
                    </div>
                  </div>

                  {consultation.message && (
                    <div className="mb-4 p-3 bg-gray-50 dark:bg-dark-surface-3 rounded-lg">
                      <p className="text-sm text-gray-700 dark:text-dark-text-secondary">
                        <strong>Message:</strong> {consultation.message}
                      </p>
                    </div>
                  )}

                  {consultation.status === 'pending' && (
                    <div className="flex space-x-2">
                      <button
                        onClick={() => updateConsultationStatus(consultation.id, 'confirmed')}
                        className="px-4 py-2 bg-mh-hunter-green text-white rounded-lg text-sm font-medium hover:bg-army-green transition-colors"
                      >
                        Confirm
                      </button>
                      <button
                        onClick={() => updateConsultationStatus(consultation.id, 'cancelled')}
                        className="px-4 py-2 bg-gray-600 text-white rounded-lg text-sm font-medium hover:bg-gray-700 transition-colors"
                      >
                        Cancel
                      </button>
                    </div>
                  )}
                </div>
              ))
            )}
          </div>
        )}
      </div>
    </div>
  )
}

export default TeamDashboard