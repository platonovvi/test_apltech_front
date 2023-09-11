<template>
  <div class="container">
    <div class="header">Данная страница реализует запрос по бренду и выводит товары (из 2 источников) с минимальной и
      максимальной ценой
    </div>
    <div class="input-group">
      <input class="form-control" type="text" placeholder="Введите бренд" v-model="data.search_brand"/>
      <button class="input-group-append btn btn-primary" type="button" @click="getProductBrand">
        Поиск
      </button>
    </div>
    <div>
      <div>
        {{this.data.products.min}}
      </div>
      <div>
        {{this.data.products.max}}
      </div>
    </div>
  </div>
</template>
<script>

import {defineComponent} from "vue";

export default defineComponent({
  data() {
    return {
      data: {
        search_brand: null,
        products: []
      }
    }
  },
  mounted() {
  },
  methods: {
    async getProductBrand() {
      try {
        let response = await this.$root.request({
          url: '/product/brand/' + this.data.search_brand,
          method: 'GET',
        });
        if (response) {
          this.data = response.products || [];
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
    font-size: 1.3rem;
    font-weight: 600;
    text-align: center;
    margin-bottom: 2rem;
    color: crimson;
  }
}
</style>