<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>
<script>
import axios from './axios'; // Импортируем Axios

export default {
  name: 'root_app',
  created() {
    this.$axios = axios; // Привязываем Axios к $axios
  },
  components: {},
  methods: {
    async getUsers() {
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