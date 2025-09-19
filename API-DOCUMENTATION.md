# MH Construction Dashboard API Documentation

## Overview
This API provides access to consultation data from the MH Construction website for your separate dashboard application.

## Base URL
- **Local Development**: `http://localhost:3000/api`
- **Production**: `https://yourdomain.com/api`

## Authentication
Currently, the API is open. For production, you may want to add API key authentication.

---

## Endpoints

### 1. Get All Consultations
**GET** `/api/consultations`

Get all consultation requests with optional filtering.

**Query Parameters:**
- `limit` (optional): Number of results (default: 50)
- `status` (optional): Filter by status (`pending`, `confirmed`, `completed`, `cancelled`)

**Example:**
```bash
curl "http://localhost:3000/api/consultations?limit=10&status=pending"
```

**Response:**
```json
{
  "success": true,
  "data": [
    {
      "id": "abc123",
      "name": "John Smith",
      "email": "john@example.com",
      "phone": "(509) 123-4567",
      "company": "Smith Industries",
      "projectType": "commercial",
      "projectLocation": "Pasco, WA",
      "preferredDate": "2025-09-25",
      "preferredTime": "10:00 AM",
      "message": "Need help with warehouse expansion",
      "status": "pending",
      "type": "consultation",
      "createdAt": {...}
    }
  ],
  "count": 1
}
```

### 2. Get Single Consultation
**GET** `/api/consultations/[id]`

Get a specific consultation by ID.

**Example:**
```bash
curl "http://localhost:3000/api/consultations/abc123"
```

### 3. Get Team Notifications
**GET** `/api/notifications`

Get team notifications.

**Query Parameters:**
- `limit` (optional): Number of results (default: 20)
- `unreadOnly` (optional): Only unread notifications (`true`/`false`)

**Example:**
```bash
curl "http://localhost:3000/api/notifications?unreadOnly=true"
```

**Response:**
```json
{
  "success": true,
  "data": [
    {
      "id": "notif123",
      "type": "consultation-scheduled",
      "title": "New Consultation Scheduled",
      "message": "John Smith has scheduled a consultation...",
      "clientInfo": {
        "name": "John Smith",
        "email": "john@example.com",
        "phone": "(509) 123-4567",
        "company": "Smith Industries"
      },
      "appointmentDetails": {
        "date": "September 25, 2025",
        "time": "10:00 AM",
        "projectType": "commercial",
        "location": "MH Construction Office"
      },
      "priority": "medium",
      "status": "unread",
      "createdAt": {...}
    }
  ],
  "count": 1
}
```

### 4. Get Dashboard Statistics
**GET** `/api/dashboard-stats`

Get summary statistics for the dashboard.

**Example:**
```bash
curl "http://localhost:3000/api/dashboard-stats"
```

**Response:**
```json
{
  "success": true,
  "data": {
    "totalConsultations": 45,
    "pendingConsultations": 8,
    "confirmedConsultations": 32,
    "unreadNotifications": 3,
    "todayConsultations": 2
  }
}
```

### 5. Export All Data
**GET** `/api/export-data`

Export all consultation data for backup or analysis.

**Example:**
```bash
curl "http://localhost:3000/api/export-data"
```

**Response:**
```json
{
  "success": true,
  "data": {
    "consultations": [...],
    "notifications": [...],
    "confirmations": [...],
    "exportDate": "2025-09-19T10:30:00.000Z"
  }
}
```

---

## Data Types

### ConsultationRequest
```typescript
{
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
```

### TeamNotification
```typescript
{
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
}
```

---

## Real-Time Updates (For JavaScript Dashboards)

If you're building a JavaScript dashboard, you can import the functions directly:

```javascript
import { 
  subscribeToConsultations, 
  subscribeToTeamNotifications 
} from './path/to/dashboardAPI'

// Real-time consultation updates
const unsubscribe = subscribeToConsultations((consultations) => {
  console.log('New consultations:', consultations)
  // Update your dashboard UI
})

// Real-time notification updates
const unsubscribeNotifications = subscribeToTeamNotifications((notifications) => {
  console.log('New notifications:', notifications)
  // Update notification UI
})

// Clean up subscriptions when done
unsubscribe()
unsubscribeNotifications()
```

---

## Error Handling

All API endpoints return errors in this format:

```json
{
  "success": false,
  "error": "Error description",
  "message": "Detailed error message"
}
```

**Common HTTP Status Codes:**
- `200`: Success
- `404`: Resource not found
- `500`: Server error (Firebase connection issues, etc.)

---

## Usage Examples

### Dashboard Polling (Every 30 seconds)
```javascript
setInterval(async () => {
  try {
    const response = await fetch('/api/dashboard-stats')
    const data = await response.json()
    if (data.success) {
      updateDashboardStats(data.data)
    }
  } catch (error) {
    console.error('Failed to fetch stats:', error)
  }
}, 30000)
```

### Get Today's Consultations
```javascript
const today = new Date().toISOString().split('T')[0]
const response = await fetch('/api/consultations')
const data = await response.json()
const todayConsultations = data.data.filter(c => c.preferredDate === today)
```

### Monitor New Notifications
```javascript
let lastNotificationCount = 0

setInterval(async () => {
  const response = await fetch('/api/notifications?unreadOnly=true')
  const data = await response.json()
  
  if (data.count > lastNotificationCount) {
    // Show notification badge or sound alert
    showNewNotificationAlert(data.count - lastNotificationCount)
  }
  
  lastNotificationCount = data.count
}, 10000) // Check every 10 seconds
```

---

## Testing the API

Test all endpoints with curl or your preferred API testing tool:

```bash
# Test basic functionality
curl "http://localhost:3000/api/dashboard-stats"

# Test with parameters
curl "http://localhost:3000/api/consultations?limit=5&status=pending"

# Test notifications
curl "http://localhost:3000/api/notifications?unreadOnly=true"
```

---

## Next Steps

1. **Create your dashboard application** using any framework (React, Vue, vanilla JS, etc.)
2. **Use these API endpoints** to fetch consultation data
3. **Implement real-time updates** using polling or WebSocket connections
4. **Add authentication** in production for security
5. **Set up monitoring** to track API usage and performance

The API is ready to serve all consultation data to your separate dashboard application!