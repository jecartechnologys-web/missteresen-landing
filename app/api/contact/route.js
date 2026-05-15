import axios from 'axios';
import { NextResponse } from 'next/server';
import { saveLead } from '@/utils/firebase/firestore';

async function sendTelegramMessage(token, chat_id, message) {
  const url = `https://api.telegram.org/bot${token}/sendMessage`;
  try {
    const res = await axios.post(url, { text: message, chat_id });
    return res.data.ok;
  } catch (error) {
    console.error('Error sending Telegram message:', error.response?.data || error.message);
    return false;
  }
}

export async function POST(request) {
  try {
    const payload = await request.json();
    const { name, email, message: userMessage } = payload;
    const token = process.env.TELEGRAM_BOT_TOKEN;
    const chat_id = process.env.TELEGRAM_CHAT_ID;

    if (!name || !email || !userMessage) {
      return NextResponse.json({
        success: false,
        message: 'Faltan campos requeridos.',
      }, { status: 400 });
    }

    const results = [];

    try {
      const leadId = await saveLead({ name, email, message: userMessage });
      results.push(`Firestore: ${leadId}`);
    } catch (fbError) {
      console.error('Firestore error:', fbError.message);
      results.push('Firestore: error');
    }

    if (token && chat_id) {
      const message = `Nuevo lead desde la landing:\n\nNombre: ${name}\nEmail: ${email}\nMensaje: ${userMessage}`;
      const telegramOk = await sendTelegramMessage(token, chat_id, message);
      results.push(`Telegram: ${telegramOk ? 'ok' : 'error'}`);
    }

    return NextResponse.json({
      success: true,
      message: '¡Mensaje recibido! Te contactaremos pronto.',
      results,
    }, { status: 200 });

  } catch (error) {
    console.error('API Error:', error.message);
    return NextResponse.json({
      success: false,
      message: 'Error del servidor.',
    }, { status: 500 });
  }
}
