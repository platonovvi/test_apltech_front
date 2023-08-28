<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <button @click="fetchData">Fetch Data from Backend </button>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import axios from 'axios'; // Импортируем Axios

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  methods: {
    async fetchData() {
      try {
        const response = await axios.get('https://sleepy-dawn-85022.herokuapp.com/api/endpoint');
        console.log(response.data);
      } catch (error) {
        console.error(error);
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