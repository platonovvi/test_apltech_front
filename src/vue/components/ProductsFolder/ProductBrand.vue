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
    <div class="response" v-if="isResponse">
      <div v-for="(item, index) in data.products" :key="index">
        <div class="item" v-if="item.min">
          <label>Самый дешевый:</label>
          <div><label>{{ item.min.name ?? 'Нет данных' }}</label></div>
          <div><label>Категория: </label> {{ item.min.category_name ?? 'Нет данных' }}</div>
          <div><label>Бренд: </label> {{ item.min.brand_name ?? 'Нет данных' }}</div>
          <div><label>Цена: </label> {{ item.min.price ?? 'Нет данных' }}₸</div>
          <div><label>Описание: </label> {{ item.min.description ?? 'Нет данных' }}</div>
        </div>
        <div class="item" v-if="item.max">
          <label>Самый дорогой:</label>
          <div><label>{{ item.max.name ?? 'Нет данных' }}</label></div>
          <div><label>Категория: </label> {{ item.max.category_name ?? 'Нет данных' }}</div>
          <div><label>Бренд: </label> {{ item.max.brand_name ?? 'Нет данных' }}</div>
          <div><label>Цена: </label> {{ item.max.price ?? 'Нет данных' }}₸</div>
          <div><label>Описание: </label> {{ item.max.description ?? 'Нет данных' }}</div>
        </div>
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
        products: [],
      }
    }
  },
  mounted() {
  },
  computed: {
    isResponse() {
      let $result = false;
      if (this.data.products) {
        this.data.products.map(item => {
          if (item.min) {
            $result = true;
          }
          if (item.max) {
            $result = true;
          }
        });
        return $result;
      }
    }
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
            this.data.products = response.products[0] || [];
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
    margin: 1rem 0rem;

    .item {
      border: 1px solid #b6b4b4;
      border-radius: 4px;
      margin: 0.5rem 0rem;
      padding: 0.4rem;
      box-shadow: 0 0 6px #7b8187b0;
    }
  }
}
</style>