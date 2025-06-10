import { useCallback, useRef } from "react";

const useThrottle = (callbackFn, delay) => {
  const shouldWaitRef = useRef(false);
  const waitingArgsRef = useRef(null);
  const timeoutFn = () => {
    if (waitingArgsRef.current === null) shouldWaitRef.current = false;
    else {
      callbackFn(...waitingArgsRef.current);
      waitingArgsRef.current = null;
      setTimeout(timeoutFn, delay);
    }
  };
  return useCallback(
    (...args) => {
      waitingArgsRef.current = args;
      if (shouldWaitRef.current) return;
      callbackFn(...waitingArgsRef.current);
      shouldWaitRef.current = true;
      setTimeout(timeoutFn, delay);
    },
    [callbackFn, delay]
  );
};

export default useThrottle;
