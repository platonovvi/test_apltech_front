import axios from 'axios';

// Создаём экземпляр axios с базовым URL
const instance = axios.create({
    baseURL: 'https://sleepy-dawn-85022-dfcee393bc59.herokuapp.com/',
});

export default instance;