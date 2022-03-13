import { request } from "@/network/request";

export function isLoginTrue(data) {
  return request(
    url: '/api/user/login',
    data: {
      username: data.username,
      password: data.password
    }
  )
}