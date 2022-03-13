import { createRouter, createWebHashHistory } from 'vue-router'

const index = () => import('@/views/index/index');

const home = () => import('@/views/index/home/home');
const login = () => import('@/views/login/login')
const my = () => import('@/views/index/my/my');

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
    path: '/login',
    name:login,
    component: login,
  },

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})


router.beforeEach((to, from, next) => {
  const { isLogin } = localStorage;
  const { name } = to;
  const isLoginOrRegister = (name === "login" || name === "Register");
  (isLogin || isLoginOrRegister) ? next() : next({ name: 'login' });
})

export default router
