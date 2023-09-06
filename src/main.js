import { createApp } from 'vue'
import App from './vue/root_app.vue'
import router from './router';
import axios from './axios'; // Импортируем Axios
const app = createApp(App);
app.config.globalProperties.$axios = axios;
app.use(router);

app.mount('#app');
