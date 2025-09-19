# MH Construction Notification System

## Overview
The consultation scheduling system now includes comprehensive notifications that keep you and your team informed of all incoming consultation requests and appointments.

## How You'll Be Notified

### 1. Real-Time Team Dashboard
- **Access**: Visit `/team-dashboard` on your website
- **Features**:
  - Live notifications feed
  - Consultation request management
  - Status updates (pending, confirmed, completed, cancelled)
  - Client contact information
  - Appointment details
  - Priority levels

### 2. Firebase Database Logging
All consultation requests are automatically stored in Firebase with:
- Client information (name, email, phone, company)
- Appointment preferences (date, time, project type)
- Scheduling method (visual calendar vs. schedule button)
- Status tracking
- Timestamps

### 3. Console Notifications (Development)
Currently implemented for development/testing:
- Browser console logs show when consultations are scheduled
- Team notification details displayed
- Client confirmation tracking

## Notification Types

### Team Notifications
- **New Consultation Scheduled**: When someone books via visual calendar
- **Consultation Request**: When someone uses the Schedule Consultation button
- **Priority Levels**: Medium priority for all consultation requests
- **Includes**: Full client details, appointment preferences, project information

### Client Confirmations
- **Automatic Confirmation**: Sent to client's email address
- **Includes**: Appointment details, office location, next steps
- **Timeline**: Mentions 24-hour response commitment

## Production Setup Instructions

To enable full email/SMS notifications in production, you'll need to:

### 1. Email Service Integration
Add one of these services to `/src/lib/notifications.ts`:
- **SendGrid**: For transactional emails
- **Mailgun**: For email automation
- **AWS SES**: For cost-effective email delivery

### 2. SMS Integration (Optional)
Add Twilio integration for SMS notifications:
- Instant mobile alerts for urgent consultations
- Text confirmations to clients

### 3. Slack/Teams Integration (Optional)
Add webhook integration for team chat notifications:
- Real-time alerts in your team channel
- Project details and client contact info

### 4. Push Notifications (Optional)
Add Firebase Cloud Messaging for:
- Mobile app notifications
- Browser push notifications
- Desktop alerts

## Team Email Configuration

Update the team email list in `/src/lib/notifications.ts`:

```typescript
const TEAM_NOTIFICATION_EMAILS = [
  'info@mhconstruction.com',           // Main inbox
  'admin@mhconstruction.com',          // Admin
  'project-manager@mhconstruction.com', // Project Manager
  'scheduler@mhconstruction.com'       // Scheduling Coordinator
]
```

## Current Notification Flow

1. **Client Action**: Books consultation via visual calendar or schedule button
2. **Data Storage**: Request saved to Firebase `consultationScheduling` collection
3. **Team Notification**: Alert stored in `teamNotifications` collection
4. **Client Confirmation**: Confirmation stored in `clientConfirmations` collection
5. **Dashboard Update**: Real-time update appears in team dashboard
6. **Console Logging**: Development notifications logged to browser console

## Firebase Collections

### consultationScheduling
- All consultation requests
- Client information
- Appointment preferences
- Status tracking
- Timestamps

### teamNotifications
- Team alert records
- Notification status (unread/read)
- Priority levels
- Client and appointment details

### clientConfirmations
- Client confirmation records
- Email tracking
- Delivery status

## Accessing the Team Dashboard

1. **URL**: `https://yourdomain.com/team-dashboard`
2. **Features**:
   - View all unread notifications
   - Manage consultation requests
   - Update appointment status
   - Access client contact information
   - Track consultation history

## Mobile Access

The team dashboard is fully responsive and works on:
- Desktop computers
- Tablets
- Mobile phones
- Any device with a web browser

## Next Steps for Production

1. **Choose Email Service**: Select SendGrid, Mailgun, or AWS SES
2. **Configure API Keys**: Add email service credentials to environment variables
3. **Test Email Delivery**: Verify emails reach your team inbox
4. **Optional Integrations**: Add SMS, Slack, or push notifications
5. **Team Training**: Show your team how to use the dashboard

## Support

For questions about the notification system:
- Check the team dashboard for real-time status
- Review Firebase console for data verification
- Contact your developer for production email setup

---

*This notification system ensures no consultation request is missed and provides multiple ways for your team to stay informed and respond promptly to potential clients.*