<template>
  <div id="songDetail">
    <!--头部功能栏-->
    <div class="header">
      <i class="iconfont icon-fanhui" @click="goBack"></i>
      <p>{{this.songDetails.songs[0].name}}</p>
      <span>{{this.songDetails.songs[0].ar[0].name}}</span>
      <div class="bar-line"></div>
    </div>

    <!--音乐播放框和歌词框-->
    <div class="content">
      <span class="play-controler" :class="{'play-controler-status':playStatus==true}" v-if="showLyric==false"></span>
      <!--cd-->
      <div v-if="showLyric== false" >
        <div class="cd" :class="{'stop-anima-status':playStatus==false}"></div>
        <img v-lazy="songDetails.songs[0].al.picUrl" class="cdImg" :class="{'stop-anima-status':playStatus==false}">
      </div>
      <!--歌词-->
      <div v-if="showLyric== true" @click="showLyric= false" class="lyricBox">
        <ul :style="{marginTop:format.compLyricPos(musicCurrent,lyric)}">
          <li v-for="(item,i) in lyric" :key="i" :class="{highBright:format.formatLyrichighBright(musicCurrent,lyric,i)}">{{item[1]}}</li>
        </ul>
      </div>
      <!--播放条-->
      <div class="playStrip">
        <playStrip></playStrip>
      </div>
    </div>

    <div class="masking">
      <div class="cover-bg" :style="{backgroundImage:'url('+songDetails.songs[0].al.picUrl+')'}"></div>
      <div class="cover-masking"></div>
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
        playStatus: state => state.playSongs.playStatus,
        musicCurrent: state => state.playSongs.musicCurrent
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
        this.$store.commit('set_songListStatus', false);
      },
    }
  }
</script>

<style lang="less">
  @import "./songDetail";
</style>
