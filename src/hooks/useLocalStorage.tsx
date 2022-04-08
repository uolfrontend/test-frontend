import { useState } from 'react';

const useLocalStorage = <ValueType,>(
  keyName: string,
  defaultValue?: ValueType,
): [ValueType | undefined, (value: ValueType) => void] => {
  const [storedValue, setStoredValue] = useState((): ValueType | undefined => {
    try {
      const value = window.localStorage.getItem(keyName);

      if (value) {
        return JSON.parse(value);
      }

      window.localStorage.setItem(keyName, JSON.stringify(defaultValue));

      return defaultValue;
    } catch (err) {
      return defaultValue;
    }
  });

  const setValue = (value: ValueType) => {
    try {
      window.localStorage.setItem(keyName, JSON.stringify(value));
    } catch (err) {
      console.log(err);
    }

    setStoredValue(value);
  };

  return [storedValue, setValue];
};

export default useLocalStorage;
