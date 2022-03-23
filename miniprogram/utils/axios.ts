// method请求类型
type methodTypes = "OPTIONS" | "GET" | "HEAD" | "POST" | "PUT" | "DELETE" | "TRACE" | "CONNECT" | undefined

// 请求接口前缀
const BASE_URL = 'http://123.207.32.32:9001'

// 网络请求基本接口
export interface AxiosTypes<T>{
  code: number
  data: T
  hasMore?: boolean
  updateTime?: number
}

class Axios{
  request<T>(url: string, method: methodTypes, data?: any){
    return new Promise<T>((resolve, reject) => {
      wx.request({
        url: BASE_URL + url, 
        method,
        data,
        success({ data }){
          // @ts-ignore
          resolve(data)
        },
        fail(err){
          reject(err)
        }
      })
    })
  }
  get<T>(url: string, params?: any){
    return this.request<T>(url, 'GET', params)
  }
  post<T>(url: string, data?: any){
   return this.request<T>(url, 'POST', data)
  }
}

const axios = new Axios()
export default axios
