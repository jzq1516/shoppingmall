import axios from "axios"

export function request(config) {
  // 1. 创建axios实例
  const instance = axios.create({
    baseURL: 'https://api-hmugo-web.itheima.net/api/public/v1'
  })

  // 拦截器
  // 请求拦截
  instance.interceptors.request.use(config => {
    return config
  })

  // 响应拦截
  instance.interceptors.response.use(res => {
    return res.data
  })

  // 发送请求
  return instance(config)
}