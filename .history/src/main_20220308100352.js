import { createApp, VueElement } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import 'normalize.css'
import '@/assets/css/base.scss'

import '@/assets/font/iconfont.css'

VueElement.prototype.$api=

createApp(App).use(store).use(router).mount('#app')
