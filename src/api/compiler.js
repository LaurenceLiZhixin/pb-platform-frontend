import axios from '@/libs/api.request'

export const getCompiledFile = (file, subPath) => {
  return axios.request({
    url: 'compile' + subPath,
    data: file,
    method: 'post'
  })
}
