import { createRouter, createWebHistory } from 'vue-router';
import ProductsList from './vue/components/ProductsFolder/ProductsList.vue';
import UserForm from './vue/components/UserFolder/UserForm.vue';

const routes = [
    {
        path: '/',
        name: 'ProductsList',
        component: ProductsList,
    },
    {
        path: '/user',
        name: 'UserForm',
        component: UserForm,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;