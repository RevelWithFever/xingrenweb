<script setup>
import { Vue3Lottie } from 'vue3-lottie'
import AstronautJSON from '@/assets/lottie/404notFound.json'

// 使用 inject 获取 visible
</script>

<template>
  <div class="not-found-container">
    <Vue3Lottie :animationData="AstronautJSON" :height="800" :width="800" />
    <div class="not-found-content">
      <h1>404 - 页面未找到</h1>
      <a href="/">返回首页</a>
    </div>
  </div>
</template>

<style scoped lang="scss">
.not-found-container {
  text-align: center;
  margin: 10px;
  display: flex;
  flex-direction: column;
  .not-found-content {
    display: flex;
    justify-content: center; /* 水平居中 */
    align-items: center; /* 垂直居中 */
    a {
      display: block;
      padding: 10px 20px; /* 增加内边距 */
      font-size: 16px;
      color: black;
      font-weight: 500;
      text-decoration: none; /* 移除下划线 */
      text-align: left;
      transition: transform 0.3s ease; /* 平滑过渡背景颜色和变换 */
    }
    a:hover {
      color: var(--maincolor);
      transform: translateY(-2px); /* 轻微上移 */
    }
  }
}
</style>
