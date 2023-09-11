<template>
  <div id="products" class="container">
    <div class="header">Список товаров</div>
    <div class="create_product">
      <button class="btn btn-primary" @click="openProductBrand">Поиск по бренду
      </button>
      <button class="btn btn-primary" @click="openProductCreate"
              v-if="this.$root.isAuth">Новый товар
      </button>
    </div>
    <div class="product_list">
      <div class="item" v-for="product in data.products" :key="product.id">
        <div><label>{{ product.name ?? 'Нет данных' }}</label></div>
        <div><label>Категория: </label> {{ product.category_name ?? 'Нет данных' }}</div>
        <div><label>Бренд: </label> {{ product.brand_name ?? 'Нет данных' }}</div>
        <div><label>Цена: </label> {{ getPrice(product) }}</div>
        <div class="d-flex">
          <div class="button" @click="openProductView(product.id)">Подробнее</div>
          <div class="button" v-if="this.$root.isAuth" @click="openProductUpdate(product.id)">Редактировать</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>

import {defineComponent} from "vue";

export default defineComponent({
  data: function () {
    return {
      data: {
        user: this.$root.data.user ?? null,
        search_id: null,
        products: []
      }
    }
  },
  mounted() {
    this.getProducts();
  },
  methods: {
    getPrice($product) {
      if ($product.status === 2) {
        return 'Цена по запросу'
      }
      let $brand = $product.brand_name;
      if ($brand === 'Dell' || $brand === 'Lenovo') {
        return $product.rrp_price ? $product.rrp_price + '₸' : 'Цена не указана';
      } else {
        return $product.price + '₸';
      }
    },
    async getProducts() {
      try {
        let response = await this.$root.request({
          url: '/products',
          method: 'GET',
        });
        if (response) {
          this.data.products = response.products || [];
        } else {
          console.error(response.message || 'Ошибка при выполнении запроса');
        }
      } catch (error) {
        console.error(error);
      }
    },
    openProductCreate() {
      this.$root.openPage('ProductCreate');
    },
    openProductView($id) {
      this.$root.openPage('ProductView', {id: $id});
    },
    openProductUpdate($id) {
      this.$root.openPage('ProductUpdate', {id: $id});
    },
    openProductBrand() {
      this.$root.openPage('ProductBrand');
    },
  }
});
</script>

<style>
.container {
  ax-width: 600px;
  margin-top: 2rem;
  padding: 0rem 1.5rem;

  .header {
    font-size: 1.8rem;
    font-weight: 600;
    text-align: center;
    color: crimson;
  }

  .create_product {
    padding: 1rem 1rem 0rem 1rem;
    text-align: right;
    display: flex;
    justify-content: space-between;
  }

  .product_list {
    padding: 1rem;

    .item {
      border: 1px solid #b6b4b4;
      border-radius: 4px;
      margin: 0.5rem 0rem;
      padding: 0.4rem;
      box-shadow: 0 0 6px #7b8187b0;

      .button {
        cursor: pointer;
        text-decoration: underline;
        margin-right: 0.5rem;

        &:hover {
          color: crimson;
        }
      }
    }
  }
}
</style>