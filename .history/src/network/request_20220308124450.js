import axios from 'axios'

export const request =axios.create({
    baseURL: 'https://www.fastmock.site/mock/ae8e9031947a302fed5f92425995aa19/jd',
    headers: {
      'Content-Type': 'application/json'
    },
    timeout: 5000,
})

axios.interceptors.response.use(res => {
  if (typeof res.data !== 'object') {
    Toast.fail('服务端异常！')
    return Promise.reject(res)
  }
  if (res.data.resultCode != 200) {
    if (res.data.message) Toast.fail(res.data.message)
    if (res.data.resultCode == 416) {
      router.push({ path: '/login' })
    }
    if (res.data.data && window.location.hash == '#/login') {
      setLocal('token', res.data.data)
      axios.defaults.headers['token'] = res.data.data
    }
    return Promise.reject(res.data)
  }

  return res.data
})