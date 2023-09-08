<template>
  <div id="product_create">
    <div className="container">

    </div>
  </div>
</template>
<script>

import {defineComponent} from "vue";

export default defineComponent({
  data() {
    return {
      data: {
        product: {},
      }
    }
  },
  mounted() {
    //this.getProduct();
  },
  components: {},
  methods: {
    async getProduct() {
      try {
        let response = await this.$root.request({
          url: '/product/' + this.data.search_id,
          method: 'GET',
        });
        if (response) {
          this.data.product = response.product || {};
        }
      } catch (error) {
        console.error(error);
      }
    },
  }
});
</script>

<style>

</style>