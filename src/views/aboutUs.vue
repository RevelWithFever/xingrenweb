<script setup>
import { onMounted } from 'vue'
import { ArrowRight } from '@element-plus/icons-vue'
import Wow from 'wow.js'

onMounted(() => {
  const wow1 = new Wow({
    // 对所有拥有该class的元素挂载动画
    boxClass: 'scroll-item-aboutus-content',
    // 需要挂载的动画元素
    animateClass: 'animate__animated',
    // 偏移值（即偏移一定距离后再执行动画，推荐设置！）
    offset: 100,
    // 移动设备是否生效
    mobile: true,
    // 是否支持异步
    live: true,
  })
  wow1.init()
  const wow2 = new Wow({
    // 对所有拥有该class的元素挂载动画
    boxClass: 'scroll-item-aboutus-img',
    // 需要挂载的动画元素
    animateClass: 'animate__animated',
    // 偏移值（即偏移一定距离后再执行动画，推荐设置！）
    offset: 100,
    // 移动设备是否生效
    mobile: true,
    // 是否支持异步
    live: true,
  })
  wow2.init()
})
</script>

<template>
  <div class="header-img-container">
    <img src="@/assets/img/aboutus.jpg" alt="关于星韧" />
    <div class="overlay-text"><b style="color: var(--maincolor)">About us</b><br />关于星韧</div>
  </div>
  <div class="aboutus-banner">
    <div class="aboutus-icon-and-breadcrumb">
      <i class="iconfont icon-didian"></i>
      <el-breadcrumb :separator-icon="ArrowRight" style="font-size: 16px">
        <el-breadcrumb-item class="aboutus-banner-first" :to="{ path: '/' }"
          >首页</el-breadcrumb-item
        >
        <el-breadcrumb-item>关于星韧</el-breadcrumb-item>
      </el-breadcrumb>
    </div>

    <el-menu
      ellipsis
      class="el-menu-popper-demo"
      mode="horizontal"
      style="width: 600px"
      background-color="#fff"
      collapse-transition
      text-color="#000"
      active-text-color="var(--maincolor)"
    >
      <el-menu-item index="1">公司介绍</el-menu-item>
      <el-menu-item index="2">团队构成</el-menu-item>
      <el-menu-item index="3">使命愿景</el-menu-item>
      <el-menu-item index="4">价值观</el-menu-item>
    </el-menu>
  </div>

  <div class="aboutus-intro-container scroll-item-aboutus-content animate__bounceInRight">
    <span class="aboutus-title">公司介绍<br />——</span>
    <p class="aboutus-content">
      苏州坐标系智能科技有限公司致力于智能汽车线控底盘核心技术的开发，其产品矩阵包括新一代纯机电线控制动SEMB、线控踏板SPd、线控转向SbW以及整合XY双向动态管理的域控制器SVM。
      自23年6月团队组建以来，坐标系第一代纯机电制动系统SEMB在4个月内即完成多家客户车型的联合开发，全过程自研且拥有完全自主知识产权。已于2023-2024冬季顺利完成寒区测试，高质量通过客户验收，在线控底盘领域迎来首次重大突破，成为中国率先实现全干式线控制动EMB解决方案落地的本土企业。
      坐标系通过技术创新为客户提供高安全、高效率、高可靠性的智能线控制动系统解决方案，帮助主机厂降低整车制造成本，提升驾乘舒适性与安全性，并将于2025年底率先实现EMB批量交付。
    </p>
  </div>

  <div class="image-container scroll-item-aboutus-img animate__zoomInDown">
    <div class="image-container-inner-left">
      <div class="image-item">
        <img src="@/assets/img/aboutus1.jpg" alt="使命" />
        <div class="text-overlay">
          <h2 style="color: var(--maincolor)">使命</h2>
          <p>让汽车更安全、更舒适、更智慧</p>
        </div>
      </div>
      <div class="image-item">
        <img src="@/assets/img/aboutus2.jpg" alt="价值观" />
        <div class="text-overlay">
          <h2 style="color: var(--maincolor)">价值观</h2>
          <p>客户至上、诚信廉洁、拼搏进取、创新突破、团结友爱、主人翁精神</p>
        </div>
      </div>
    </div>
    <div class="image-item">
      <img src="@/assets/img/aboutus3.jpg" style="width: 800px; height: 770px" alt="愿景" />
      <div class="text-overlay">
        <h2 style="color: var(--maincolor)">愿景</h2>
        <p>成为线控底盘关键技术领跑者</p>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.header-img-container {
  width: 100%;
  overflow: hidden;
  height: 400px;
  position: relative;

  img {
    width: 100%;
    height: auto;
    display: block;
  }

  .overlay-text {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    font-size: 64px;
    text-shadow: 2px 2px 4px rgba(1, 1, 1, 0.5);
    font-family: 'AlimamaDaoLiTi';
    animation: fadeIn 2s ease-out forwards;
  }
}
.aboutus-banner {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  border-bottom: 2px solid rgba(128, 128, 128, 0.5);
  .el-menu--horizontal {
    --el-menu-horizontal-height: 80px;
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
  .aboutus-icon-and-breadcrumb {
    display: flex;
  }
  .aboutus-icon-and-breadcrumb i {
    width: 10px;
    height: 10px;
    line-height: 10px;
    display: inline-block;
    font-size: 30px;
    color: var(--maincolor);
    margin-right: 30px;
  }
}

.aboutus-intro-container {
  display: flex;
  flex-direction: column;
  align-items: center; /* 水平居中 */
  margin-top: 50px; /* 根据需要调整上边距 */
  .aboutus-title {
    font-size: 48px; /* 标题字体大小 */
    font-weight: bold; /* 加粗标题 */
    margin-bottom: 10px; /* 标题与内容之间的间距 */
    text-align: left;
    width: 1400px;
  }

  .aboutus-content {
    font-size: 20px; /* 内容字体大小 */
    color: #666;
    text-align: center; /* 文字居中对齐 */
    width: 1400px; /* 限制最大宽度，防止文字过长 */
    text-align: left;
  }
}

/* 定义动画 */

.image-container {
  display: flex;
  justify-content: center; /* 水平居中 */
  .image-item {
    position: relative;
    overflow: hidden;
    border-radius: 10%;
    padding: 10px;
    img {
      height: 380px;
      width: 570px;
      display: block;
      object-fit: cover; /* 确保图片覆盖整个容器，但不变形 */
      border-radius: 10%;
      transition: all 0.5s;
    }
    .text-overlay {
      position: absolute;
      border-radius: 10px;
      bottom: 40%;
      left: 25%;
      right: 25%;
      background: rgba(0, 0, 0, 0.5); /* 半透明背景 */
      color: white;
      padding: 10px;
      font-size: 18px;
      text-align: left;
    }
    .text-overlay::before {
      content: '';
      height: 4px;
      background: var(--maincolor);
      /* 伪元素默认样式 display: inline;所以需要转成inline-block宽高才会生效 */
      display: inline-block;
      /* 通过定位使下划线在最低层 */
      position: absolute;
      bottom: -3px;
      width: 0;
      /* 加上一个过渡效果，使之丝滑一些 */
      transition: width 0.36s;
    }
    .text-overlay:hover::before {
      /* 悬浮时候，让下划线伪元素宽度变成100%即可出现效果 */
      width: 96%;
    }
  }
  .image-item:hover img {
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.5);
    transform: scale(1.1);
  }
}
</style>
