<template>
  <div id="app">
    <router-view ref="selectComponent"></router-view>
  </div>
</template>
<script>
export default {
  name: 'root_app',
  components: {},
  methods: {
    request($options) {
      this.$axios({
        method: 'get',
        url: $options.url,
        //url: this.data.middleware.api_link + $options.url,
        data: $options.data,
        headers: {
          /*Authorization: 'Bearer ' + this.data.api_token,
          Version: process.env.PACKAGE_VERSION,*/
        }
      }).then((response) => {
        if (response.data.success) {
          $options.success(response);
        } else {
          if ($options.error) {
            $options.error();
          }
        }
      }).catch(function ($error) {
        if ($error.response) {
          console.log($error.response.data);
          console.log($error.response.status);
          console.log($error.response.headers);
        }
        if ($options.error) {
          $options.error($error);
        }
        console.log($error);
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