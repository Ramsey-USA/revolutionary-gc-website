import { db } from './firebase'
import { 
  collection, 
  query, 
  orderBy, 
  limit, 
  where, 
  getDocs, 
  doc, 
  getDoc,
  onSnapshot,
  Timestamp 
} from 'firebase/firestore'

// Types for the data structures
export interface ConsultationRequest {
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
  type: 'consultation' | 'personal-consultation'
  createdAt: Timestamp
  updatedAt?: Timestamp
}

export interface TeamNotification {
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
  createdAt: Timestamp
  recipients: string[]
  metadata?: Record<string, any>
}

export interface ClientConfirmation {
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
  priority: string
  status: 'sent' | 'delivered' | 'failed'
  createdAt: Timestamp
  recipient: string
}

export interface NewsletterSubscription {
  id: string
  email: string
  status: 'active' | 'unsubscribed' | 'bounced'
  source: string
  subscribedAt: Timestamp
  unsubscribedAt?: Timestamp
  ipAddress?: string
  userAgent?: string
}

// API Functions for your external dashboard

/**
 * Get all consultation requests
 * @param limitCount - Number of results to return (default: 50)
 * @param status - Filter by status (optional)
 */
export async function getConsultationRequests(
  limitCount: number = 50, 
  status?: string
): Promise<ConsultationRequest[]> {
  if (!db) {
    throw new Error('Firebase not initialized')
  }

  try {
    let q = query(
      collection(db, 'consultationScheduling'),
      orderBy('createdAt', 'desc'),
      limit(limitCount)
    )

    if (status) {
      q = query(
        collection(db, 'consultationScheduling'),
        where('status', '==', status),
        orderBy('createdAt', 'desc'),
        limit(limitCount)
      )
    }

    const querySnapshot = await getDocs(q)
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    })) as ConsultationRequest[]
  } catch (error) {
    console.error('Error fetching consultation requests:', error)
    throw error
  }
}

/**
 * Get a specific consultation request by ID
 */
export async function getConsultationById(id: string): Promise<ConsultationRequest | null> {
  if (!db) {
    throw new Error('Firebase not initialized')
  }

  try {
    const docRef = doc(db, 'consultationScheduling', id)
    const docSnap = await getDoc(docRef)
    
    if (docSnap.exists()) {
      return {
        id: docSnap.id,
        ...docSnap.data()
      } as ConsultationRequest
    }
    return null
  } catch (error) {
    console.error('Error fetching consultation:', error)
    throw error
  }
}

/**
 * Get all team notifications
 * @param limitCount - Number of results to return (default: 20)
 * @param unreadOnly - Only return unread notifications (default: false)
 */
export async function getTeamNotifications(
  limitCount: number = 20,
  unreadOnly: boolean = false
): Promise<TeamNotification[]> {
  if (!db) {
    throw new Error('Firebase not initialized')
  }

  try {
    let q = query(
      collection(db, 'teamNotifications'),
      orderBy('createdAt', 'desc'),
      limit(limitCount)
    )

    if (unreadOnly) {
      q = query(
        collection(db, 'teamNotifications'),
        where('status', '==', 'unread'),
        orderBy('createdAt', 'desc'),
        limit(limitCount)
      )
    }

    const querySnapshot = await getDocs(q)
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    })) as TeamNotification[]
  } catch (error) {
    console.error('Error fetching team notifications:', error)
    throw error
  }
}

/**
 * Get client confirmations
 * @param limitCount - Number of results to return (default: 20)
 */
export async function getClientConfirmations(limitCount: number = 20): Promise<ClientConfirmation[]> {
  if (!db) {
    throw new Error('Firebase not initialized')
  }

  try {
    const q = query(
      collection(db, 'clientConfirmations'),
      orderBy('createdAt', 'desc'),
      limit(limitCount)
    )

    const querySnapshot = await getDocs(q)
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    })) as ClientConfirmation[]
  } catch (error) {
    console.error('Error fetching client confirmations:', error)
    throw error
  }
}

/**
 * Get newsletter subscriptions
 * @param limitCount - Number of results to return (default: 50)
 * @param activeOnly - Only return active subscriptions (default: false)
 */
