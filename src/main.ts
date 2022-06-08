import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import {
  faCode, faEye, faGamepadAlt, faSitemap, faTerminal,
} from '@fortawesome/pro-light-svg-icons';
import App from './App.vue';

library.add(faSitemap, faTerminal, faCode, faGamepadAlt, faEye);

createApp(App)
  .use(createPinia())
  .component('fa-icon', FontAwesomeIcon)
  .mount('#app');
