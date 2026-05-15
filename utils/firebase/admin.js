import { getApps, initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';

function getAdminApp() {
  if (getApps().length > 0) return getApps()[0];

  const key = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT_KEY || '{}');

  return initializeApp({
    credential: cert(key),
    projectId: 'missteresen-19622',
  });
}

const db = getFirestore(getAdminApp());

export async function saveLead({ name, email, message }) {
  const docRef = await db.collection('landing_leads').add({
    name,
    email,
    message,
    source: 'landing_page',
    createdAt: new Date(),
  });
  return docRef.id;
}
