import {request} from '@/network/request.js'

export function getShopProductList(tab){
  return new Promise((resolve, reject) => {
    request.get(`/api/shop/${id}/products`,{tab:tab})
      .then((response) => {
        resolve(response.data)
      }, err => {
        reject(err)
      })

  })
}