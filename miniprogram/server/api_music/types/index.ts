// 这里是关于音乐请求的接口

// 轮播图请求接口
export interface AxiosSwipperTypes {
  code: number
  banners: Array<SwipperDataTypes>
}

// 轮播图请求数据接口
export interface SwipperDataTypes {
  adDispatchJson: any
  adLocation: any
  adSource: any
  adid: any
  adurlV2: any
  alg: any
  bannerId: string
  dynamicVideoData: any
  encodeId: string
  event: any
  exclusive: boolean
  extMonitor: any
  extMonitorInfo: any
  monitorBlackList: any
  monitorClick: any
  monitorClickList: any
  monitorImpress: any
  monitorImpressList: any
  monitorType: any
  pic: string
  pid: null
  program: null
  requestId: string
  scm: string
  showAdTag: boolean
  showContext: any
  song: null
  targetId: number
  targetType: number
  titleColor: string
  typeTitle: string
  url: string
  video: any
}

// 请求歌曲排行歌单接口
export interface AxiosMusicRankingTypes {
  code: number
  playlist: MusicRankingDataTypes
}

// 请求歌曲排行歌单数据接口
export interface MusicRankingDataTypes {
  ToplistType: string
  adType: number
  backgroundCoverId: number
  backgroundCoverUrl: null
  cloudTrackCount: number
  commentCount: number
  commentThreadId: string
  coverImgId: number
  coverImgId_str: string
  coverImgUrl: string
  createTime: number
  creator: {
    defaultAvatar: boolean
    province: number
    authStatus: number
    followed: boolean
    avatarUrl: string
    [name: string]: any
  }
  description: string
  englishTitle: null
  highQuality: boolean
  historySharedUsers: null
  id: number
  name: string
  newImported: boolean
  officialPlaylistType: null
  opRecommend: boolean
  ordered: boolean
  playCount: number
  privacy: number
  remixVideo: null
  shareCount: number
  sharedUsers: null
  specialType: number
  status: number
  subscribed: null
  subscribedCount: number
  subscribers: {
    [name: string]: any
  }[]
  tags: [any]
  titleImage: number
  titleImageUrl: null
  trackCount: number
  trackIds: {
    [name: string]: any
  }[]
  trackNumberUpdateTime: number
  trackUpdateTime: number
  tracks: {
    [name: string]: any
  }[]
  updateFrequency: null
  updateTime: number
  userId: number
  videoIds: null
  videos: null
}

// 请求歌单推荐接口
export interface AxiosMusicPlaylistTypes {
  cat: string
  code: number
  more: boolean
  playlists: {}[]
  total: number
}

// 请求歌单推荐中歌单信息数据接口
export interface MusicPlaylistDataTypes {
  adType: number
  alg: string
  anonimous: boolean
  cloudTrackCount: number
  commentCount: number
  commentThreadId: string
  coverImgId: number
  coverImgId_str: string
  coverImgUrl: string
  coverStatus: number
  createTime: number
  creator: {
    defaultAvatar: boolean
    province: number
    authStatus: number
    followed: boolean
    avatarUrl: string
    [name: string]: any
  }
  description: string
  highQuality: boolean
  id: number
  name: string
  newImported: boolean
  ordered: boolean
  playCount: number
  privacy: number
  recommendInfo: null
  shareCount: number
  specialType: number
  status: number
  subscribed: null
  subscribedCount: number
  subscribers: {
    [name: string]: any
  }[]
  tags: Array<string>
  totalDuration: number
  trackCount: number
  trackNumberUpdateTime: number
  trackUpdateTime: number
  tracks: null
  updateTime: number
  userId: number
}

// 请求首页巅峰榜的三个榜单数据接口
export interface MusicPackListDataTypes {
  coverImgUrl: string
  tracks: Array<MusiceDataTypes>
  name: string
  playCount: string
}

// 歌曲数据接口
export interface MusiceDataTypes {
  a: null
  al: {
    id: number
    name: string
    picUrl: string
    tns: [any]
    pic_str: string
    [name: string]: any
  }
  alia: []
  ar: {
    [name: string]: any
  }[]
  cd: string
  cf: string
  copyright: number
  cp: number
  crbt: null
  djId: number
  dt: number
  fee: number
  ftype: number
  h: {
    br: number
    fid: number
    size: number
    vd: number
  }
  id: number
  l: {
    br: number
    fid: number
    size: number
    vd: number
  }
  m: {
    br: number
    fid: number
    size: number
    vd: number
  }
  mark: number
  mst: number
  mv: number
  name: string
  no: number
  noCopyrightRcmd: null
  originCoverType: number
  [name: string]: any
}