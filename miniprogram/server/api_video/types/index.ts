// 这里是音乐视频接口类型

// 请求音乐数据列表接口
export interface AxiosMusicTypes{
  artistId: number
  artistName: string
  artists: {
    id: number
    name: string
  }[]
  briefDesc: any
  cover: string
  desc: any,
  duration: number
  id: number
  lastRank: number
  mark: number
  name: string
  playCount: number
  score: number
  subed: boolean
  mv: MusicVideoTypes
}

// 音乐视频接口
export interface MusicVideoTypes {
  aliaName: string
  appTitle: string
  appword: string
  area: string
  artists: {
    id: number
    name: string
  }[]
  authId: number
  caption: number
  captionLanguage: string
  dayplays: number
  desc: string | null
  fee: number
  id: number
  monthplays: number
  mottos: string
  neteaseonly: number
  oneword: any  
  online: number
  pic4v3: number
  pic16v9: number
  plays: number
  publishTime: string 
  score: number
  stars: any
  status: number
  style: any
  subTitle: string
  subType: string
  title: string
  topWeeks: string
  transName: string
  type: string
  upban: number
  videos: {
    check: boolean
    container: string 
    duration: number
    height: number
    md5: string
    size: number
    tag: string
    tagSign: {
      br: number
      type: number 
      tagSign: string
      mvtype: string 
      resolution: number
    }
    url: string
    width: number
  }[]
  weekplays: number
}