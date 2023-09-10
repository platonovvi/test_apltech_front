<template>
  <div>
    {{data}}
  </div>
</template>
<script>

import {defineComponent} from "vue";

export default defineComponent({
  data() {
    return {

      data: {
        name: 'qweqwe',
        category_name: 'qweqw',
        brand_name: 'qweqw',
        price: 1,
        rrp_price: 2,
        status: 1,
        description: 'qweqwe',
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
          url: '/product/' + this.$route.params.id,
          method: 'GET',
        });
        if (response) {
          this.data = response.product || [];
        } else {
          console.error(response.message || 'Ошибка при выполнении запроса');
        }
      } catch (error) {
        console.error(error);
      }
    },
  }
});
</script>

<style lang="scss" scoped>
.container {
  max-width: 600px;
  margin-top: 2rem;
  padding: 0rem 1.5rem;

  .header {
    font-size: 1.8rem;
    font-weight: 600;
    text-align: center;
    margin-bottom: 2rem;
    color: crimson;
  }

  .button_form {
    margin-top: 1rem;
    text-align: right;
    margin-bottom: 2rem;
  }
}
</style>