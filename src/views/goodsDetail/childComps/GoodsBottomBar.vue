<template>
  <div>
    <div class="btm_tool">
      <div class="tool_item">
        <img src="~assets/img/goodsDetail/icon_customer.png" alt="">
        <div>客服</div>
      </div>
      <div class="tool_item">
        <img src="~assets/img/goodsDetail/icon_share.png" alt="">
        <div>分享</div>
      </div>
      <div class="tool_item">
        <a href="/cart">
          <img src="~assets/img/goodsDetail/icon_cart.png" alt="">
          <div>购物车</div>
        </a>
      </div>
      <div class="tool_item btn_cart" @click="addToCart">
        加入购物车
      </div>
      <div class="tool_item btn_buy">
        立即购买
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'GoodsBottomBar',
    props: {
      goodsDetailData: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    methods: {
      addToCart() {
        console.log(this.goodsDetailData);
        // 获取购物车所展示的信息
        const product = {}
        product.image = this.goodsDetailData.goods_small_logo
        product.name = this.goodsDetailData.goods_name
        product.price = this.goodsDetailData.goods_price
        product.id = this.goodsDetailData.goods_id
        // 将商品添加到购物车
        this.$store.dispatch('addCart', product)
      }
    }
  }
</script>
<style scoped>
  .btm_tool {
    position: fixed;
    left: 0;
    bottom: 0;
    z-index: 10;
    width: 100%;
    height: 45px;
    background-color: #fff;
    display: flex;
    box-shadow: 0 -1px 1px rgba(0, 0, 0, .1);
  }

  .tool_item {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 12px;
  }

  .tool_item a {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .tool_item img {
    width: 36%;
    padding: 4px 0;
  }

  .btn_cart {
    flex: 2;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #ffa500;
    color: #fff;
    font-size: 15px;
    font-weight: 600;
  }

  .btn_buy {
    flex: 2;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #eb4450;
    color: #fff;
    font-size: 15px;
    font-weight: 600;
  }
</style>