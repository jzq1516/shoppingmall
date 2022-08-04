<template>
  <div id="category">
    <!-- 导航条 -->
    <nav-bar>
      <div slot="center">分类</div>
    </nav-bar>
    <!-- category内容区域 -->
    <div class="categroy-content">
      <scroll class="left_menu" ref="scroll">
        <!-- 左侧商品菜单 -->
        <left-menu :leftMenuList="leftMenuData" @rightData="handleRightData" />
      </scroll>
      <scroll class="right_content" ref="scroll">
        <!-- 右侧商品列表 -->
        <right-list :rightList="rightListData" @imgLoad="imgLoad" />
      </scroll>
    </div>

  </div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar'
  import Scroll from 'components/common/scroll/Scroll'
  import LeftMenu from './childComps/LeftMenu'
  import RightList from './childComps/RightList'

  import { getCategoryData } from 'network/category'

  export default {
    name: 'Category',
    data() {
      return {
        categoryData: [],
        leftMenuData: [],
        rightListData: []
      }
    },
    components: {
      NavBar,
      Scroll,
      LeftMenu,
      RightList
    },
    activated() {
      this.$refs.scroll.refresh()
    },
    created() {
      //  获取商品分类数据
      getCategoryData().then(res => {
        this.categoryData = res.message
        this.leftMenuData = this.categoryData.map(item => item.cat_name)
        this.rightListData = this.categoryData[0].children
      })
    },
    methods: {
      // 点击左侧商品菜单，动态获取右侧商品数据
      handleRightData(index) {
        this.rightListData = this.categoryData[index].children
        this.$refs.scroll.scrollTo(0, 0)
      },
      imgLoad() {
        // 图片加载完成，刷新页面
        this.$refs.scroll.refresh()
      }
    }
  }
</script>
<style scoped>
  #category {
    height: 100vh;
  }

  .categroy-content {
    display: flex;
    height: calc(100% - 44px - 49px);
  }

  .left_menu {
    flex: 2;
    background: #f4f4f4;
    color:  var(--color-text);
  }

  .right_content {
    flex: 5;
  }
  
</style>