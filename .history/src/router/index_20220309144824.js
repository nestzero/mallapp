import { createRouter, createWebHashHistory } from 'vue-router'

const index = () => import(/* webpackChunkName: "index" */'@/views/index/index');

const home = () => import(/* webpackChunkName: "home" */'@/views/index/home/home');
const my = () => import(/* webpackChunkName: "my" */'@/views/index/my/my');

const login = () => import(/* webpackChunkName: "login" */'@/views/login/login')

const shop = 

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
    component: () => import(/* webpackChunkName: "shop" */'@/views/shop/shop')
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
