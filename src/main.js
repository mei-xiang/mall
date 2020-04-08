import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'
import fastClick from 'fastclick'
import VueLazyload from 'vue-lazyload'
// import toast from 'components/common/toast/Toast'

// 添加vant ui
import { Swipe, SwipeItem, Sticky, Icon, Toast } from 'vant'
import 'vant/lib/index.css'

Vue.use(Swipe)
Vue.use(SwipeItem)
Vue.use(Sticky)
Vue.use(Icon)
Vue.use(Toast)
Vue.use(VueLazyload)

// 安装封装的toast插件
// Vue.use(Toast)

// 解决移动端300ms延迟
fastClick.attach(document.body)
Vue.use(VueLazyload, {
  loading: require('./assets/img/common/placeholder.png')
})

// 挂载事件总线
Vue.prototype.$bus = new Vue()
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
