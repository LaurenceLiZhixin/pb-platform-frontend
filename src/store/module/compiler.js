import {
  getCompiledFile
} from '@/api/compiler'

export default {
  state: {
    compiledFile: ''
  },
  getters: {
  },
  mutations: {
    setCompiledResult (state, file) {
      state.compiledFile = file
    }
  },
  actions: {
    compileFile ({ commit }, { idlFile, subPath }) {
      return new Promise((resolve, reject) => {
        getCompiledFile(
          idlFile, subPath
        ).then(res => {
          const data = res.data
          commit('setCompiledResult', data.file)
          resolve()
        }).catch(err => {
          console.log(err);
          reject(err)
        })
      })
    }
  }
}
