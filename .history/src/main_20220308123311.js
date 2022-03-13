import { createApp, VueElement } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import 'normalize.css'
import '@/assets/css/base.scss'

import '@/assets/font/iconfont.css'

const app=createApp(App)
app.use(store)
app.use(router)


const vm=app.mount('#app')
