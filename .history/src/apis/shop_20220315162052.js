import { request } from '@/network/request.js'

export function getShopProductList(id, currentTab) {
  return new Promise((resolve, reject) => {
    request.get(`/api/shop/${id}/products`, { tab: currentTab })
      .then((response) => {
        resolve(response.data)
      })
      .catch(err => {
        reject(err)
      })

  })
}