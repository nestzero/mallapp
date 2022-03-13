import { createRouter, createWebHashHistory } from 'vue-router'

const index = () => import('@/views/index/index');

const home = () => import(/* webpackChunkName: "home" */'@/views/index/home/home');
const my = () => import(/* webpackChunkName: "home" */'@/views/index/my/my');

const login = () => import('@/views/login/login')

const shop = () => import(/* webpackChunkName: "shop" */'@/views/shop/shop')

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
    path: '/shop',
    name: shop,
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
