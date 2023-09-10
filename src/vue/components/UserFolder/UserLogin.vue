<template>
  <form @submit="submitForm">
    <div id="user_login" class="container">
      <div class="form-group">
        <label>Логин:</label>
        <input class="form-control" type="text" v-model="data.username" required>
      </div>
      <div class="form-group">
        <label>Пароль:</label>
        <input class="form-control" type="password" v-model="data.password" required>
      </div>
      <div class="button_form">
        <button type="submit" class="btn btn-primary">Войти</button>
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
        username: null,
        password: null,
      },
    };
  },
  methods: {
    async login() {
      try {
        let response = await this.$root.request({
          url: '/user/login',
          method: 'POST',
          data: {
            'username': this.data.username,
            'password': this.data.password,
          }
        });
        if (response && response.success) {
          localStorage.setItem('token', response.api_token);
          this.$root.data.api_token = response.api_token;
          this.$root.data.user = response.user || {};
          this.$root.openPage('ProductsList');
        }
      } catch (error) {
        console.error(error);
      }
    },
    async submitForm(event) {
      event.preventDefault();
      try {
        await this.login();
      } catch (error) {
        console.error(error);
      }
    },
  },
});
</script>

<style scoped>
.container {
  max-width: 300px;

  .button_form {
    margin-top: 1rem;
    text-align: right;
  }
}
</style>