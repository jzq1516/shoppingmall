<template>
  <div>
    <div class="feature-box" v-for="items in floordatas" :key="items.id">
      <div class="feature-title">
        <a href="#">
          <img :src="items.floor_title.image_src" @load="imgLoad" alt="">
        </a>
      </div>
      <div class="feature-list">
        <div class="item" v-for="item in items.product_list" :key="item.id">
          <a href="#">
            <img :src="item.image_src" @load="imgLoad" alt="" />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Feature',
  props: {
    floordatas: {
      type: Array,
      default() {
        return []
      }
    }
  },
  methods: {
    // 图片加载完成
    imgLoad() {
      this.$emit('imgLoad')
    }
  }
}
</script>
<style scoped>
  .feature-title {
    padding: 8px 0;
    background: #eee;
  }

  .feature-title img {
    width: 100%;
  }

  .feature-list {
    overflow: hidden;
    padding: 5px 15px 5px 5px;
  }

  .feature-list .item{
    width: 33.33%;
    float: left;
  }

  .feature-list .item:nth-child(n+2) {
    height: calc(33.33vw * 386  / 232  / 2);

  }

  .feature-list .item:first-child {
    margin-top: 6px;
  }

  .feature-list img{
    width: 100%;
    height: 100%;
    border: 5px solid #fff;
  }

</style>