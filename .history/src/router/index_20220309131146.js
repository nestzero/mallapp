import { createRouter, createWebHashHistory } from 'vue-router'

const index = () => import('@/views/index/index');

const home = () => import('@/views/index/home/home');
const my = () => import('@/views/index/my/my');

const login = () => import('@/views/login/login')

const shop=()=>import('@/views/')

const routes = [
  {
    path: '',
    redirect: '/index',
  },
  {
    path: '/index',
    name: index,
    component: index,
    redirect: '/home',

    children: [
      { path: '/home', name: home, component: home },
      { path: '/my', name: my, component: my }
    ]
  },
  {
    path
  },
  {
    path: '/login',
    name: login,
    component: login,
  },

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach((to, from ,next) => {
  const {isLogin}=localStorage;

  if(isLogin ||to.path==='/login'){
    next();
  }else{
    next({path:'/login'})
  }
})


export default router
