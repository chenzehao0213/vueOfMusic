<template>
  <div id="bottomList">
    <div class="bottom-header">
      <h1>歌单列表</h1>
    </div>

    <div class="bottom-content">
      <ul>
        <li v-for="(item,i) in songListDetails.tracks"  :key="i" @click="switchSongs(item.id)" :class="{'selected-style':item.id==curMusic}">
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
      switchSongs(id) {
        this.$store.dispatch('get_playMusicDetails',id);
        this.$router.push({
          name:'songDetail',
          params:{
            id:id
          }
        })
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






<style lang="less">
  @import  '../../assets/style/mixin';
  #bottomList{
    z-index: 999;
    background: #fff;
    .mx_wh(100%,70%);
    .mx_postl(30%,0);
    .bottom-header{
      .mx_wh(100%,10%);
      .mx_fsc(.15rem,#000);
      .mx_flex_mid;
      border-bottom: #666 1px solid;
    }
    .bottom-content{
      .mx_wh(100%,80%);
      .mx_fsc(.15rem,#000);
      overflow:scroll;
      margin-left: 5%;
      li{
        .mx_flex_item(0 0 15%);
        padding:.1rem 0 .02rem 0;
        border-bottom:1px solid #d3d3d3;
        .mx_single_ellipsis;
        s{
          text-decoration: none;
          .mx_fsc(.12rem,#666);
        }
      }
      .selected-style{
        color:#ff3333;
      }
    }
    .bottom-footer{
      .mx_wh(100%,10%);
      .mx_fsc(.3rem,#000);
      .mx_flex_mid;
      border-top:#666 solid 1px;
    }
  }</style>
