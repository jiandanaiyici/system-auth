import axios from 'axios';
import NProgress from 'nprogress';

const instance = axios.create();

instance.interceptors.request.use(function (config) {
  NProgress.start();
  return config;
}, function (error) {
  return Promise.reject(error);
});

instance.interceptors.response.use((res) => {
  NProgress.done();
  if (res.status === 200 && res.data && res.data.success) {
    return res.data.data;
  }

  throw new Error('错误');
}, function (error) {
  return Promise.reject(error);
});


export default instance;