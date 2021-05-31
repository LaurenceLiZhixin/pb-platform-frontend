import axios from '@/libs/api.request'

export const getGRPCCompiledFile = (file) => {
  return axios.request({
    url: 'compile/grpc',
    data: file,
    method: 'get'
  })
}
