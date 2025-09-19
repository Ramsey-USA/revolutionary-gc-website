import { db } from './firebase'
import { collection, addDoc, serverTimestamp, query, where, orderBy, onSnapshot } from 'firebase/firestore'

// Notification types
export type NotificationType = 'consultation-scheduled' | 'consultation-updated' | 'consultation-cancelled' | 'form-submission'

export interface NotificationData {
  type: NotificationType
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
  metadata?: Record<string, any>
}

// Team notification emails - Update these with your actual team emails
const TEAM_NOTIFICATION_EMAILS = [
  'info@mhconstruction.com',
  'admin@mhconstruction.com',
  // Add your team members' emails here
  // 'project-manager@mhconstruction.com',
  // 'scheduler@mhconstruction.com'
]

// Send notification to team
export async function sendTeamNotification(data: NotificationData) {
  try {
    if (!db) {
      console.warn('Firebase not initialized - notification not sent')
      return
    }

    // Store notification in Firestore
    const notificationRef = await addDoc(collection(db, 'teamNotifications'), {
      ...data,
      status: 'unread',
      createdAt: serverTimestamp(),
      recipients: TEAM_NOTIFICATION_EMAILS
    })

    console.log('Team notification stored:', notificationRef.id)

    // In a production environment, this would trigger:
    // 1. Email notifications via SendGrid/Mailgun
    // 2. SMS notifications via Twilio
    // 3. Slack/Teams integration
    // 4. Push notifications to admin mobile app

    // For now, log the notification details
    console.log('📧 Team Notification:', {
      type: data.type,
      title: data.title,
      client: data.clientInfo.name,
      appointment: data.appointmentDetails
    })

    return notificationRef.id
  } catch (error) {
    console.error('Error sending team notification:', error)
    throw error
  }
}

// Send client confirmation
export async function sendClientConfirmation(data: NotificationData) {
  try {
    if (!db) {
      console.warn('Firebase not initialized - confirmation not sent')
      return
    }

    // Store client confirmation in Firestore
    const confirmationRef = await addDoc(collection(db, 'clientConfirmations'), {
      ...data,
      status: 'sent',
      createdAt: serverTimestamp(),
      recipient: data.clientInfo.email
    })

    console.log('Client confirmation stored:', confirmationRef.id)

    // In production, this would send:
    // 1. Confirmation email to client
    // 2. Calendar invite
    // 3. SMS reminder (optional)

    console.log('✅ Client Confirmation:', {
      to: data.clientInfo.email,
      appointment: data.appointmentDetails,
      title: data.title
    })

    return confirmationRef.id
  } catch (error) {
    console.error('Error sending client confirmation:', error)
    throw error
  }
}

// Real-time notification listener for team dashboard
export function subscribeToNotifications(callback: (notifications: any[]) => void) {
  if (!db) {
    console.warn('Firebase not initialized - notification subscription not available')
    return () => {}
  }

  const q = query(
    collection(db, 'teamNotifications'),
    where('status', '==', 'unread'),
    orderBy('createdAt', 'desc')
  )

  return onSnapshot(q, (snapshot) => {
    const notifications = snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }))
    callback(notifications)
  })
}

// Format notification for different channels
export function formatNotificationForEmail(data: NotificationData): string {
  const { clientInfo, appointmentDetails } = data

  return `
    <h2>${data.title}</h2>
    
    <h3>Client Information:</h3>
    <ul>
      <li><strong>Name:</strong> ${clientInfo.name}</li>
      <li><strong>Email:</strong> ${clientInfo.email}</li>
      <li><strong>Phone:</strong> ${clientInfo.phone}</li>
      ${clientInfo.company ? `<li><strong>Company:</strong> ${clientInfo.company}</li>` : ''}
    </ul>

    ${appointmentDetails ? `
    <h3>Appointment Details:</h3>
    <ul>
      <li><strong>Date:</strong> ${appointmentDetails.date}</li>
      <li><strong>Time:</strong> ${appointmentDetails.time}</li>
      ${appointmentDetails.projectType ? `<li><strong>Project Type:</strong> ${appointmentDetails.projectType}</li>` : ''}
      ${appointmentDetails.location ? `<li><strong>Location:</strong> ${appointmentDetails.location}</li>` : ''}
    </ul>
    ` : ''}

    <p><strong>Message:</strong> ${data.message}</p>
    
    <hr>
    <p><em>Sent via MH Construction Scheduling System on ${new Date().toLocaleString()}</em></p>
  `
}

export function formatNotificationForSlack(data: NotificationData): string {
  const { clientInfo, appointmentDetails } = data

  let message = `🏗️ *${data.title}*\n\n`
  message += `*Client:* ${clientInfo.name}\n`
  message += `*Email:* ${clientInfo.email}\n`
  message += `*Phone:* ${clientInfo.phone}\n`
  
  if (clientInfo.company) {
    message += `*Company:* ${clientInfo.company}\n`
  }

  if (appointmentDetails) {
    message += `\n*Appointment:*\n`
    message += `• Date: ${appointmentDetails.date}\n`
    message += `• Time: ${appointmentDetails.time}\n`
    if (appointmentDetails.projectType) {
      message += `• Project Type: ${appointmentDetails.projectType}\n`
    }
  }

  message += `\n${data.message}`

  return message
}