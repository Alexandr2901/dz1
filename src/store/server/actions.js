import axios from 'axios'

export default {
  pullCategories ({ commit }) {
    return new Promise((resolve, reject) => {
      axios.get('http://localhost:3000/categories')
        .then(response => {
          commit('SET_CATEGORY',
            response.data
          )
          resolve(response.data)
        })
        .catch(error => {
          reject(error)
        })
    })
  },
  pullCategoryData ({ commit }, category) {
    return new Promise((resolve, reject) => {
      axios.get('http://localhost:3000/categories/' + category + '?_embed=products')
        .then(response => {
          // console.log(response.data)
          resolve(response.data)
        })
        .catch(error => {
          reject(error)
        })
    })
  },
  pullProducts (context, { page, category = null }) {
    return new Promise((resolve, reject) => {
      let url = 'http://localhost:3000/products?_page=' + page + '&_limit=12'
      if (category) {
        // console.log(url)
        url += '&categoryId=' + context.getters.getCategoryId(category)
        // url += '&categoryId=' + 1
        // console.log(url)
      }
      axios.get(url)
        .then(response => {
          // console.log(response.data)
          resolve(response.data)
        })
        .catch(error => {
          reject(error)
        })
    })
  },
  pullProduct ({ commit }, id) {
    return new Promise((resolve, reject) => {
      axios.get('http://localhost:3000/products/' + id)
        .then(response => {
          resolve(response.data)
        })
        .catch(error => {
          reject(error)
        })
    })
  }
}
