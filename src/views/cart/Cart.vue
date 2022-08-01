<template>
  <div id="cart">
    <!-- 导航条 -->
    <nav-bar>
      <div slot="center">购物车({{cartLength}})</div>
    </nav-bar>
    <!-- cart内容区域 -->
    <!-- 商品列表 -->
    <cart-list />
    <!-- 底部汇总工具栏 -->
    <cart-bottom-tol />
  </div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar'
  import CartList from './childComps/CartList'
  import CartBottomTol from './childComps/CartBottomTol'

  import { mapGetters } from 'vuex'

  export default {
    name: 'Cart',
    components: {
      NavBar,
      CartList,
      CartBottomTol
    },
    computed: {
      ...mapGetters(['cartLength'])
    }
  }
</script>
<style scoped>
  #cart {
    height: 100vh;
  }

</style>