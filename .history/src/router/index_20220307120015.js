import { createRouter, createWebHashHistory } from 'vue-router'

const home=()=>import('@/views/home/home')

const routes = [
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
