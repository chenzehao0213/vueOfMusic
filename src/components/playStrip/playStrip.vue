<template>
  <div id="playStrip">
    <!--进度条-->
    <div class="progress-bar">
      <i class="progress-bar">
        <s class="progress-dot"></s>
      </i>
    <span class="curTime">{{this.musicCurrent}}</span>
    <span class="duration">{{this.musicDuration}}</span>
    </div>

    <!--播放控制栏-->
    <div class="playTools">
      <!--循环或单曲-->
      <span><i class="iconfont icon-xunhuan"></i></span>
      <!--上一曲-->
      <span><i class="iconfont icon-previous" @click="prevSongs"></i></span>
      <!--暂停或播放-->
      <span><i class="iconfont" :class="{'icon-bofang':playStatus==false,
                'icon-zanting':playStatus==true}" @click="switchPlayStatus"></i> </span>
      <!--下一曲-->
      <span><i class="iconfont icon-next" @click="nextSongs"></i></span>
      <!--目录-->
      <span><i class="iconfont icon-mulu" @click="showBottomList"></i></span>
    </div>
  </div>


</template>


<script>
  import {mapState} from 'vuex'
  export default {
    name:'playStrip',
    components:{

    },
    computed:{
      ...mapState({
        musicCurrent: state => state.playSongs.musicCurrent,
        musicDuration: state => state.playSongs.musicDuration,
        playStatus: state => state.playSongs.playStatus,
        songListStatus :state => state.playSongs.songListStatus,
        songListDetails:state => state.songListDetails,
      })
    },
    methods:{
      //显示播放列表
      showBottomList()
      {
        this.$store.commit('set_songListStatus',true);
      },
      //上一曲
      prevSongs()
      {
        if(this.songListDetails.tracks.length>0)
        {
          let obj={
            id:this.$route.params.id,
            type:'prev'};
          this.$store.dispatch('go_switchSongs',obj).then((res)=>{
            this.$store.dispatch('get_playMusicDetails',res);
            this.$router.push({
              name:'songDetail',
              params:{
                id:res
              }
            })
          })
        }
      },
      //下一曲
      nextSongs()
      {
        if(this.songListDetails.tracks.length>0)
        {
          let obj={
            id:this.$route.params.id,
            type:'next'};
          this.$store.dispatch('go_switchSongs',obj).then((res)=>{
            this.$store.dispatch('get_playMusicDetails',res);
            this.$router.push({
              name:'songDetail',
              params:{
                id:res
              }
            })
          })
        }
      },
      //切换播放状态 暂停||播放
      switchPlayStatus()
      {
        if(this.playStatus == true)
        {
          this.$store.commit('set_playStatus',false);
        }
        else
        {
          this.$store.commit('set_playStatus',true);
        }
      }

    }
  }
</script>


<style>

</style>
