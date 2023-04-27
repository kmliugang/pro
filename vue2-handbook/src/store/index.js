import Vue from 'vue'
import Vuex from 'vuex'

import createPersistedState from "vuex-persistedstate"

Vue.use(Vuex)
const moduleFiles = require.context('./modules', true, /\.js$/);
const modules = moduleFiles.keys().reduce((modules, modulePath) => {
  const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1');
  const value = moduleFiles(modulePath)
  modules[moduleName] = value.default;
  return modules
}, {})


export default new Vuex.Store({
  plugins: [createPersistedState({
    storage: window.localStorage
  })],
  state: {
    userInfo: {}
  },
  modules,
  getters: {
  },
  mutations: {
    SET_USER_INFO(state, payload) {
      state.userInfo = { ...payload }

    }
  },
  actions: {
    setUserInfo({ commit }, payload) {
      commit('SET_USER_INFO', payload)

    }
  },
  modules: {
  }
})
