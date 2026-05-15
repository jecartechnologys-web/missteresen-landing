import { initializeApp, getApps } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyC5MCBhSZx7VyjXoDZbWVvjuOGu4zLxxb4",
  authDomain: "missteresen-19622.firebaseapp.com",
  projectId: "missteresen-19622",
  storageBucket: "missteresen-19622.firebasestorage.app",
  messagingSenderId: "18931698",
  appId: "1:18931698:web:f7ad46a3dcfd64eb29d56b",
};

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
const db = getFirestore(app);

export { db };
