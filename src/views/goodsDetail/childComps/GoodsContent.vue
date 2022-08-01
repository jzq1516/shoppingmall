<template>
  <div>
    <div class="goods_detail_wrap">
      <div class="goods_price">￥{{goodsDetailData.goods_price}}</div>
      <div class="goods_name_row">
        <div class="goods_name">{{goodsDetailData.goods_name}}</div>
        <div class="goods_collect">
          <img src="~assets/img/goodsDetail/icon_collect.png" alt="">
          <div class="collext_text">收藏</div>
        </div>
      </div>
      <div class="goods_info">
        <div class="goods_info_title">图文详情</div>
        <div class="goods_info_content" v-html="content"></div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'GoodsContent',
    props: {
      goodsDetailData: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    data() {
      return {
        content: null
      }
    },
    updated() {
      this.content = this.goodsDetailData.goods_introduce.replace(/\.webp/g, '.jpg')
    }
  }
</script>
<style scoped>
  .goods_price {
    padding: 8px;
    font-size: 16px;
    font-weight: 600;
    color: var(--color-hight-text);
  }

  .goods_name_row {
    display: flex;
    border-top: 2px solid #dedede;
    border-bottom: 2px solid #dedede;
    padding: 5px 0;
  }

  .goods_name_row .goods_name {
    flex: 5;
    color: #000;
    font-size: 15px;
    padding: 0 5px;
    display: -webkit-box;
    overflow: hidden;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
  }

  .goods_name_row .goods_collect {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-left: 1px solid #000;
    font-size: 14px;
  }
  
  .goods_name_row .goods_collect img {
    width: 36%;
  }

  .goods_info .goods_info_title {
    font-size: 16px;
    color: var(--color-hight-text);
    font-weight: 600;
    padding: 10px;
  }

</style>