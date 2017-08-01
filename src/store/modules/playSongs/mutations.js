export default {
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
  }

}
