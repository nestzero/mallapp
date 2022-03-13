import { createRouter, createWebHashHistory } from 'vue-router'

const index = () => import('@/views/index/index');

const home = () => import('@/views/index/home/home');
const my = () => import('@/views/index/my/my');

const login = () => import('@/views/login/login')
const shop = () => import('@/views/shop/shop')
const order=()=>import('@/views/order/order')
const orderlist=()=>import('@/views/orderList/orderList')

const routes = [
  {
    path: '',
    redirect: '/home',
  },
  {
      { path: '/home', component: home },
      { path: '/my', component: my }
    ]
  },
  {
    path: '/shop/:id',
    component: shop
  },
  {
    path: '/login',
    component: login,
    beforeEnter(to, from, next) {
      const { isLogin } = localStorage;
      isLogin ? next('/home') : next();
    }
  },
  {
    path:'/order/:id',
    component:order,
  },
  {
    path:'/orderlist',
    component:orderlist
  }
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
