<script setup>
import { computed } from 'vue'
import { useRouter, useRoute } from 'vue-router'
// import { useDeviceStore } from '@/stores'
const router = useRouter()
const route = useRoute()

const defaultActive = computed(() => {
  return route.path
})
const navigateToProduct = () => {
  router.push('/product')
}
const navigateToHome = () => {
  router.push('/') // 跳转到首页
}

// const deviceStore = useDeviceStore()
</script>

<template>
  <div class="header">
    <div class="header-list">
      <div class="header-top">
        <img  src="@/assets/img/logo_large.png" class="logo" @click="navigateToHome" />
        <el-menu
          :default-active="defaultActive"
          class="el-menu-nav"
          style="--el-menu-hover-bg-color: #171602"
          mode="horizontal"
          background-color="#171602"
          text-color="#fff"
          active-text-color="var(--maincolor)"
          collapse-transition
          :popper-offset="0"
          router
        >
          <el-menu-item index="/"
            ><el-icon><House /></el-icon>首页</el-menu-item
          >
          <el-menu-item index="/about"
            ><el-icon><Pointer /></el-icon>关于星韧</el-menu-item
          >
          <el-sub-menu @click="navigateToProduct" index="/product">
            <template #title
              ><el-icon><ShoppingTrolley /></el-icon>产品介绍</template
            >
            <el-menu-item index="/product?id=1">产品1</el-menu-item>
            <el-menu-item index="/product?id=2">产品2</el-menu-item>
            <el-menu-item index="/product?id=3">产品3</el-menu-item>
          </el-sub-menu>
          <el-menu-item index="/apply"
            ><el-icon><Place /></el-icon>应用领域</el-menu-item
          >
          <el-menu-item index="/news"
            ><el-icon><Tickets /></el-icon>新闻资讯</el-menu-item
          >
          <el-menu-item index="/join"
            ><el-icon><User /></el-icon>加入我们</el-menu-item
          >
          <el-menu-item index="/contact"
            ><el-icon><Phone /></el-icon>联系我们</el-menu-item
          >
        </el-menu>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* 页面头部 */
.header {
  width: 90vw;
  height: 8vh;
}
/* 固定定位 */
.header-list {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;
  width: 100%;
  height: auto;
  background-color: #fff;
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.1);
  background-color: #171602;
  display: flex;
  align-items: center;
  justify-content: center;
}
.header-top {
  width: 80%;
  height: auto;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
}
.el-menu-nav {
  flex: 1;
}

.logo {
  width: 200px;
}

.el-menu--horizontal {
  --el-menu-horizontal-height: 8vh;
  border-bottom: none;
  justify-content: space-around;
}
.el-menu-item {
  font-size: 20px; /* 设置字体大小 */
}
.el-menu-item:hover {
  color: #f3d19e !important;
}

:global(.el-sub-menu div) {
  font-size: 20px;
}

:global(.el-sub-menu div:hover) {
  color: #f3d19e !important;
}

@media screen and (max-width: 600px) {
  .header{
    width: 100vw;
  }
  .header-list{
    width: 100vw;
  }
  .header-top{
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .logo{
    padding-left: 5%;
    width: 20vw;
  }
  .el-menu-nav{
    margin: 0;
    width: 80vw;
  }
  :global(.el-sub-menu div) {
  font-size: 12px;
}
.el-menu-item {
  font-size: 12px; /* 设置字体大小 */
}
}

</style>
