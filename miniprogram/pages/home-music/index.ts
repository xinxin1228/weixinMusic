// pages/home-music/index.ts
import {
  getSwipperData,
  getMusicPlaylist,
  getMusicRanking
} from '../../server/api_music/index'
import type {
  SwipperDataTypes,
  AxiosSwipperTypes,
  MusicRankingDataTypes,
  AxiosMusicPlaylistTypes,
  MusicPlaylistDataTypes,
  MusicPackListDataTypes
} from '../../server/api_music/index'
import query from '../../utils/query'
import throttle from '../../utils/throttle' 
import { rankingStore } from '../../store/index'

// 将获取swiper高度 使用节流函数
const throttleQueryRect = throttle(query, 1000)

// 巅峰榜单数据映射
const packDataMap = ['newRanking', 'originRanking', 'soarRanking']

Page({
  /**
   * 页面的初始数据
   */
  data: {
    // 轮播图数据
    swipperData: [] as Array<SwipperDataTypes>,
    // 轮播图高度 随图片大小而改变
    swiperHeight: 0,
    // 热门歌曲
    hotplayLists: [] as Array<any>,
    // 热门歌单
    topPlaylists: [] as Array<MusicPlaylistDataTypes>,
    // 推荐歌单
    recommendPlaylist: [] as Array<MusicPlaylistDataTypes>,
    // 巅峰榜单数据
    peakRanking: [] as Array<MusicPackListDataTypes>,
    // 新歌榜  已废弃
    // newRanking: {} as MusicPackListDataTypes,
    // 原创榜 已废弃
    // originRanking: {} as MusicPackListDataTypes,
    // 飙升榜 已废弃
    // soarRanking: {} as MusicPackListDataTypes
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {
    // 获取轮播图数据
    getSwipperData().then((res: AxiosSwipperTypes) => {
      this.setData({ swipperData: res.banners })
    })
    // 获取歌曲种类 
    // 异步调用getRankingDataAction
    rankingStore.dispatch('getRankingDataAction')
    // 获取ranking-store中的hotRanking
    rankingStore.onState('hotRanking', (res: MusicRankingDataTypes) => {
      if(!res.tracks) return
      const lists = res.tracks.slice(0, 6)
      this.setData({ hotplayLists: lists })
    })

    // 获取热门歌单
    getMusicPlaylist().then((res: AxiosMusicPlaylistTypes) => {
      this.setData({ topPlaylists: res.playlists as Array<MusicPlaylistDataTypes> })
    }),
    // 获取推荐歌单
    getMusicPlaylist('华语').then((res: AxiosMusicPlaylistTypes) => {
      this.setData({ recommendPlaylist: res.playlists as Array<MusicPlaylistDataTypes> })
    })
    
    // 获取巅峰榜歌单数据
    // packDataMap
    rankingStore.onState("newRanking", this.getRankingData)
    rankingStore.onState("originRanking", this.getRankingData)
    rankingStore.onState("soarRanking", this.getRankingData)  
    
    // rankingStore.onState('newRanking', (res: MusicRankingDataTypes) => {
    //   if(!Object.keys(res).length) return
    //   const { name, coverImgUrl, playCount } = res
    //   const tracks = res.tracks.slice(0, 3)
    //   // @ts-ignore
    //   this.setData({ newRanking: { name, coverImgUrl, playCount, tracks } })
    // })
  },

  // 用户点击搜索框
  handelSearchClick(){
    wx.navigateTo({
      url: "../../pages/detail-serch/index"
    })
  },

  // 图片加载完成
  handleImageLoad(){
    throttleQueryRect('.swiper-image').then((res: any) => {
      this.setData({ swiperHeight: res[0].height })
    })
  },


  // 获取榜单数据
  getRankingData(res: MusicRankingDataTypes){
    if(!Object.keys(res).length) return
    const { name, coverImgUrl, playCount } = res
    const tracks = res.tracks.slice(0, 3)
    const RankingObj = { name, coverImgUrl, playCount, tracks }
    const RankingArr = [...this.data.peakRanking]
    // @ts-ignore
    RankingArr.push(RankingObj)
    this.setData({ peakRanking: RankingArr })

    if(this.data.peakRanking.length === 3){
      const newArr = []
      newArr[0] = this.data.peakRanking.find(item => item.name === '新歌榜')
      newArr[1] = this.data.peakRanking.find(item => item.name === '原创榜')
      newArr[2] = this.data.peakRanking.find(item => item.name === '飙升榜')
      // @ts-ignore
      this.setData({ peakRanking: newArr })
    }
  },

  
})