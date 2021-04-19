import Vue from 'vue'
import VueRouter from 'vue-router'
import Posts from '../views/Posts.vue'
import Post from '@/views/Post'
import NotFound from '../views/NotFound'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/Posts'
  },
  {
    path: '/Post/:id?',
    name: 'Post',
    component: Post,
    children: [{
      path: 'edit',
      name: 'EditPost',
      component: Post
    },
    {
      path: 'new',
      name: 'NewPost',
      component: Post
    }
    ]
  },
  {
    path: '/Posts/:page?',
    name: 'Posts',
    component: Posts
  },
  { path: '*', component: NotFound }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
