import axios from 'axios';

const instance = axios.create();


instance.interceptors.request.use(function (config) {
  // Do something before request is sent
  return config;
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
});
// axios.defaults.baseURL = 'https://api.example.com';


export default instance;