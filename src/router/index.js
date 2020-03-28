import Vue from 'vue'
import RouterVue from 'vue-router'

const Home = () => import('@/views/home/Home')
const Category = () => import('@/views/category/Category')
const Shopcart = () => import('@/views/shopcart/Shopcart')
const Profile = () => import('@/views/profile/Profile')

Vue.use(RouterVue)

const router = new RouterVue({
  mode: 'history',
  routes: [
    { path: '/', redirect: '/home/' },
    { path: '/home', component: Home },
    { path: '/category', component: Category },
    { path: '/shopcart', component: Shopcart },
    { path: '/profile', component: Profile }
  ]
})

router.beforeEach((to, from, next) => {
  next()
})

export default router
