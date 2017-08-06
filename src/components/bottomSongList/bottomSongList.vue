<template>
  <div class="bottomList">
    <div class="bottom-header">
      <h1>歌单列表</h1>
    </div>

    <div class="bottom-content">
      <ul>
        <li v-for="(item,i) in songListDetails.tracks"  :key="i" @click="switchSongs">
          <i class="iconfont icon-laba" v-if="item.id==curMusic"></i>
          {{item.name}}
          <s> - {{item.ar[0].name}}</s>
        </li>
      </ul>
    </div>

    <div class="bottom-footer">
      <p @click="closeBottomSongList">关闭</p>
    </div>
  </div>
</template>




<script>
  import {mapState} from 'vuex'
  export  default {
    name : 'bottomSongList',
    components: {

    },

    methods:{
      switchSongs() {

      },
      closeBottomSongList(){
        this.$store.commit('set_songListStatus',false);
      }
    },

    computed:{
      ...mapState({
        songListDetails: state => state.songListDetails,
        curMusic : state => state.playSongs.curMusic,
      })
    }
  }


</script>






<style>

</style>
