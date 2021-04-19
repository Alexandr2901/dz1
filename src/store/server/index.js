import actions from './actions'

const state = {
  API: 'http://localhost:3000/',
  post: null,
  pages: [],
  comments: []
}
const getters = {
  getPost: state => state.post || {
    author: '',
    title: '',
    text: ''
  },
  getPage: state => page => {
    return state.pages.find(item => item.page === page) || null
  }
  // getPosts: state => {
  //   return state.posts
  // }
}

const mutations = {
  addToLocalPosts (state, posts) {
    posts.forEach(post => {
      if (!state.posts.find(item => item.id === post.id)) {
        state.posts.push(post)
      } else {
        // на случай если данны обновятся как по другому сделать я пока не знаю
        state.posts.splice(post.id, 1, post)
      }
    })
    // console.log(state.posts)
  },
  addPageToLocalPosts (state, payload) {
    state.pages.unshift(payload)
  },
  SET_POST (state, post) {
    state.post = post
  }
}
export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
