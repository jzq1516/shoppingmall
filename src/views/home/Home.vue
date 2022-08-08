<template>
  <div id="home">
    <!-- 导航条 -->
    <nav-bar class="nav-bar">
      <div slot="center">购物街</div>
    </nav-bar>
    <scroll class="content" ref="scroll" :probe-type="3" @scroll="contentScroll">
      <!-- 轮播图 -->
      <swipe :banners="banners" />
      <!-- 导航 -->
      <home-nav :catitems="catItemData" />
      <!-- 楼层 -->
      <feature :floordatas="floorData" @imgLoad="imgLoad" />
    </scroll>
    <!-- 返回顶部 -->
    <back-top @click.native="backTop" v-show="isShowBackTop" />
  </div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar'
  import Scroll from 'components/common/scroll/Scroll'
  import Swipe from 'components/common/swipe/Swipe'
  import HomeNav from './childComps/HomeNav'
  import Feature from './childComps/Feature'
  import BackTop from 'components/content/backTop/BackTop'

  import { getSwiperData, getCatitemsData, getFloorData } from 'network/home'

  export default {
    name: 'Home',
    data() {
      return {
        banners: [],
        catItemData: [],
        floorData: [],
        saveY: 0,
        isShowBackTop: false
      }
    },  
    components: {
      NavBar,
      Scroll,
      Swipe,
      HomeNav,
      Feature,
      BackTop
    },
    activated() {
      // 回到离开前的位置
      this.$refs.scroll.scrollTo(0, this.saveY)
      this.$refs.scroll.refresh()
    },
    deactivated() {
      // 获取离开时位置
      this.saveY = this.$refs.scroll.getScrollY()
    },
    created() {
      // 获取轮播图数据
      getSwiperData().then(res => {
        this.banners = res.message.map(item => item.image_src)
      })
      // 获取导航数据
      getCatitemsData().then(res => {
        this.catItemData = res.message
      })
      // 获取导楼层数据
      getFloorData().then(res => {
        this.floorData = res.message
      })
    },
    methods: {
      // 图片刷新
      imgLoad() {
        this.$refs.scroll.refresh()
      },
      // 实时监听位置
      contentScroll(position) {
        this.isShowBackTop = (-position.y) > 200
      },
      // 返回顶部
      backTop() {
        this.$refs.scroll.scrollTo(0, 0)
      }
    }
  }
</script>
<style scoped>
  #home {
    height: 100vh;
  }

  .content {
    height: calc(100% - 44px - 49px);
  }
  
</style>