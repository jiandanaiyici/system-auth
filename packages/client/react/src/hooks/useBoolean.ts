import { useCallback, useState } from "react";

const useBoolean = (initialState?: boolean) => {
  const [bol, setBol] = useState(initialState);

  const toggle = useCallback(() => {
    setBol(prevBol => !prevBol);
  }, [setBol]);

  const setTrue = useCallback(() => {
    setBol(true);
  }, [setBol]);

  const setFalse = useCallback(() => {
    setBol(false);
  }, [setBol]);

  return {
    value: bol,
    toggle,
    setFalse,
    setTrue,
  };
}

export default useBoolean;