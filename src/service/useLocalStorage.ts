import { useState, useEffect, Dispatch, SetStateAction } from 'react';

function useLocalStorage<T>(
  key: string,
  initialValue: T
): [T, Dispatch<SetStateAction<T>>] {
  const [values, setValues] = useState<T>(() => {
    const savedData = localStorage.getItem(key);
    try {
      return savedData ? (JSON.parse(savedData) as T) : initialValue;
    } catch (error) {
      console.error('Error parsing localStorage data:', error);
      return initialValue;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(values));
    } catch (error) {
      console.error('Error saving to localStorage:', error);
    }
  }, [key, values]);

  return [values, setValues];
}

export default useLocalStorage;
