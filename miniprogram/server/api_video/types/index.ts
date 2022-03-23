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

// 请求音乐地址接口
export interface AxiosMusicVideoTypes{
  code: number
  data: MusicVideoDataTypes
}

// 请求音乐地址数据接口
export interface MusicVideoDataTypes{
  code: number
  expi: number
  fee: number
  id: number
  md5: string
  msg: string
  mvFee: number
  promotionVo: any
  r: number
  size: number
  st: number
  url: string | null
}

// 请求地址详情接口
export interface AxiosVideoDetailsTypes{
  bufferPic: string
  bufferPicFS: string
  code: number
  data: VideoDetailsDataTypes
  loadingPic: string
  loadingPicFS: string
  mp: {
    cp: number
    dl: number
    fee: number
    id: number
    msg: any
    mvFee: number
    normal: boolean
    payed: number
    pl: number
    sid: number
    st: number
    unauthorized: boolean
  }
  subed: boolean
}

// 请求地址详情数据接口
export interface VideoDetailsDataTypes {
  artistId: number
  artistName: string
  artists: {
    followed: boolean
    id: number
    img1v1Url: any
    name: string
  }[]
  briefDesc: string
  brs: {
    size: number
    br: number
    point: number
  }[]
  commentCount: number
  commentThreadId: string
  cover: string | null
  coverId: number
  coverId_str: string
  desc: string | null
  duration: number
  id: number
  nType: number
  name: string
  playCount: number
  price: any
  publishTime: string
  shareCount: number
  subCount: number
  videoGroup: []
}

// 请求相关视频接口
export interface AxiosRelatedVideoTypes {
  code: number
  data: Array<RelatedVideoDataTypes>
  message: string
}

// 请求相关视频数据接口
export interface RelatedVideoDataTypes {
  alg: string
  aliaName: any
  coverUrl: string
  creator: {
    userId: number
    userName: string
  }[]
  durationms: number
  liveRoom: any
  markTypes: []
  playTime: number
  title: string
  transName: any
  type: number
  vid: string
}