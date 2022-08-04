<template>
  <div class="profile-info-wrap">
    <div v-if="isShow" class="profile-img-wrap">
      <img class="profile-bg" src="~assets/img/profile/avatar.jpg" @load="imgLoad" alt="">
      <div class="profile-info">
        <img class="profile-icon" src="~assets/img/profile/avatar.jpg" @load="imgLoad" alt="">
        <div class="profile-name">时光飞逝</div>
      </div>
    </div>
    <div v-else class="profile_btn">
      <a href="#">登录</a>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'ProfileInfo',
    data() {
      return {
        isShow: true
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
  .profile-info-wrap {
    position: relative;
    height: 45vh;
    overflow: hidden;
    background-color: var(--color-tint);
  }

  .profile-img-wrap {
    position: relative;
  }

  .profile-img-wrap .profile-bg{
    height: 50vh;
    filter: blur(5px);
  }

  .profile-info {
    position: absolute;
    left: 50%;  
    transform: translateX(-50%);
    top: 20%;
    text-align: center;
  }

  .profile-info .profile-icon {
    width: 80px;
    height: 80px;
    border-radius: 50%;
  }

  .profile-info .profile-name {
    color: #fff;
    margin-top: 20px;
    font-size: 20px;
  }

  .profile_btn {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: 40%;
    border: 1px solid greenyellow;
    color: greenyellow;
    font-size: 20px;
    padding: 15px;
    border-radius: 5px;
  }
</style>