import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'
import { getFunctions } from 'firebase/functions'

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY || "",
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN || "",
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || "",
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET || "",
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID || "",
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID || "",
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID || ""
}

// Validate required config
const isConfigValid = firebaseConfig.apiKey && firebaseConfig.projectId && 
  firebaseConfig.apiKey !== "your-api-key-here" && 
  firebaseConfig.projectId !== "your-project-id"

if (!isConfigValid) {
  console.error('Firebase configuration missing or using placeholder values:', {
    hasApiKey: !!firebaseConfig.apiKey,
    hasProjectId: !!firebaseConfig.projectId,
    apiKeyLength: firebaseConfig.apiKey?.length || 0,
    isPlaceholder: firebaseConfig.apiKey === "your-api-key-here"
  })
}

// Initialize Firebase only if config is valid
let app: any = null
let auth: any = null
let db: any = null
let storage: any = null
let functions: any = null

if (isConfigValid) {
  try {
    app = initializeApp(firebaseConfig)
    auth = getAuth(app)
    db = getFirestore(app)
    storage = getStorage(app)
    functions = getFunctions(app)
  } catch (error) {
    console.error('Firebase initialization failed:', error)
  }
} else {
  console.warn('Firebase services disabled due to invalid configuration')
}

export { auth, db, storage, functions }
export default app
