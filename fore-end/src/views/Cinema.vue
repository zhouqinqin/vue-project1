<template>
  <div class="cinemas-list">
    <mt-header fixed title="影院">
      <router-link to="/" slot="left">
        <mt-button>
          <span>深圳</span>
          <i class="iconfont icon-xiangxia1"></i>
        </mt-button>
      </router-link>
      <mt-button slot="right">
        <i class="iconfont icon-sousuo"></i>
      </mt-button>
    </mt-header>
    <div class="cinemas-nav">
      <div class="cinemas-nav-item cinemas-adress">
        <span>深圳</span>
        <i  class="iconfont icon-xiangxia1"></i>
      </div>
      <div class="cinemas-nav-item  cinemas-gone">
        <span>最近去过</span>
        <i  class="iconfont icon-xiangxia1"></i>
      </div>
    </div>
    <div class="cinema-contains">
      <ul class="cinema-wrap">
        <li>
          <div class="cinema-info-lf cinema-info">
            <span class="cinema-name">英皇电影城（东海缤纷店）</span>
            <span class="cinema-address">东海国际中心二期B区101之B1002号商铺</span>
          </div>
          <div class="cinema-info-rt cinema-info">
            <div class="price">
              <span class="cinema-lowPrice price-fmt">
                <i>￥</i>
                <span class="money">69</span>
                <span style="display: none;">.</span>
                <span></span>
              </span>
              <span class="upon">起</span>
            </div>
            <span class="cinema-gpsAddress">距离未知</span>
          </div>
        </li>
      </ul>
    </div>

  </div>
</template>

<script>
// import axios from 'axios';
import { Header, Button } from 'mint-ui'
export default {
  name: 'Cinema',
  components: {
    'mt-header': Header,
    'mt-button': Button
  }
};
</script>

<style lang="scss">
/* @import '../styles/common/px2rem.scss'; */
@import "@/styles/common/px2rem.scss";

.cinemas-list {
 flex:1
}
.mint-header {
  height: px2rem(44);
  font-size: px2rem(17);
}
.cinemas-nav{
  width: 100%;
  position: fixed;
  top: px2rem(44);
  display:flex;
  justify-content: space-between;
  border-bottom: 1px solid #ddd;
  margin-top:px2rem(10);
  .cinemas-nav-item {
    width: 50%;
    height: px2rem(49);
    line-height: px2rem(49);
    text-align: center;
    font-size:px2rem(14);
    color: #191a1b;
    i{
      display: inline-block;
      font-size:px2rem(16);
    }
  }
}
.cinema-contains{
  flex:1;
  padding:px2rem(104) 0 px2rem(49);
  z-index: 100;
  .cinema-wrap{
    li{
      width:100%;
      display: flex;
      justify-content: space-between;
      border-bottom: 1px solid #ddd;
      align-items: center;
      background-color: #fff;
      padding: px2rem(15);
      .cinema-info{
        display: flex;
        flex-direction: column;
      }
       .cinema-info-lf{
        margin-right:px2rem(30);
        overflow: hidden;
        span{
           overflow: hidden;
          -o-text-overflow: ellipsis;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        .cinema-name{
          color: #191a1b;
          font-size: px2rem(15);
        }
        .cinema-address{
          margin-top: px2rem(10);
          color: #797d82;
          font-size:px2rem(12);
        }
      }
      .cinema-info-rt{
        width: px2rem(65);
        flex-shrink: 0;
        .price{
          span{
            color: #ff5f16;
            i{
              font-size:px2rem(12);
            }
            .money{
              font-size: px2rem(15);
            }
          }
          .upon{
            font-size:px2rem(12);
          }
        }
        .cinema-gpsAddress{
          margin-top: px2rem(10);
          color: #797d82;
          font-size:px2rem(12);
        }
      }
    }

  }
}
</style>
