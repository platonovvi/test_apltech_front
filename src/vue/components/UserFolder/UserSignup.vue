<template>
  <div id="user_signup" class="container">
    <div class="form-group">
      <label>Логин:</label>
      <input class="form-control" type="text" v-model="data.username">
    </div>
    <div class="form-group">
      <label>Пароль:</label>
      <input class="form-control" type="password" v-model="data.password">
    </div>
    <div class="form-group">
      <label>Повтор пароля:</label>
      <input class="form-control" type="password" v-model="data.repeat_password">
    </div>
    <div class="button_form">
      <button type="submit" class="btn btn-primary" @click="signup">Регистрация</button>
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
        repeat_password: null,
      }
    }
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
          if (response) {
            this.$root.data.user = response.user || {};
          } else {
            console.error(response.message || 'Ошибка при выполнении запроса');
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