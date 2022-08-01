<template>
  <div id="wrap" ref="wrap">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'

  export default {
    name: 'scroll',
    data() {
      return {
        scroll: null
      }
    },
    props: {
      probeType: {
        type: Number,
        default: 0
      },
      pullUpLoad: {
        type: Boolean,
        default: false
      }
    },
    mounted() {
      // 创建scroll实例
      if (!this.scroll) {
        this.scroll = new BScroll(this.$refs.wrap, {
          click: true,
          mouseWheel: true,
          probeType: this.probeType,
          pullUpLoad: this.pullUpLoad
        })
      } else {
        this.scroll.refresh()
      }
      // 实时监听位置
      if (this.probeType === 2 || this.probeType === 3) {
        this.scroll.on('scroll', (position) => {
          this.$emit('scroll', position)
        })
      }
      // 监听上拉加载更多
      if (this.pullUpLoad){
        this.scroll.on('pullingUp',() => {
          this.$emit('pullingUp')
        })
      }
    },
    updated() {
      this.scroll.refresh()
    },
    methods: {
      // 刷新
      refresh() {
        this.scroll && this.scroll.refresh()
      },
      // 返回顶部
      scrollTo(x, y, timer=300) {
        this.scroll && this.scroll.scrollTo(x, y, timer)
      },
      // 获取离开时位置
      getScrollY() {
        return this.scroll ? this.scroll.y : 0
      },
      // 加载更多完成
      finishPullUp() {
        this.scroll && this.scroll.finishPullUp()
      }
  
    }
  }
</script>
<style scoped>

</style>