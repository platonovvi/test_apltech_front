<template>
  <div id="products" class="container">
    <div class="header">Список товаров</div>
    <div class="create_product">
      <button type="button" class="btn btn-primary" @click="openProductCreate"
              v-if="this.$root.isAuth">Новый товар
      </button>
    </div>
    <div class="product_list">
      <div class="item" v-for="product in data.products" :key="product.id">
        <div>{{ product.id }}</div>
        <div v-if="this.$root.isAuth" @click="openProductView(product.id)">Подробнее</div>
        <div v-if="this.$root.isAuth" @click="openProductUpdate">Редактировать</div>
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
        product: {},
        products: [
          /*{
            "id": 4,
            "name": "Asus 1254",
            "category_name": "Ноутбуки",
            "brand_name": "ASUS",
            "price": 123422,
            "rrp_price": 243312,
            "status": 1,
            "created_at": "2023-09-06 20:09:56",
            "updated_at": null
          },*/
        ]
      }
    }
  },
  mounted() {
    this.getProducts();
  },
  components: {},
  methods: {
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
    openProductUpdate() {
      this.$root.openPage('ProductUpdate');
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
  }

  .product_list {
    padding: 1rem;

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