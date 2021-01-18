import axios from 'axios'
export function request(config){
// axios 的封装
    // 1. 创建axios 的实例
    const instance = axios.create({
        baseURL : 'http://123.207.32.32:8000',
        timeout : 5000
    })
    // 2. axios 的拦截器
    // 2.1 请求拦截的作用
    instance.interceptors.request.use(config => {
        //  1.比如config中的一些信息不符合服务器的要求

        // 2.比如每次发送网络请求时, 都希望在界面中显示一个请求的图标

        // 3.某些网络请求(比如登录(token)), 必须携带一些特殊的信息
        return config
    }, err => {
        console.log(err);
    })
    // 2.2 响应拦截 
    instance.interceptors.response.use(res => {
        return res.data
    },err => {
        console.log(err);
    })
    // 返回真正的网络请求
    return instance(config)
}

// export function request(config) {
//   return new Promise((resolve, reject) => {
//     // 1.创建axios的实例
//     const instance = axios.create({
//       baseURL: 'http://123.207.32.32:8000',
//       timeout: 5000
//     })
//
//     // 发送真正的网络请求
        // 因为 .use 里返回的是Promise 函数 , 所以下面的部分可以省略
//     instance(config)
//       .then(res => {
//         resolve(res)
//       })
//       .catch(err => {
//         reject(err)
//       })
//   })
// }