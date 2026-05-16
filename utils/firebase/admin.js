import { getApps, initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';

let db = null;

function getAdminApp() {
  if (getApps().length > 0) return getApps()[0];

  const raw = process.env.FIREBASE_SERVICE_ACCOUNT_KEY;
  if (!raw) return null;

  const key = JSON.parse(raw);
  return initializeApp({
    credential: cert(key),
    projectId: key.project_id || 'missteresen-19622',
  });
}

function getDb() {
  if (db) return db;
  const app = getAdminApp();
  if (!app) return null;
  db = getFirestore(app);
  return db;
}

export async function saveLead({ name, email, message }) {
  const firestore = getDb();
  if (!firestore) {
    console.warn('Firebase Admin no configurado — lead no guardado en Firestore');
    return null;
  }

  const docRef = await firestore.collection('landing_leads').add({
    name,
    email,
    message,
    source: 'landing_page',
    createdAt: new Date(),
  });
  return docRef.id;
}
