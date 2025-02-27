<template>
  <el-row :gutter="20" style="border-bottom: 1px solid #bfbfbf">
    <el-col :span="12" :offset="6">
      <div class="news-icon-and-breadcrumb">
        <i class="iconfont icon-didian"></i>
        <el-breadcrumb :separator-icon="ArrowRight" style="font-size: 16px">
          <el-breadcrumb-item class="news-banner-first" :to="{ path: '/' }"
            >首页</el-breadcrumb-item
          >
          <el-breadcrumb-item class="news-banner-second" :to="{ path: '/news' }"
            >新闻资讯</el-breadcrumb-item
          >
          <el-breadcrumb-item>{{ newsItem.title }}</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
    </el-col>
  </el-row>
  <div class="news-container">
    <el-row :gutter="20">
      <el-col :span="8" class="news-left-container">
        <div class="news-left-logo">
          <Vue3Lottie :animationData="LOGO_L_JSON" :height="500" :width="500" />
        </div>
      </el-col>
      <el-col :span="8">
        <div class="news-detail">
          <div class="news-title">
            <FancyTitle>{{ newsItem.title }}</FancyTitle>
          </div>

          <div class="news-date">{{ newsItem.date }}</div>
          <div class="news-content">
            <template v-for="(item, index) in newsItem.content" :key="index">
              <img
                v-if="isImage(item)"
                :src="`src/assets/img/${item}`"
                alt="news image"
                class="news-image"
              />
              <p v-else class="news-content-text">{{ item }}</p>
            </template>
          </div>
          <div class="news-next">
            前一个：
            <a :href="`/newsDetail?id=${prevItem.id || newsItem.id}`">
              {{ prevItem.title || '无' }}
            </a>
            <br />
            后一个：
            <a :href="`/newsDetail?id=${nextItem.id || newsItem.id}`">
              {{ nextItem.title || '无' }}
            </a>
          </div>
        </div>
      </el-col>
      <!-- <el-col :span="8">
        <div class="news-left-logo">
          <Vue3Lottie :animationData="LOGO_R_JSON" :height="300" :width="200" />
        </div>
      </el-col> -->
    </el-row>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { Vue3Lottie } from 'vue3-lottie'
import LOGO_R_JSON from '@/assets/lottie/news_r_logo.json'
import LOGO_L_JSON from '@/assets/lottie/news_l_logo.json'
import { useRoute } from 'vue-router'
import { newsData } from '@/assets/data/newsData.js'
import FancyTitle from '@/components/fancyTitle.vue'

const route = useRoute()
const newsId = parseInt(route.query.id)

// 初始化新闻数据
const newsItem = computed(() => {
  const foundItem = newsData.find((item) => item.id === newsId)
  return foundItem || {}
})
const prevItem = computed(() => {
  const foundItem = newsData.find((item) => item.id === newsItem.value.prev)
  return foundItem || {}
})
const nextItem = computed(() => {
  const foundItem = newsData.find((item) => item.id === newsItem.value.next)
  return foundItem || {}
})
function isImage(src) {
  return /\.(jpeg|jpg|gif|png|svg)$/.test(src)
}
</script>
<style lang="scss" scoped>
// .el-col {
//   background-color: red;
// }
.news-icon-and-breadcrumb {
  display: flex;
  align-items: center; /* 垂直居中对齐 */
  height: 5vh; /* 设置固定高度 */
}
.news-icon-and-breadcrumb i {
  width: 10px;
  height: 10px;
  line-height: 10px;
  display: inline-block;
  font-size: 30px;
  color: var(--maincolor);
  margin-right: 30px;
}

.news-left-container {
  display: flex;
  align-items: center; // 垂直居中
  justify-content: center; // 水平居中
}
.news-detail {
  border: 1px #eee solid;
  padding: 1vh 2vw;
  margin: 2vh 0;
  border-radius: 10px;
}
.news-title {
  display: flex;
  align-items: center; // 垂直居中
  justify-content: center; // 水平居中
  height: 100%; // 使 div 占满 el-col 的高度
  font-size: 24px; // 字体大小
  font-weight: bold; // 字体加粗
  text-align: center; // 文本居中
}
.news-date {
  text-align: center; // 文本居中
  padding: 1vh 0;
  font-size: 16px; // 字体大小
  color: #666;
}
.news-content {
  display: flex;
  flex-direction: column;
  font-size: 12px; // 字体大小
  .news-content-text {
    text-indent: 2em; // 首行缩进两个字符
    line-height: 1.5; // 设置行间距为1.8
    animation: animated-border 1.5s infinite;
    font-family: Arial;
    line-height: 30px;
    font-weight: bold;
    color: black;
    border: 2px solid var(--maincolor);
    border-radius: 10px;
    padding: 1vh 0.5vw;
  }
}
.news-next {
  font-size: 14px; // 字体大小
  color: #666;
  a {
    text-decoration: none; /* 移除下划线 */
    color: #666;
  }
  a:hover {
    color: var(--maincolor);
  }
}
.news-image {
  max-width: 100%;
  height: auto;
  display: block;
  margin: 0 auto;
  border-radius: 10px;
}
</style>
