import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { ElementPlus } from '@element-plus/icons-vue'
import 'element-plus/dist/index.css'
//@ts-ignore忽略当前文件ts类型的检测否则有红色提示(打包会失败)
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
import 'virtual:svg-icons-register'
import gloablComponent from './components/index'
// import '@/styles'



const app = createApp(App)
//@ts-ignore
app.use(ElementPlus, {locale: zhCn})
app.use(gloablComponent);
app.mount('#app')
