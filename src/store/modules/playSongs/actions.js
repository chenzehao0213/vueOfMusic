import getMusicData from '../../../api/getMusicData'
export default {
  //获取歌曲链接
  async get_musicUrl(context,payload)
  {
    let res = await getMusicData('queryMusicUrl',{
      id:payload
    });
   // console.log(res);
    //是否更新musicUrl
    if(context.state.curMusic =='' || context.state.curMusic != payload)
    {
      context.commit('set_musicUrl',res.data.data[0].url);
      context.commit('set_curMusic',payload);
    }
  },

  //获取歌曲详情
  async get_songDetails(context,payload)
  {
    //console.log(payload);
    let res = await getMusicData('querySongDetail',{
      id:payload
    });
    //console.log(res);
    context.commit('set_songDetails',res.data);
  },

  //获取歌词
  async get_lyric(context,payload)
  {
    let res = await getMusicData('queryLyric',{
      id:payload
    });
    console.log(res);
    if(res.data.lrc != undefined)
    {
      context.commit('set_lyric',res.data.lrc.lyric);
    }
    else
    {
      context.commit('set_lyric','歌曲获取失败');
    }
  },

  //获取音乐播放所需要的接口
  async get_playMusicDetails(context,payload)
  {
    context.dispatch('get_musicUrl',payload);
    context.dispatch('get_songDetails',payload);
    context.dispatch('get_lyric',payload);
  }

  //


}
