// components/video-item-v2/index.ts
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    // 接受传过来的数据
    mvLists: {
      type: Array,
      default: []
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    handelClick(event: any){
      const id = event.currentTarget.dataset.item.vid
      console.log('点击了', event.currentTarget.dataset.item)
    }
  }
})
