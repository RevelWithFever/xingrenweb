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
  { id: 1, imageUrl: 'friend1.jpg' },
  { id: 2, imageUrl: 'friend2.jpg' },
  { id: 3, imageUrl: 'friend3.jpg' },
  { id: 4, imageUrl: 'friend4.jpg' },
  { id: 5, imageUrl: 'friend5.jpg' },
])

onMounted(() => {
  const wow1 = new Wow({
    // 对所有拥有该class的元素挂载动画
    boxClass: 'wow',
    // 需要挂载的动画元素
    animateClass: 'animated',
    // 偏移值（即偏移一定距离后再执行动画，推荐设置！）
    offset: 10,
    // 移动设备是否生效
    mobile: true,
    // 是否支持异步
    live: true,
  })
  wow1.init()
})

import { newsData } from '@/assets/data/newsData.js'
const newsList = ref(newsData.slice(0, 5))
</script>

<template>
  <div class="home">
    <div style="height: auto; width: 100%">
      <video width="100%" height="100%" style="display: block; outline: none" autoplay muted loop>
        <source src="@/assets/video/home_video.mp4" type="video/mp4" />
      </video>
    </div>
    <el-row :gutter="20" style="padding: 20px 0px; background-color: #171602" justify="center">
      <el-col :span="5" :xs="22" class="about-left-container">
        <div class="about-left wow bounceInLeft">关于<b>星韧</b></div></el-col
      >
      <el-col :span="10" :xs="22">
        <div class="about-right wow bounceInRight">
          <el-card
            style="max-width: 1200px; background-color: #171602; color: #fff; border-color: #f3aa3d"
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
        </div></el-col
      >
    </el-row>

    <el-row :gutter="20" style="padding: 20px 0px; background-color: #171602" justify="center">
      <el-col :span="20" class="about-bottom-container">
        <div class="about-bottom wow tada">
          <span>
            <i class="iconfont icon-zijin"></i>
            <el-statistic class="about-statistic" :value="fundMoney">
              <template #title>
                <div class="statistic-title">注册资本</div>
              </template>
              <template #suffix><b style="color: var(--maincolor)"> ￥ </b></template>
            </el-statistic>
          </span>
          <span>
            <i class="iconfont icon-didian"></i>
            <div class="statistic-title">办公地点</div>
            <div class="statistic-content">上海</div>
          </span>
          <span>
            <i class="iconfont icon-xueli"></i>
            <el-statistic :value="ratioOfMaster">
              <template #title>
                <div class="statistic-title">硕士以上</div>
              </template>
              <template #suffix><b style="color: var(--maincolor)"> % </b></template>
            </el-statistic>
          </span>
          <span>
            <i class="iconfont icon-gongzuojingyan"></i>
            <el-statistic :value="50">
              <template #title>
                <div class="statistic-title">10年以上工作经验</div>
              </template>
              <template #suffix><b style="color: var(--maincolor)"> % </b></template>
            </el-statistic>
          </span>
        </div></el-col
      >
    </el-row>

    <el-row :gutter="20" style="padding: 20px 0px; background-color: black" justify="center">
      <el-col :span="8" :xs="22" class="service-container wow bounceInLeft">
        <img
          src="@/assets/img/product_intro.png"
          style="
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: 10px; /* 添加圆角边框 */
          "
        />
      </el-col>
      <el-col :span="8" :xs="22" class="service-content-container">
        <div class="service-content wow bounceInRight">
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

    <el-row :gutter="20" style="background-color: #171602">
      <el-col :span="24">
        <div class="solution-container wow bounceInUp">
          解决<b>方案</b>
          <br />
          ——
          <p>
            中国汽车智能底盘系统一级供应商，
            专注于“新一代线控底盘关键技术”的研发和产业化，为智慧出行保驾护航
          </p>
          <div class="solution-carousel">
            <el-carousel height="500px">
              <el-carousel-item>
                <img src="@/assets/img/solution1.png" />
              </el-carousel-item>
              <el-carousel-item>
                <img src="@/assets/img/solution1.png" />
              </el-carousel-item>
              <el-carousel-item>
                <img src="@/assets/img/solution1.png" />
              </el-carousel-item>
            </el-carousel>
          </div>
        </div>
      </el-col>
    </el-row>

    <el-row :gutter="20" style="padding: 20px 0px; background-color: black" justify="center">
      <el-col :span="5" :xs="22" class="about-left-container">
        <div class="about-left"><b>新闻</b>资讯</div></el-col
      >
      <!-- wow bounceInRight -->
      <el-col :span="10" :xs="22">
        <div class="news-right" v-for="(news, index) in newsList" :key="index">
          <a :href="`/newsDetail?id=${news.id}`">{{ news.title }}</a>
          <ul>
            <p>{{ news.date }}</p>
            <b>👁️{{ news.watch }}</b>
          </ul>
          <hr style="border: 1px dashed var(--maincolor); width: 100%; height: 1px" />
        </div>
        <a class="news-more" href="/news">查看更多</a>
      </el-col>
    </el-row>

    <el-row justify="center" style="background-color: #171602">
      <el-col :span="12" :xs="22" style="text-align: center">
        <div class="scroll-title">
          合作伙伴<br />
          <p>Partner</p>
        </div>
      </el-col>
    </el-row>

    <el-row style="padding: 10px 0px; background-color: #171602" justify="center">
      <el-col :span="12" :xs="22">
        <div class="horizonta-scoll">
          <horizontal-scroll hover="true" :list="list" style="display: flex">
            <template v-slot="{ data }">
              <div class="friend-img-container">
                <img :src="`src/assets/img/${data.imageUrl}`" class="friend-img" />
              </div>
            </template>
          </horizontal-scroll>
        </div>
      </el-col>
    </el-row>
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

