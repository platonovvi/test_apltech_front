<template>
  <form @submit="submitForm">
    <div id="user_signup" class="container">
      <div class="form-group">
        <label>Логин:</label>
        <input class="form-control" type="text" v-model="data.username" required>
      </div>
      <div class="form-group">
        <label>Пароль:</label>
        <input class="form-control" type="password" v-model="data.password" required>
      </div>
      <div class="form-group">
        <label>Повтор пароля:</label>
        <input class="form-control" type="password" v-model="data.repeat_password" required>
      </div>
      <div class="button_form">
        <button type="submit" class="btn btn-primary">Регистрация</button>
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
        repeat_password: null,
      },
    };
  },
  methods: {
    async signup() {
      try {
        if (this.data.password === this.data.repeat_password) {
          let response = await this.$root.request({
            url: '/user/signup',
            method: 'POST',
            data: {
              'username': this.data.username,
              'password': this.data.password,
            }
          });
          if (response && response.success) {
            const apiToken = response.query.api_token;

            // Сохраняю api_token в локальном хранилище (localStorage)
            localStorage.setItem('token', apiToken);

            this.$swal({
              type: 'success',
              showConfirmButton: false,
              showCloseButton: false,
              text: response.message,
            }).then(() => {
              this.$root.data.user = response.query.user || {};
              this.$root.openPage('ProductsList');
            });
          }
        } else {
          this.$swal({
            type: 'error',
            showConfirmButton: false,
            showCloseButton: false,
            text: 'Пароли не совпадают',
          }).then(() => {
          });
        }
      } catch (error) {
        console.error(error);
      }
    },
    async submitForm(event) {
      event.preventDefault();
      try {
        await this.signup();
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