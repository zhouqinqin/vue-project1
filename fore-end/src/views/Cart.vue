<template>
  <div class="cart-view">
    <!-- 头部 -->
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
      <!-- 购物车为空 -->
      <h3 style="display:none">购物车还是空的，去首页选择你喜欢的电影吧!</h3>
      <!-- 商品信息 -->
      <section class="product" >
          <div class="product-phone">
            <img >
          </div>

          <div class="product-info">
            <div class="product-name">(3D订座票)</div>
            <div class="film-time">10:10</div>
            <div class="film-cinema"></div>
            <div class="film-seat">
              <span>2号激光厅</span>
                      3排5座
            </div>
            <div class="product-price">
              <small class="icon-yen">
                ￥
              </small>
              <span class="film-tip">
                （含服务费4.00元/人）
              </span>
            </div>
          </div>
        </section>
        <!-- 加减操作 -->
       <section class="products-price">
        <div class="price-item">
          商品数量 :
          <button type="button">-</button>
          <input type="text"  class="products-num">
          <button type="button">+</button>
        </div>

        <div class="price-red-font">
          <span class="all-price">商品总额 :</span>
          <span class="price-fmt">
            <i>￥</i>
            <span class="interge"></span>
            <span class="min-price">.</span>
            <span class="decimal"></span>
          </span>
        </div>
      </section>
      <div class="continue">
        <router-link to ="/home" tag="span">
          <span>继续购票</span>
        </router-link>
      </div>

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
  },
  data () {
    return {

    }
  },
  methods: {
    // 判断是否登录
    isLogin () {
      // if (!localStorage.getItem('userName')) {
      //   this.$router.push({name: 'Login'})
      // }
    },
    // 判断购物车是否有商品
    isHaveGoods () {
      if (!localStorage.getItem('Films')) {

      }
    }
  },
  created () {
    this.isLogin();
    this.isHaveGoods();
  }
}
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
  // 商品详细信息
  .product {
    margin-top: px2rem(66);
    border-top: px2rem(10) solid #f4f4f4;
    padding: px2rem(15) 0 px2rem(15) px2rem(15);
    display: flex;

    .product-phone {
      margin-right: px2rem(15);
      background-color: #f8f8f8;
      height: px2rem(117);
      width: px2rem(85);
      img {
        width: 100%;
        height: 100%;
      }
    }

    .product-info {
      height: px2rem(117);
      flex: 1;
      position: relative;
      .product-name {
        font-size: px2rem(15);
        line-height: px2rem(20);
      }
      .film-time {
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
        font-size: px2rem(13);
        color: #797d82;
        line-height: px2rem(20);
      }
      .film-cinema {
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
        font-size: px2rem(13);
        color: #797d82;
        line-height: px2rem(20);
      }
      .film-seat {
        text-overflow: ellipsis;
        overflow: hidden;
        font-size: px2rem(13);
        color: #797d82;
        line-height: px2rem(20);
      }
      .product-price {
        font-size: px2rem(15);
        color: #ff5f16;
        line-height: px2rem(20);
        position: absolute;
        bottom: 0;
        .icon-yen {
          font-size: px2rem(10);
          margin-right: px2rem(2);
        }
        .film-tip {
          font-size: px2rem(11);
          color: #bdc0c5;
        }
      }
    }
  }

  // 商品总价
  .products-price {
    display: flex;
    padding: px2rem(12) px2rem(15);
    border-bottom: px2rem(10) solid #f4f4f4;
    .price-item {
      line-height: px2rem(25);
      color: #797d82;
      text-align: left;
      font-size: px2rem(16);
      flex: 0.5;
      input {
        width: 15%;
        height: 90%;
        outline: none;
        font-size: px2rem(20);
        border: 1px solid #ccc;
        text-align: center;
      }
      button {
        width: 15%;
        height: 90%;
        font-size: px2rem(20);
        outline: none;
        border: 1px solid #ccc;
        text-align: center;
      }
    }
    .price-red-font {
      line-height: px2rem(30);
      color: #ff5f16;
      text-align: right;
      font-size: px2rem(15);
      flex: 0.5;
      .all-price {
        color: #797d82;
      }
      i {
        font-size: px2rem(11);
      }
      .min-price {
        display: none;
      }
    }
  }
  // 继续购票
  .continue{
    text-align: right;
    font-size: px2rem(14);
    padding-right:px2rem(15);
    color:orange;
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
