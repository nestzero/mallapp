import { request } from "@/network/request";
import axios from 'axios'
export default isLoginTrue = axios.post({
  baseURL: 'https://www.fastmock.site/mock/ae8e9031947a302fed5f92425995aa19/jd',
  headers: {
    'Content-Type': 'application/json'
  },
  timeout: 5000,
})