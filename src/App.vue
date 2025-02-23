<script setup>
// import { useRoute, useRouter } from 'vue-router'
// import { useUserStore } from './stores'
import Header from './components/headerIndex.vue'
import Footer from './components/footerIndex.vue'
// const router = useRouter()
// const route = useRoute()
// const userStore = useUserStore()
</script>

<template>
  <!-- <div>我是app</div>
  <el-button>11</el-button>
  <el-button>22</el-button>
  <div>{{ userStore.token }}</div>
  <el-button @click="userStore.setToken('Bearer sad211dkjsad2')">登录</el-button>
  <hr /> -->
  <Header></Header>
  <router-view></router-view>
  <Footer></Footer>
</template>

<style scoped></style>
