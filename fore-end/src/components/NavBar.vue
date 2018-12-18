// 公共组件NavBar
// 定义组件模版
<template>
    <ul class="nav-bar">
        <router-link
            v-for="(item, index) in bars"
            :key="index"
            :to="{ name: item.id}"
            :class="item.id"
            tag="li"
            active-class="z-act">
            <i :class="item.icon"></i>
            <span active-class="b-act">{{item.name}}</span>
        </router-link>
    </ul>
</template>

<script>
export default {
  name: 'NavBar', // 也可以不写

  data () {
    return {
      bars: [
        {
          id: 'nowPlaying',
          name: '电影',
          icon: 'iconfont icon-dianying'
        },
        {
          id: 'cinemas',
          name: '影院',
          icon: 'iconfont icon-yingyuana'
        },
        {
          id: 'tuan',
          name: '9.9拼团',
          icon: 'iconfont icon-pintuandingdan'
        },
        {
          id: 'center',
          name: '我的',
          icon: 'iconfont icon-wode'
        }
      ]
    }
  }

}
</script>
<style lang="scss" scoped>
@import '../styles/common/px2rem.scss';

.nav-bar{
    flex-shrink: 0;//不受兄弟挤压
    display:flex;
    height: px2rem(50);
    border-top: px2rem(1) solid #ededed;
    li{
        display:flex;
        flex-direction: column;
        align-items:center;
        width: 25%;
        height: px2rem(49);
        text-align: center;
        font-size: px2rem(12);
        color: #797d82;
        i{
            font-size:px2rem(29);
        }
    }
    .z-act {
      color: #ff5f16;
    }

    .b-act {
      color: #ff5f16;
    }
}

</style>
