import { db } from '../firebase';
import { doc, getDoc, setDoc } from 'firebase/firestore';

const shuffleArray = <T>(array: T[]): T[] =>
  [...array].sort(() => Math.random() - 0.5);

const cardTypes = [
  'demands',
  'events',
  'expenses',
  'highExpenses',
  'smallInvestments',
  'largeInvestments',
  'playerLegend',
] as const;

export const copyAndShuffleCardsToSession = async (sessionId: string) => {
  for (const type of cardTypes) {
    const originalDocRef = doc(db, 'cards', type);
    const originalSnap = await getDoc(originalDocRef);

    if (!originalSnap.exists()) {
      throw new Error(`❌ Картки '${type}' не знайдено в cards/${type}`);
    }

    const originalList = originalSnap.data().list;
    const shuffled = shuffleArray(originalList);

    const targetDocRef = doc(db, 'gameSessions', sessionId, 'cards', type);
    await setDoc(targetDocRef, { list: shuffled });
  }
};
