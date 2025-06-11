import { useEffect, useState, ReactNode, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import {
  doc,
  onSnapshot,
  Timestamp,
  updateDoc,
  getDoc,
  setDoc,
} from 'firebase/firestore';
import { db } from '../../service/firebase';
import useLocalStorage from '../../service/useLocalStorage';
import { GameSessionContext } from './useGameSession';
import {
  CardsCollectionDoc,
  CurrentCardType,
  FieldChangeMap,
} from '../../types/db';
import { detectFieldChanges as detectFieldChangesFN } from '../../service/utils/detectFieldChanges';

interface GameSessionData {
  sessionName: string;
  hostId: string;
  hostEmail: string;
  players: { name: string; email: string }[];
  status: string;
  createdAt: Timestamp;
}

export const GameSessionProvider = ({ children }: { children: ReactNode }) => {
  const { sessionId } = useParams();
  const [, setLocalData] = useLocalStorage<Record<string, unknown>>(
    `gameData-${sessionId}`,
    {}
  );
  const [sessionData, setSessionData] = useState<GameSessionData | null>(null);

  useEffect(() => {
    if (!sessionId) return;
    const unsub = onSnapshot(doc(db, 'gameSessions', sessionId), (snap) => {
      if (snap.exists()) {
        setSessionData(snap.data() as GameSessionData);
      }
    });
    return () => unsub();
  }, [sessionId]);

  const saveToLocalSession = useCallback(
    <T,>(key: string, value: T) => {
      setLocalData((prev) => ({ ...prev, [key]: value }));
    },
    [setLocalData]
  );

  const getFromLocalSession = useCallback(
    <T,>(key: string): T | null => {
      const raw = localStorage.getItem(`gameData-${sessionId}`);
      if (!raw) return null;
      try {
        const parsed = JSON.parse(raw);
        return parsed[key] ?? null;
      } catch (e) {
        console.error('Error parsing localStorage:', e);
        return null;
      }
    },
    [sessionId]
  );

  const getCardList = async <T,>(docName: CardsCollectionDoc): Promise<T[]> => {
    if (!sessionId) throw new Error('sessionId is undefined');
    const docRef = doc(db, 'gameSessions', sessionId, 'cards', docName);
    const snap = await getDoc(docRef);
    if (!snap.exists()) return [];
    const data = snap.data();
    return data.list || [];
  };

  const updateCardList = async <T,>(
    docName: CardsCollectionDoc,
    newList: T[]
  ) => {
    if (!sessionId) throw new Error('sessionId is undefined');
    const docRef = doc(db, 'gameSessions', sessionId, 'cards', docName);
    await updateDoc(docRef, { list: newList });
  };

  const setCurrentCard = useCallback(
    async <T,>(type: CurrentCardType, data: T) => {
      if (!sessionId) return;
      const ref = doc(db, 'gameSessions', sessionId, 'cards', 'currentCards');
      try {
        await setDoc(ref, { [type]: data }, { merge: true });
      } catch (error) {
        console.error(`❌ Не вдалося зберегти картку типу ${type}:`, error);
      }
    },
    [sessionId]
  );

  const updatePlayerState = useCallback(
    async <T,>(playerId: string, key: string, data: T) => {
      if (!sessionId) return;
      const docRef = doc(db, 'gameSessions', sessionId, 'gameState', playerId);
      await setDoc(docRef, { [key]: data }, { merge: true });
    },
    [sessionId]
  );

  const getPlayerState = useCallback(
    async <T,>(playerId: string, key: string): Promise<T | null> => {
      if (!sessionId) return null;
      const docRef = doc(db, 'gameSessions', sessionId, 'gameState', playerId);
      const snap = await getDoc(docRef);
      if (!snap.exists()) return null;
      const data = snap.data();
      return data?.[key] ?? null;
    },
    [sessionId]
  );

  const subscribeToPlayerState = useCallback(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    <T extends Record<string, any>>(
      playerId: string,
      onChange: (data: T) => void
    ): (() => void) => {
      if (!sessionId) throw new Error('Session ID is not defined');

      const docRef = doc(db, 'gameSessions', sessionId, 'gameState', playerId);

      const unsub = onSnapshot(docRef, (snap) => {
        if (snap.exists()) {
          const fullDoc = snap.data() as T;
          onChange(fullDoc);
        }
      });

      return unsub;
    },
    [sessionId]
  );

  const detectFieldChanges = useCallback(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    <T extends Record<string, any>>(prev: T, next: T): FieldChangeMap<T> => {
      return detectFieldChangesFN(prev, next);
    },
    []
  );

  return (
    <GameSessionContext.Provider
      value={{
        sessionID: sessionId as string,
        sessionData,
        saveToLocalSession,
        getFromLocalSession,
        getCardList,
        updateCardList,
        setCurrentCard,
        updatePlayerState,
        getPlayerState,
        subscribeToPlayerState,
        detectFieldChanges,
      }}
    >
      {children}
    </GameSessionContext.Provider>
  );
};
