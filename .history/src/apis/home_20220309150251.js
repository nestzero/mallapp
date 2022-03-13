import { request } from "@/network/request";

export function getHotList() {
  return new Promise((resolve, reject) => {
    request.get('/api/shop/hot-list')
      .then((response) => {
        resolve(response.data)
      }, err => {
        reject(err)
      })

  })
}

export function getHotListByShopId() {
  return new Promise((resolve, reject) => {
    request.get(`/api/shop/1`)
      .then((response) => {
        resolve(response.data)
      }, err => {
        reject(err)
      })

  })
}