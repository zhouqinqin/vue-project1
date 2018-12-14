<template>
  <div class="films-list">

    <Banner></Banner>

    <!-- 定位城市 -->
    <div class="city-fixed">
      <span>{{curCity }}</span>
      <i class="iconfont icon-xiangxia"></i>
    </div>
    <!-- /定位城市 -->

    <!-- tab-bar -->
    <div class="tab-bar-wrapper">
      <ul class="tab-bar">
        <router-link
            v-for="(item, index) in bars"
            :key="index"
            :to="{ name: item.id}"
            :class="item.id"
            tag="li"
            active-class="z-act">
          <span>{{item.name}}</span>
         </router-link>
      </ul>
    </div>
    <!-- /tab-bar -->

    <router-view></router-view>

  </div>
</template>

<script>
/* eslint-disable */
import Banner from '../components/Banner';
import nowplaying from '../components/NowPlay';
import comingSoon from '../components/SoonPlay';
export default {
  name: 'Films',
  components: {
    Banner
  },
  data () {
    return {
      curCity: '',
      bars: [
        {
          id: 'nowPlaying',
          name: '正在热映',
        },
        {
          id: 'comingSoon',
          name: '即将上映',
        }
      ]
    }
  },
  methods: {
    // 根据百度地图的api,获取当前的城市
    getCityName () {
      /* eslint-disable */
      let myCity = new BMap.LocalCity();
      myCity.get((result) => {
        this.curCity = result.name;
      })
    },
    // 切换路由
    //   switchList (type) {
    //   if (type === 'now') {
    //     // this.$router.push('/films/nowPlaying');

    //     this.$router.push({
    //       name: 'nowPlaying'
    //     })
    //   } else {
    //     this.$router.push('/films/comingSoon');
    //   }
    // }
  },
  created () {
    this.getCityName();
  }
}
</script>

<style lang="scss">
/* @import '../styles/common/px2rem.scss'; */
@import '@/styles/common/px2rem.scss';
.films-list {
  flex: 1;
  overflow-y: auto;
}


.city-fixed {
  position: absolute;
  top: px2rem(18);
  left: px2rem(8);
  z-index: 1000;
  height: px2rem(30);
  line-height: px2rem(30);
  font-size: px2rem(14);
  color: #fff;
  border-radius: px2rem(15);
  text-align: center;
  padding: 0 px2rem(5);
  background: rgba(0, 0, 0, 0.2);
}

.tab-bar-wrapper {
  position: sticky;
  z-index: 999;
  top: px2rem(0);
  height: px2rem(50);
  border-bottom: px2rem(1) solid #ededed;
  background: #fff;
  .tab-bar {
    display: flex;
    height: px2rem(50);
    line-height: px2rem(50);
    li {
      flex: 1;
      text-align: center;
      font-size: px2rem(14);
      span {
        padding: 0 px2rem(10);
      }
      &.z-act {
        color: #ff5f16;
      }
    }
  }
}

</style>
