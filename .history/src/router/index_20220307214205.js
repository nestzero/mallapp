import { createRouter, createWebHashHistory } from 'vue-router'

const home=()=>import('@/views/home/home');
const login=()=>import('@/views/login/L')

const routes = [
  {
    path:'',
    redirect: '/home',
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
