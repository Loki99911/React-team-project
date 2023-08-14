import { useState, useEffect } from 'react';

export function useLocalStorage(key, defaultValue = 'light') {
  const [state, setState] = useState(() => {
    console.log(JSON.parse(window.localStorage.getItem(key)));
    return JSON.parse(window.localStorage.getItem(key)) ?? defaultValue;
  });

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, setState];
}
