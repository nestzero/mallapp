import { request } from "@/network/request";

export function orderCommit(data) {
  return new Promise((resolve, reject) => {
    
    request.post('/api/order', data).then((response) => {
      resolve(response.data)
    }, err => {
      reject(err)
    })

  })
}