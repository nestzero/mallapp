import axios from 'axios'

export const request = () => {
  return new Promise((resolve, reject) => {
    axios.create({
      baseURL: 'https://www.fastmock.site/mock/ae8e9031947a302fed5f92425995aa19/jd',
      headers: {
        'Content-Type': 'application/json'
      },
      timeout: 5000,
    }).then((response) => {
      resolve(response.data)
    }, err => {
      reject(err)
    })
  })
}
