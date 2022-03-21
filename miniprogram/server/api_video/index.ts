// 这里是关于所有的视频请求
import axios, { AxiosTypes } from '../../utils/axios'
import { AxiosMusicTypes } from './types'

export * from './types/index'

// 请求视频页10条数据 offset: 起始位置
export function getTopMv(offset: number, limit: number = 10): Promise<AxiosTypes<AxiosMusicTypes>>{
  return axios.get<AxiosTypes<AxiosMusicTypes>>('/top/mv', { 
    offset,
    limit
   }
  )
}