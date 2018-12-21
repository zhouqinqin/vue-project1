<template>
  <div class="main">
    <div class="city-wrapper">
      <div class="city-fixed-section">
        <header>
          <i class="iconfont icon-error" @click="exit"></i>
          <span>当前城市</span>
          <a></a>
        </header>
        <div class="city-search">
          <div class="city-search-content">
            <i class="iconfont icon-sousuo"></i>
            <input type="text" class="search-inp" style="outline:none" placeholder="输入城市名或者拼音">
          </div>
        </div>
      </div>
      <div class="city-list">
        <div class="gprs-city">
          <p class="gprs-city-now">GPS定位你所在城市</p>
          <div class="gprs-city-mes">
            <span>定位失败</span>
          </div>
        </div>
        <div class="hot-city">
          <p class="hot-city-name">热门城市</p>
          <ul class="hot-city-wrapper">
            <li v-for="(item, index) in hotAddList" :key="index">{{ item.name }}</li>
          </ul>
        </div>
        <div class="all-city">
          <ul class="all-city-content">
            <li class="city-part"
            v-for="(item, index) in cityList"
            :key="index">
              <P>{{item.py}}</P>
              <ul>
                <li v-for="(items, i) in item.list" :key="i">
                  {{items.name}}
                </li>
                <!-- <li>安庆</li>
                <li>安阳</li>
                <li>安顺</li>
                <li>安康</li> -->
              </ul>
            </li>
          </ul>

          <ul class="all-city-index">
            <li v-for="(item, index) in indexList" :key="index">{{ item }}</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'Address',
  components: {

  },
  data () {
    return {
      addressList: [],
      cityList: [],
      indexList: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
    };
  },

  computed: {
    hotAddList () {
      return this.addressList.filter(item => {
        return item.isHot === 1
      })
    }
  },

  methods: {
    getAddress () {
      axios.get('/api/address/list').then(response => {
        if (response.data.code === 0) {
          var result = response.data;
          let data = result.data;
          this.addressList = this.addressList.concat(data);
          this.city();
        }
      })
    },
    city () {
      let i = 0;
      let hash = {};
      let res = [];
      let zimu = [];
      this.addressList.forEach(item => {
      // 拿到所有城市和首字母
        let py = item.pinyin.substring(0, 1).toUpperCase();
        if (hash[py]) {
          res[hash[py] - 1].list.push(item);
        } else {
          zimu.push(py);
          hash[py] = ++i;
          res.push({
            py: py,
            list: [item]
          })
          this.cityList = res;
          // 根据首字母排列所有城市
          this.citylist = res.sort(function (a, b) {
            return (a.py).localeCompare((b.py));
          });
        }
      })
      // console.log(this.cityList)
    },
    // 退出
    exit () {
      this.$router.go(-1);
    }
  },

  created () {
    this.getAddress();
  }
}
</script>

<style lang="scss">
/* @import '../styles/common/px2rem.scss'; */
@import "@/styles/common/px2rem.scss";
@import '../styles/address.scss';
</style>
