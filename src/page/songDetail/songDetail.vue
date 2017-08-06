<template>
  <div id="songDetail">
    <!--头部功能栏-->
    <div class="header">
      <i class="iconfont icon-fanhui" @click="goback"></i>
      <span>
        <p>{{songDetails.songs[0].name}}</p>
        <p>{{songDetails.song[0].ar[0].name}}</p>
      </span>
    </div>

    <!--音乐播放框和歌词框-->
    <div class="content">
      <div v-if="showLyric== false">
        <i class="iconfont "></i>
      </div>
      <div v-if="showLyric== true"></div>
    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  export default {
    name:'songDetail',
    components:{

    },
    computed:{
      ...mapState({
        songDetails: state => state.playSongs.songDetails,

      })
    },
    created()
    {
      this.$store.dispatch('get_playMusicDetails',this.$route.params.id);
    },
    data()
    {
      return{
        showLyric : false,
      }
    }
  }
</script>

<style>

</style>
