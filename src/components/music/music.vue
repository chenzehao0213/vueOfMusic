<template>
  <div id="music">
    <!--@ended="initMusicState"-->
    <audio id="musicPlayer" :src="musicUrl" @timeupdate="setCurTime"  @durationChange="setDuration" @canPlay="playMusic" refs="player"></audio>

  </div>
</template>

<script>
  import {mapState} from 'vuex'
  export default
  {
    name: 'music',
    computed: {
      ...mapState({
        // 音乐url
        musicUrl: state => state.playSongs.musicUrl,
        // 播放状态
        playStatus: state => state.playSongs.playStatus,
        // 当前音乐
        curMusic: state => state.playSongs.curMusic,
        // 歌单
        //songListDetails: state => state.songDetails.tracks
      })
    },
    methods: {
      // 播放音乐
      setCurTime (){
        return this.$store.commit('set_musicCurrent', this.$refs.player.currentTime)
      },
      // 设置歌曲时长
      setDuration(){
        return this.$store.commit('set_musicDuration', this.$refs.player.duration)
      },
      // 播放音乐
      playMusic(){
        return this.$store.commit('set_playStatus', true)
      },
      // 初始化播放状态
//      initMusicState(){
//        if(this.songListDetails.length > 0)
//        {
//          let obj ={
//            id: this.$router.params.id,
//            type: 'next'
//          }
//          this.$store.dispatch('go_SwitchSongs',obj).then(
//            (res) => {
//              //false则暂停
//              if(res == false)
//              {
//                this.$refs.player.pause();
//                this.$store.commit('set_playStatus',false);
//                this.$store.commit('set_musicDuration',0);
//              }
//              else
//              {
//                this.$store.dispatch('get_PlaySongDetails',res);
//                this.$router.push({
//                  name: 'songDetails',
//                  params:{
//                    id: res
//                  }
//                })
//              }
//            }
//          )
//        }
//        else
//        {
//          this.$refs.player.pause();
//          this.$store.commit('set_playStatus',false);
//          this.$store.commit('set_musicDuration',0);
//        }
//      }
    },
//    watch: {
//      //监听歌曲的播放状态
//      playStatus(state)
//      {
//        if(state == true)
//        {
//          this.$nextTick(() => {
//            this.$refs.player.play();
//          })
//        }
//        else
//          this.$refs.player.pause();
//      },
//
//      //监听音乐是否切歌
//      musicUrl(val, oldval){
//        if(oldval != "")
//        {
//          this.$nextTick(() => {
//            this.$store.commit('set_playStatus', true);
//            this.$refs.player.play();
//          })
//        }
//      }
//    }
  }

</script>





<style>

</style>
