import { createApp } from 'vue'
import App from './vue/root_app.vue'
import router from './router';
import axios from './axios'; // Импортируем Axios
import Swal from 'sweetalert2'; //Импортируем SweetAlert
import 'sweetalert2/dist/sweetalert2.min.css';
const app = createApp(App);
app.config.globalProperties.$axios = axios;
app.config.globalProperties.$swal  = Swal;
app.use(router);
app.mount('#app');
