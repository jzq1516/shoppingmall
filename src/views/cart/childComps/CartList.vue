<template>
  <div class="cart-list">
    <scroll class="content" ref="scroll">
      <cart-list-item 
            v-for="(item, index) in cartList" 
            :key="index" :product="item" @imgLoad="imgLoad" />
    </scroll>
  </div>
</template>

<script>
  import Scroll from 'components/common/scroll/Scroll'
  import CartListItem from './CartListItem.vue'

  import { mapGetters } from 'vuex'
  

  export default {
    name: 'CartList',
    components: {
       Scroll,
       CartListItem
    },
    activated() {
      // 进入页面后，刷新页面
      this.$refs.scroll.refresh()
    },
    computed: {
      ...mapGetters(['cartList'])
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
  .cart-list {
    height: calc(100% - 44px - 49px - 40px);
  }

  .content {
    height: 100%;
  }
</style>