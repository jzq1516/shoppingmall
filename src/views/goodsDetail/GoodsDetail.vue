<template>
  <div id="goods-detail">
    <!-- 导航条 -->
    <nav-bar class="nav-bar">
      <div slot="left"><img src="~assets/img/common/arrow_left.png" @click="back" alt=""></div>
      <div slot="center">商品详情</div>
    </nav-bar>
    <!-- goodsDetail内容 -->
    <div class="goods-wrap">
      <!-- 轮播图 -->
      <swipe :banners="banners" />
      <!-- 商品详情内容 -->
      <goods-content :goodsDetailData="goodsDetailData"></goods-content>
    </div>
    <!-- 底部工具 -->
    <goods-bottom-bar :goodsDetailData="goodsDetailData" />
  </div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar'
  import Swipe from 'components/common/swipe/Swipe'
  import GoodsContent from './childComps/GoodsContent'
  import GoodsBottomBar from './childComps/GoodsBottomBar'

  import { getGoodsDetailData } from 'network/goodsDetail'

  export default {
    name: 'GoodsDetail',
    data() {
      return {
        goodsDetailData: {},
        banners: [],
      }
    },
    components: {
      NavBar,
      Swipe,
      GoodsContent,
      GoodsBottomBar
    },
    created() {
      // 获取商品详情数据
      let goods_id = this.$route.params.id
      getGoodsDetailData(goods_id).then(res => {
        this.goodsDetailData = res.message
        // 获取轮播数据
        this.banners = this.goodsDetailData.pics.map(item => item.pics_mid)
      })
    },
    methods: {
      // 返回上个页面
      back() {
        this.$router.go(-1)
      }
    }
  }
</script>
<style scoped>
  #goods-detail {
    position: relative;
    z-index: 9;
    height: 100vh;
    background-color: #fff;
  }

  .nav-bar img {
    width: 30px;
    height: 30px;
    vertical-align: middle;
  }

  .goods-wrap {
    padding-bottom: 45px;
  }

</style>