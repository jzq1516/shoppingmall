<template>
  <div id="goods-list">
    <!-- 导航条 -->
    <nav-bar class="nav-bar">
      <div slot="left">
        <img src="~assets/img/common/arrow_left.png" @click="back" alt="" />
        </div>
      <div slot="center">商品列表</div>
    </nav-bar>
    <!-- goodsList内容区域 -->
    <tab-control :titles="['综合', '销量', '价格']"></tab-control>
    <scroll class="content" ref="scroll" 
            :probe-type="3"
            :pullUpLoad="true" 
            @pullingUp="loadMore"
            @scroll="contentScroll">
      <goods-item :goodsData="goodsList.list" @imgLoad="imgLoad" />
    </scroll>
    <!-- 返回顶部 -->
    <back-top @click.native="backTop" v-show="isShowBackTop" />
  </div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar'
  import Scroll from 'components/common/scroll/Scroll'
  import TabControl from 'components/content/tabControl/TabControl'
  import GoodsItem from './childComps/GoodsItem'
  import BackTop from 'components/content/backTop/BackTop'

  import { getGoodsListData } from 'network/goodsList'

  export default {
    name: 'GoodsList',
    data() {
      return {
        goodsList: {
          page: 0, 
          list: []
        },
        isShowBackTop: false
      }
    },
    activated() {
      this.$refs.scroll.refresh()
    }, 
    components: {
      NavBar,
      Scroll,
      TabControl,
      GoodsItem,
      BackTop
    },
    created() {
      // 调用函数
      this.getGoodsListData()
    },
    methods: {
      // 获取商品列表数据
      getGoodsListData() {
        let cid = this.$route.params.id
        let page = this.goodsList.page + 1
        getGoodsListData(cid, page).then(res => {
          this.goodsList.list.push(...res.message.goods)
          this.goodsList.page += 1
          // 加载更多完成
          this.$refs.scroll.finishPullUp()
        })
      },
      // 返回上个页面
      back() {
        this.$router.go(-1)
      },
      // 图片加载完成，刷新网页
      imgLoad() {
        this.$refs.scroll.refresh()
      },
      // 加载更多
      loadMore() {
        this.getGoodsListData(this.page)
      },
      // 返回顶部
      backTop() {
        this.$refs.scroll.scrollTo(0, 0)
      },
      // 监听页面滚动位置，显示/隐藏backTop
      contentScroll(position) {
        this.isShowBackTop = (-position.y) > 1000
      }
    }
  }
</script>
<style scoped>
  #goods-list {
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

  .content {
    height: calc(100% - 44px - 40px);
  }

</style>