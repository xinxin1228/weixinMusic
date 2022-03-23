import { getTopMv, AxiosMusicTypes } from '../../server/api_video/index'

Page({
  /**
   * 页面的初始数据
   */
  data: {
    // 视频数据
    videoList: [] as Array<AxiosMusicTypes>,
    // 是否还有数据
    hasMore: true
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {
    // 调用数据
    this.axiosMethods(0)
  },
  // 封装网络请求的方法 offset => 数据偏移量 refresh => 是否上拉加载 refresh => 是否下拉刷新
  async axiosMethods(offset: number, load: boolean = false, refresh: boolean = false){
    if(!this.data.hasMore && !refresh) return
    const res = await getTopMv(offset)
    let listData = this.data.videoList
    // 是否上拉加载
    if(!load){
      // @ts-ignore
      listData = res.data
    } else {
      // @ts-ignore
      listData.push(...res.data)
    }
    // @ts-ignore
    this.setData({ videoList: listData })
    this.setData({ hasMore: res.hasMore })
  },
  // 生命周期 监听到上拉加载
  async onReachBottom(){
    // if(!this.data.hasMore) return
    // const res = await getTopMv(this.data.videoList.length)
    // // @ts-ignore
    // this.setData({ videoList: [...this.data.videoList, ...res.data] })
    // this.setData({ hasMore: res.hasMore})
    this.axiosMethods(this.data.videoList.length, true)
  },
  // 生命周期 监听下拉刷新
  async onPullDownRefresh(){
    const math = Math.random() * 10 + 10 | 0
    this.axiosMethods(math, false, true)
  },
  // 封装函数 监听视频的点击  videoId => 视频ID
  handleVideoItemClick(event: any){
    // 获取当前点击的id
    const id: number = event.target.dataset.item.id
    // 页面跳转
    wx.navigateTo({
      url: '../../pages/detail-video/index?id=' + id,
    })
  }
})