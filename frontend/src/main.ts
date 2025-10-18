import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
const app = createApp(App)
import 'element-plus/dist/index.css'

app.use(ElementPlus)
app.use(createPinia())
app.use(router)

app.mount('#app')
