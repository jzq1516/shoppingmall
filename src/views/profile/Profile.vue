<template>
  <div id="profile">
    <!-- 导航条 -->
    <nav-bar class="nav-bar">
      <div slot="center">个人中心</div>
    </nav-bar>
    <!-- 个人中心内容 -->
    <scroll class="content" ref="scroll">
      <!-- 个人信息 -->
      <profile-info @imgLoad="imgLoad" />
      <!-- 历史足迹 -->
      <history />
      <!-- 我的订单 -->
      <orders />
      <!-- 收货地址 -->
      <addr />
      <!-- 应用信息 -->
      <app-info />
      <!-- 推荐 -->
      <recommend />
    </scroll>

  </div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar'
  import Scroll from 'components/common/scroll/Scroll'
  import ProfileInfo from './childComps/ProfileInfo'
  import History from './childComps/History'
  import Orders from './childComps/Orders'
  import Addr from './childComps/Addr'
  import AppInfo from './childComps/AppInfo'
  import Recommend from './childComps/Recommend'

  export default {
    name: 'Profile',
    components: {
      NavBar,
      Scroll,
      ProfileInfo,
      History,
      Orders,
      Addr,
      AppInfo,
      Recommend
    },
    methods: {
      imgLoad() {
        // 图片加载完成，刷新页面
        this.$refs.scroll.refresh()
      }
    }
  }
</script>
<style scoped>
  #profile {
    height: 100vh;
    background-color: #edece8;
  }

  .content {
    height: calc(100% - 44px - 49px);
  }

</style>