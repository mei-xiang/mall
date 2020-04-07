/**
 * 用于请求的相关配置，全局main.js中配置会写死配置
 */
import axios from 'axios'

export function request(config) {
  // 创建axios实例
  const instance = axios.create({
    baseURL: 'http://152.136.185.210:8000/api/h8'
  })

  instance.interceptors.request.use(
    config => {
      return config
    },
    err => {
      console.log(err)
    }
  )

  instance.interceptors.response.use(
    res => {
      return res
    },
    err => {
      console.log(err)
    }
  )

  // instance是一个promise对象
  return instance(config)
}
