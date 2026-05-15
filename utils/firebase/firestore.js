import axios from 'axios';

const FIRESTORE_URL = 'https://firestore.googleapis.com/v1/projects/missteresen-19622/databases/(default)/documents';

export async function saveLead({ name, email, message }) {
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
      params: {
        key: 'AIzaSyC5MCBhSZx7VyjXoDZbWVvjuOGu4zLxxb4',
      },
    }
  );
  return res.data.name;
}
