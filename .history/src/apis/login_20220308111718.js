import { request } from "@/network/request";

export function isLoginTrue(data) {
  return new Promise((resolve, reject) => {
    request.post('/api/user/login',
      {
        username: data.username,
        password: data.password
      }
  }
}