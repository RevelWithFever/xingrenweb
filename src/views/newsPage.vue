<template>
  <div class="header-img-container">
    <img src="@/assets/img/contactus.jpg" alt="新闻中心" />
    <div class="overlay-text"><b style="color: var(--maincolor)">News center</b><br />新闻中心</div>
  </div>

  <el-row :gutter="20" style="border-bottom: 1px solid #bfbfbf">
    <el-col :span="12" :xs="22">
      <div class="news-icon-and-breadcrumb">
        <i class="iconfont icon-didian"></i>
        <el-breadcrumb :separator-icon="ArrowRight" style="font-size: 16px">
          <el-breadcrumb-item class="news-banner-first" :to="{ path: '/' }"
            >首页</el-breadcrumb-item
          >
          <el-breadcrumb-item>新闻资讯</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
    </el-col>
  </el-row>
  <el-row :gutter="20">
    <el-col :span="24" class="news-col-container">
      <div class="news-container">
        <div class="news-item" v-for="(news, index) in paginatedData" :key="index">
          <ul>
            <li>
              <div class="news-l-img">
                <img :src="`src/assets/img/${news.image}`" alt="news image" class="news-image" />
              </div>
              <div class="news-r-list">
                <a :href="`/newsDetail?id=${news.id}`" class="news-title">{{ news.title }}</a>
                <div class="news-time-and-watch">
                  <p class="news-time">{{ news.date }}</p>
                  <p class="news-watch">👁️{{ news.watch }}</p>
                </div>

                <p class="news-subtitle">{{ news.subtitle }}</p>
              </div>
            </li>
          </ul>
        </div>
        <div class="pagination-container">
          <el-pagination
            background
            layout="prev, pager, next"
            :total="newsList.length"
            :page-size="pageSize"
            @current-change="handlePageChange"
          >
          </el-pagination>
        </div>
      </div>
    </el-col>
  </el-row>
</template>

<script setup>
import { ref, computed } from 'vue'
import { newsData } from '@/assets/data/newsData.js'
const newsList = ref(newsData)
const pageSize = 5

const paginatedData = computed(() => {
  const start = (currentPage.value - 1) * pageSize
  const end = start + pageSize
  return newsList.value.slice(start, end)
})

const currentPage = ref(1)

const handlePageChange = (page) => {
  currentPage.value = page
}
</script>

<style scoped lang="scss">
.header-img-container {
  width: 100%; /* 父容器宽度设置为100% */
  overflow: hidden; /* 防止图片溢出 */
  height: 400px;
  position: relative;
  img {
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
}

.news-icon-and-breadcrumb {
  display: flex;
  align-items: center; /* 垂直居中对齐 */
  height: 5vh; /* 设置固定高度 */
  margin-left: 55%;
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
.news-col-container{
  display: flex;
  align-items: center;
  justify-content: center;
}
.news-container {
  padding: 20px;
}

.news-item {
  margin-bottom: 20px;
  border-bottom: 1px solid #eee;
  padding-bottom: 10px;

  ul li {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .news-l-img {
    width: 35%;
    overflow: hidden;
    margin: 0 20px;
    border-radius: 10px;
    img {
      width: 100%;
      height: 100%;
      border-radius: 10px;
      object-fit: cover;
      transition: all 0.5s;
    }
  }
  .news-l-img:hover img {
    transform: scale(1.1);
  }
  .news-r-list {
    display: flex;
    flex-direction: column;
    width: 40%;
    a {
      display: block;
      margin: 0;
      font-size: 18px;
      font-weight: 700;
      text-decoration: none; /* 移除下划线 */
      color: black;
      transition: transform 0.3s ease; /* 平滑过渡背景颜色和变换 */
    }
    a:hover {
      transform: translateY(-2px); /* 轻微上移 */
    }
    a::before {
      content: ''; /* 伪元素内容为空 */
      position: absolute;
      left: 0;
      bottom: -2px;
      width: 80%; /* 伪元素宽度为100% */
      height: 4px; /* 伪元素高度为2px */
      background-color: var(--maincolor); /* 伪元素背景颜色 */
      transform: scaleX(0); /* 初始化时不显示 */
      transform-origin: left; /* 变换原点在左边 */
      transition: transform 0.3s ease; /* 平滑过渡变换 */
    }
    a:hover::before {
      transform: scaleX(1); /* 鼠标悬停时显示 */
    }
    .news-time-and-watch {
      display: flex;
      align-items: center; /* 水平居中 */
      justify-content: space-between;
    }
    .news-time {
      font-size: 12px;
      color: gray;
    }
    .news-watch {
      font-size: 12px;
      color: gray;
    }
    .news-subtitle {
      width: 50%;
      overflow: hidden;
      white-space: wrap;
      text-overflow: ellipsis;
    }
  }
}

.pagination-container {
  display: flex;
  justify-content: center;
  margin-top: 20px;
  margin-bottom: 20px;
}
@media screen and (max-width: 600px) {
  .header-img-container {
    height: 180px;
    .overlay-text {
      font-size: 32px; /* 文字大小 */
    }
  }
  .news-icon-and-breadcrumb {
    align-items: center; /* 垂直居中对齐 */
    margin: 0;
  }

  .news-container {
    padding: 0;
    margin: 0;
  }

  .news-item {
    margin: 0;
    padding: 0;
    border-bottom: 1px solid #eee;
    ul{
      margin: 5px;
      padding: 0;
      li{
        height: 150px;
      }
    }
    .news-l-img {
      height: 100%;
      width: 50%;
    }

    .news-r-list {
      display: flex;
      flex-direction: column;
      width: 50%;
      a {
        font-size: 15px;
      }

      .news-subtitle {
        font-size: 14px;
        width: 100%;
        overflow: hidden;
        white-space: wrap;
        text-overflow: ellipsis;
      }
    }
  }
}
</style>
