const state = {
  newsCards: []
}
const getters = {
  getCardById: state => id => state.newsCards.find(item => item.id === id),
  getFilteredCards: state => (callback) => state.newsCards.filter(callback),
  isFavorites: (state, getters, rootState) => id => {
    return rootState.User.userFavorites.has(id)
  },
  favoriteCards: (state, getters) => {
    return state.newsCards.filter(item => getters.isFavorites(item.id))
  },
  isMine: (state, getters, rootState) => id => {
    return rootState.User.userProfile ? rootState.User.userProfile.id === id : null
  }
}
const mutations = {
  addNewsCards (state, payload) {
    state.newsCards.push(payload)
  }
}
const actions = {
  addCards (context) {
    // console.log(context.getters.isFavorites(1))
    // console.log('addCards')
    return new Promise((resolve, reject) => {
      for (let i = 0; i < 100; i++) {
        setTimeout(() => {
          const payload = {
            id: i,
            title: 'test' + i,
            text: 'testText'.repeat(100 + i) + i,
            user_id: i % 10
          }
          context.commit('addNewsCards', payload)
        }, i * 10)
      }
    })
  }
}
export default {
  root: true,
  state,
  getters,
  mutations,
  actions
}
