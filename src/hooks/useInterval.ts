import { useCallback, useEffect, useRef, useState } from 'react';

export const useInterval = () => {
  const [intervalConfig, setIntervalConfig] = useState<{
    callback: undefined | (() => void);
    delay: null | number;
  }>({ callback: undefined, delay: null });
  const intervalId = useRef<NodeJS.Timer>();

  const updateIntervalConfig = useCallback(
    (callback: undefined | (() => void), delay: null | number) => {
      setIntervalConfig({ callback, delay });
      if (intervalId.current) {
        clearInterval(intervalId.current);
      }
    },
    [],
  );

  // @ts-expect-error: to disable "Not all code paths return a value.ts(7030)"
  useEffect(() => {
    const tick = () => {
      intervalConfig.callback?.();
    };
    if (intervalConfig.delay !== null && intervalConfig.callback) {
      const id = setInterval(tick, intervalConfig.delay);
      intervalId.current = id;
      return () => clearInterval(id);
    }
  }, [intervalConfig]);

  const clearCurrentInterval = useCallback(() => {
    if (intervalId.current) clearInterval(intervalId.current);
    updateIntervalConfig(undefined, null);
  }, [updateIntervalConfig]);

  return {
    clearCurrentInterval,
    updateIntervalConfig,
  };
};
