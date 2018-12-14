<template>
  <div class="home">
    <!-- 子路由films/center/ciemas的坑 -->
    <router-view></router-view>
    <NavBar></NavBar>
  </div>
</template>

<script>
import NavBar from '../components/NavBar.vue';
// import Films from './Films.vue';

export default {
  name: 'Home',
  components: {
    NavBar
  }
}
</script>

<style lang="scss">
.home {
  display: flex;
  flex-direction: column;
  height: 100%;
}
</style>
