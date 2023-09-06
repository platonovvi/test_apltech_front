<template>
  <div id="products">
    <div class="navbar">
      <div class="login">
        <button type="button" class="btn btn-primary" v-on:click="getProducts" v-if="!data.user.id">
          Войти
        </button>
        <div v-else>
          {{ data.user }}
        </div>
      </div>
      <input class="form-control" placeholder="Поиск по ID товара" v-model="data.search_id"
             v-on:change="() => getProducts()">
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
        user: {},
        search_id: null,
        products: [
          {
            "id": 4,
            "name": "Asus 1254",
            "category_name": "Ноутбуки",
            "brand_name": "ASUS",
            "price": 123422,
            "rrp_price": 243312,
            "status": 1,
            "created_at": "2023-09-06 20:09:56",
            "updated_at": null
          },
          {
            "id": 5,
            "name": "Lenovo 3311",
            "category_name": "Ноутбуки",
            "brand_name": "Lenovo",
            "price": 123422,
            "rrp_price": 243312,
            "status": 1,
            "created_at": "2023-09-06 20:09:56",
            "updated_at": null
          }
        ]
      }
    }
  },
  mounted() {
    //this.getProducts();
    /*this.data.middleware = new Middleware();
    if (Cookie.getCookie('api_token')) {
      this.$root.data.api_token = Cookie.getCookie('api_token');
    }*/
  },
  components: {},
  methods: {
    async getProducts() {
      let requestData = {
        url: '/products',
        data: {
          'id': this.data.search_id,
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