<script setup>
import { ref, watch } from 'vue'
import { ArrowRight } from '@element-plus/icons-vue'
import { useRoute } from 'vue-router'

let route = useRoute()
// 滚动到指定产品的函数
const scrollToProduct = (id) => {
  const productId = 'product' + id
  const element = document.getElementById(productId)
  if (element) {
    // 获取元素当前的位置
    const elementTop = element.getBoundingClientRect().top + window.pageYOffset
    // 计算需要滚动到的位置
    const scrollTop = elementTop - 150
    // 平滑滚动到指定位置
    window.scrollTo({
      top: scrollTop,
      behavior: 'smooth',
    })
  }
}
const activeIndex = ref('/product?id=1')
watch(
  () => route.query.id,
  (newId) => {
    if (newId) {
      activeIndex.value = '/product?id=' + String(newId) // 确保类型一致
      scrollToProduct(newId) // 滚动到对应的产品
    }
  },
  { immediate: true }
) // immediate: true 确保在组件加载时立即执行

// 定义响应式数据
const products = ref([
  {
    name: '纯机电制动执行器SEMB',
    features: ['覆盖全工作温度范围', '覆盖全工作温度范围', '平台化组合可适用至3.5吨车辆'],
    parameters: [
      { label: '工作温度', value: '-40℃~120℃' },
      { label: '工作温度', value: '-40℃~120℃' },
      { label: '工作温度', value: '-40℃~120℃' },
    ],
  },
  {
    name: '纯机电制动执行器SEMB2',
    features: ['覆盖全工作温度范围1', '覆盖全工作温度范围2', '平台化组合可适用至3.5吨车辆3'],
    parameters: [
      { label: '工作温度', value: '-40℃~120℃' },
      { label: '工作温度', value: '-40℃~120℃' },
      { label: '工作温度', value: '-40℃~120℃' },
    ],
  },
  {
    name: '纯机电制动执行器SEMB3',
    features: ['覆盖全工作温度范围4', '覆盖全工作温度范围5', '平台化组合可适用至3.5吨车辆6'],
    parameters: [
      { label: '工作温度', value: '-40℃~120℃' },
      { label: '工作温度', value: '-40℃~120℃' },
      { label: '工作温度', value: '-40℃~120℃' },
    ],
  },
  // 可以添加更多产品数据
])
</script>

<template>
  <div class="product-banner">
    <div class="product-icon-and-breadcrumb">
      <i class="iconfont icon-didian"></i>
      <el-breadcrumb :separator-icon="ArrowRight" class="product-breadcrumb">
        <el-breadcrumb-item class="product-banner-first" :to="{ path: '/' }"
          >首页</el-breadcrumb-item
        >
        <el-breadcrumb-item>产品介绍</el-breadcrumb-item>
      </el-breadcrumb>
    </div>

    <el-menu
      ellipsis
      class="el-menu-popper-demo"
      mode="horizontal"
      style="width: 60%; --el-menu-hover-bg-color: white"
      background-color="#fff"
      collapse-transition
      text-color="#000"
      active-text-color="var(--maincolor)"
      :default-active="activeIndex"
      router
    >
      <el-menu-item index="/product?id=1">产品1号</el-menu-item>
      <el-menu-item index="/product?id=2">产品2号</el-menu-item>
      <el-menu-item index="/product?id=3">产品3号</el-menu-item>
      <el-menu-item index="4">产品4号</el-menu-item>
    </el-menu>
  </div>
  <div class="product-container">
    <span
      id="product1"
      class="product-item"
      style="
        background: linear-gradient(
          to right,
          #3e4045 0%,
          #000000 60%,
          #000000 100%
        ); /* 从黑色到白色渐变 */
      "
    >
      <ul class="product-item-card">
        <div class="title">{{ products[0].name }}</div>
        <li v-for="(feature, index) in products[0].features" :key="index">{{ feature }}</li>
        <div class="subtitle">主要参数特点</div>
        <div class="item-form-param" v-for="(param, index) in products[0].parameters" :key="index">
          <p>{{ param.label }}</p>
          <p>{{ param.value }}</p>
        </div>
      </ul>
      <ul class="product-item-card">
        <img src="@/assets/img/product1.png" />
      </ul>
    </span>
    <span
      id="product2"
      class="product-item"
      style="
        background: linear-gradient(
          to right,
          #000000 0%,
          #000000 40%,
          #3e4045 100%
        ); /* 从黑色到白色渐变 */
      "
    >
      <ul class="product-item-card">
        <img src="@/assets/img/product1.png" />
      </ul>
      <ul class="product-item-card">
        <div class="title">{{ products[1].name }}</div>
        <li v-for="(feature, index) in products[1].features" :key="index">{{ feature }}</li>
        <div class="subtitle">主要参数特点</div>
        <div class="item-form-param" v-for="(param, index) in products[1].parameters" :key="index">
          <p>{{ param.label }}</p>
          <p>{{ param.value }}</p>
        </div>
      </ul>
    </span>
    <span
      id="product3"
      class="product-item"
      style="
        background: linear-gradient(
          to right,
          #3e4045 0%,
          #000000 60%,
          #000000 100%
        ); /* 从黑色到白色渐变 */
      "
    >
      <ul class="product-item-card">
        <div class="title">{{ products[2].name }}</div>
        <li v-for="(feature, index) in products[2].features" :key="index">{{ feature }}</li>
        <div class="subtitle">主要参数特点</div>
        <div class="item-form-param" v-for="(param, index) in products[2].parameters" :key="index">
          <p>{{ param.label }}</p>
          <p>{{ param.value }}</p>
        </div>
      </ul>
      <ul class="product-item-card">
        <img src="@/assets/img/product1.png" />
      </ul>
    </span>
  </div>
