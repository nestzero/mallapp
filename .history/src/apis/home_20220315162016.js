import { request } from "@/network/request";

export function getHotList() {
  return new Promise((resolve, reject) => {
    request.get('/api/shop/hot-list')
      .then((response) => {
        resolve(response.data)
      })
      .catch(err => {
        reject(err)
      })
  })
}

export function getHotListByShopId(id) {
  return new Promise((resolve, reject) => {
    request.get(`/api/shop/${id}`)
      .then((response) => {
        resolve(response.data)
      })
      .catch(err => {
        reject(err)
      })
  })
}
 