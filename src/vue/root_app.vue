<template>
  <div id="app">
    <router-view ref="selectComponent"></router-view>
  </div>
</template>
<script>
export default {
  name: 'root_app',
  data: function () {
    return {
      data: {
        user: {},
      }
    }
  },
  mounted() {
    /*this.data.middleware = new Middleware();
    if (Cookie.getCookie('api_token')) {
      this.$root.data.api_token = Cookie.getCookie('api_token');
    }*/
  },
  components: {},
  methods: {
    request($options) {
      return this.$axios({
        method: 'get',
        url: $options.url,
        data: $options.data,
        headers: {
          /*Authorization: 'Bearer ' + this.data.api_token,
          Version: process.env.PACKAGE_VERSION,*/
        }
      })
          .then((response) => {
            if (response.data.success) {
              return response.data || [];
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
                if ($options.error) {
                  $options.error();
                }
              });
              //throw new Error(response.data.message || 'Ошибка при выполнении запроса');
            }
          })
          .catch((error) => {
            this.$swal({
              type: 'error',
              showConfirmButton: false,
              showCancelButton: false,
              text: 'Ошибка на сервере.',
            }).then(() => {
              if ($options.error) {
                $options.error(error);
              }
            });
            console.log(error);
          });
    },
  },
}
</script>
<style lang="scss">
@import '~bootstrap/scss/bootstrap.scss';

html {
  font-size: 14px;
}

body:has(.open) {
  overflow: hidden;
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