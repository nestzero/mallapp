import { createRouter, createWebHashHistory } from 'vue-router'

const home=()=>import('@/views/home/home');

const routes = [
  {
    path:'',
    redirect:
  },
  {
    path:'/home',
    component:home,
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
