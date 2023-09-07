<template>
  <div id="products">
    <div class="navbar">
      <div class="login">
        <button type="button" class="btn btn-primary" v-on:click="openUserForm" v-if="!data.user.id">
          Войти
        </button>
        <div v-else>
          {{ data.user }}
        </div>
      </div>
      <input class="form-control" type="number" placeholder="Поиск по ID товара" v-model="data.search_id"
             v-on:change="() => getProduct()">
    </div>
    <div class="product_list">
      <div class="item" v-for="product in data.products" :key="product.id">
        {{ product.id }}
      </div>
    </div>
  </div>
</template>
<script>

export default {
  name: 'ProductsList',
  data: function () {
    return {
      data: {
        user: this.$root.data.user ?? null,
        search_id: null,
        product: {},
        products: []
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
    async getProduct() {
      if (this.data.search_id) {
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
      }
    },
    openUserForm() {
      this.$root.openPage('UserForm');
    },
  }
}
</script>

<style>
.navbar {
  display: flex;
  flex-wrap: nowrap;
  padding: 1rem;


  .login {
    margin-right: 1rem;
  }
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
</style>