import { useState, useEffect } from 'react';

const useLocalStorage = (key, initialValue) => {
  const [values, setValues] = useState(() => {
    const savedData = localStorage.getItem(key);
    return savedData ? JSON.parse(savedData) : initialValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(values));
  }, [key, values]);

  return [values, setValues];
};

export default useLocalStorage;
