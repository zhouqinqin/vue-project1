<template>
  <div class="main">
    <div class="city-wrapper">
      <div class="city-fixed-section">
        <header>
          <i class="iconfont icon-error"></i>
          <span>当前城市</span>
          <a></a>
        </header>
        <div class="city-search">
          <div class="city-search-content">
            <i class="iconfont icon-sousuo"></i>
            <input type="text" class="search-inp" placeholder="输入城市名或者拼音">
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
            <li>北京</li>
            <li>上海</li>
            <li>广州</li>
            <li>深圳</li>
          </ul>
        </div>
        <div class="all-city">
          <ul class="all-city-content">
            <li class="city-part">
              <P>A</P>
              <ul>
                <li>鞍山</li>
                <li>安庆</li>
                <li>安阳</li>
                <li>安顺</li>
                <li>安康</li>
              </ul>
            </li>
            <li class="city-part">
              <P>B</P>
              <ul>
                <li>北京</li>
                <li>保定</li>
                <li>包头</li>
                <li>巴彦淖尔</li>
                <li>本溪</li>
                <li>白山</li>
                <li>白城</li>
                <li>蚌埠</li>
                <li>亳州</li>
                <li>滨州</li>
                <li>北海</li>
                <li>百色</li>
                <li>巴中</li>
                <li>毕节</li>
                <li>保山</li>
                <li>宝鸡</li>
                <li>白银</li>
              </ul>
            </li>
            <li class="city-part">
              <p>C</p>
              <ul>
                <li>承德</li>
                <li>沧州</li>
                <li>长治</li>
                <li>赤峰</li>
                <li>朝阳</li>
                <li>长春</li>
                <li>常州</li>
                <li>滁州</li>
                <li>长沙</li>
                <li>常德</li>
                <li>郴州</li>
                <li>潮州</li>
                <li>重庆</li>
                <li>成都</li>
                <li>楚雄彝族自治州</li>
                <li>澄迈县</li>
                <li>昌江黎族自治县</li>
              </ul>
            </li>
            <li class="city-part">
              <p>D</p>
              <ul>
                <li>大同</li>
                <li>大连</li>
                <li>丹东</li>
                <li>大庆</li>
                <li>东营</li>
                <li>德州</li>
                <li>东莞</li>
                <li>儋州</li>
                <li>德阳</li>
                <li>达州</li>
                <li>大理白族自治州</li>
                <li>定西</li>
              </ul>
            </li>

            <li class="city-part">
              <p>E</p>
              <ul>
                <li>鄂尔多斯</li>
                <li>鄂州</li>
                <li>恩施土家族苗族</li>
              </ul>
            </li>
          </ul>

          <!-- <ul>
            <li>&nbsp;&nbsp;&nbsp;</li>
          </ul> -->

          <ul class="all-city-index">
            <li>A</li>
            <li>B</li>
            <li>C</li>
            <li>D</li>
            <li>E</li>
            <li>F</li>
            <li>G</li>
            <li>H</li>
            <li>J</li>
            <li>K</li>
            <li>L</li>
            <li>M</li>
            <li>N</li>
            <li>P</li>
            <li>Q</li>
            <li>R</li>
            <li>S</li>
            <li>T</li>
            <li>W</li>
            <li>X</li>
            <li>Y</li>
            <li>Z</li>
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
  // components: {

  // },
  data () {
    return {
      addressList: ''
    };
  },
  methods: {
    getAddress () {
      axios.get('/api/address/list').then(response => {
        // console.log(response);
        let result = response.data;
        if (result.code === 0) {
          let data = result.data;
          this.addressList = data;
        }
      });
    }
  },

  created () {
    this.getAddress();
  }
};
</script>

<style lang="scss">
/* @import '../styles/common/px2rem.scss'; */
@import "@/styles/common/px2rem.scss";
@import '../styles/address.scss';
</style>
