<script setup>
// 如果需要在模板中使用响应式数据或方法，可以在这里定义
import { ref, onMounted } from 'vue'
import Wow from 'wow.js'
import { useTransition } from '@vueuse/core'
import { HorizontalScroll } from 'vue3-seamless-scroll'
const ratioOfMasterRef = ref(0)
const ratioOfMaster = useTransition(ratioOfMasterRef, {
  duration: 5000,
})

ratioOfMasterRef.value = 62

const fundMoneyRef = ref(0)
const fundMoney = useTransition(fundMoneyRef, {
  duration: 5000,
})

fundMoneyRef.value = 2000000

const list = ref([
  { id: 1, imageUrl: new URL('@/assets/img/friend1.jpg', import.meta.url).href },
  { id: 2, imageUrl: new URL('@/assets/img/friend2.jpg', import.meta.url).href },
  { id: 3, imageUrl: new URL('@/assets/img/friend3.jpg', import.meta.url).href },
  { id: 4, imageUrl: new URL('@/assets/img/friend4.jpg', import.meta.url).href },
  { id: 5, imageUrl: new URL('@/assets/img/friend5.jpg', import.meta.url).href },
])

onMounted(() => {
  const wow1 = new Wow({
    // 对所有拥有该class的元素挂载动画
    boxClass: 'scroll-item-aboutus-top',
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
    boxClass: 'scroll-item-aboutus-bottom',
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
  <div class="home">
    <div style="height: auto; width: 100%">
      <video width="100%" height="100%" style="display: block; outline: none" autoplay muted loop>
        <source src="@/assets/video/home_video.mp4" type="video/mp4" />
      </video>
    </div>
    <div class="about-us">
      <div class="about-top scroll-item-aboutus-top animate__bounceInRight">
        <div class="about-left">关于<b>星韧</b></div>
        <div class="about-right">
          <el-card
            style="max-width: 5rem; background-color: #171602; color: #fff; border-color: #f3aa3d"
          >
            <p style="text-align: left">
              苏州坐标系智能科技有限公司致力于智能汽车线控底盘核心技术的开发，其产品矩阵包括新一代纯机电线控制动SEMB、线控踏板SPd、线控转向SbW以及整合XY双向动态管理的域控制器SVM。
            </p>
            <p style="text-align: left">
              自23年6月团队组建以来，坐标系第一代纯机电制动系统SEMB在4个月内即完成多家客户车型的联合开发，全过程自研且拥有完全自主知识产权。已于2023-2024冬季顺利完成寒区测试，高质量通过客户验收，在线控底盘领域迎来首次重大突破，成为中国率先实现全干式线控制动EMB解决方案落地的本土企业。
            </p>
            <p style="text-align: left">
              坐标系通过技术创新为客户提供高安全、高效率、高可靠性的智能线控制动系统解决方案，帮助主机厂降低整车制造成本，提升驾乘舒适性与安全性，并将于2025年底率先实现EMB批量交付。
            </p>
          </el-card>
        </div>
      </div>
      <div class="about-bottom scroll-item-aboutus-bottom animate__tada">
        <span>
          <i class="iconfont icon-zijin"></i>
          <el-statistic
            value-style="color:var(--maincolor);font-size:24px"
            class="about-statistic"
            :value="fundMoney"
          >
            <template #title>
              <div style="font-size: 24px; margin-top: 10px; color: #fff">注册资本</div>
            </template>
            <template #suffix><b style="color: var(--maincolor)"> ￥ </b></template>
          </el-statistic>
        </span>
        <span>
          <i class="iconfont icon-didian"></i>
          <div style="font-size: 24px; margin-top: 3px; margin-bottom: 3px; color: #fff">
            办公地点
          </div>
          <div style="color: var(--maincolor); font-size: 24px">上海</div>
        </span>
        <span>
          <i class="iconfont icon-xueli"></i>
          <el-statistic value-style="color:var(--maincolor);font-size:24px" :value="ratioOfMaster">
            <template #title>
              <div style="font-size: 24px; margin-top: 10px; color: #fff">硕士以上</div>
            </template>
            <template #suffix><b style="color: var(--maincolor)"> % </b></template>
          </el-statistic>
        </span>
        <span>
          <i class="iconfont icon-gongzuojingyan"></i>
          <el-statistic :value="50" value-style="color:var(--maincolor);font-size:24px">
            <template #title>
              <div style="font-size: 24px; margin-top: 10px; color: #fff">10年以上工作经验</div>
            </template>
            <template #suffix><b style="color: var(--maincolor)"> % </b></template>
          </el-statistic>
        </span>
      </div>
    </div>
    <el-row :gutter="50" style="padding: 50px 0px; background-color: black" justify="center">
      <el-col :span="8" class="service-container">
        <img
          src="@/assets/img/product_intro.png"
          style="width: 100%; height: 100%; object-fit: cover"
        />
      </el-col>
      <el-col :span="8">
        <div class="service-content">
          <div>
            产品<b style="color: var(--maincolor)">&</b>&服务<br />
            Product<b style="color: var(--maincolor)">&</b>Service
          </div>
          <li>纯机电线控制动执行器SEMB</li>
          <li>线控制动踏板SPd</li>
          <li>域控制器SVM</li>
          <li>线控转向SbW</li>
        </div>
      </el-col>
    </el-row>

    <!-- <div class="news-center">
      <header class="news-header">
        <h1>新闻中心</h1>
        <p>NEWS</p>
      </header>
      <main class="news-main">
        <article class="news-article">
          <h2>喜报 | 坐标系顺利通过IATF16949及ISO14001认证</h2>
          <p class="news-date">2024-12-19</p>
          <p class="news-views">👀 88</p>
        </article>
        <article class="news-article">
          <h2>EMB系统，线控底盘XYZ的最后一块拼图</h2>
          <p class="news-date">2024-12-19</p>
          <p class="news-views">👀 117</p>
        </article>
        <article class="news-article">
          <h2>东风柳汽与坐标系签署EMB战略合作协议</h2>
          <p class="news-date">2024-11-18</p>
          <p class="news-views">👀 220</p>
        </article>
        <article class="news-article">
          <h2>喜报 | 坐标系工业化领跑，荣获两项年度大奖</h2>
          <p class="news-date">2024-10-28</p>
          <p class="news-views">👀 191</p>
        </article>
      </main>
    </div> -->

    <div class="bottom-partner">
      <el-row justify="center">
        <el-col :span="12" style="text-align: center">
          <div class="scroll-title">
            合作伙伴<br />
            <p>Partner</p>
          </div>
        </el-col>
      </el-row>
      <el-row style="padding: 10px 0px" justify="center">
        <el-col :span="12">
          <div class="horizonta-scoll">
            <horizontal-scroll hover="true" :list="list" style="display: flex">
              <template v-slot="{ data }">
                <div class="friend-img-container">
                  <img :src="data.imageUrl" class="friend-img" />
                </div>
              </template>
            </horizontal-scroll>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<style scoped lang="scss">
/* 最外标签css */
.home {
  width: 100%;
}
/* 视频css */
.home video {
  width: 100%;
  height: 100%;
}
/* 关于星韧css */
.about-us {
  padding: 50px;
  background-color: #171602; /* 浅色背景 */
  color: #fff; /* 深色文字 */
  text-align: center;
}
.about-top {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding: 0px 1rem;
}
.about-top .about-left {
  font-size: 64px;
}
.about-top .about-left b {
  color: var(--maincolor);
}
.about-top .about-right {
  font-size: 18px;
}
.about-bottom {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding: 0.1rem 1rem 0rem 1rem;
}
.about-bottom span {
  margin-left: 200px;
}

.about-bottom span i {
  border: 2px solid var(--maincolor);
  border-radius: 50%;
  width: 100px;
  height: 100px;
  line-height: 100px;
  display: inline-block;
  font-size: 50px;
  color: var(--maincolor);
}
.about-bottom span i:hover {
  animation: shake 0.5s;
}

.service-container {
  display: flex;
  justify-content: center;
  height: 500px; /* 设置一个合适的高度 */
}
.service-content {
  color: #fff;
  div {
    font-size: 32px;
    margin-bottom: 20px;
  }
  li {
    font-size: 16px;
    color: #c8c4bb;
    margin-bottom: 10px;
    list-style-type: disc;
  }
}

.horizonta-scoll {
  overflow: hidden;
  width: 1269px;
  height: 220px;
}
.friend-img-container {
  display: flex;
  align-items: center;
  justify-content: center;
  .friend-img {
    padding: 0px 50px;
    width: 200px;
    object-fit: cover;
  }
}
.scroll-title {
  font-size: 32px;
  font-weight: 700;
  color: #fff;
  padding-top: 30px;
  p {
    color: var(--maincolor);
    font-size: 24px;
    margin: 0 0;
  }
}
.bottom-partner {
  background-color: #171602;
}
</style>
