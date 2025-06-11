import { db } from '../firebase';
import {
  collection,
  addDoc,
  serverTimestamp,
  doc,
  setDoc,
} from 'firebase/firestore';
import { copyAndShuffleCardsToSession } from '../cards/copyAndShuffleCardsToSession';
import { User } from 'firebase/auth';
import { UserData } from '../../context/AuthContext';
import { AddedPlayer } from '../../components/CreateGameForm/CreateGameForm';

export const initialData = {
  finGlobal: {
    balance: '',
    depositAmount: '',
    amountOfSummaryIncomes: '',
    amountOfSummaryExpenses: '',
    amountOfFreeMoney: '',
  },
  finIncomes: {
    salary: '',
    childSupport: '',
    depositIncome: '',
    goldAmount: '',
    goldIncome: '',
    riskInsuranceAmount: '',
    riskInsuranceIncome: '',
    intellectualPropertyAmount: '',
    intellectualPropertyIncome: '',
    savingsInsuranceAmount: '',
    savingsInsuranceIncome: '',
    amountOfSummaryIncomes: '',
  },
  finBusinessTable: Array.from({ length: 5 }, (_, index) => ({
    id: index + 1,
    code: '',
    firstPayment: '',
    cost: '',
    credit: '',
    passiveIncome: '',
  })),
  finExpenses: {
    expenseMonthlyHousehold: '',
    expenseAdditional: '',
    expenseNumChildren: '',
    expenseChild: '',
    realEstateAmount: '',
    realEstateExpense: '',
    carAmount: '',
    carExpense: '',
    appliancesAmount: '',
    appliancesExpense: '',
    furnitureAmount: '',
    furnitureExpense: '',
    othersAmount: '',
    othersExpense: '',
  },
  invShareTable: Array.from({ length: 5 }, (_, index) => ({
    id: index + 1,
    code: '',
    packetCoast: '',
    sharePrice: '',
    numberOfShares: '',
  })),
  abTable: Array.from({ length: 10 }, (_, index) => ({
    id: index + 1,
    source: '',
    replenishment: '',
    accumulatedAmount: '',
  })),
};

export type InitialDataType = typeof initialData;

export const createGameSession = async (
  user: User,
  userData: UserData,
  sessionName: string,
  playersData: AddedPlayer[]
) => {
  if (userData.role !== 'host') {
    throw new Error('⛔️ Лише ведучий може створити сесію.');
  }

  const sessionRef = await addDoc(collection(db, 'gameSessions'), {
    sessionName: sessionName,
    hostId: user.uid,
    hostEmail: user.email,
    players: playersData,
    status: 'waiting',
    createdAt: serverTimestamp(),
  });

  const currentCardsRef = doc(
    db,
    'gameSessions',
    sessionRef.id,
    'cards',
    'currentCards'
  );
  await setDoc(currentCardsRef, {});

  const batch = playersData.map((player) => {
    const playerDocRef = doc(
      db,
      'gameSessions',
      sessionRef.id,
      'gameState',
      player.name
    );
    return setDoc(playerDocRef, initialData);
  });
  await Promise.all(batch);

  await copyAndShuffleCardsToSession(sessionRef.id);

  return sessionRef.id;
};
