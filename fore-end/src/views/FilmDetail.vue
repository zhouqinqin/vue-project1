<template>
  <div class="filmMain">
    <mt-header fixed title="">
      <router-link to="/"  slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>
    <div class="film-detail">
      <div class="film-poster">
        <img :src= "film.poster" alt="">
      </div>

      <div class="film-detail">
        <div class="col">
          <div class="film-name">
            <span class="name">{{ film.name }}</span>
            <span class="item">{{film.filmType && film.filmType.name}}</span>
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
          <i class="iconfont icon-xiangxia1"></i>
        </div>
      </div>
    </div>
    <div class="actors">
      <div class="actors-title-bar">
        <span>演职人员</span>
      </div>
      <div class="actors-list-bar">
        <ul class="actors-list">
           <li class="actors-item"
            v-for="(item, index) in actors"
            :key="index">
            <img class="actors-img" :src= "item.avatarAddress" alt="">
            <span class="actors-msg actors-name">{{item.name}}</span>
            <span  class="actors-msg actors-role">{{item.role}}</span>
          </li>
        </ul>
      </div>
    </div>
    <div class="photos">

    </div>
    <mt-button class="buy-btn" type="default">选座购票</mt-button>
  </div>
</template>

<script>
import axios from 'axios';
import { Header, Button } from 'mint-ui'
export default {
  name: 'FilmDetail',
  components: {
    'mt-header': Header,
    'mt-button': Button
  },

  data () {
    return {
      film: '',
      actors: []

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
        if (result.code === 0) {
          // 把数据中的秒改为年月日的形式
          var da = data.premiereAt * 1000;
          da = new Date(da);
          var year = da.getFullYear();
          var month = da.getMonth() + 1;
          var date = da.getDate();
          data.premiereAt = [year, month, date].join('-');
          this.film = data;
          this.actors = data.actors;
          // console.log(this.actors);
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
// 注意：这两个文件的顺序不能颠倒，否则会没有效果
@import '../styles/common/px2rem.scss';
@import '../styles/filmDetail.scss';
</style>
