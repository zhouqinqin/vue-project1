<template>
  <div class="film-detail">
    <div class="film-poster">
      <img :src= 'poster' alt="">
    </div>

    <div class="film-detail">
      <div class="col">
        <div class="film-name">
          <span class="name">{{ filmName }}</span>
          <span class="item">{{filmType}}</span>
        </div>
        <div class="film-grade">
          <span class="grade">{{grade}}</span>
          <span class="grade-text">分</span>
        </div>
      </div>

      <div class="film-category grey-text">{{category}}</div>
      <div class="film-premiere-time grey-text">
        2018-12-07上映
      </div>
      <div class="film-nation-runtime grey-text">
        {{nation}}  | {{runtime}}分钟
      </div>
      <div class="film-synopsis grey-text">
        {{synopsis}}
      </div>
      <div class="toggle">
        <i class="iconfont icon-xiala"></i>
      </div>
    </div>

    <router-link to="/film/9898">我要看猫王</router-link>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'FilmDetail',

  data () {
    return {
      films: [],
      poster: '',
      filmName: '',
      filmType: '',
      grade: '',
      category: '',
      nation: '',
      runtime: '',
      synopsis: ''

    }
  },

  // watch: {
  //   // $route (newVal, oldVal) {
  //   //   // $route 发生变化，我就请求后台数据
  //   //   this.getFilmDetail();
  //   // }
  // },

  methods: {
    getFilmDetail (filmId) {
      // console.log(filmId);
      // setTimeout(() => {
      //   if (this.$route.params.filmId === 4469) {
      //     this.filmName = '海王';
      //   } else {
      //     this.filmName = '猫王';
      //   }
      // }, 2000);
      axios.get('/api/film/list', {
        params: {
          // 请求的参数
          pageNum: this.pageNum,
          pageSize: this.pageSize
        }
      }).then((response) => {
        // PS: res 不单单包含后台给的数据，还有一些个额外的东西。
        let result = response.data;
        let data = result.data.films;
        // console.log(data);
        if (result.code === 0) {
          this.films = this.films.concat(data);
          console.log(this.films);
          for (var i = 0; i < this.films.length; i++) {
            if (this.fid === this.films[i].filmId) {
              this.poster = data[i].poster;
              this.filmName = data[i].name;
              this.filmType = data[i].filmType.name;
              this.grade = data[i].grade;
              this.category = data[i].category;
              this.nation = data[i].nation;
              this.runtime = data[i].runtime;
              this.synopsis = data[i].synopsis
            }
          }
        }
      })
    }
  },

  created () {
    // let filmId = this.$route.params.filmId;
    this.getFilmDetail();
  },

  beforeRouteEnter (to, from, next) {
    console.log('进入到详情');
    next();
  },

  beforeRouteUpdate (to, from, next) {
    console.log('详情页组件路由有更新的情况, 会进来');
    // 上面 watch $route 的代码可以在这里写
    this.getFilmDetail();
    next();
  },

  beforeRouteLeave (to, from, next) {
    console.log('详情页离开之前，会调用');
    next();
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
