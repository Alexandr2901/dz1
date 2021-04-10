import Vue from 'vue'
import Vuex from 'vuex'
import AppStore from './appStore/index.js'
import User from './user/index.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    AppStore,
    User
  }
})
