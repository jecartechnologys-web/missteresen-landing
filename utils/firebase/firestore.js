import axios from 'axios';

const FIRESTORE_URL = 'https://firestore.googleapis.com/v1/projects/missteresen-19622/databases/(default)/documents';
const API_KEY = 'AIzaSyC5MCBhSZx7VyjXoDZbWVvjuOGu4zLxxb4';

export async function saveLead({ name, email, message }) {
  try {
    const res = await axios.post(
      `${FIRESTORE_URL}/landing_leads`,
      {
        fields: {
          name: { stringValue: name },
          email: { stringValue: email },
          message: { stringValue: message },
          source: { stringValue: 'landing_page' },
          createdAt: { timestampValue: new Date().toISOString() },
        },
      },
      {
        params: { key: API_KEY },
        timeout: 10000,
      }
    );
    return { ok: true, id: res.data.name };
  } catch (error) {
    const detail = error.response?.data?.error || error.message;
    console.error('Firestore error:', JSON.stringify(detail));
    return { ok: false, error: JSON.stringify(detail).slice(0, 200) };
  }
}
