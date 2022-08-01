<template>
  <div>
    <div class="goods_group" v-for="(item01, index) in rightList" :key="index">
      <div class="goods_title">
        <span class="delimiter">/</span>
        <span class="title">{{item01.cat_name}}</span>
        <span class="delimiter">/</span>
      </div>
      <div class="goods_list">
        <a :href="'/goodsList/' + item02.cat_id" v-for="(item02, index) in item01.children" :key="index">
          <img :src="item02.cat_icon" @load="imgLoad" alt="">
          <div class="goods_name">{{item02.cat_name}}</div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RightList',
  props: {
    rightList: {
      type: Array,
      default() {
        return []
      }
    }
  },
  methods: {
    imgLoad() {
      // 图片加载完成
      this.$emit('imgLoad')
    }
  }
}
</script>
<style scoped>
  .goods_title {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 25px 0;
  }

  .goods_title .delimiter {
    color: #ccc;
  }

  .goods_group:nth-child(1) .goods_title {
    padding-top: 25px;
  }

  .goods_title .title { 
    color:  var(--color-text);
    padding: 0 10px;
  }

  .goods_list {
    display: flex;
    flex-wrap: wrap;
  }

  .goods_list a {
    width: 33.33%;
    text-align: center;
    font-size: var(--font-size);
    color: var(--color-text);
    padding: 10px 0;
  }

  .goods_list .goods_name {
    padding: 8px 0;
  }

  .goods_list img {
    width: 50%;
  }

</style>