</template>

<style scoped>
.product-banner {
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 2px solid rgba(128, 128, 128, 0.5);
  position: fixed; /* 固定位置 */
  top: 8vh; /* 距离顶部0 */
  left: 0; /* 距离左侧0 */
  right: 0; /* 距离右侧0 */
  z-index: 999; /* 确保它在最上面 */
  background-color: #fff; /* 背景颜色 */
}
.product-breadcrumb {
  font-size: 16px;
}
.el-menu--horizontal {
  --el-menu-horizontal-height: 6vh;
  border-bottom: none;
}

.el-menu-item {
  font-size: 18px; /* 设置字体大小 */
}

.el-menu-item:hover {
  color: #f3d19e !important;
  background-color: #fff !important;
}
.el-menu-item.is-active {
  background-color: #fff !important;
}

.product-icon-and-breadcrumb {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40%;
  padding-left: 10%;
}
.product-icon-and-breadcrumb i {
  width: 0.5vw;
  height: 0.5vw;
  line-height: 1vh;
  display: inline-block;
  font-size: 30px;
  color: var(--maincolor);
  margin-right: 1vw;
}
.product-container {
  display: flex;
  flex-direction: column;
  justify-content: center; /* 水平居中 */
}
.product-item {
  display: flex;
  justify-content: center; /* 水平居中 */
  align-items: center; /* 垂直居中 */
  width: 100%; /* 或者设置为你需要的宽度 */
  color: white; /* 设置文本颜色为白色，以确保在暗色背景上可见 */
}

.product-item-card {
  width: 25%;
  padding: 0; /* 移除默认的内边距 */
  text-align: left; /* 文本靠左对齐 */
}
.product-item-card img {
  width: 20vw;
  object-fit: cover; /* 确保图片覆盖整个容器 */
}
.product-item-card .title {
  font-size: 28px;
  font-weight: 700;
  margin-bottom: 2vh;
}
.product-item-card li {
  list-style-type: disc;
  font-size: 12px;
  font-weight: 300;
  color: var(--greyword);
  margin-bottom: 1vh;
}
.product-item-card .subtitle {
  font-size: 20px;
  font-weight: 300;
  margin: 1.5vh 0;
}
.product-item-card .item-form-param {
  display: flex;
  border-bottom: 1px solid rgba(128, 128, 128, 0.5);
  width: 15vw;
}
.item-form-param p {
  margin: 0.5vh 4vw 0px 0px; /* 在上下添加5像素的外边距 */
}

@media screen and (max-width: 600px) {
  .product-banner {
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: 2px solid rgba(128, 128, 128, 0.5);
    position: fixed; /* 固定位置 */
    top: 8vh; /* 距离顶部0 */
    left: 0; /* 距离左侧0 */
    right: 0; /* 距离右侧0 */
    z-index: 999; /* 确保它在最上面 */
    background-color: #fff; /* 背景颜色 */
  }
  .el-menu--horizontal {
    --el-menu-horizontal-height: 5vh;
    border-bottom: none;
  }

  .el-menu-item {
    font-size: 12px; /* 设置字体大小 */
  }
  .el-breadcrumb {
    width: 180px;
  }
  .product-icon-and-breadcrumb i {
    width: 8px;
    height: 8px;
    line-height: 8px;
    display: inline-block;
    font-size: 20px;
    color: var(--maincolor);
    margin-right: 20px;
    padding: 0;
  }
  .product-breadcrumb {
    font-size: 14px;
  }

  .product-container {
    padding-top: 40px;
    padding-bottom: 40px;
    background-color: black;
  }
  .product-item-card {
    width: 50%;
    padding: 10px; /* 移除默认的内边距 */
    text-align: center; /* 文本靠左对齐 */
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .product-item-card img {
    margin-left: 25%;
    width: 50%;
    object-fit: cover; /* 确保图片覆盖整个容器 */
  }
  .product-item-card .title {
    font-size: 14px;
    font-weight: 700;
  }
  .product-item-card li {
    list-style-type: disc;
    font-size: 12px;
    font-weight: 300;
    color: var(--greyword);
  }
  .product-item-card .subtitle {
    font-size: 14px;
    font-weight: 300;
  }
  .product-item-card .item-form-param {
    display: flex;
    border-bottom: 1px solid rgba(128, 128, 128, 0.5);
    width: 100%;
  }
  .item-form-param p {
    font-size: 10px;
    width: 50%;
    margin: 0;
  }
}
</style>
