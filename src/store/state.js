export default {
  //歌单列表
  songList: [],
  //是否在加载
  loading: false,
  //云音乐飙升榜
  cloudMusicRankList: [],
  //新歌榜
  cloudMusicNewList: [],
  //原创榜
  cloudMusicOriginList: [],
  //热歌榜
  cloudMusicHotList: [],
  //KTV榜
  cloudMusicKTVList: [],
  //电音榜
  cloudMusicEleList:[],
  //搜索
  searchList: [],
  //推荐歌单的列表
  songListDetails:{
    'coverImgUrl': '',
    'playCount': '',
    'name': '',
    'creator': {
      'avatarUrl': ''
    },
    'collectionCount':0,
    'commentCount': 0,
    'shareCount': 0,
    'tracks': []
  }
}
