<template>
  <div id="app">
    <button @click="getUsers">getUsers</button>
  </div>
</template>

<script>
import axios from '../../axios'; // Импортируем Axios

export default {
  name: 'App',
  components: {},
  methods: {
    async getUsers() {
      try {
        const response = await axios.get('asd');
        console.log(response);
      } catch (error) {
        console.error(error);
      }
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