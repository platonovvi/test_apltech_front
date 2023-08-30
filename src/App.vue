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
        method: 'get',
        url: 'https://sleepy-dawn-85022-dfcee393bc59.herokuapp.com/user/get-users',
      }).then(response => {
        console.log(response);
      }).catch(error => {
        console.log(error);
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