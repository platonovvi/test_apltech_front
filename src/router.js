import { createRouter, createWebHistory } from 'vue-router';
import ProductsList from './vue/components/ProductsFolder/ProductsList.vue';
import UserLogin from './vue/components/UserFolder/UserLogin.vue';
import UserSignup from './vue/components/UserFolder/UserSignup.vue';

const routes = [
    {
        path: '/',
        name: 'ProductsList',
        component: ProductsList,
    },
    {
        path: '/user/login',
        name: 'UserLogin',
        component: UserLogin,
    },
    {
        path: '/user/signup',
        name: 'UserSignup',
        component: UserSignup,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;