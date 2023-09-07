<template>
  <div id="app">
    <app-navbar ref="app-navbar" :user="data.user" :openPage="openPage"></app-navbar>
    <router-view ref="selectComponent"></router-view>
  </div>
</template>
<script>
import {defineComponent} from "vue";

export default defineComponent({
  name: 'RootApp',
  data() {
    return {
      data: {
        user: {},
      },
    };
  },
  mounted() {
    /*this.data.middleware = new Middleware();
    if (Cookie.getCookie('api_token')) {
      this.$root.data.api_token = Cookie.getCookie('api_token');
    }*/
  },
  methods: {
    openPage(name = this.$route.name) {
      this.$router.push({name: name}).catch(() => {
      });
    },
    request($options) {
      return this.$axios({
        url: $options.url,
        data: $options.data,
        method: $options.method,
        headers: {
          /*Authorization: 'Bearer ' + this.data.api_token,
          Version: process.env.PACKAGE_VERSION,*/
          "Content-Type": "application/json",
        }
      })
          .then((response) => {
            if (response.data.success) {
              return response.data || {};
            } else {
              let $text = '';
              if (response.data.message) {
                $text = response.data.message;
              } else {
                $text = 'Ошибка на сервере.';
              }
              this.$swal({
                type: 'error',
                showConfirmButton: false,
                showCloseButton: false,
                html: $text.replaceAll('\n', '<br>'),
              }).then(() => {
              });
            }
          }).catch((error) => {
            this.$swal({
              type: 'error',
              showConfirmButton: false,
              showCancelButton: false,
              text: 'Ошибка на сервере.',
            }).then(() => {
            });
            console.log(error);
          });
    },
  },
});
</script>
<style lang="scss">
@import '~bootstrap/scss/bootstrap.scss';

label {
  font-weight: bold;
}

.pre-loader {
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1051;
  font-size: 2rem;
  background-color: rgba(128, 128, 128, 0.1);
  background-clip: padding-box;
}
</style>