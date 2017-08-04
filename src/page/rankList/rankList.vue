<template>
  <div class="rankList">
    <header-nav tab-index="3"></header-nav>
    <h1>云音乐官方榜</h1>

    <!--飙升榜-->
    <div class="list-item">
      <img v-lazy="cloudMusicRankList.coverImgUrl"/>
      <router-link to="" tag="ol">
          <li v-for="item in dealTopList(cloudMusicRankList.tracks)">
            {{item.name}} - {{item.artists[0].name}}
          </li>
      </router-link>
    </div>

    <!--新歌榜-->
    <div class="list-item">
      <img v-lazy="cloudMusicNewList.coverImgUrl"/>
      <router-link to="" tag="ol">
        <li v-for="item in dealTopList(cloudMusicNewList.tracks)">
          {{item.name}} - {{item.artists[0].name}}
        </li>
      </router-link>
    </div>

    <!--原创榜-->
    <div class="list-item">
      <img v-lazy="cloudMusicOriginList.coverImgUrl"/>
      <router-link to="" tag="ol">
        <li v-for="item in dealTopList(cloudMusicOriginList.tracks)">
          {{item.name}} - {{item.artists[0].name}}
        </li>
      </router-link>
    </div>

    <!--热歌榜-->
    <div class="list-item">
      <img v-lazy="cloudMusicHotList.coverImgUrl"/>
      <router-link to="" tag="ol">
        <li v-for="item in dealTopList(cloudMusicHotList.tracks)">
          {{item.name}} - {{item.artists[0].name}}
        </li>
      </router-link>
    </div>

    <!--ktv榜-->
    <div class="list-item">
      <img v-lazy="cloudMusicKTVList.coverImgUrl"/>
      <router-link to="" tag="ol">
        <li v-for="item in dealTopList(cloudMusicKTVList.tracks)">
          {{item.name}} - {{item.artists[0].name}}
        </li>
      </router-link>
    </div>

    <!--电音榜-->
    <div class="list-item">
      <img v-lazy="cloudMusicEleList.coverImgUrl"/>
      <router-link to="" tag="ol">
        <li v-for="item in dealTopList(cloudMusicEleList.tracks)">
          {{item.name}} - {{item.artists[0].name}}
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



<style>

</style>
