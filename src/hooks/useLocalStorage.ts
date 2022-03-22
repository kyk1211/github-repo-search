import { useState, useEffect } from "react";

const useLocalStorage = <T>(key: string, initialState: T) => {
  const [state, setState] = useState<T>(() => JSON.parse(window.localStorage.getItem(key) as string) || initialState);

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, setState];
};

export default useLocalStorage;
