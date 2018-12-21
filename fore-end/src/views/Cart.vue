<template>
  <div class="cart-view">
    <mt-header fixed title="购物车" id="header">
      <router-link to="/home" slot="left">
        <mt-button>
          <i class="iconfont icon-fanhui"></i>
        </mt-button>
      </router-link>
      <mt-button slot="right">
        <i class="iconfont icon-gengduo"></i>
      </mt-button>
    </mt-header>
    <main>
      <h3>购物车还是空的，去首页选择你喜欢的电影吧!</h3>
    </main>
    <footer class="settle_accounts ">
      <div class="select_all fl">
        <a  class="checkbox choose">
          <input type="checkbox" style="border: none;">
        </a> 全选
      </div>
      <div  class="fr">
        <span  class="total">
          总计：
          <span>
            ￥
            <span>0.00</span>
          </span>
        </span>
        <a class="make_btn">
          结算(
          <span>0</span>)
        </a>
      </div>
    </footer>
  </div>
</template>

<script>
import { Header, Button } from 'mint-ui';
export default {
  name: 'Cart',
  components: {
    'mt-header': Header,
    'mt-button': Button
  }
};
</script>

<style lang="scss" scoped>
@import "../styles/common/px2rem.scss";
// @import "@/styles/common/px2rem.scss";

.cart-view {
  flex: 1;
  display: flex;
  flex-direction: column;
}
.mint-header {
  height: px2rem(44);
  font-size: px2rem(16);
  border-bottom: 1px solid #ddd;
}
#header {
  padding: 0 px2rem(15);
  background: #fff;
  color: #191a1b;
  i {
    font-size: px2rem(18);
  }
}
main{
  padding-top: px2rem(44);
  background:#f5f5f5;
  height:100%;
  width:100%;
  flex:1;
  overflow:hidden;
  h3{
    padding-top: px2rem(200);
    font-size: px2rem(16);
    text-align: center;
    color: #191a1b;
  }
}
footer{
  position: fixed;
  bottom: 0;
  background: #fff;
  width: 100%;
  height: px2rem(44);
  display: flex;
  justify-content: space-between;
  padding:0 px2rem(4);
  font-size: px2rem(16);
  align-items: center;
  color: #191a1b;
  .fl{
    .choose{
      input{
        width:20px;
        height:20px;
        border-radius: 50%;
      }
    }
  }

}
</style>
