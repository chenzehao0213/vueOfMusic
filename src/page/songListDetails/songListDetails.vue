<template>
  <div id="songListDetails">
  <div class="header">
    <!--头部功能栏-->
    <div class="header-title">
      <i class="iconfont icon-fanhui" @click="backToMain"></i>
      <span>歌单</span>
      <i class="iconfont icon-yinle" @click="goMusicDetail"></i>
    </div>

    <!--歌单情况-->
    <div class="header-content">
      <div class="header-content-pic">
        <img v-lazy="songListDetails.coverImgUrl"/>
        <i class="iconfont icon-erji">{{songListDetails.playCount}}</i>
        <i class="iconfont icon-iconfontxiangqingicon"></i>
      </div>
      <div class="header-content-songInfo">
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
      if(this.$route.params.id != undefined)
      {
        this.$store.dispatch('get_songListDetails',{
          id: this.$route.params.id
        });
      }
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

<style lang="less">
  @import "../../assets/style/mixin.less";
  #songListDetails{
    .header{
      .mx_wh(100%,auto);
      background: linear-gradient(left, #dcdcdc,#666);
      background: #666;
    }
    //头部
    .header-title{
      position: relative;
      .mx_whlh(100%,.45rem,.45rem);
      .mx_fsc(.16rem,#fff);
      text-align: center;
      .icon-fanhui{
        .mx_fsc(.22rem,#fff);
        .mx_postl(0,5%);
      }
      .icon-yinle{
        .mx_fsc(.22rem,#fff);
        .mx_postr(0,5%);
      }
    }
    //
    .header-content{
      padding: .1rem 5% 0;
      width: 90%;
      }
    .header-content-pic{
      position: relative;
      display: inline-block;
      vertical-align: top;
      width:40%;
      img{
        display: block;
        width: 90%;
      }
      .icon-erji{
        .mx_postr(.05rem,13%);
        .mx_fsc(.12rem,#fff);
      }
      .icon-iconfontxiangqingicon{
        .mx_fsc(.12rem,#fff);
        .mx_posbr(.05rem,13%);
      }
    }
    .header-content-songInfo{
      display: inline-block;
      width:50%;
      vertical-align: top;
      padding-top: .2rem;
      p{
        .mx_fsc(.16rem,#fff);
      }
      div{
        .mx_whlh(100%,auto,1);
        .mx_fsc(.12rem,#fff);
        align-items: center;
        display: flex;
      }
      img{
        .mx_bdrs(50%);
        width: 15%;
      }
      span{
        padding:0 .05rem;
        .mx_fsc(.12rem,#ccc);
      }
      .icon-you{
        .mx_fsc(.14rem,#fff);
      }
    }
    .header-footer{
      text-align: center;
      font-size: 0;
      .mx_flex;
      span{
        .mx_flex_item(1);
        i{
          .mx_fsc(.22rem,#fff);
        }
        p{
          .mx_fsc(.12rem,#fff);
        }
      }
    }
    .songList{
      li{
        .mx_whlh(100%,.4rem,.4rem);
        padding:.05rem 0;
        font-size: 0;
        i{
          .mx_fsc(.15rem,#000);
          text-align: center;
          vertical-align:top;
          display: inline-block;
          .mx_whlh(15%,.4rem,.4rem);
        }
        span{
          display: inline-block;
          text-align: left;
          vertical-align: top;
          .mx_whlh(85%,.4rem,.4rem);
          p{
            .mx_fsc(.15rem,#000);
            .mx_single_ellipsis;
            .mx_whlh(85%,.2rem,.2rem);
          }
          s{
            .mx_fsc(.1rem,#333);
            text-decoration: none;
            .mx_whlh(85%,.2rem,.2rem);
            display: block;
          }
        }
      }
    }

  }
</style>
