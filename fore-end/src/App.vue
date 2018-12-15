<template>
  <div id="app">
    <transition
      mode="out-in"
      appear
      enter-active-class="animated bounceInUp"
      leave-active-class="animated bounceOutDown">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
// 引入组件
// import NavBar from './components/index';

export default {
  name: 'App'

  // components: {
  //   NavBar
  // }
};
</script>

<style lang="scss">
@import '../src/styles/base.scss';
</style>
