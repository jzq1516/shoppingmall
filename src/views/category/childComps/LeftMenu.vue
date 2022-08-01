<template>
  <div>
    <div class="menu_item" 
        :class="{active: index === currentIndex}" 
        v-for="(item, index) in leftMenuList" :key="index" @click="itemClick(index)">
      {{item}}
    </div>
  </div>
</template>

<script>
export default {
  name: 'LeftMenu',
  props: {
    leftMenuList: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      currentIndex: 0
    }
  },
  methods: {
    itemClick(index) {
      this.currentIndex = index
      this.$emit('rightData', index)
    }
  }
}
</script>
<style scoped>
  .menu_item {
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 16px;
    border-bottom: 1px solid #d5d5d5;
  }

  .active {
    color: var(--color-hight-text);
    border-left: 5px solid var(--color-hight-text);
    background: #fff;
  }

</style>