<template>
  <div class="nowplaying playing">
    <li
        v-for="(item, index) in films"
        :key="index"
        @click="goDetail(item.filmId)">
      <div class="film-photo">
        <img :src="item.poster" >
      </div>
      <div class="film-info">
        <div class="film-info-tit info-col">
          <span class="tit">{{ item.name }}</span>
          <span class="type">{{ item.filmType.name }}</span>
        </div>
        <div class="film-info-grade info-col">
          <span class="label">观众评分</span>
          <span class="grade">{{ item.grade }}</span>
        </div>
        <div class="film-info-actors info-col">
          <span class="label">
              主演：{{ actorsList(item.actors) }}
          </span>
        </div>
        <div class="film-info-state info-col">
          <span class="label">{{ item.nation }} | {{ item.runtime }}分钟</span>
        </div>
      </div>
      <div class="film-buying">
        <span>购票</span>
      </div>
    </li>
    <div class="load-more" @click="loadMore">{{ loadMoreText }}</div>
  </div>
</template>

<script>
import axios from 'axios';
// 暴露组件
export default {
  name: 'nowplaying',
  data () {
    return {
      films: [],
      loadMoreText: '加载更多...',

      pageNum: 1, // 当前页码
      pageSize: 10, // 每页条数
      totalPage: 0 // 总页数
    }
  },
  methods: {
    // 获取电影信息
    getFilms () {
      axios.get('/api/film/list', {
        params: {
          // 请求的参数
          pageNum: this.pageNum,
          pageSize: this.pageSize
        }
      }).then((response) => {
        // PS: res 不单单包含后台给的数据，还有一些个额外的东西。
        let result = response.data;
        // console.log(result);
        if (result.code === 0) {
          this.films = this.films.concat(result.data.films);
          // console.log(this.films);
          // 计算一共有多少页
          this.totalPage = Math.ceil(result.data.total / this.pageSize);
          // 判断是否还有更多页
          if (this.pageNum >= this.totalPage) {
            // 没有更多页面
            this.loadMoreText = '没有更多';
          }
        }
      })
    },
    // 加载更多
    loadMore () {
      if (this.pageNum < this.totalPage) {
        this.pageNum++;
        this.getFilms();
      }
    },
    // 主演列表,返回的主演数据是一个数组，里面的name才是主演的名字
    actorsList (list) {
      let arr = [];
      if (list) {
        arr = list.map(item => {
          return item.name;
        });

        return arr.join(' ');
      }
    },
    // 点击进入详情页
    goDetail (id) {
      this.$router.push({
        // path: '/film/' + id,
        // path: `/film/${id}`,
        name: 'filmDetail',
        params: {
          filmId: id
        }
      })
    }
  },

  created () {
    this.getFilms();
  }

}
</script>

<style lang="scss">
// 注意：这两个文件的顺序不能颠倒，否则会没有效果
@import '../styles/common/px2rem.scss';
@import '../styles/common/films.scss';
</style>
