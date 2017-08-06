<template>
  <div id="songDetail">
    <!--头部功能栏-->
    <div class="header">
      <i class="iconfont icon-fanhui" @click="goBack"></i>
      <span>
        <p>{{this.songDetails.songs[0].name}}</p>
        <p>{{this.songDetails.songs[0].ar[0].name}}</p>
      </span>
    </div>

    <!--音乐播放框和歌词框-->
    <div class="content">
      <div v-if="showLyric== false" @click="switchContentAndLyric">
        <div class="cd"></div>
        <img v-lazy="songDetails.songs[0].al.picUrl">
      </div>

      <div v-if="showLyric== true" @click="switchContentAndLyric">
        <p>{{this.lyric}}</p>
      </div>
    </div>

    <!--播放条-->
    <div class="playStrip">
      <playStrip></playStrip>
    </div>

    <!--底部工具栏-->
    <div class="bottomList" v-if="songListStatus">
      <bottom-song-list></bottom-song-list>
    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  import BottomSongList from "../../components/bottomSongList/bottomSongList.vue";
  import playStrip from '../../components/playStrip/playStrip.vue';
  export default {
    name:'songDetail',
    components:{
      BottomSongList,
      playStrip,

    },
    computed:{
      ...mapState({
        songDetails: state => state.playSongs.songDetails,
        lyric: state => state.playSongs.lyric,
        songListStatus: state => state.playSongs.songListStatus,
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
    },
    methods:{
      goBack()
      {
        this.$router.go(-1);
      },
      switchContentAndLyric()
      {
        if(this.showLyric ==true)
        {
          this.showLyric =false;
        }
        else
        {
          this.showLyric = true;
        }
      }
    }
  }
</script>

<style>

</style>
