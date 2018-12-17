<template>
  <div class="film-detail">
    <div class="film-poster">
      <img :src= 'film.poster' alt="">
    </div>

    <div class="film-detail">
      <div class="col">
        <div class="film-name">
          <span class="name">{{ film.filmName }}</span>
          <span class="item">{{film.filmType.name}}</span>
        </div>
        <div class="film-grade">
          <span class="grade">{{film.grade}}</span>
          <span class="grade-text">分</span>
        </div>
      </div>

      <div class="film-category grey-text">{{film.category}}</div>
      <div class="film-premiere-time grey-text">
        {{film.premiereAt}}上映
      </div>
      <div class="film-nation-runtime grey-text">
        {{film.nation}}  | {{film.runtime}}分钟
      </div>
      <div class="film-synopsis grey-text">
        {{film.synopsis}}
      </div>
      <div class="toggle">
        <i class="iconfont icon-xiala"></i>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'FilmDetail',

  data () {
    return {
      film: ''

    }
  },

  methods: {
    getFilmDetail () {
      axios.get('/api/film/listOne', {
        params: {
          // 请求的参数
          filmId: this.$route.params.filmId
        }
      }).then((response) => {
        // PS: res 不单单包含后台给的数据，还有一些个额外的东西。
        // (data,headers,request,status等)
        console.log(response);
        let result = response.data;
        let data = result.data.info;
        // console.log(result)
        // console.log(data);
        if (result.code === 0) {
          // 把数据中的秒改为年月日的形式
          var da = data.premiereAt * 1000;
          da = new Date(da);
          var year = da.getFullYear();
          var month = da.getMonth() + 1;
          var date = da.getDate();
          data.premiereAt = [year, month, date].join('-');
          this.film = data;
        } else {
          alert(result.msg)
        }
      })
    }
  },

  created () {
    this.getFilmDetail();
  }
}
</script>

<style lang="scss">
@import '@/styles/common/px2rem.scss';

.film-detail {
  flex: 1;
  overflow-y: auto;

  .film-poster {
    height: px2rem(210);
    img {
      width: 100%;
      height: 100%;
    }
  }

  .film-detail {
    padding: px2rem(15);
    padding-top: px2rem(12);
    background-color: #fff;

    .col {
      display: flex;
      align-items: center;
    }

    .film-name {
      flex: 1;
      display: flex;
      align-items: center;

      .name {
        color: #191a1b;
        font-size: px2rem(18);
        height: px2rem(24);
        line-height: px2rem(24);
        margin-right: px2rem(8);
      }

      .item {
        font-size: px2rem(12);
        color: #fff;
        background-color: #d2d6dc;
        height: px2rem(14);
        line-height: px2rem(14);
        padding: 0 px2rem(2);
        border-radius: px2rem(2);
        display: inline-block;
      }
    }

    .film-grade {
      flex-shrink: 0;
      width: px2rem(100);
      text-align: right;
      color: #ffb232;
      font-size: px2rem(12);

      .grade {
        font-size: px2rem(18);
        font-style: italic;
      }
    }

    .grey-text {
      font-size: px2rem(13);
      line-height: px2rem(20);
      color: #797d82;
      margin-top: px2rem(4);
    }

    .film-synopsis {
      margin-top: px2rem(8);
      overflow: hidden;
      &.hide {
        height: px2rem(40);
      }
    }

    .toggle {
      text-align: center;
      &.hide {
        i {
          transform: translate(180deg);
        }
      }
    }
  }
}
</style>
