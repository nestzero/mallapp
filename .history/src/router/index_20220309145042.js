import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '',
    redirect: '/index',
  },
  {
    path: '/index',
    name: 'index',
    component: () => import(/* webpackChunkName: "index" */'@/views/index/index'),
    redirect: '/home',

    children: [
      { path: '/home', name: home, component: () => import(/* webpackChunkName: "home" */'@/views/index/home/home') },
      { path: '/my', name: my, component: () => import(/* webpackChunkName: "my" */'@/views/index/my/my') }
    ]
  },
  {
    path: '/shop',
    name: 'shop',
    component: () => import(/* webpackChunkName: "shop" */'@/views/shop/shop')
  },
  {
    path: '/login',
    name: login,
    component: () => import(/* webpackChunkName: "login" */'@/views/login/login'),
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
