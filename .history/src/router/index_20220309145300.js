import { createRouter, createWebHashHistory } from 'vue-router'

const index = () => import(/* webpackChunkName: "index" */'@/views/index/index');

const home = () => import(/* webpackChunkName: "home" */'@/views/index/home/home');
const my = () => import(/* webpackChunkName: "my" */'@/views/index/my/my');

const login = () => import('@/views/login/login')

const shop = () => import('@/views/shop/shop')

const routes = [
  {
    path: '',
    redirect: '/index',
  },
  {
    path: '/index',
    component: index,
    redirect: '/home',

    children: [
      { path: '/home', component: home },
      { path: '/my', component: my }
    ]
  },
  {
    path: '/shop',
    component: shop
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

router.beforeEach((to, from, next) => {
  const { isLogin } = localStorage;

  if (isLogin || to.path === '/login') {
    next();
  } else {
    next({ path: '/login' })
  }
})


export default router