<template>
  <div id="cart-item">
    <!-- 复选框 -->
    <div class="item-selector">
      <!-- <input type="checkbox"> -->
      <check-button :is-checked="product.checked" @click.native="CheckClick" />
    </div>
    <!-- 图片 -->
    <div class="item-img">
      <a href="#">
        <img :src="product.image" @load="imgLoad" alt="">
      </a>
    </div>
    <!-- 商品信息 -->
    <div class="item-info">
      <div class="item-name">{{product.name}}</div>
      <div class="info-bottom">
        <div class="item-price">￥{{product.price}}</div>
        <div class="item-count-tool">
          <div class="count-edit" @click="decrement(product.id)">-</div>
          <div class="item-count">{{product.count}}</div>
          <div class="count-edit" @click="increment(product.id)">+</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import CheckButton from 'components/content/checkButton/CheckButton'

  import { mapGetters } from 'vuex'

  export default {
    name: 'CartListItem',
    props: {
      product: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    components: {
      CheckButton
    },
    computed: {
      ...mapGetters(['cartList'])
    },
    methods: {
      CheckClick() {
        // 点击复选框按钮，修改checked的值
        this.product.checked = !this.product.checked 
      },
      imgLoad() {
        // 图片加载完成
        this.$emit('imgLoad')
      },
      decrement(id) {
        // 减少商品数量
        if (this.product.count === 0) return 0
        let index = this.cartList.findIndex(item => item.id === id)
        this.cartList[index].count--
      },
      increment(id) {
        // 增加商品数量
        let index = this.cartList.findIndex(item => item.id === id)
        this.cartList[index].count++  
      }
    }
  }
</script>
<style scoped>
  #cart-item {
    display: flex;
    border-bottom: 1px solid var(--color-hight-text);
    padding: 8px 8px 8px 0;
  }

  .item-selector {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .item-selector input {
    width: 16px;
    height: 16px;
  }

  .item-img {
    flex: 2;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .item-img img{
    width: 80%;
  }

  .item-info {
    flex: 4;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }

  .item-info .item-name {
    display: -webkit-box;
    overflow: hidden;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    color: #666;
  }

  .item-info .info-bottom {
    display: flex;
    justify-content: space-between;
  }

  .info-bottom .item-price {
    color: var(--color-hight-text);
    font-size: 18px;
  }

  .item-count-tool {
    display: flex;
  }

  .item-count-tool .count-edit {
    width: 20px;
    height: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #ccc;
  }

  .item-count-tool .item-count {
    width: 20px;
    height: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 3px;
  }
</style>