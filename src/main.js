import '@/assets/style/main.scss'
import '@/assets/font/font.css'
import '@/assets/font/iconfont.css'
import '@/assets/font/iconfont.js'
import { createApp } from 'vue'
import pinia from '@/stores/index'
import 'wow.js/css/libs/animate.css'
import App from './App.vue'
import router from './router'
import 'amfe-flexible'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
const app = createApp(App)
import { useDeviceStore } from '@/stores'

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

function setElementStyle() {
  const el = document.documentElement
  el.style.setProperty('--el-color-primary', 'var(--maincolor)')
}

// 判断是否为移动端的函数
function isMobileDevice() {
  const sUserAgent = navigator.userAgent.toLowerCase()
  const bIsIpad = sUserAgent.match(/ipad/i) == 'ipad'
  const bIsIphoneOs = sUserAgent.match(/iphone os/i) == 'iphone os'
  const bIsMidp = sUserAgent.match(/midp/i) == 'midp'
  const bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i) == 'rv:1.2.3.4'
  const bIsUc = sUserAgent.match(/ucweb/i) == 'ucweb'
  const bIsAndroid = sUserAgent.match(/android/i) == 'android'
  const bIsCE = sUserAgent.match(/windows ce/i) == 'windows ce'
  const bIsWM = sUserAgent.match(/windows mobile/i) == 'windows mobile'
  return bIsIpad || bIsIphoneOs || bIsMidp || bIsUc7 || bIsUc || bIsAndroid || bIsCE || bIsWM
}

// 在应用挂载时判断设备类型并存储到 Pinia 中

app.use(pinia)
app.use(router)
app.mount('#app')

const deviceStore = useDeviceStore()
deviceStore.setIsPhone(isMobileDevice())
setElementStyle() //初始化主题色
