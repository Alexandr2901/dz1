import actions from './actions'

const state = {
  category: []
}
const getters = {}

const mutations = {
  SET_CATEGORY (state, payload) {
    state.category = payload
  }
}
export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
