<template>
  <div class="cinemas-list">
    <mt-header fixed title="影院" id="header">
      <router-link to="/address" slot="left">
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
        <router-link to="/address" tag='i'>
          <i  class="iconfont icon-xiangxia1"></i>
        </router-link>
      </div>
      <div class="cinemas-nav-item  cinemas-gone">
        <span>最近去过</span>
        <i  class="iconfont icon-xiangxia1"></i>
      </div>
    </div>
    <div class="cinema-contains">
      <ul class="cinema-wrap">
        <li class="actors-item"
            v-for="(item, index) in cinemas"
            :key="index">
          <div class="cinema-info-lf cinema-info">
            <router-link
            :to="'/buying/' + filmId +'/'+ item.cinemaId+'/' + item.lowPrice"
             tag='span'>
              <span class="cinema-name">{{item.name}}</span>
            </router-link>
            <span class="cinema-address">{{item.address}}</span>
          </div>
          <div class="cinema-info-rt cinema-info">
            <div class="price">
              <span class="cinema-lowPrice price-fmt">
                <i>￥</i><span class="money">{{item.lowPrice}}</span>
              </span><span class="upon">起</span>
            </div>
            <span class="cinema-gpsAddress">距离未知</span>
          </div>
        </li>
      </ul>
    </div>

  </div>
</template>

<script>
import { Header, Button } from 'mint-ui'
import axios from 'axios';
export default {
  name: 'Cinema',
  components: {
    'mt-header': Header,
    'mt-button': Button
  },
  data () {
    return {
      cinemas: '',
      filmId: ''
    }
  },
  methods: {
    getCinemas () {
      axios.get('/api/cinema/list').then((response) => {
        // console.log(response);
        let result = response.data;
        if (result.code === 0) {
          let data = result.data;
          // var arr = [];
          for (var i = 0; i < data.length; i++) {
            data[i].lowPrice = data[i].lowPrice / 100;
          }
          this.cinemas = data;
        }
      })
    },
    getFilmId () {
      let filmId = this.$route.params.filmId;
      this.filmId = filmId;
    },
    setLocalstorage () {
      localStorage.setItem('Films', {'filmId': this.filmId});
    }
  },
  created () {
    this.getCinemas();
    this.getFilmId();
  }
};
</script>

<style lang="scss">
/* @import '../styles/common/px2rem.scss'; */
@import "@/styles/common/px2rem.scss";

.cinemas-list {
 flex:1;
 overflow: auto;
}
.mint-header {
  height: px2rem(44);
  font-size: px2rem(16);
}
#header{
  padding:0 px2rem(15);
  background:#fff;
  color: #191a1b;
  i{
    font-size: px2rem(18);
  }
}
.cinemas-nav{
  width: 100%;
  position: fixed;
  top: px2rem(44);
  display:flex;
  background:#fff;
  justify-content: space-between;
  border-bottom: 1px solid #ddd;
  padding-top:px2rem(10);
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
            font-size:px2rem(10);
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
