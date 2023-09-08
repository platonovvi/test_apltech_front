<template>
  <div class="custom_navbar">
    <div class="item" @click="openProductsList" title="Перейти к каталогу">
      К каталогу
    </div>
    <div class="item">
      <div v-if="this.$root.isAuth">
        <span> {{ user.username }}</span>
      </div>
      <div v-else>
        <div @click="openLogin" title="Войти">
          Войти
        </div>
      </div>
    </div>
    <div class="item">
      <div @click="logout" title="Выйти" v-if="this.$root.isAuth">
        Выйти
      </div>
      <div @click="openSignup" title="Регистрация" v-else>
        Регистрация
      </div>
    </div>
  </div>
</template>

<script>
import {defineComponent} from 'vue';

export default defineComponent({
  props: {
    user: {
      type: Object,
      required: true
    },
    openPage: {
      type: Function,
      required: true
    },
    logout: {
      type: Function,
      required: true
    },
  },
  data() {
    return {}
  },
  mounted() {
  },
  watch: {},
  methods: {
    openLogin() {
      this.openPage('UserLogin');
    },
    openSignup() {
      this.openPage('UserSignup');
    },
    openProductsList() {
      this.openPage('ProductsList');
    },
  }
});
</script>
<style lang="scss" scoped>
.custom_navbar {
  display: flex;
  justify-content: space-between;
  background: white;
  top: 0;
  position: sticky;
  z-index: 40;
  width: 100%;
  border-bottom: 1px solid #dee2e6;
  box-shadow: 0 0 9px grey;
  padding: 0rem 1rem;

  .item {
    padding: 15px 10px;
    cursor: pointer;
    overflow: hidden;
    text-overflow: ellipsis;
    font-weight: bold;
    align-items: center;

    &:hover {
      color: crimson;
      transform: scale(1.05, 1.05);
    }

    span {

    }
  }
}
</style>