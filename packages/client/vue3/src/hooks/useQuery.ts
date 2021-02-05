import { ref } from 'vue';
import { request } from '../utils';

// 关于如何取消 fetch https://www.yuque.com/jiandanaiyici/front-interview/wv8s8l?inner=FQjwU
// interface QueryService<T> {
//   (...args: any): Promise<T>
// }

const useQuery = <T extends object>(url: string, initialState: T) => {
  const state = ref<T>(initialState);
  const loading = ref(false);
  const run = async () => {
    loading.value = true;
    const data = (await request(url)) as T;
    loading.value = false;
    state.value = data;
  }

  // const stop = () => {

  // }

  const reset = () => {
    state.value = initialState;
    loading.value = false;
  }

  return [run, state, loading, { reset }] as const;
}

export default useQuery;