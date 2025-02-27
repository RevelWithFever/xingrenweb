<script setup></script>

<template>
  <div class="header-img-container">
    <img src="@/assets/img/contactus.jpg" alt="联系我们" />
    <div class="overlay-text"><b style="color: var(--maincolor)">Contact us</b><br />联系我们</div>
  </div>
  <el-row :gutter="50" justify="center">
    <el-col :span="4"
      ><div class="joinus-item">
        <i class="iconfont icon-xueli"></i>
        <span>联系电话</span>
        <p>0562-302020</p>
      </div>
    </el-col>
    <el-col :span="4"
      ><div class="joinus-item">
        <i class="iconfont icon-xueli"></i>
        <span>商务合作</span>
        <p>xxxx@qq.com</p>
      </div>
    </el-col>
    <el-col :span="4"
      ><div class="joinus-item">
        <i class="iconfont icon-xueli"></i>
        <span>投递简历</span>
        <p>qqqqq@qq.com</p>
      </div>
    </el-col>
  </el-row>
  <el-row>
    <el-col :span="12" :offset="6"
      ><div class="joinus-map-container">
        <h1>苏州星韧科技有限公司</h1>
        <span>地址:上海市嘉定区同济大学国家大学科技园</span>
        <div class="map-wrapper">
          <div id="mapcontainer"></div>
        </div>
      </div>
    </el-col>
  </el-row>
</template>

<script setup>
import { onMounted, shallowRef } from 'vue'
import AMapLoader from '@amap/amap-jsapi-loader'

window._AMapSecurityConfig = {
  securityJsCode: 'c45de22c953b37c2ada5d9279fffe4e7',
}

const map = shallowRef(null)

// 初始化地图
function initMap() {
  AMapLoader.load({
    key: '6e576f724bd2b46aa6414dc40d8ef8bd', // 首次调用 load 时必填
    version: '2.0',
    plugins: [
      'AMap.ToolBar',
      'AMap.Scale',
      'AMap.Geolocation',
      'AMap.PlaceSearch',
      'AMap.Geocoder',
    ], // 插件列表
  }).then((AMap) => {
    map.value = new AMap.Map('mapcontainer', {
      center: [121.217208, 31.287182], // 设置地图的初始中心点
      zoom: 15, // 设置地图的初始缩放级别
    })
    // 添加控件
    const toolbar = new AMap.ToolBar()
    const scale = new AMap.Scale()
    const geolocation = new AMap.Geolocation({
      enableHighAccuracy: true, // 是否使用高精度定位，默认:true
      timeout: 10000, // 超过10秒后停止定位，默认：5s
      position: 'RT', // 定位按钮的停靠位置
      buttonOffset: new AMap.Pixel(10, 20), // 定位按钮与设置的停靠位置的偏移量，默认：Pixel(10, 20)
      zoomToAccuracy: true, // 定位成功后是否自动调整地图视野到定位点
    })
    map.value.addControl(toolbar)
    map.value.addControl(scale)
    map.value.addControl(geolocation)

    new AMap.Marker({
      position: [121.217208, 31.287182], // 标记点的位置
      title: '星韧科技有限公司', // 鼠标悬停时显示的标题
      content:
        '<i style="font-size: 30px;color: var(--maincolor);"  class="iconfont icon-didian"></i>', // 自定义标记点的内容
      offset: new AMap.Pixel(-16, -32), // 标记点的偏移量
      map: map.value, // 将标记点添加到地图
    })
  })
}

onMounted(() => {
  initMap()
})
</script>
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
.el-row {
  margin: 20px 20px;
}
.el-row:last-child {
  margin-bottom: 0;
}
.el-col {
  border-radius: 4px;
}

.joinus-item {
  position: relative; /* 设置相对定位 */
  border-radius: 4px;
  min-height: 300px;
  background-color: #fff;
  flex-direction: column;
  text-align: center;
  display: flex;
  justify-content: center; /* 水平居中 */
  align-items: center; /* 垂直居中 */
  border: 1px solid rgba($color: #666, $alpha: 0.2);
  border-radius: 10px;
  transition: transform 0.3s ease;
  i {
    border: 2px solid var(--maincolor);
    border-radius: 50%;
    width: 80px;
    height: 80px;
    line-height: 80px;
    display: inline-block;
    font-size: 50px;
    color: var(--maincolor);
  }
  span {
    margin-top: 20px;
    font-size: 16px;
    color: gray;
  }
  p {
    font-size: 18px;
    font-weight: 600;
  }
}
.joinus-item::before {
  content: ''; /* 伪元素内容为空 */
  position: absolute;
  left: 1px;
  bottom: -1px;
  width: 99%; /* 伪元素宽度为100% */
  height: 4px; /* 伪元素高度为2px */
  background-color: var(--maincolor); /* 伪元素背景颜色 */
  transform: scaleX(0); /* 初始化时不显示 */
  transform-origin: left; /* 变换原点在左边 */
  transition: transform 0.3s ease; /* 平滑过渡变换 */
}

.joinus-item:hover::before {
  transform: scaleX(1); /* 鼠标悬停时显示 */
}
.joinus-item:hover {
  transform: translateY(-2px); /* 轻微上移 */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* 添加阴影 */
}
.joinus-map-container {
  display: flex;
  flex-direction: column;
  min-height: 500px;
  h1 {
    font-size: 18px;
    margin-bottom: 10px; /* 设置每个子元素的底部间距 */
  }
  span {
    font-size: 14px;
    color: gray;
    margin-bottom: 10px; /* 设置每个子元素的底部间距 */
  }
  .map-wrapper {
    width: 100%;
    height: 400px;
    #mapcontainer {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
