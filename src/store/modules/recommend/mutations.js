export  default {
  //设置banner
  set_recommend_Banner(state,payload)
  {
    state.bannerList = payload;
  },

  //设置推荐歌单
  set_recommend_recommendList(state,payload)
  {
    state.recommendList = payload;
  },

  //设置独家放送
  set_recommend_privateContext(state,payload)
  {
    state.privateContext = payload;
  },

  //设置推荐mv
  set_recommend_recommendMV(state,payload)
  {
    state.recommendMV = payload;
  },

  //设置主播电台
  set_recommend_radioStations(state,payload)
  {
    state.radioStations = payload;
  }

}
