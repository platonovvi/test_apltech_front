<template>
  <div id="user_form">
    <div class="form-group">
      <label>Логин:</label>
      <input class="form-control" type="text" v-model="data.username">
    </div>
    <div class="form-group">
      <label>Пароль:</label>
      <input class="form-control" type="password" v-model="data.password">
    </div>
    <button type="submit" class="btn btn-primary" v-on:click="login">Войти</button>
  </div>
</template>

<script>
export default {
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
  }
}
</script>

<style scoped>
/* Стили для формы могут быть здесь */
</style>