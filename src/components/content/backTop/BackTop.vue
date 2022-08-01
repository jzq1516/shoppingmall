<template>
  <div class="back-top">
    <img src="~assets/img/common/top.png" alt="">
  </div>
</template>

<script>
export default {
  name: 'BackTop',
}
</script>
<style scoped>
  .back-top {
    position: fixed;
    right: 10px;
    bottom: 60px;
    z-index: 999;
    width: 36px;
    height: 36px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #fff;
    border-radius: 50%;
    box-shadow: 1px 1px 5px rgba(0, 0, 0, .3);
  }

  .back-top img{
    width: 18px;
    height: 18px;

  }

</style>