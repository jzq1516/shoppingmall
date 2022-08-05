<template>
  <div class="app-info-wrap">
    <div class="app-info-item app-info-contact">
      <span>联系客服</span>
      <span>xxx-xxx-xxxx</span>
    </div>
    <div class="app-info-item">意见反馈</div>
    <div class="app-info-item">关于我们</div>
  </div>
</template>

<script>
export default {
  name: 'AppInfo',
}
</script>
<style scoped>
  .app-info-wrap {
    margin-top: 15px;
    background-color: #fff;
  }

  .app-info-wrap .app-info-item {
    padding: 10px;
    border-bottom: 1px solid #edece8;
  }

  .app-info-wrap .app-info-contact {
    display: flex;
    justify-content: space-between;
  }


</style>