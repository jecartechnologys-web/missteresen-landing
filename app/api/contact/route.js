import axios from 'axios';
import { NextResponse } from 'next/server';
import { saveLead } from '@/utils/firebase/admin';

async function sendTelegramMessage(token, chat_id, message) {
  const url = `https://api.telegram.org/bot${token}/sendMessage`;
  try {
    const res = await axios.post(url, { text: message, chat_id });
    return res.data.ok;
  } catch {
    return false;
  }
}

export async function POST(request) {
  try {
    const { name, email, message: userMessage } = await request.json();
    const token = process.env.TELEGRAM_BOT_TOKEN;
    const chat_id = process.env.TELEGRAM_CHAT_ID;

    if (!name || !email || !userMessage) {
      return NextResponse.json({ success: false, message: 'Faltan campos requeridos.' }, { status: 400 });
    }

    let firestoreId = null;
    try {
      firestoreId = await saveLead({ name, email, message: userMessage });
    } catch (fbErr) {
      console.error('Firestore write error:', fbErr.message);
    }

    if (token && chat_id) {
      const msg = `Nuevo lead desde la landing:\n\nNombre: ${name}\nEmail: ${email}\nMensaje: ${userMessage}`;
      await sendTelegramMessage(token, chat_id, msg);
    }

    return NextResponse.json({
      success: true,
      message: '¡Mensaje recibido! Te contactaremos pronto.',
      firestoreId,
    }, { status: 200 });

  } catch (error) {
    return NextResponse.json({ success: false, message: 'Error del servidor.' }, { status: 500 });
  }
}
