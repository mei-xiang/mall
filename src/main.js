import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'

// 添加vant ui
import { Swipe, SwipeItem, Sticky, Icon } from 'vant'
import 'vant/lib/index.css'

Vue.use(Swipe)
Vue.use(SwipeItem)
Vue.use(Sticky)
Vue.use(Icon)

// 挂载事件总线
Vue.prototype.$bus = new Vue()
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
