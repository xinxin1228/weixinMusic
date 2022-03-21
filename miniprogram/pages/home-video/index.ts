import { getTopMv, AxiosMusicTypes } from '../../server/api_video/index'
// import { conversionPlayCount } from '../../utils/conversion.wxs'
// conversionPlayCount(809123)
// pages/home-video/index.ts
Page({

  /**
   * 页面的初始数据
   */
  data: {
    videoList: [] as Array<AxiosMusicTypes>
  },

  /**
   * 生命周期函数--监听页面加载
   */
  async onLoad() {
    const res =  await getTopMv(0)
    // console.log(res.data)
    // @ts-ignore
    this.setData({ videoList: res.data })
    
  },
})