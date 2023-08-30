<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <button @click="getUsers">getUsers</button>
    <button @click="getResponse">getResponse</button>
  </div>
</template>

<script>
import axios from 'axios'; // Импортируем Axios

export default {
  name: 'App',
  components: {},
  methods: {
    async getUsers() {
      try {
        const response = await axios.get('https://tranquil-island-01847-9479261fef91.herokuapp.com/user/get-users');
        const users = response.data; // Получаем данные из ответа
        console.log('Users fetched successfully:', users);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    },
    async getResponse() {
      try {
        const response = await axios.get('https://tranquil-island-01847-9479261fef91.herokuapp.com/api/endpoint');
        const users = response.data; // Получаем данные из ответа
        console.log('Users fetched successfully:', users);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>