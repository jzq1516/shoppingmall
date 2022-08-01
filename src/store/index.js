import Vue from 'vue'
import Vuex from 'vuex'
import createpersistedstateState from 'vuex-persistedstate'

Vue.use(Vuex)

import mutations from './mutations'
import actions from './actions'
import getters from './getters'

const state = {
  cartList: []
}

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
  // 把数据缓存到本地
  plugins: [createpersistedstateState()]
})
