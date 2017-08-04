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
  }

}
