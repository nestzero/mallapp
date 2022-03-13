import { request } from "@/network/request";

export function isLoginTrue(data) {
  return new Promise((resolve, reject) => {
    
    request.post('111/api/user/login',
    {
      username: data.username,
      password: data.password
    }).then((response) => {
      resolve(response.data)
    }, err => {
      reject(err)
    })

  })
}