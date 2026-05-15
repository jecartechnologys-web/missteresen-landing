import axios from 'axios';

const API_KEY = 'AIzaSyC5MCBhSZx7VyjXoDZbWVvjuOGu4zLxxb4';
const AUTH_URL = 'https://identitytoolkit.googleapis.com/v1';
const FIRESTORE_URL = 'https://firestore.googleapis.com/v1/projects/missteresen-19622/databases/(default)/documents';

async function getAnonymousToken() {
  const res = await axios.post(`${AUTH_URL}/accounts:signUp?key=${API_KEY}`, {
    returnSecureToken: true,
  });
  return res.data.idToken;
}

export async function saveLead({ name, email, message }) {
  try {
    const idToken = await getAnonymousToken();

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
        headers: {
          Authorization: `Bearer ${idToken}`,
        },
        timeout: 10000,
      }
    );
    return { ok: true, id: res.data.name };
  } catch (error) {
    const detail = error.response?.data?.error || error.message;
    return { ok: false, error: JSON.stringify(detail).slice(0, 200) };
  }
}
