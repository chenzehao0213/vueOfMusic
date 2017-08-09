<template>
  <div id="rankList">
    <header-nav index="2"></header-nav>
    <h1 class="title">云音乐官方榜</h1>

    <!--飙升榜-->
    <div class="list-item">
      <img v-lazy="cloudMusicRankList.coverImgUrl"/>
      <router-link to="" tag="ul">
          <li v-for="(item,i) in dealTopList(cloudMusicRankList.tracks)">
            {{i+1}}.{{item.name}} - {{item.artists[0].name}}
          </li>
      </router-link>
    </div>

    <!--新歌榜-->
    <div class="list-item">
      <img v-lazy="cloudMusicNewList.coverImgUrl"/>
      <router-link to="" tag="ul">
        <li v-for="(item,i) in dealTopList(cloudMusicNewList.tracks)">
          {{i+1}}.{{item.name}} - {{item.artists[0].name}}
        </li>
      </router-link>
    </div>

    <!--原创榜-->
    <div class="list-item">
      <img v-lazy="cloudMusicOriginList.coverImgUrl"/>
      <router-link to="" tag="ul">
        <li v-for="(item,i) in dealTopList(cloudMusicOriginList.tracks)">
          {{i+1}}.{{item.name}} - {{item.artists[0].name}}
        </li>
      </router-link>
    </div>

    <!--热歌榜-->
    <div class="list-item">
      <img v-lazy="cloudMusicHotList.coverImgUrl"/>
      <router-link to="" tag="ul">
        <li v-for="(item,i) in dealTopList(cloudMusicHotList.tracks)">
          {{i+1}}.{{item.name}} - {{item.artists[0].name}}
        </li>
      </router-link>
    </div>

    <!--ktv榜-->
    <div class="list-item">
      <img v-lazy="cloudMusicKTVList.coverImgUrl"/>
      <router-link to="" tag="ul">
        <li v-for="(item,i) in dealTopList(cloudMusicKTVList.tracks)">
          {{i+1}}.{{item.name}} - {{item.artists[0].name}}
        </li>
      </router-link>
    </div>

    <!--电音榜-->
    <div class="list-item">
      <img v-lazy="cloudMusicEleList.coverImgUrl"/>
      <router-link to="" tag="ul">
        <li v-for="(item,i) in dealTopList(cloudMusicEleList.tracks)">
          {{i+1}}.{{item.name}} - {{item.artists[0].name}}
        </li>
      </router-link>
    </div>

  </div>
</template>





<script>
  import headerNav from '../../components/headerNav/headNav.vue'
  import {mapState} from 'vuex'
  export default
  {
    name:'rankList',
    components:{headerNav},
    computed:{
      ...mapState({
        //飙升榜
        cloudMusicRankList : state => state.cloudMusicRankList,
        //新歌榜
        cloudMusicNewList : state => state.cloudMusicNewList,
        //原创榜
        cloudMusicOriginList : state => state.cloudMusicOriginList,
        //热歌榜
        cloudMusicHotList : state => state.cloudMusicHotList,
        //ktv榜
        cloudMusicKTVList : state => state.cloudMusicKTVList,
        //电音榜
        cloudMusicEleList : state => state.cloudMusicEleList,
      })
    },
    created(){
      this.$store.dispatch('get_recommend_cloudMusicRankList');
    },
    methods:
      {
        dealTopList(list){
          if(list==undefined)
          {
            return;
          }
          else if(list.length>0)
          {
            return list.slice(0,3);
          }
        }
      }

  }
</script>



<style lang="less">
  @import "../../assets/style/mixin.less";
  #rankList{
    .mx_wh(100%,auto);
    .title{
      .mx_fsc(.2rem,#333);
    }
    .list-item{
      .mx_flex;
      .mx_wh(100%,1.2rem);
      margin:.02rem;
      img{
        .mx_flex_item(2);
      }
      ul{
        .mx_flex_item(3);
        height:100%;
        padding-top:.1rem;
        li{
          .mx_fsc(.12rem,#666);
          .mx_single_ellipsis;
          align-items:center;
          height: 30%;

        }
      }
    }
  }
</style>
