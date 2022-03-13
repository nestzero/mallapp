import { request } from "@/network/request";

export default isLoginTrue = (data) => axios.post({
  baseURL: 'https://www.fastmock.site/mock/ae8e9031947a302fed5f92425995aa19/jd',
  headers: {
    'Content-Type': 'application/json'
  },
  timeout: 5000,
})