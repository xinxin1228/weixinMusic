// pages/detail-video/index.ts
import { 
  getMvAddress,
  getMvDetails,
  getMvRelatedVideo 
} from '../../server/api_video/index'
import type { 
    MusicVideoDataTypes,
    VideoDetailsDataTypes,
    RelatedVideoDataTypes
  } from '../../server/api_video'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 视频ID
    videoID: 0,
    // 视频地址内容
    mvAddress: {} as MusicVideoDataTypes,
    // 视频详情内容
    mvDetails: {} as VideoDetailsDataTypes,
    // 相关视频
    relatedVideo: [] as Array<RelatedVideoDataTypes>
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options: any) {
    // 获取视频ID
    // @ts-ignore
    this.setData({ videoID: options.id })
    // 获取数据
    this.getCurpageData()
  },
  // 获取当前页面需要的数据
  getCurpageData(){
    // 获取视频地址
    getMvAddress(this.data.videoID).then(res => {
      this.setData({ mvAddress: res.data  })
    })
    // 获取视频详情
    getMvDetails(this.data.videoID).then(res => {
      this.setData({ mvDetails: res.data  })
      // 更改标题
      wx.setNavigationBarTitle({
        title: this.data.mvDetails.name
      })
    })
    // 获取相关视频
    getMvRelatedVideo(this.data.videoID).then(res => {
      this.setData({ relatedVideo: res.data })
    })
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})