<template>
  <div class="orders-wrap">
    <div class="orders-title">我的订单</div>
    <div class="orders-content">
      <a href="#">
        <img src="~assets/img/profile/icon_dd.png" alt="">
        <div class="orders-name">全部订单</div>
      </a>
      <a href="#">
        <img src="~assets/img/profile/icon_fk.png" alt="">
        <div class="orders-name">待付款</div>
      </a>
      <a href="#">
        <img src="~assets/img/profile/icon_sh.png" alt="">
        <div class="orders-name">待收货</div>
      </a>
      <a href="#">
        <img src="~assets/img/profile/icon_tk.png" alt="">
        <div class="orders-name">退款/退货</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Orders',
}
</script>
<style scoped>
  .orders-wrap {
    background-color: #fff;
    margin-top: 10px;
  }

  .orders-wrap .orders-title {
    padding: 8px;
    border-bottom: 1px solid #ccc;
  }

  .orders-wrap .orders-content {
    display: flex;
  }

  .orders-content a {
    flex: 1;
    padding: 8px 0;
    text-align: center;
    font-size: 12px;
  }

  .orders-content a img {
    width: 30%;
    margin-bottom: 3px;
  }


</style>