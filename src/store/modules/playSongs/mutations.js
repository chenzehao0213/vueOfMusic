export default {
  //设置歌曲详情
  set_songDetails(state,payload)
  {
    state.songDetails = payload;
  },

  //设置歌词
  set_lyric(state,payload)
  {
    state.lyric = payload;
  },

  //设置音乐链接
  set_musicUrl(state,payload)
  {
    state.musicUrl = payload;
  },

  //设置音乐的当前时间
  set_musicCurrent(state, payload){
    state.musicCurrent = payload;
  },

  //设置歌曲的时长
  set_musicDuration(state,payload)
  {
    state.musicDuration = payload;
  },

  //播放音乐
  set_playStatus(state,payload)
  {
    state.playStatus = payload;
  },

  //当前音乐
  set_curMusic(state,payload)
  {
    state.curMusic = payload;
    console.log(state.curMusic);
  },

  //是否打开播放列表
  set_songListStatus(state,payload)
  {
    state.songListStatus = payload;
  }



}
