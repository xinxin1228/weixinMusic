// 这里是关于所有的视频请求
import axios, { AxiosTypes } from '../../utils/axios'
import type 
  { 
    AxiosMusicTypes, 
    AxiosMusicVideoTypes,
    AxiosVideoDetailsTypes,
    AxiosRelatedVideoTypes
  } from './types'

export * from './types/index'

// 请求视频页10条数据 offset: 起始位置
export function getTopMv(offset: number, limit: number = 10): Promise<AxiosTypes<AxiosMusicTypes>>{
  return axios.get<AxiosTypes<AxiosMusicTypes>>('/top/mv', { 
    offset,
    limit
   }
  )
}

// 获取mv视频地址  id: 视频ID
export function getMvAddress(id: number): Promise<AxiosMusicVideoTypes>{
  return axios.get<AxiosMusicVideoTypes>('/mv/url', {
    id
  })
}

// 获取mv数据  mvid: 视频ID
export function getMvDetails(mvid: number): Promise<AxiosVideoDetailsTypes>{
  return axios.get<AxiosVideoDetailsTypes>('/mv/detail',{
    mvid
  })
}

// 获取mv视频页中的相关视频
export function getMvRelatedVideo(id: number): Promise<AxiosRelatedVideoTypes>{
  return axios.get<AxiosRelatedVideoTypes>('/related/allvideo', { id })
}