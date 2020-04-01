import Vue from 'vue'
import RouterVue from 'vue-router'

const Home = () => import('@/views/home/Home')
const Category = () => import('@/views/category/Category')
const Shopcart = () => import('@/views/shopcart/Shopcart')
const Profile = () => import('@/views/profile/Profile')

Vue.use(RouterVue)

const router = new RouterVue({
  mode: 'history', // history模式
  routes: [
    { path: '/', redirect: '/home/' },
    {
      path: '/home',
      name: 'home',
      meta: {
        keepAlive: true
      },
      component: Home
    },
    {
      name: 'category',
      path: '/category',
      meta: {
        keepAlive: true
      },
      component: Category
    },
    {
      name: 'shopcart',
      path: '/shopcart',
      meta: {
        keepAlive: true
      },
      component: Shopcart
    },
    {
      name: 'profile',
      path: '/profile',
      meta: {
        keepAlive: true
      },
      component: Profile
    }
  ]
})

router.beforeEach((to, from, next) => {
  next()
})

export default router
