// 引用路由相关模块
import Vue from 'vue';
import VueRouter from 'vue-router';
// 引入路由组件
import Films from './views/Films.vue';
import Cinema from './views/Cinema.vue';
import Center from './views/Center.vue';
import Tuan from './views/Tuan.vue';
// 插件安装
Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    {
      // 首页
      path: '/films',
      name: 'films',
      component: Films
    },
    {
      // 影院页
      path: '/cinemas',
      name: 'cinemas',
      component: Cinema
    },
    {
      // 个人中心页
      path: '/center',
      name: 'center',
      component: Center
    },
    {
      // 9.9团购页
      path: '/tuan',
      name: 'tuan',
      component: Tuan
    },
    {
      path: '*',
      redirect: '/films'
    }
  ]

});
// 暴露路由
export default router;
