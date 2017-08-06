export default
{
  //获取精品歌单
  set_songList(state,payload)
  {
    state.songList = payload;
  },

  //是否正在加载
  set_loading(state, payload)
  {
    state.loading = payload;
  },

  //排行榜
  set_cloudMusicTopList(state,payload)
  {
    switch (payload.type)
    {
      case 0:
        console.log(payload.result);
        state.cloudMusicNewList = payload.result;
        break;
      case 1:
        state.cloudMusicHotList = payload.result;
        break;
      case 2:
        state.cloudMusicOriginList = payload.result;
        break;
      case 3:
        state.cloudMusicRankList = payload.result;
        break;
      case 4:
        state.cloudMusicEleList = payload.result;
        break;
      case 7 :
        state.cloudMusicKTVList = payload.result;
    }
  },

  //搜索
  set_searchList(state,payload)
  {
    state.searchList = payload;
  },

  //推荐歌单的列表
  set_songListDetails(state,payload)
  {
    state.songListDetails = payload;
  }
}
