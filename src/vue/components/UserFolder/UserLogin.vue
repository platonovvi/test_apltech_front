<template>
  <div id="user_login" class="container">
    <div class="form-group">
      <label>Логин:</label>
      <input class="form-control" type="text" v-model="data.username">
    </div>
    <div class="form-group">
      <label>Пароль:</label>
      <input class="form-control" type="password" v-model="data.password">
    </div>
    <div class="button_form">
      <button type="submit" class="btn btn-primary" @click="login">Войти</button>
    </div>
  </div>
</template>

<script>
import {defineComponent} from "vue";

export default defineComponent({
  data() {
    return {
      data: {
        username: null,
        password: null,
      }
    }
  },
  methods: {
    async login() {
      try {
        let response = await this.$root.request({
          url: '/login',
          method: 'POST',
          data: {
            'username': this.data.username,
            'password': this.data.password,
          }
        });
        if (response) {
          this.$root.data.user = response.user || {};
        } else {
          console.error(response.message || 'Ошибка при выполнении запроса');
        }
      } catch (error) {
        console.error(error);
      }
    },
    async logout() {
      try {
        let response = await this.$root.request({
          url: '/user',
          method: 'POST',
          data: {
            'username': this.data.username,
            'password': this.data.password,
          }
        });
        if (response) {
          this.$root.data.user = response.user || {};
        } else {
          console.error(response.message || 'Ошибка при выполнении запроса');
        }
      } catch (error) {
        console.error(error);
      }
    },
    async signup() {
      try {
        let response = await this.$root.request({
          url: '/signup',
          method: 'POST',
          data: {
            'username': this.data.username,
            'password': this.data.password,
          }
        });
        if (response) {
          this.$root.data.user = response.user || {};
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

<style scoped>
.container{
  max-width: 300px;
  .button_form {
    margin-top: 1rem;
    text-align: right;
  }
}
</style>