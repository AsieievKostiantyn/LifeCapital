import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import serviceAccount from '../serviceAccountKey.json' assert { type: 'json' };

// Ініціалізація Firebase Admin
initializeApp({
  credential: cert(serviceAccount),
});

const db = getFirestore();

async function seedFirestore() {
  const collections = [
    'demands',
    'events',
    'expenses',
    'highExpenses',
    'smallInvestments',
    'largeInvestments',
    'playerLegend',
    'playerStates', // поки буде пустою
  ];

  const promises = collections.map((name) => {
    const docRef = db.collection(name).doc('init');
    return docRef.set({ initialized: true });
  });

  await Promise.all(promises);

  console.log('✅ Firestore: структура колекцій створена!');
}

seedFirestore().catch((err) => {
  console.error('❌ Сталася помилка:', err);
});
