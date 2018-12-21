<template>
  <div class="center-view">
    <header id="header">
      9.9拼团
    </header>
    <main id="main">
      <div class="film-order">
        <h3>
          <i class="iconfont icon-dingdan" style="color: orange;"></i>
          <span>电影订单</span>
        </h3>
        <h3>
          <i class="iconfont icon-pintuandingdan" style="color: greenyellow;;"></i>
          <span>拼团订单</span>
        </h3>
      </div>
      <div class="ul">
        <router-link tag="div" class="card" to="/user/card">
          <div class="title">
            <i style="color: rgb(245, 89, 89);" class="iconfont icon-qia"></i>
            <span>卖座卡</span>
          </div>
          <div class="icon">
            <i class="iconfont icon-20151209tubiaolianxizhuanhuan09-copy"></i>
          </div>
        </router-link>
        <div class="balace">
          <div class="title">
            <i style="color: red;" class="iconfont icon-yue"></i>
            <span>余额</span>
          </div>
          <div class="icon">
            <p>￥0</p>
            <i class="iconfont icon-20151209tubiaolianxizhuanhuan09-copy"></i>
          </div>
        </div>
        <div class="set">
          <div class="title">
            <i style="color: rgb(15, 235, 52);" class="iconfont icon-shezhi"></i>
            <span>设置</span>
          </div>
          <div class="icon">
            <i class="iconfont icon-20151209tubiaolianxizhuanhuan09-copy"></i>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: 'Tuan'
};
</script>

<style lang="scss" scoped>
 @import '../styles/common/px2rem.scss';
// @import "@/styles/common/px2rem.scss"

.center-view {
  flex: 1;
}

#header {
  height: px2rem(200);
  background: #ddd;
  justify-content: center;
  display: flex;
  align-items: center;
  color: #fff;
}
#main {
  flex: 1;
  display: flex;
  background: #f4f4f4;
  flex-direction: column;
  .film-order {
    display: flex;
    height: px2rem(80);
    h3 {
      background: white;
      flex: 1;
      display: flex;
      flex-direction: column;
      text-align: center;
      i {
        font-size: px2rem(26);
        margin: px2rem(8) 0;
      }
      span {
        font-size: px2rem(14);
        color: #ccc;
      }
    }
  }
  .ul {
    display: flex;
    flex: 1;
    border-top: px2rem(10) solid #f4f4f4;
    flex-direction: column;
    .card,
    .balace,
    .set {
      padding: 0 px2rem(15);
      background: white;
      height: px2rem(50);
      border-bottom: px2rem(1) solid #f4f4f4;
      display: flex;
      .title {
        flex: 1;
        display: flex;
        align-items: center;
        i {
          font-size: px2rem(20);
        }
        span {
          font-size: px2rem(16);
          margin-left: px2rem(10);
        }
      }
      .icon {
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        i {
          font-size: px2rem(14);
        }
        p {
          font-size: px2rem(14);
          color: #444;
        }
      }
    }
  }
}
</style>
