import {request} from '@/network/request.js'

export function getShopProductList(){
  return new Promise((resolve, reject) => {
    request.get(`/api/shop/${id}`)
      .then((response) => {
        resolve(response.data)
      }, err => {
        reject(err)
      })

  })
}