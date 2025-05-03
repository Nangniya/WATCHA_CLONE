import { useCallback, useEffect, useRef } from 'react';

export const useDebounce = <T>(value: T, callback: (value: T) => void, delay = 300) => {
  const timerRef = useRef<NodeJS.Timeout>();
  const callbackRef = useRef(callback);

  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  const debouncedCallback = useCallback(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }

    timerRef.current = setTimeout(() => {
      callbackRef.current(value);
    }, delay);
  }, [value, delay]);

  useEffect(() => {
    debouncedCallback();

    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, [debouncedCallback]);
};
