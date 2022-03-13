import {request} from '@/network/request.js'

export function getShopProductList(currentTab){
  return new Promise((resolve, reject) => {
    request.get(`/api/shop/${id}/products`,{tab:tab})
      .then((response) => {
        resolve(response.data)
      }, err => {
        reject(err)
      })

  })
}