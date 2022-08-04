<template>
  <div class="check-button" :class="{check: isChecked}">
    <img src="~assets/img/common/icon_right.png" alt="">
  </div>
</template>

<script>
  export default {
    name: 'CheckButton',
    props: {
      isChecked: {
        type: Boolean,
        default: false
      }
    }
  }
</script>
<style scoped>
  .check-button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 22px;
    height: 22px;
    border-radius: 50%;
    border: 2px solid #aaa;
  }

  .check-button img {
    width: 75%;
  }

  .check {
    background-color: var(--color-hight-text);
    border-color: var(--color-hight-text);
  }
  
</style>