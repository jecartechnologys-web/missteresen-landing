import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from './config';

export async function saveLead({ name, email, message }) {
  const docRef = await addDoc(collection(db, 'landing_leads'), {
    name,
    email,
    message,
    source: 'landing_page',
    createdAt: serverTimestamp(),
  });
  return docRef.id;
}
