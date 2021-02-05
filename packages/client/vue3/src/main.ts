import { createApp } from 'vue'

import App from './App.vue';
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

NProgress.configure({ showSpinner: false });


const app = createApp(App);

app.use(Antd)
app.mount('#app');
