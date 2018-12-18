// 引用路由相关模块
import Vue from 'vue';
import VueRouter from 'vue-router';
// 引入路由组件,这些组件是同步的
// import Films from './views/Films.vue';
// import Cinema from './views/Cinema.vue';
// import Center from './views/Center.vue';
// import Tuan from './views/Tuan.vue';
// import Home from './views/Home.vue';

// 插件安装
Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    {
      // 一级组件Home,一级组件下有子组建最好不写name
      path: '/',
      component: () => import('./views/Home.vue'),
      children: [
        {
          path: '',
          redirect: '/films/nowPlaying'
        },
        {
          // 首页
          path: 'films',
          name: 'films',
          component: () => import('./views/Films.vue'),
          children: [
            {
              path: '',
              redirect: '/films/nowPlaying'
            },
            {
              path: 'nowPlaying',
              name: 'nowPlaying',
              component: () => import('./components/NowPlay')
            },
            {
              path: 'comingSoon',
              name: 'comingSoon',
              component: () => import('./components/SoonPlay')
            }

          ]
        },
        {
          // 影院页
          path: 'cinemas',
          name: 'cinemas',
          component: () => import('./views/Cinema.vue')
        },
        {
          // 个人中心页
          path: 'center',
          name: 'center',
          component: () => import('./views/Center.vue')
        }

      ]
    },

    {
      // 9.9团购页
      path: '/tuan',
      name: 'tuan',
      component: () => import('./views/Tuan.vue')
    },
    {
      // 详情页面
      path: '/film/:filmId',
      name: 'filmDetail',
      component: () => import('./views/FilmDetail.vue')
    },
    // 登录页面
    {
      path: '/login',
      name: 'Login',
      component: () => import('./views/Login.vue')
    },
    // 地址页面
    {
      path: '/address',
      name: 'Address',
      component: () => import('./views/Address.vue')
    },
    // 默认页面
    {
      path: '*',
      redirect: '/films/nowPlaying'
    }
  ]

});
// 暴露路由
export default router;
