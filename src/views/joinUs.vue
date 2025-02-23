<template>
  <div class="header-img-container">
    <img src="@/assets/img/contactus.jpg" alt="加入我们" />
    <div class="overlay-text"><b style="color: var(--maincolor)">Join us</b><br />加入我们</div>
  </div>
</template>

<script setup></script>
<style lang="scss" scoped>
.header-img-container {
  width: 100%; /* 父容器宽度设置为100% */
  overflow: hidden; /* 防止图片溢出 */
  height: 400px;
  position: relative;
}

.header-img-container img {
  width: 100%; /* 图片宽度设置为100%，使其铺满父容器 */
  height: auto; /* 保持图片的宽高比例 */
  display: block; /* 去除图片底部的默认间隙 */
}

.overlay-text {
  position: absolute;
  top: 50%; /* 垂直居中 */
  left: 50%; /* 水平居中 */
  transform: translate(-50%, -50%); /* 使文字真正居中 */
  color: white; /* 文字颜色 */
  font-size: 64px; /* 文字大小 */
  text-shadow: 2px 2px 4px rgba(1, 1, 1, 0.5); /* 文字阴影，增加可读性 */
  font-family: 'AlimamaDaoLiTi'; /* 自定义字体 */
  animation: fadeIn 2s ease-out forwards; /* 添加动画 */
}
</style>
