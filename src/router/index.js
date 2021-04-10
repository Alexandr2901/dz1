import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import User from '../views/User.vue'
import UserProfile from '../components/UserProfile.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children: [
    ]
  },
  {
    path: '/user',
    component: User,
    children: [
      {
        path: '',
        name: 'UserProfile',
        component: UserProfile
      }
    ]
  },
  {
    path: '/card/:id',
    name: 'Card',
    component: () => import('../views/Card.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
