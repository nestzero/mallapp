import { request } from "@/network/request";

export function isLoginTrue(data) {
  return new Promise((resolve, reject) => {
    
    request.post('/api/order', {
      addressId: 1,
      shopId,
      shopName: shopName.value,
      isCanceled,
      products
    }).then((response) => {
      resolve(response.data)
    }, err => {
      reject(err)
    })

  })
}