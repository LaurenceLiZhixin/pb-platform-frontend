import Vue from 'vue'
import Vuex from 'vuex'

import user from './module/user'
import app from './module/app'
import compiler from './module/compiler'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    //
  },
  mutations: {
    //
  },
  actions: {
    //
  },
  modules: {
    app,
    user,
    compiler
  }
})
