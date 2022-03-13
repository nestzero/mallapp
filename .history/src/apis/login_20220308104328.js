import { request } from "@/network/request";

export default isLoginTrue=(data)=> {
  return request('/api/user/login',
    {
      username: data.username,
      password: data.password
    }
  )
}