import { request } from "@/network/request";

export function getHotList(){
  return new Promise((resolve, reject) => {

  }.then((response) => {
    resolve(response.data)
  }, err => {
    reject(err)
  }))
}