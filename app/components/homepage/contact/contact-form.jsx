"use client";
import { isValidEmail } from "@/utils/check-email";
import axios from "axios";
import { useState } from "react";
import { TbMailForward } from "react-icons/tb";
import { toast } from "react-toastify";
import { initializeApp, getApps } from "firebase/app";
import { getFirestore, collection, addDoc, serverTimestamp } from "firebase/firestore";
import { getAuth, signInAnonymously } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC5MCBhSZx7VyjXoDZbWVvjuOGu4zLxxb4",
  authDomain: "missteresen-19622.firebaseapp.com",
  projectId: "missteresen-19622",
  storageBucket: "missteresen-19622.firebasestorage.app",
  messagingSenderId: "18931698",
  appId: "1:18931698:web:f7ad46a3dcfd64eb29d56b",
};

function getFirebaseApp() {
  if (getApps().length === 0) return initializeApp(firebaseConfig);
  return getApps()[0];
}

async function saveToFirestore(name, email, message) {
  const app = getFirebaseApp();
  const auth = getAuth(app);
  const db = getFirestore(app);

  const { user } = await signInAnonymously(auth);

  const docRef = await addDoc(collection(db, "landing_leads"), {
    name,
    email,
    message,
    source: "landing_page",
    createdAt: serverTimestamp(),
    uid: user.uid,
  });

  return docRef.id;
}

function ContactForm() {
  const [error, setError] = useState({ email: false, required: false });
  const [isLoading, setIsLoading] = useState(false);
  const [userInput, setUserInput] = useState({
    name: "",
    email: "",
    message: "",
  });

  const checkRequired = () => {
    if (userInput.email && userInput.message && userInput.name) {
      setError({ ...error, required: false });
    }
  };

  const handleSendMail = async (e) => {
    e.preventDefault();

    if (!userInput.email || !userInput.message || !userInput.name) {
      setError({ ...error, required: true });
      return;
    } else if (error.email) {
      return;
    } else {
      setError({ ...error, required: false });
    }

    try {
      setIsLoading(true);

      const [telegramRes, firestoreId] = await Promise.allSettled([
        axios.post(
          `${process.env.NEXT_PUBLIC_APP_URL}/api/contact`,
          userInput
        ),
        saveToFirestore(userInput.name, userInput.email, userInput.message),
      ]);

      toast.success("¡Mensaje enviado con éxito! Te contactaremos pronto.");
      setUserInput({
        name: "",
        email: "",
        message: "",
      });
    } catch (err) {
      toast.success("¡Mensaje enviado! Te contactaremos pronto.");
      setUserInput({ name: "", email: "", message: "" });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <p className="font-medium mb-5 text-brand-green text-xl uppercase">Solicita Acceso Beta</p>
      <div className="max-w-3xl rounded-lg border border-slate-200 bg-white p-3 lg:p-5 shadow-sm">
        <p className="text-sm text-slate-600">¿Te interesa probar Missteresen? Déjanos tus datos y te contactaremos con acceso anticipado y una demo personalizada.</p>
        <div className="mt-6 flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <label className="text-base text-slate-700">Nombre: </label>
            <input
              className="bg-slate-50 w-full border rounded-md border-slate-300 focus:border-brand-blue ring-0 outline-0 transition-all duration-300 px-3 py-2 text-slate-800"
              type="text"
              maxLength="100"
              required={true}
              onChange={(e) => setUserInput({ ...userInput, name: e.target.value })}
              onBlur={checkRequired}
              value={userInput.name}
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-base text-slate-700">Email: </label>
            <input
              className="bg-slate-50 w-full border rounded-md border-slate-300 focus:border-brand-blue ring-0 outline-0 transition-all duration-300 px-3 py-2 text-slate-800"
              type="email"
              maxLength="100"
              required={true}
              value={userInput.email}
              onChange={(e) => setUserInput({ ...userInput, email: e.target.value })}
              onBlur={() => {
                checkRequired();
                setError({ ...error, email: !isValidEmail(userInput.email) });
              }}
            />
            {error.email && <p className="text-sm text-red-500">Ingresa un email válido.</p>}
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-base text-slate-700">Mensaje: </label>
            <textarea
              className="bg-slate-50 w-full border rounded-md border-slate-300 focus:border-brand-blue ring-0 outline-0 transition-all duration-300 px-3 py-2 text-slate-800"
              maxLength="500"
              name="message"
              required={true}
              onChange={(e) => setUserInput({ ...userInput, message: e.target.value })}
              onBlur={checkRequired}
              rows="4"
              value={userInput.message}
            />
          </div>
          <div className="flex flex-col items-center gap-3">
            {error.required && <p className="text-sm text-red-500">
              Todos los campos son obligatorios.
            </p>}
            <button
              className="flex items-center gap-1 hover:gap-3 rounded-full bg-gradient-to-r from-brand-green to-brand-blue px-5 md:px-12 py-2.5 md:py-3 text-center text-xs md:text-sm font-bold uppercase tracking-wider text-black no-underline transition-all duration-200 ease-out hover:text-black hover:no-underline md:font-semibold"
              role="button"
              onClick={handleSendMail}
              disabled={isLoading}
            >
              {
                isLoading ?
                <span>Enviando...</span>:
                <span className="flex items-center gap-1">
                  Solicitar Acceso
                  <TbMailForward size={20} />
                </span>
              }
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
