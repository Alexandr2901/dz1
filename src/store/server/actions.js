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
          console.log(response.data)

          resolve(response.data)
        })
        .catch(error => {
          reject(error)
        })
    })
  },
  pullProducts ({ commit }) {
    return new Promise((resolve, reject) => {
      axios.get('http://localhost:3000/products?_page4&_limit=12')
        .then(response => {
          console.log(response.data)
          resolve(response.data)
        })
        .catch(error => {
          reject(error)
        })
    })
  },
  pullSpecificPosts ({ commit }, page) {
    return new Promise((resolve, reject) => {
      axios.get('http://localhost:3000/posts/?_page=' + page + '&_limit=5')
        .then(response => {
          commit('addPageToLocalPosts', {
            data: response.data,
            page: page
          })
          resolve(response)
        })
        .catch(error => {
          reject(error)
        })
    })
  },
  pullPost ({ commit }, id) {
    return new Promise((resolve, reject) => {
      axios.get('http://localhost:3000/posts/' + id + '?_embed=comments')
        .then(response => {
          commit('SET_POST', response.data)
          resolve(response)
        })
        .catch(error => {
          reject(error)
        })
    })
  },
  createPost ({ commit }, data) {
    return new Promise((resolve, reject) => {
      axios.post('http://localhost:3000/posts/', data)
        .then(response => {
          resolve(response)
        })
        .catch(error => {
          reject(error)
        })
    })
  },
  deletePost ({ commit }, id) {
    return new Promise((resolve, reject) => {
      axios.delete('http://localhost:3000/posts/' + +id)
        .then(response => {
          resolve(response)
        })
        .catch(error => {
          reject(error)
        })
    })
  },
  updatePost ({ commit }, data) {
    return new Promise((resolve, reject) => {
      axios.patch('http://localhost:3000/posts/' + data.id, data)
        .then(response => {
          // console.log(response)
          resolve(response)
        })
        .catch(error => {
          reject(error)
        })
    })
  },
  deleteComment ({ commit }, id) {
    return new Promise((resolve, reject) => {
      axios.delete('http://localhost:3000/comments/' + +id)
        .then(response => {
          resolve(response)
        })
        .catch(error => {
          reject(error)
        })
    })
  },
  updateComment ({ commit }, data) {
    return new Promise((resolve, reject) => {
      axios.patch('http://localhost:3000/comments/' + data.id, data)
        .then(response => {
          resolve(response)
        })
        .catch(error => {
          reject(error)
        })
    })
  },
  createComment ({ commit }, data) {
    return new Promise((resolve, reject) => {
      axios.post('http://localhost:3000/comments/', data)
        .then(response => {
          resolve(response)
        })
        .catch(error => {
          reject(error)
        })
    })
  }
}
