import { createApp, VueElementgetCurrentInstance } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import api from './apis'

import 'normalize.css'
import '@/assets/css/base.scss'

import '@/assets/font/iconfont.css'


const app=createApp(App)
app.use(store)
app.use(router)
app.config.globalProperties.$api=api

app.config.globalProperties.$instance = getCurrentInstance()

const vm=app.mount('#app')
