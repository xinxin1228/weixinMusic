// 这里是关于首页的音乐请求
import axios from '../../utils/axios'
import type {
  AxiosSwipperTypes,
  AxiosMusicRankingTypes,
  AxiosMusicPlaylistTypes  
} from './types'

export * from './types/index'

// 请求首页轮播图
export const getSwipperData = (): Promise<AxiosSwipperTypes> => {
  return axios.get<AxiosSwipperTypes>('/banner',{
    type: 2
  })
}

// 请求歌曲排行歌单  type: 歌曲种类（0 飙升 1 热门 2 新歌 3 原创）
export const getMusicRanking = (idx: number): Promise<AxiosMusicRankingTypes> => {
  return axios.get<AxiosMusicRankingTypes>('/top/list', {
    idx
  })
}

// 请求首页歌单 热门歌单和推荐歌单
export const getMusicPlaylist = (cat: string = '全部', limit: number = 6, offset: number = 0) => {
  return axios.get<AxiosMusicPlaylistTypes>('/top/playlist',{
    cat,
    limit,
    offset
  })
}