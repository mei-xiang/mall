import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'
import modules from './modules'

// 安装插件
Vue.use(Vuex)

// 创建store对象
const store = new Vuex.Store({
  state: {
    cartList: []
  },
  mutations,
  actions,
  getters,
  modules
})

export default store
