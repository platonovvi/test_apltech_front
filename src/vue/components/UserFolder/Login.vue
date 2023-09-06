<template>
  <div id="app">
    <button @click="getProducts">getProducts</button>
  </div>
</template>
<script>

export default {
  name: 'ProductsList',
  data: function () {
    return {
      data: {}
    }
  },
  components: {},
  methods: {
    async getProducts() {
      let requestData = {
        url: '/products',
        data: {
          //'id': this.data.search_id,
        },
        success: (response) => {
          console.log(response.data);
          //this.data.products = response.data || [];
        },
        error: () => {
        }
      };
      this.$root.request(requestData);
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