<template>
  <!-- @canPlay="playMusic" ref="playStrip"-->
  <div id="music">
    <audio id="musicPlayer" :src="musicUrl" @ended="initMusicState" @timeupdate="setCurTime" ref="playStrip"
           @durationchange="setDuration" @canPlay="playMusic"></audio>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  import playStrip from '../../components/playStrip/playStrip.vue'
  export default
  {
    name: 'music',
    components: {
      playStrip
    },
    computed: {
      ...mapState({
        // 音乐url
        musicUrl: state => state.playSongs.musicUrl,
        // 播放状态
        playStatus: state => state.playSongs.playStatus,
        // 当前音乐
        curMusic: state => state.playSongs.curMusic,
        // 歌单
        songListDetails: state => state.songListDetails.tracks
      })
    },
    methods: {
      // 当前音乐的时间
      setCurTime (){
         //console.log(this.$refs.playStrip.currentTime);
         this.$store.commit('set_musicCurrent', this.$refs.playStrip.currentTime);
      },
      // 设置歌曲时长
      setDuration(){
         //console.log(this.$refs.playStrip.duration);
         this.$store.commit('set_musicDuration', this.$refs.playStrip.duration);
      },
      // 播放音乐
      playMusic(){
         this.$store.commit('set_playStatus', true);
      },
       //初始化播放状态
      initMusicState(){
        if(this.songListDetails.length > 0)
        {
          let obj ={
            id: this.$route.params.id,
            type: 'next'
          };
          this.$store.dispatch('go_switchSongs',obj).then(
            (res) => {
              //false则暂停
              console.log(res);
              if(res == false)
              {
                this.$refs.playStrip.pause();
                this.$store.commit('set_playStatus',false);
                this.$store.commit('set_musicDuration',0);
              }
              else
              {
                this.$store.dispatch('get_playMusicDetails',res);
                this.$router.push({
                  name: 'songListDetails',
                  params:{
                    id: res
                  }
                })
              }
            }
          )
        }
        else
        {
          this.$refs.playStrip.pause();
          this.$store.commit('set_playStatus',false);
          this.$store.commit('set_musicDuration',0);
        }
      }
    },
    watch: {
      //监听歌曲的播放状态
      playStatus(state)
      {
        if(state == true)
        {
          this.$nextTick(() => {
            this.$refs.playStrip.play();
          })
        }
        else
          this.$refs.playStrip.pause();
      },

      //监听音乐是否切歌
      musicUrl(val, oldval){
        if(oldval != "")
        {
          this.$nextTick(() => {
            this.$store.commit('set_playStatus', true);
            this.$refs.playStrip.play();
          })
        }
      }
    }
  }

</script>





<style>

</style>
