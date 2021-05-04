import actions from './actions'

const state = {
  categories: []
}
const getters = {
  getCategories: state => state.categories,
  getCategoryId: state => name => {
    // console.log(state.categories.find(item => item.name !== name))
    return state.categories.find(item => item.name === name).id
  }
}

const mutations = {
  SET_CATEGORY (state, payload) {
    state.categories = payload
  }
}
export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
