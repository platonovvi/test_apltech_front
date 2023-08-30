<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <button @click="getUsers">getUsers</button>
  </div>
</template>

<script>
import axios from 'axios'; // Импортируем Axios

export default {
  name: 'App',
  components: {},
  methods: {
    async getUsers() {
      axios({
        method: 'post',
        url: 'https://sleepy-dawn-85022-dfcee393bc59.herokuapp.com/user/get-users',
        headers: {
          'Origin': 'https://tranquil-island-01847-9479261fef91.herokuapp.com'
        }
      }).then(response => {
        console.log(response);
      }).catch(error => {
        // Обработка ошибки
      });
    },
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