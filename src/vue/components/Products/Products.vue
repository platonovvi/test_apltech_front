<template>
  <div id="app">
    <button @click="getUsers">getUsers</button>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {},
  methods: {
    async getProducts() {
      try {
        const response = await this.$axios.get('asd');
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