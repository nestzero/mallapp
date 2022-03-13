import { request } from "@/network/request";

export function isLogin(data){
  return request({
    url:'/api/user/login',
    data:
  })
}