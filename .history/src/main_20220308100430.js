import { createApp, VueElement } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import api from './apis'

import 'normalize.css'
import '@/assets/css/base.scss'

import '@/assets/font/iconfont.css'

Vue.prototype.$api=api

createApp(App).use(store).use(router).mount('#app')
