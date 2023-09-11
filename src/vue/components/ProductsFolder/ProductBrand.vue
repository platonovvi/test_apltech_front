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
    <div class="response" v-if="data.products && (data.products.min || data.products.max)">
      <div v-if="data.products.min">
        {{ data.products.min }}
      </div>
      <div v-if="data.products.max">
        {{ data.products.max }}
      </div>
    </div>
    <div class="response" v-else-if="data.isRequest">
      <label>Товары не найдены</label>
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
        isRequest: false,
        /*products: [{
          "min": {
            "id": 5,
            "name": "Dell Pro Briefcase 14 460-BCMO (14)",
            "category_name": "Сумки для ноутбука",
            "brand_name": "Dell",
            "price": 22280,
            "rrp_price": 20150,
            "status": 1,
            "description": "Портфель для ноутбука 14\" Dell Pro PO1420C черный нейлон (460-BCMO)",
            "created_at": "2023-09-10 21:43:19",
            "updated_at": null
          },
          "max": {
            "id": 8,
            "name": "Монитор Dell P3223QE 210-BEQZ (31.5 \", IPS, 3840x2160 (16:9), 60 Гц)",
            "category_name": "Мониторы",
            "brand_name": "Dell",
            "price": 314966,
            "rrp_price": 310050,
            "status": 2,
            "description": "Монитор 31.5\" Dell P3223QE, Silver-Black, IPS, 3840x2160@60Hz, 350кд/м2, H/V:178, 5мс",
            "created_at": "2023-09-11 01:00:39",
            "updated_at": null
          }
        }],*/
        products: [{
          "min": {
            "id": 1,
            "price": 1000
          },
          "max": {
            "id": 20,
            "price": 50000
          }
        }]
      }
    }
  },
  mounted() {
  },
  methods: {
    async getProductBrand() {
      try {
        if (this.data.search_brand && this.data.search_brand !== '') {
          let response = await this.$root.request({
            url: '/product/brand/' + this.data.search_brand,
            method: 'GET',
          });
          if (response) {
            this.data.isRequest = true;
            this.data.products = response.products || [];
          } else {
            console.error(response.message || 'Ошибка при выполнении запроса');
          }
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

  .response {
    margin: 1rem;
  }
}
</style>