import { createRouter, createWebHashHistory } from 'vue-router'

const home=()=>import('@/views/home/home');
const login=()=>import('@/components/content/login/login')
const my=()=>import('@/views/my/my');

const routes = [
  {
    path:'',
    redirect: '/home',
  },
  {
    path:'/home',
    name:home,
    component:home,
  },
  {
    path:'/login',
    component:login
  },
  {
    path:'/my',
    component:my
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})


router.beforeEach((to, from ,next) => {
  const { isLogin } = localStorage;
  const { name } = to;
  const isLoginOrRegister = (name === "Login" || name === "Register");
  (isLogin || isLoginOrRegister) ? next() : next({ name: 'Login'});
})

export default router
