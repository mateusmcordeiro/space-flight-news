import { createApp } from 'vue';
import App from './App.vue';
import router from '@router';
import store from '@store';
import Repositories from '#services/repositories';
import './index.scss';

createApp(App)
  .use(router)
  .use(store)
  .use(Repositories)
  .mount('#app');
