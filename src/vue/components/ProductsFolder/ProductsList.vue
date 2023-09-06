<template>
  <div id="products">
    <div class="product_list">
      <div v-for="product in data.products" :key="product.id">
        {{product.id}}
      </div>
    </div>
    <button v-on:click="getProducts">getProducts</button>
  </div>
</template>
<script>

export default {
  name: 'ProductsList',
  data: function () {
    return {
      data: {
        products: []
      }
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
          //console.log(response.data);
          this.data.products = response.data || [];
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

</style>