.about-left-container {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
}
.about-bottom-container {
  padding: 50px;
  background-color: #171602; /* 浅色背景 */
  color: #fff; /* 深色文字 */
  text-align: center;
}
.about-left {
  font-size: 64px;
  color: white;
}
.about-left b {
  color: var(--maincolor);
}
.about-right {
  font-size: 18px;
}
.about-bottom {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding: 25px 250px 0px 250px;
}
.about-bottom span {
  margin-left: 200px;
}

.about-bottom span i {
  border: 2px solid var(--maincolor);
  border-radius: 50%;
  width: 64px;
  height: 64px;
  line-height: 64px;
  display: inline-block;
  font-size: 32px;
  color: var(--maincolor);
}
.about-bottom span i:hover {
  animation: my-shake 0.5s;
}
.statistic-title {
  font-size: 24px;
  margin-top: 10px;
  color: #fff;
}
.statistic-content {
  font-size: 24px !important;
  color: var(--maincolor);
}
:global(.el-statistic__number) {
  font-size: 24px !important;
  color: var(--maincolor);
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
.solution-container {
  padding-top: 20px;
  font-size: 32px;
  font-weight: 700;
  color: white;
  text-align: center; /* 文字居中 */

  b {
    color: var(--maincolor);
  }
  p {
    font-size: 16px;
    color: #c8c4bb;
  }
  .solution-carousel {
    width: 40vw; /* 缩小宽度 */
    margin: 0 auto; /* 水平居中 */
    border-radius: 10px; /* 添加圆角边框 */
    overflow: hidden; /* 隐藏超出部分 */
    .el-carousel__item img {
      width: 100%; /* 图片宽度自适应 */
      height: 100%; /* 图片高度自适应 */
      object-fit: cover; /* 保持图片比例并填充 */
    }
  }
}
.news-right {
  color: white;
  a {
    font-size: 18px;
    text-decoration: none;
    color: #fff;
  }
  a:hover {
    color: var(--maincolor);
  }
  ul {
    margin: 0;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
}
.news-more {
  display: block;
  color: white;
  text-align: right;
  text-decoration: none;
  &:hover {
    color: var(--maincolor);
  }
}

#cutoff-line::after {
  display: inline-block;
  width: 200px;
  height: 1px;
  background: linear-gradient(to left, #fff 5%, gainsboro 50%, #fff 85%);
  z-index: 1;
  content: '';
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

@media screen and (max-width: 600px) {
  :global(.el-row) {
    margin-right: 0 !important;
  }
  .about-bottom {
    padding: 0;
    flex-wrap: wrap;
    span {
      width: 50%;
      display: inline-block;
      margin-left: 0;
    }
  }
  .horizonta-scoll {
    width: 100%;
  }
  .about-left {
    font-size: 32px;
    color: white;
  }

  .about-right {
    font-size: 12px;
  }
  .about-bottom-container {
    padding: 0px;
  }
  .about-bottom span i {
    border: 2px solid var(--maincolor);
    border-radius: 50%;
    width: 48px;
    height: 48px;
    line-height: 48px;
    display: inline-block;
    font-size: 24px;
    color: var(--maincolor);
  }
  .statistic-title {
    font-size: 16px;
    margin-top: 5px;
    color: #fff;
  }
  .statistic-content {
    font-size: 16px !important;
    color: var(--maincolor);
  }
  :global(.el-statistic__number) {
    font-size: 16px !important;
    color: var(--maincolor);
  }
  .service-content-container{
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .service-container {

    height: 300px; /* 设置一个合适的高度 */
  }

  .solution-container {
    p {
      font-size: 14px;
      color: #c8c4bb;
    }
    .solution-carousel {
      width: 100vw; /* 缩小宽度 */
      margin: 0 auto; /* 水平居中 */
      border-radius: 10px; /* 添加圆角边框 */
      overflow: hidden; /* 隐藏超出部分 */
      :global(.el-carousel__container) {
        height: 300px !important;
        margin: 10px !important;
      }

      .el-carousel__item img {
        width: 100%; /* 图片宽度自适应 */
        height: 100%; /* 图片高度自适应 */
        object-fit: cover; /* 保持图片比例并填充 */
        border-radius: 10px;
      }
    }
  }

  .news-right {
    color: white;
    a {
      font-size: 16px;
      text-decoration: none;
      color: #fff;
    }
    a:hover {
      color: var(--maincolor);
    }
    p{
      font-size: 14px;
    }
    b{
      font-size: 14px;
    }

  }
  .news-more {
    font-size: 14px;
    display: block;
    color: white;
    text-align: right;
    text-decoration: none;
    &:hover {
      color: var(--maincolor);
    }
  }
  .horizonta-scoll{
    height: 100px;
  }
  .friend-img-container {

  .friend-img {
    padding: 0px 20px;
    width: 100px;
    object-fit: cover;
  }
}

}
</style>
