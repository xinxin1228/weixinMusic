// pages/detail-serch/index.ts
Page({
  data: {
    searchText: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {

  },

  // 用户搜索内容
  handelSearch(event: any){
    console.log('开始搜索')
    console.log('当前搜索:' + event.detail)
  }
})