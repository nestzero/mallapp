import {request} from '@/network/request.js'

export function getShopProductList(){
  return new Promise((resolve, reject) => {
    request.get(`/api/shop/${id}/products`,{tab:})
      .then((response) => {
        resolve(response.data)
      }, err => {
        reject(err)
      })

  })
}