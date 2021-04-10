const state = {
  userProfile: null,
  // JSON.parse(localStorage.getItem('userData')),
  userFavorites: new Set(JSON.parse(localStorage.getItem('favorites')))
}
const getters = {
  isFavorites: state => id => state.userFavorites.has(id),
  getFavorites: state => state.userFavorites
  // getUserProfile: state => state.userProfile
}
const mutations = {
  LOG_IN (state, payload) {
    state.userProfile = payload
  },
  ADD_OR_DELETE_FROM_FAVORITES (state, id) {
    if (state.userFavorites.has(id)) {
      state.userFavorites.delete(id)
    } else {
      state.userFavorites.add(id)
    }
    state.userFavorites = new Set([...state.userFavorites])
    localStorage.setItem('favorites', JSON.stringify([...state.userFavorites]))
  }
}
const actions = {
  logIn (context) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const payload = {
          id: 1,
          name: 'Ivan',
          email: 'example@example.com',
          photos: [
            'https://leonardo.osnova.io/ca8e53c3-e25b-3855-437c-0ef9d10f62d4/-/preview/1100/-/format/webp/',
            'https://leonardo.osnova.io/9f8505c3-3dfd-d58a-757f-1dd0273fa5b1/-/preview/1000/-/format/webp/'
          ],
          status: 'я считаю что в профиле должно быть 2 фото как минимум'
        }
        context.commit('LOG_IN', payload)
        localStorage.setItem('userData', JSON.stringify(payload))
      }, 1500)
    })
  }
}
export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
