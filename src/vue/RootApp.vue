<template>
  <div id="app">
    <app-navbar ref="app-navbar" :user="data.user"
                :openPage="openPage"
                :logout="logout">
    </app-navbar>
    <router-view ref="selectComponent"></router-view>
  </div>
</template>
<script>
import {defineComponent} from "vue";

export default defineComponent({
  data() {
    return {
      data: {
        //user: {id:1, username:'test'},
        user: {},
        api_token: localStorage.getItem('token'),
      },
    };
  },
  created() {
    if (this.data.api_token) {
      this.authUser();
    }
  },
  computed: {
    isAuth() {
      return !!this.data.user.id;
    }
  },
  methods: {
    async authUser() {
      try {
        const response = await this.request({
          url: '/user/auth',
          method: 'POST',
        });
        if (response && response.success) {
          this.data.user = response.user || {};
        }
      } catch (error) {
        console.error(error);
      }
    },
    logout() {
      this.$swal({
        type: 'question',
        title: 'Выйти из учётной записи?',
        showCancelButton: true,
        cancelButtonText: 'Нет',
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Да'
      }).then((result) => {
        if (result.value) {
          this.openPage('ProductsList');
          this.data.user = {};
          this.data.api_token = null;
          localStorage.removeItem('token');
        }
      });
    },
    request($options) {
      return this.$axios({
        url: $options.url,
        data: $options.data,
        method: $options.method,
        headers: {
          Authorization: 'Bearer ' + this.data.api_token,
          Version: process.env.PACKAGE_VERSION,
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
    openPage(name = this.$route.name) {
      this.$router.push({name: name}).catch(() => {
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