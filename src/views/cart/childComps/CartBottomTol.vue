<template>
  <div class="bottom-bar">
    <!-- 全选 -->
    <div class="check-wrap">
      <check-button 
            class="check-button"
            :is-checked="isSelectAll"
            @click.native="isCheckedClick" />
      <span>全选</span>
    </div>
    <!-- 总价格 -->
    <div class="totalPrice">
      合计：<span>￥{{totalPrice}}</span>
    </div>
    <!-- 结算 -->
    <div class="calculate">
      结算({{checkedLength}})
    </div>
  </div>
</template>

<script>
  import CheckButton from 'components/content/checkButton/CheckButton'

  import { mapGetters } from 'vuex'

  export default {
    name: 'CartBottomTol',
    components: {
      CheckButton
    },
    computed: {
      ...mapGetters(['cartList']),
      totalPrice() {
        // 合计
        return this.cartList.filter(item => {
          return item.checked
        }).reduce((preValue, item) => {
          return preValue + item.price * item.count
        }, 0).toFixed(2)
      },
      checkedLength() {
        // 选中后，结算商品数量
        return this.cartList.filter(item => {
          return item.checked
        }).reduce((preValue, item) => {
          return preValue + item.count
        }, 0)
      },
      isSelectAll() {
        // 控制全选按钮是否选中状态，数据为空，返回false，有一个未选中，返回false
        if (this.cartList.length === 0) return false
        return !this.cartList.find(item => !item.checked)
      }
    },
    methods: {
      // 全选按钮事件，判断this.isSelectAll是否为真，
      // 若为真，遍历cartList，将item.checked = false
      // 若为假，遍历cartList，将item.checked = true
      isCheckedClick() {
        if (this.isSelectAll) {
          this.cartList.forEach(item => item.checked = false)
        } else {
          this.cartList.forEach(item => item.checked = true)
        }
      }
    }
  }
</script>
<style scoped>
  .bottom-bar {
    position: relative;
    display: flex;
    height: 40px;
    line-height: 40px;
    background-color: #eee;
    box-shadow: 0 -1px 3px rgba(0, 0, 0, .1);
  }

  .check-wrap {
    display: flex;
    align-items: center;
    width: 80px;
  }

  .check-button {
    width: 20px;
    height: 20px;
    margin: 0 5px 0 10px ;
  }

  .totalPrice {
    flex: 1;
    margin-left: 10px;
    display: flex;
  }

  .totalPrice span {
    color: var(--color-hight-text);
    font-size: 16px;
    font-weight: 600;
  }

  .calculate {
    width: 90px;
    background: var(--color-hight-text);
    color: #fff;
    text-align: center;
  }
</style>