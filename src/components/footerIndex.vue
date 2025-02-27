<script setup>
import { ref } from 'vue'

const currentYear = ref(new Date().getFullYear())

// 如果需要在模板中使用响应式数据或方法，可以在这里定义
</script>

<template>
  <div class="footer-container">
    <div class="footer-inner-list">
      <div class="footer-left">
        <img src="@/assets/img/footerBackgroundEarth.jpg" />
      </div>
      <div class="footer-right">
        <div class="footer-right-top">
          <div class="footer-right-top-l">
            <ul>
              <li>
                <p>关于我们</p>
                <a href="#">公司介绍</a>
                <a href="#">团队构成</a>
                <a href="#">使命愿景</a>
              </li>
              <li>
                <p>关于我们</p>
                <a href="#">公司介绍</a>
                <a href="#">团队构成</a>
                <a href="#">使命愿景</a>
              </li>
              <li>
                <p>关于我们</p>
                <a href="#">公司介绍</a>
                <a href="#">团队构成</a>
                <a href="#">使命愿景</a>
              </li>
            </ul>
          </div>
          <div class="footer-right-top-m">
            <ul>
              <li>联系我们</li>
              <p>13812341234</p>
            </ul>
            <ul>
              <li>商务合作</li>
              <p>asdadjsksd@qq.com</p>
            </ul>
          </div>
          <div class="footer-right-top-r">
            <img src="@/assets/img/erweima.png" />
            <p>星韧科技有限公司</p>
          </div>
        </div>
        <div class="footer-right-bottom">
          <p style="text-align: center; padding-top: 30px">
            &copy; {{ currentYear }} 星韧科技. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.footer-container {
  padding: 20px;
  background-color: #000;
  color: #fff;
}
.footer-inner-list {
  width: 1600px;
  display: flex;
  align-items: center; /* 水平居中 */
  justify-content: space-evenly;
  margin: auto;
}

.footer-container img {
  width: 250px; /* 使图片宽度适应容器 */
  height: auto; /* 保持图片的宽高比 */
}
.footer-right-top-l ul {
  display: flex;
}

.footer-right-top-l ul li {
  width: 200px;
}
.footer-right-top-l ul li p {
  color: #fff;
  font-size: 20px;
  line-height: 30px;
  position: relative; /* 设置相对定位 */
  overflow: hidden; /* 防止伪元素溢出 */
}
.footer-right-top-l ul li a {
  display: block;
  padding: 10px 0px; /* 增加内边距 */
  color: white; /* 设置文字颜色 */
  text-decoration: none; /* 移除下划线 */
  text-align: left;
  transition: transform 0.3s ease; /* 平滑过渡背景颜色和变换 */
}

.footer-right-top-l ul li a:hover {
  transform: translateY(-2px); /* 轻微上移 */
  color: var(--maincolor);
}

.footer-right-top-l ul li p::before {
  content: ''; /* 伪元素内容为空 */
  position: absolute;
  left: 0;
  bottom: 0;
  width: 40%; /* 伪元素宽度为100% */
  height: 2px; /* 伪元素高度为2px */
  background-color: var(--maincolor); /* 伪元素背景颜色 */
  transform: scaleX(0); /* 初始化时不显示 */
  transform-origin: left; /* 变换原点在左边 */
  transition: transform 0.3s ease; /* 平滑过渡变换 */
}

.footer-right-top-l ul li p:hover::before {
  transform: scaleX(1); /* 鼠标悬停时显示 */
}
.footer-right-top {
  display: flex;
  align-items: center; /* 水平居中 */
  justify-content: space-evenly;
}
.footer-right-top-m ul {
  margin-bottom: 20px; /* 为每个ul添加底部外边距 */
}
.footer-right-top-m ul li {
  font-size: 14px;
}
.footer-right-top-m ul p {
  font-size: 12px;
  color: var(--greyword);
}

.footer-right-top-r img {
  width: 80px;
  height: auto;
}

.footer-right-top-r {
  display: flex;
  flex-direction: column; /* 垂直排列子元素 */
  align-items: center; /* 水平居中 */
  justify-content: center; /* 垂直居中 */
  margin-left: 20px; /* 离左边有一定距离 */
  padding: 10px; /* 内边距 */
}

.footer-right-top-r img {
  width: 80px; /* 图片宽度 */
  height: auto; /* 保持图片的宽高比 */
  margin-bottom: 10px; /* 图片与文本之间的间距 */
}

.footer-right-top-r p {
  margin: 0; /* 移除默认的外边距 */
  color: var(--greyword); /* 设置文本颜色 */
}
</style>
