
import { useCallback, useState } from "react";
import { request } from '../../../vue3/src/utils';

const useQuery = <T extends any>(url: string, initialData?: T) => {
  const [state, setState] = useState({
    loading: false,
    data: initialData,
  });

  const run = useCallback(async () => {
    setState({ loading: true, data: initialData });
    const data = (await request(url)) as T;
    setState({ loading: false, data });
  }, [url]);

  const reset = useCallback(() => {
    setState({ loading: false, data: initialData });
  }, [setState])

  return [run, state.data, state.loading, { reset }] as const;
}

export default useQuery;