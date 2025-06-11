import { useEffect, useState } from 'react';
import { useGameSession } from '../../context/GameSession/useGameSession';

export function useSessionLocalStorage<T>(key: string, initialValue: T) {
  const { getFromLocalSession, saveToLocalSession } = useGameSession();
  const [state, setState] = useState<T>(() => {
    const stored = getFromLocalSession<T>(key);
    return stored ?? initialValue;
  });

  useEffect(() => {
    saveToLocalSession<T>(key, state);
  }, [key, state, saveToLocalSession]);

  return [state, setState] as const;
}
