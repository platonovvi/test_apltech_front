<template>
  <form @submit="submitForm">
    <div id="product_create" class="container">
      <div class="header">Создать товар</div>
      <div class="form-group">
        <label>Наименование:</label>
        <input class="form-control" type="text" v-model="data.name" required>
      </div>
      <div class="form-group">
        <label>Категория:</label>
        <input class="form-control" type="text" v-model="data.category_name">
      </div>
      <div class="form-group">
        <label>Бренд:</label>
        <input class="form-control" type="text" v-model="data.brand_name" required>
      </div>
      <div class="form-group">
        <label>Цена:</label>
        <input class="form-control" type="text" v-model="data.price" required>
      </div>
      <div class="form-group">
        <label>Рекомендуемая розничная цена:</label>
        <input class="form-control" type="text" v-model="data.rrp_price">
      </div>
      <div class="form-group">
        <label>Статус:</label>
        <input class="form-control" type="password" v-model="data.status" required>
      </div>
      <div class="form-group">
        <label>Описание товара:</label>
        <textarea class="form-control" type="password" v-model="data.description"/>
      </div>
      <div class="button_form">
        <button type="submit" class="btn btn-primary">Создать</button>
      </div>
    </div>
  </form>
</template>
<script>

import {defineComponent} from "vue";

export default defineComponent({
  data() {
    return {
      data: {
        name: null,
        category_name: null,
        brand_name: null,
        price: null,
        rrp_price: null,
        status: null,
        description: null,
      }
    }
  },
  mounted() {
  },
  components: {},
  methods: {
    async createProduct() {
      try {
        let response = await this.$root.request({
          url: '/product/create',
          method: 'POST',
          data: {
            'name': this.data.name,
            'password': this.data.password,
          }
        });
        if (response) {
          this.$swal({
            type: 'success',
            showConfirmButton: false,
            showCloseButton: false,
            text: response.message,
          }).then(() => {
            this.$root.openPage('ProductsList');
          });
        }
      } catch (error) {
        console.error(error);
      }
    },
    async submitForm(event) {
      event.preventDefault();
      try {
        await this.createProduct();
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