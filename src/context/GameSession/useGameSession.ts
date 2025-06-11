import { useContext, createContext } from 'react';
import { Timestamp } from 'firebase/firestore';
import {
  CardsCollectionDoc,
  CurrentCardType,
  FieldChangeMap,
} from '../../types/db';

export interface GameSessionData {
  sessionName: string;
  hostId: string;
  hostEmail: string;
  players: { name: string; email: string }[];
  status: string;
  createdAt: Timestamp;
}

interface GameSessionContextType {
  sessionID: string;
  sessionData: GameSessionData | null;
  saveToLocalSession: <T>(key: string, value: T) => void;
  getFromLocalSession: <T>(key: string) => T | null;
  getCardList: <T>(docName: CardsCollectionDoc) => Promise<T[]>;
  updateCardList: <T>(docName: CardsCollectionDoc, newList: T[]) => void;
  setCurrentCard: <T>(type: CurrentCardType, data: T) => Promise<void>;
  updatePlayerState: <T>(
    playerId: string,
    key: string,
    data: T
  ) => Promise<void>;
  getPlayerState: <T>(playerId: string, key: string) => Promise<T | null>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  subscribeToPlayerState: <T extends Record<string, any>>(
    playerId: string,
    onChange: (data: T) => void
  ) => () => void;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  detectFieldChanges: <T extends Record<string, any>>(
    prev: T,
    next: T
  ) => FieldChangeMap<T>;
}

export const GameSessionContext = createContext<GameSessionContextType | null>(
  null
);

export const useGameSession = () => {
  const context = useContext(GameSessionContext);
  if (!context)
    throw new Error('useGameSession must be used within a GameSessionProvider');
  return context;
};
