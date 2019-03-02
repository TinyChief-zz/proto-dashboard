import Vue from 'vue'
import Router from 'vue-router'
import Contacts from './views/Contacts.vue'

Vue.use(Router)

export const routes = [
  {
    path: '/contacts',
    name: 'contacts',
    component: Contacts
  },
  {
    path: '/login',
    name: 'login',
    component: () =>
      import(/* webpackChunkName: "about" */ './views/Login.vue')
  },
  {
    path: '/data',
    name: 'data',
    component: () => import(/* webpackChunkName: "about" */ './views/Data.vue')
  },
  {
    path: '/charts',
    name: 'charts',
    component: () =>
      import(/* webpackChunkName: "about" */ './views/Charts.vue')
  }
]

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
