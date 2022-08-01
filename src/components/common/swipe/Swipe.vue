<template>
  <div>
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="(item, index) in banners" :key="index">
        <img :src="item" alt="">
      </mt-swipe-item>
    </mt-swipe>
  </div>
</template>

<script>
  export default {
    name: 'Swipe',
    props: {
      banners: {
        type: Array,
        default() {
          return []
        }
      }
    }
  }
</script>

<style scoped>
  .mint-swipe {
    height: 26vh;
    color: #fff;
  }

  .mint-swipe-item {
    text-align: center;
  }

  img {
    width: 100%;
    height: 100%;
  }
</style>