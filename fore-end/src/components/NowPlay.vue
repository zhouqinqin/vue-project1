<template>
  <div class="nowplaying playing">
    <li class="showingList-item">
      <div class="film-photo">
        <img src="../../static/images/movie28.jpg">
      </div>
      <div class="film-info">
        <div class="film-info-tit info-col">
          <span class="tit">海王</span>
          <span class="type">3D</span>
        </div>
        <div class="film-info-grade info-col">
          <span class="label">观众评分</span>
          <span class="grade">7.2</span>
        </div>
        <div class="film-info-actors info-col">
          <span class="label">
              主演： 帕特里克·威尔森  妮可·基德曼
              杜夫·龙格尔 温子仁  杰森·莫玛 安柏·赫德
          </span>
        </div>
        <div class="film-info-state info-col">
          <span class="label">美国   澳大利亚  | 143分钟</span>
        </div>
      </div>
      <div class="film-buying">
        <span>购票</span>
      </div>
    </li>
  </div>
</template>

<script>
// 暴露组件
export default {
  name: 'nowplaying'

}
</script>

<style lang="scss">
// 注意：这两个文件的顺序不能颠倒，否则会没有效果
@import '../styles/common/px2rem.scss';
@import '../styles/common/films.scss';
</style>
