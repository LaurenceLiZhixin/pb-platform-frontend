import {
  getGRPCCompiledFile
} from '@/api/compiler'
import { saveErrorLogger } from '@/api/data'
import config from '@/config'
const { homeName } = config

export default {
  state: {
    compiledFile: ''
  },
  getters: {
  },
  mutations: {
    setCompiledResult(state, file){
      state.compiledFile = file
    }
  },
  actions: {
    compileFile({commit}, { idlFile}){
      return new Promise((resolve, reject) => {
        getGRPCCompiledFile(
          idlFile,
        ).then(res => {
          const data = res.data
          commit('setCompiledResult', data.file)
          resolve()
        }).catch(err => {
          reject(err)
        })
      })
    }
  }
}
