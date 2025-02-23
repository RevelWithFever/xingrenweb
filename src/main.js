import '@/assets/style/main.scss'
import '@/assets/font/font.css'
import '@/assets/font/iconfont.css'
import '@/assets/font/iconfont.js'
import { createApp } from 'vue'
import pinia from '@/stores/index'
import 'animate.css'
import App from './App.vue'
import router from './router'
import 'amfe-flexible'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
app.use(pinia)
app.use(router)

app.mount('#app')
