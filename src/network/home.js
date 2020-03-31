import { request } from 'network/request'

export function getAllHomeData() {
  return request({
    url: '/home/multidata'
  })
}

export function getAllHomeGoods(type, page) {
  return request({
    url: '/home/data',
    params: {
      type,
      page
    }
  })
  // return request().get(`/home/data`, {
  //   params: {
  //     type,
  //     page
  //   }
  // })
}
