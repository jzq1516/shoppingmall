<template>
  <div>
    <tab-bar>
      <tab-bar-item path="/home" activeColor="#f00">
        <img slot="item-icon" src="~assets/img/tabbar/home.png" alt="">
        <img slot="item-icon-active" src="~assets/img/tabbar/home_selected.png" alt="">
        <div slot="item-text">
          首页
        </div>
      </tab-bar-item>
      <tab-bar-item path="/category" activeColor="#f00">
        <img slot="item-icon" src="~assets/img/tabbar/category.png" alt="">
        <img slot="item-icon-active" src="~assets/img/tabbar/category_selected.png" alt="">
        <div slot="item-text">
          分类
        </div>
      </tab-bar-item>
      <tab-bar-item path="/cart" activeColor="#f00">
        <img slot="item-icon" src="~assets/img/tabbar/cart.png" alt="">
        <img slot="item-icon-active" src="~assets/img/tabbar/cart_selected.png" alt="">
        <div slot="item-text">
          购物车
        </div>
      </tab-bar-item>
      <tab-bar-item path="/profile" activeColor="#f00">
        <img slot="item-icon" src="~assets/img/tabbar/my.png" alt="">
        <img slot="item-icon-active" src="~assets/img/tabbar/my_selected.png" alt="">
        <div slot="item-text">
          我的
        </div>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
  import TabBar from 'components/common/tabbar/TabBar'
  import TabBarItem from 'components/common/tabbar/TabBarItem'

  export default {
    name: 'MainTabBar',
    components: {
      TabBar,
      TabBarItem
    }
  }
</script>
<style scoped>

</style>