export async function getNewsletterSubscriptions(
  limitCount: number = 50,
  activeOnly: boolean = false
): Promise<NewsletterSubscription[]> {
  if (!db) {
    throw new Error('Firebase not initialized')
  }

  try {
    let q = query(
      collection(db, 'newsletterSubscriptions'),
      orderBy('subscribedAt', 'desc'),
      limit(limitCount)
    )

    if (activeOnly) {
      q = query(
        collection(db, 'newsletterSubscriptions'),
        where('status', '==', 'active'),
        orderBy('subscribedAt', 'desc'),
        limit(limitCount)
      )
    }

    const querySnapshot = await getDocs(q)
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    })) as NewsletterSubscription[]
  } catch (error) {
    console.error('Error fetching newsletter subscriptions:', error)
    throw error
  }
}

/**
 * Get summary statistics for dashboard
 */
export async function getDashboardStats(): Promise<{
  totalConsultations: number
  pendingConsultations: number
  confirmedConsultations: number
  unreadNotifications: number
  todayConsultations: number
  newsletterSubscriptions: number
}> {
  if (!db) {
    throw new Error('Firebase not initialized')
  }

  try {
    // Get all consultations
    const allConsultations = await getConsultationRequests(1000)
    
    // Get unread notifications
    const unreadNotifications = await getTeamNotifications(1000, true)
    
    // Get newsletter subscriptions
    const newsletters = await getNewsletterSubscriptions(1000, true)
    
    // Calculate today's consultations
    const today = new Date().toISOString().split('T')[0]
    const todayConsultations = allConsultations.filter(c => 
      c.preferredDate === today
    ).length

    return {
      totalConsultations: allConsultations.length,
      pendingConsultations: allConsultations.filter(c => c.status === 'pending').length,
      confirmedConsultations: allConsultations.filter(c => c.status === 'confirmed').length,
      unreadNotifications: unreadNotifications.length,
      todayConsultations,
      newsletterSubscriptions: newsletters.length
    }
  } catch (error) {
    console.error('Error fetching dashboard stats:', error)
    throw error
  }
}

/**
 * Real-time subscription to consultation requests
 * Use this in your dashboard for live updates
 */
export function subscribeToConsultations(
  callback: (consultations: ConsultationRequest[]) => void,
  limitCount: number = 50
): () => void {
  if (!db) {
    console.warn('Firebase not initialized')
    return () => {}
  }

  const q = query(
    collection(db, 'consultationScheduling'),
    orderBy('createdAt', 'desc'),
    limit(limitCount)
  )

  return onSnapshot(q, (snapshot) => {
    const consultations = snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    })) as ConsultationRequest[]
    callback(consultations)
  })
}

/**
 * Real-time subscription to team notifications
 * Use this in your dashboard for live notifications
 */
export function subscribeToTeamNotifications(
  callback: (notifications: TeamNotification[]) => void,
  limitCount: number = 20
): () => void {
  if (!db) {
    console.warn('Firebase not initialized')
    return () => {}
  }

  const q = query(
    collection(db, 'teamNotifications'),
    orderBy('createdAt', 'desc'),
    limit(limitCount)
  )

  return onSnapshot(q, (snapshot) => {
    const notifications = snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    })) as TeamNotification[]
    callback(notifications)
  })
}

/**
 * Get consultations by date range
 */
export async function getConsultationsByDateRange(
  startDate: string,
  endDate: string
): Promise<ConsultationRequest[]> {
  if (!db) {
    throw new Error('Firebase not initialized')
  }

  try {
    const q = query(
      collection(db, 'consultationScheduling'),
      where('preferredDate', '>=', startDate),
      where('preferredDate', '<=', endDate),
      orderBy('preferredDate', 'asc')
    )

    const querySnapshot = await getDocs(q)
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    })) as ConsultationRequest[]
  } catch (error) {
    console.error('Error fetching consultations by date range:', error)
    throw error
  }
}

/**
 * Export data to JSON for external use
 */
export async function exportConsultationData(): Promise<{
  consultations: ConsultationRequest[]
  notifications: TeamNotification[]
  confirmations: ClientConfirmation[]
  exportDate: string
}> {
  try {
    const consultations = await getConsultationRequests(1000)
    const notifications = await getTeamNotifications(1000)
    const confirmations = await getClientConfirmations(1000)

    return {
      consultations,
      notifications,
      confirmations,
      exportDate: new Date().toISOString()
    }
  } catch (error) {
    console.error('Error exporting consultation data:', error)
    throw error
  }
}