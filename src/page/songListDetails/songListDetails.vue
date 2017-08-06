<template>
  <div>
  <div class="header">
    <!--头部功能栏-->
    <div class="header-title">
      <i class="iconfont icon-fanhui" @click="backToMain"></i>
      <span>歌单</span>
      <i class="iconfont icon-yinle" @click="goMusicDetail"></i>
    </div>

    <!--歌单情况-->
    <div class="header_content">
      <div>
        <!--<img v-lazy="songListDetails.picUrl"/>-->
        <i class="iconfont icon-erji">{{songListDetails.playCount}}</i>
        <i class="iconfont icon-iconfontxiangqingicon"></i>
      </div>
      <div>
        <p>{{songListDetails.name}}</p>
        <div>
          <img v-lazy="songListDetails.creator.avatarUrl">
          <span> {{songListDetails.creator.nickname}}</span>
          <i class="iconfont icon-you"></i>
        </div>
      </div>
    </div>

    <div class="header-footer">
      <!--收藏-->
      <span>
        <i class="iconfont icon-shoucang"></i>
        <p>{{songListDetails.subscribedCount}}</p>
      </span>
      <!--评论-->
      <span>
        <i class="iconfont icon-pinglun01"></i>
        <p>{{songListDetails.commentCount}}</p>
      </span>
      <!--分享-->
      <span>
        <i class="iconfont icon-fenxiang"></i>
        <p>{{songListDetails.shareCount}}</p>
      </span>
    </div>
  </div>

  <div class="songList">
    <ul>
      <router-link :to="{name:'songDetail',params:{id:item.id}}" v-for="(item,i) in songListDetails.tracks" tag="li" :key="i">
        <i>{{i+1}}</i>
        <span>
          <p>{{item.name}}</p>
          <s>{{item.ar[0].name}}</s>
        </span>
      </router-link>
    </ul>
  </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  export default {
    name: 'songListDetails',
    computed:{
      ...mapState({
        songListDetails: state => state.songListDetails,
        curMusic: state =>state.playSongs.curMusic,
      })
    },
    created()
    {
      console.log(this.$route.params.id);
      this.$store.dispatch('get_songListDetails',{
        id: this.$route.params.id
      });
    },

    methods:{
      //返回主界面
      backToMain()
      {
        this.$router.push({
          name:'recommend',
        });
      },

      //进入歌曲播放洁面
      goMusicDetail()
      {
        this.$router.push({
          name: 'songDetail',
          params:{
            id:this.curMusic
          }
        })
      },

    }
  }
</script>

<type>

</type>
