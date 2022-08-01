<template>
  <div>
    <a :href="'/goodsDetail/' + item.goods_id" class="goods_item" v-for="(item, index) in goodsData" :key="index">
      <div class="goods_img_wrap">
        <img @load="imgLoad" :src="item.goods_big_logo ? item.goods_big_logo :
        'https://ww1.sinaimg.cn/large/007rAy9hgy1g24by9t530j30i20i2glm.jpg'" alt="">
      </div>
      <div class="goods_info_wrap">
        <div class="goods_name">{{item.goods_name}}</div>
        <div class="goods_price">{{item.goods_price}}</div>
      </div>
    </a>
  </div>
</template>

<script>
  export default {
    name: 'GoodsItem',
    props: {
      goodsData: {
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
  .goods_item {
    display: flex;
    border-bottom: 1px solid #ccc;
    padding: 10px 5px;
  }

  .goods_img_wrap {
    flex: 2;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .goods_img_wrap img {
    width: 70%;
  }

  .goods_info_wrap {
    flex: 3;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }

  .goods_name {
    display: -webkit-box;
    overflow: hidden;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
  }

  .goods_price {
    color: var(--color-hight-text);
    font-size: 16px;
  }

</style>