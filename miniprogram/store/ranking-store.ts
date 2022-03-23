import { HYEventStore } from 'hy-event-store'
import { getMusicRanking } from '../server/api_music/index'
import type { AxiosMusicRankingTypes, MusicRankingDataTypes } from '../server/api_music/index'

// 映射 数据之间映射
const rankingMap = {
  0: "newRanking",
  1: "hotRanking",
  2: "originRanking",
  3: "soarRanking"
}

const rankingStore = new HYEventStore({
  // 保存的数据
  state: {
    // 推荐歌单数据 热歌榜
    hotRanking: {} as MusicRankingDataTypes,
    // 新歌榜
    newRanking: {} as MusicRankingDataTypes,
    // 原创榜
    originRanking: {} as MusicRankingDataTypes,
    // 飙升榜
    soarRanking: {} as MusicRankingDataTypes
  },
  // 异步网络请求
  actions: {
    getRankingDataAction(ctx: any){
      // 0: 新歌榜 1: 热歌榜 2: 原创榜 3:飙升榜
      for(let i = 0; i < 4; i++){
        getMusicRanking(i).then((res: AxiosMusicRankingTypes) => {
          // 获取当前的榜单
          // @ts-ignore
          const rankingName = rankingMap[i]
          // 添加到state中的hotRankling
          ctx[rankingName] = res.playlist
        })
      }
    }
  }
})

export {
  rankingStore
}