import { createRouter, createWebHistory } from 'vue-router';
import ProductsList from './vue/components/ProductsFolder/ProductsList.vue';

const routes = [
    {
        path: '/',
        name: 'ProductsList',
        component: ProductsList,
    },
    // Добавьте другие маршруты здесь
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;