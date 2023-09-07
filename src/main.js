import { createApp } from 'vue'
import App from './vue/root_app.vue'
import router from './router';
import axios from './axios'; // Импортируем Axios
const app = createApp(App);
app.config.globalProperties.$axios = axios;
app.use(router);

import VueDevtools from 'vuejs-devtools'
if (process.env.NODE_ENV === 'development') {
    VueDevtools.connect('', app)
}
app.mount('#app');
