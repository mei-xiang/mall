import Vue from 'vue'
import RouterVue from 'vue-router'

const originalPush = RouterVue.prototype.push
RouterVue.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

const Home = () => import('@/views/home/Home')
const Category = () => import('@/views/category/Category')
const Cart = () => import('@/views/cart/Cart')
const Profile = () => import('@/views/profile/Profile')
const Detail = () => import('@/views/detail/Detail')

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
      name: 'cart',
      path: '/cart',
      meta: {
        keepAlive: true
      },
      component: Cart
    },
    {
      name: 'profile',
      path: '/profile',
      meta: {
        keepAlive: true
      },
      component: Profile
    },
    {
      name: 'detail',
      path: '/detail/:iid',
      meta: {
        keepAlive: false
      },
      component: Detail
    }
  ]
})

router.beforeEach((to, from, next) => {
  next()
})

export default router
