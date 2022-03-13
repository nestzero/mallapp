import { request } from "@/network/request";

export function isLoginTrue(data) {
    request.post('/api/user/login',
      {
        username: data.username,
        password: data.password
      }
  }
}