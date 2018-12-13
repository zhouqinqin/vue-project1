<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide">
        <img src="../../static/images/lunbo1.jpg">
      </div>
      <div class="swiper-slide">
        <img src="../../static/images/lunbo2.jpg">
      </div>
      <div class="swiper-slide">
        <img src="../../static/images/lunbo3.jpg">
      </div>
      <div class="swiper-slide">
        <img src="../../static/images/lunbo4.jpg">
      </div>
      <div class="swiper-slide">
        <img src="../../static/images/lunbo5.png">
      </div>
      <div class="swiper-slide">
        <img src="../../static/images/lunbo6.jpg">
      </div>
      <div class="swiper-slide">
        <img src="../../static/images/lunbo7.jpg">
      </div>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>
  </div>
</template>

<script>
import Swiper from 'swiper';

export default {
  name: 'Banner',
  mounted () {
    new Swiper('.swiper-container', {
      loop: true, // 循环模式选项

      autoplay: true,

      // 如果需要分页器
      pagination: {
        el: '.swiper-pagination'
      }
    });
  }
};
</script>

<style lang="scss">
@import "swiper/dist/css/swiper.min.css";
@import "../styles/common/px2rem.scss";
.swiper-container {
  height: px2rem(210);

  .swiper-pagination-bullet {
    width: px2rem(10);
    height: px2rem(10);
  }
  .swiper-pagination-bullet-active {
    background: yellowgreen;
  }

  img {
    width: 100%;
  }
}
</style>
