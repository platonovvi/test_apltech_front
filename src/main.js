import {createApp} from 'vue'
import App from './vue/RootApp.vue'
import router from './router';
import axios from './axios'; // Импортируем Axios
import VueSweetalert2 from 'vue-sweetalert2'; //Импортируем SweetAlert
import AppNavbar from './vue/AppNavbar.vue' //Подключаем Navbar
import 'sweetalert2/dist/sweetalert2.min.css';

const app = createApp(App);
app.config.globalProperties.$axios = axios;
app.use(VueSweetalert2);
app.use(router);
app.component('app-navbar', AppNavbar);
app.mount('#app');
