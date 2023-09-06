<template>
  <div id="app">
    <button @click="getProducts">getUsers</button>
  </div>
</template>
<script>

export default {
  name: 'App',
  components: {},
  methods: {
    async getProducts() {
      this.$axios.get('/asd') // Убедитесь, что путь корректен
          .then(response => {
            console.log(response);
            // Обработка данных
          })
          .catch(error => {
            console.log(error);
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