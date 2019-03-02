import Vue from 'vue'
import Vuex from 'vuex'
import { tryToLogin } from '@/services/AuthService'

Vue.use(Vuex)

export const mutations = {
  setUser (state, payload) {
    state.user = payload
  },
  unsetUser (state) {
    state.user = null
  }
}

export const actions = {
  logUserIn ({ commit }, payload) {
    const res = tryToLogin(payload)

    if (res.status === 'ok') {
      commit('setUser', res.userData)
    }

    return {
      status: res.status,
      message: res.message
    }
  },
  logUserOut ({ commit }, payload) {
    commit('unsetUser')
  }
}

export const getters = {
  getUser (state) {
    return state.user
  }
}

export const state = {
  // user: null,
  user: {
    name: 'Vadim Yuldashbaev',
    login: 'vadim',
    password: '1212',
    role: 'admin'
  }
}

export default new Vuex.Store({
  state,
  actions,
  mutations,
  getters
})
