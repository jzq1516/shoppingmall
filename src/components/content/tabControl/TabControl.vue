<template>
  <div class="tab-control">
    <div  class="tab-control-item" 
          v-for="(item, index) in titles" :key="index" 
          :class="{active: index === currentIndex}" @click="itemClick(index)">
      {{item}}</div>
  </div>
</template>

<script>
  export default {
    name: 'TabControl',
    props: {
      titles: {
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
      }
    }
  }
</script>
<style scoped>
  .tab-control {
    position: relative;
    z-index: 3;
    display: flex;
    text-align: center;
    height: 40px;
    line-height: 40px;
    font-size: 15px;
    border-bottom: 1px solid #ccc;
    background: #fff;
  }

  .tab-control-item {
    flex: 1;
  }

  .active {
    color: var(--color-hight-text);
    border-bottom: 1px solid var(--color-hight-text);
  }
  
</style>