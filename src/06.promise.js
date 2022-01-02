import axios from 'axios'

const url = 'https://www.fastmock.site/mock/37d3b9f13a48d528a9339fbed1b81bd5/book/get/'
const apis = [1, 2, 3, 4].map(it => axios.get(url + it))

// Promise.all(apis).then(res => {
//   // console.log(res.map(it => it.data))
//   console.log('全部成功了',res.length)
//   console.log(res)
// }).catch(err => {
//   console.log('谁先失败了')
//   console.log(err)
// })


Promise.allSettled(apis).then(res => {
  console.log(res.map(it => it.data))
  console.log('全部成功了',res.length)
  console.log(res)
}).catch(err => {
  console.log('谁先失败了')
  console.log(err)
})