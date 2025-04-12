import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import serviceAccount from '../serviceAccountKey.json' assert { type: 'json' };

// Firebase Admin ініціалізація
initializeApp({
  credential: cert(serviceAccount as any),
});
const db = getFirestore();

// Імпортуємо дані
import { listOfDemands } from '../src/data/demands';
import { listOfEvents } from '../src/data/events';
import { listOfExpenses } from '../src/data/expenses';
import { listOfHighExpenses } from '../src/data/highExpenses';
import { listOfLargeInvestments } from '../src/data/largeInvestments';
import { listOfSmallInvestments } from '../src/data/smallInvestments';
import { listOfPlayersLegends } from '../src/data/playerLegend';

const importData = async () => {
  try {
    // demands
    await db.collection('cards').doc('demands').set({ list: listOfDemands });

    // events
    await db.collection('cards').doc('events').set({ list: listOfEvents });

    // expenses
    await db.collection('cards').doc('expenses').set({ list: listOfExpenses });

    // highExpenses
    await db
      .collection('cards')
      .doc('highExpenses')
      .set({ list: listOfHighExpenses });

    // largeInvestments
    await db
      .collection('cards')
      .doc('largeInvestments')
      .set({ list: listOfLargeInvestments });

    // smallInvestments — типи business | currency | shares
    await db
      .collection('cards')
      .doc('smallInvestments')
      .set({ list: listOfSmallInvestments });

    // playerLegend
    await db
      .collection('cards')
      .doc('playerLegend')
      .set({ list: listOfPlayersLegends });

    console.log('✅ Успішно імпортовано всі картки!');
  } catch (err) {
    console.error('❌ Помилка при імпорті:', err);
  }
};

importData();
