import Vue from 'vue'
import App from './App.vue'
import router from './router/index'

import { Swipe, SwipeItem, Sticky } from 'vant'
import 'vant/lib/index.css'

Vue.use(Swipe)
Vue.use(SwipeItem)
Vue.use(Sticky)

Vue.prototype.$bus = new Vue()
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
