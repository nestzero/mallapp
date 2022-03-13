import { createRouter, createWebHashHistory } from 'vue-router'

const home=()=>import('@/views/home/home');
const login=()=>import('@/views/login/login')

const routes = [
  {
    path:'',
    redirect: '/home',
  },
  {
    path:'/home',
    component:home,
  },
  {
    path:'/login',
    component:login
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
