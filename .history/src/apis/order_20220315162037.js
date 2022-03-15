import { request } from "@/network/request";

export function orderCommit(data) {
  return new Promise((resolve, reject) => {
    
    request.post('/api/order', data)
    .then((response) => {
      resolve(response.data)
    })
    .catch(err => {
      reject(err)
    })
  })
}

export function getOrderList() {
  return new Promise((resolve, reject) => {
    
    request.get('/api/order')
    .then((response) => {
      resolve(response.data)
    })
    .catch(err => {
      reject(err)
    })
  })
}