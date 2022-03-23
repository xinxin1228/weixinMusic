// 节流函数 fun: 需要节流的函数 timeout: 节流时长 
export default function(fun: any, timeout: number = 1000){
  let time: number = 0
  return function(event: any){
    return new Promise((resolve) => {
      const nowTime = Date.now()
      if( nowTime - time >= timeout ){
        // @ts-ignore
        const res = fun.call(this, event)
        time = nowTime
        resolve(res)
      }
    })
  }
}