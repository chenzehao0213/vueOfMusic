import getMusicData from "../api/getMusicData";

export default {
  //获取精品歌单
  async get_songList(context)
  {
    context.commit('set_loading',true);
    let res = await getMusicData('queryHighquality');
    console.log(res);
    context.commit('set_songList',res.data.playlists);
    context.commit('set_loading',false);
  },

  //获取排行榜
  async get_recommend_cloudMusicRankList(context)
  {
    let apiUrl = [0,1,2,3,4,7];
    for(let i=0;i<apiUrl.length;i++)
    {
      let res = await getMusicData('queryToplist',
        {
          idx:apiUrl[i]
        });
      context.commit('set_cloudMusicTopList',{
        'result': res.data.result,
        'type': apiUrl[i],
      })
    }
  },

  //获取搜索列表
  async get_searchList(context,payload)
  {
    let res = await getMusicData('querySearch',payload);
    context.commit('set_searchList',res.data.result);
  },


  //获取推荐歌单列表
  async get_songListDetails(context,payload)
  {
    let res = await getMusicData('querySongListDetail',payload);
    console.log(res);
    context.commit('set_songListDetails',res.data.playlist);
  }
}
