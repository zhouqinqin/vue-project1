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
        <li class="active">
          <span>正在热映</span>
        </li>
        <li>
          <span>即将上映</span>
        </li>
      </ul>
    </div>
    <!-- /tab-bar -->

    <router-view></router-view>

  </div>
</template>

<script>
import Banner from '../components/Banner';
export default {
  name: 'Films',
  components: {
    Banner
  },
  data () {
    return {
      curCity: ''
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
    }
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
    align-items: center;
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
