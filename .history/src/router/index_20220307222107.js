import { createRouter, createWebHashHistory } from 'vue-router'

const home=()=>import('@/views/home/home');
const login=()=>import('@/components/content/login/login')
const my=()=>import('@/views/')

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