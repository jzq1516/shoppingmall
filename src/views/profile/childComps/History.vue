<template>
  <div class="history-wrap">
    <a href="#">
      <div class="his-num">0</div>
      <div class="his-name">收藏的店铺</div>
    </a>
    <a href="#">
      <div class="his-num">0</div>
      <div class="his-name">收藏的商品</div>
    </a>
    <a href="#">
      <div class="his-num">0</div>
      <div class="his-name">关注的商品</div>
    </a>
    <a href="#">
      <div class="his-num">0</div>
      <div class="his-name">我的足迹</div>
    </a>
  </div>
</template>

<script>
export default {
  name: 'History',
}
</script>
<style scoped>
  .history-wrap {
    background-color: #fff;
    display: flex;
    margin-top: 15px;
  }

  .history-wrap a {
    flex: 1;
    text-align: center;
    padding: 5px 0;
    font-size: 12px;
  }

  .history-wrap .his-num {
    color: var(--color-tint);
    margin-bottom: 5px;
  }
</style>