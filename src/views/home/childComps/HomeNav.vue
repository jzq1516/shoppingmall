<template>
  <div class="nav-box">
    <div class="nav-item" v-for="item in catitems" :key="item.name">
      <a href="#">
        <img :src="item.image_src">
      </a>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'HomeNav',
    props: {
      catitems: {
        type: Array,
        default() {
          return []
        }
      }
    }
  }
</script>
<style scoped>
  .nav-box {
    display: flex;
    text-align: center;
    padding: 10px 0 20px;
  }

  .nav-item {
    flex: 1;
  }

  .nav-item img {
    width: 70%;
  }
</style>