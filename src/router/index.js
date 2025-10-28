import { createRouter, createWebHashHistory } from 'vue-router'
import LoginPage from '../components/LoginPage.vue'
import HotelLandingPro from '../components/HotelLandingPro.vue'

const routes = [
  {
    path: '/',
    name: 'login',
    component: LoginPage
  },
  {
    path: '/home',
    name: 'home',
    component: HotelLandingPro
  }
]

const router = createRouter({
  history: createWebHashHistory(), // 使用hash模式，支持直接打开HTML文件
  routes
})

export default router

