import admin from 'firebase-admin'

let db = null

export function getFirebaseDb() {
  if (db) return db

  try {
    if (!admin.apps.length && process.env.FIREBASE_PROJECT_ID && process.env.FIREBASE_CLIENT_EMAIL && process.env.FIREBASE_PRIVATE_KEY) {
      admin.initializeApp({
        credential: admin.credential.cert({
          projectId: process.env.FIREBASE_PROJECT_ID,
          clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
          privateKey: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n')
        })
      })
      db = admin.firestore()
      return db
    }
  } catch (error) {
    console.warn('Firebase init failed, using in-memory store.', error.message)
  }

  return null
}
