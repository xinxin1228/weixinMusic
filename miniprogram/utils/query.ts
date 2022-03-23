// 选择器， 用于获取元素的信息 比如宽度和高度
export default function(selector: string){
  return new Promise( resolve => {
    const query = wx.createSelectorQuery()
    query.select(selector).boundingClientRect()
    query.exec(resolve)
  } )
}