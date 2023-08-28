<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <button @click="fetchData">Fetch Data from Backend</button>
  </div>
</template>

<script>
import axios from 'axios'; // Импортируем Axios

export default {
  name: 'App',
  components: {},
  methods: {
    async fetchData() {
      try {
        const response = await axios.get('https://tranquil-island-01847-9479261fef91.herokuapp.com/api/endpoint');
        console.log(123123);
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