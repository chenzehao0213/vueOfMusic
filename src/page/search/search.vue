<template>
  <div id="search">
    <!--搜索头部-->
    <div class="searchHead">
      <!-- 麦的icon -->
      <i class="iconfont icon-micro"></i>
      <!-- 搜索框 -->
      <div class="searchBox">
        <input  @blur="goSearch" v-model="searchVal"  playsplaceholder="搜索音乐，歌词，电台">
      </div>
      <!-- 播放页和当前页icon切换-->
      <router-link to="recommend" class="cancel">取消</router-link>
    </div>

    <!--选项栏-->
    <tab>
      <tab-item :selected="searchType==1" @on-item-click="switchType">单曲</tab-item>
      <tab-item :selected="searchType==100" @on-item-click="switchType">歌手</tab-item>
      <tab-item :selected="searchType==10" @on-item-click="switchType">专辑</tab-item>
      <tab-item :selected="searchType==1000" @on-item-click="switchType">歌单</tab-item>
      <tab-item :selected="searchType==1002" @on-item-click="switchType">用户</tab-item>
    </tab>

    <!--初始化的界面-->
    <div class="content" v-if="searchVal==''">
      <h1>热门搜索</h1>
      <ul>
        <li v-for="(item,i) in songSugguestsList" :key="i" @click="chooseHotSearch(item)">{{item}}</li>
      </ul>
    </div>

    <!--单曲-->
    <div v-if="searchVal!='' && searchType ==1" class="single-song">
      <ul>
        <router-link to="" v-for="(item,i) in searchList.songs" tag="li">
          <p>{{item.name}}</p>
          <span>{{item.artists[0].name}} - {{item.album.name}}</span>
        </router-link>
      </ul>
    </div>

    <!--歌手-->
    <div v-if="searchVal!='' && searchType ==100" class="singer">
      <ul>
        <router-link to="" v-for="(item,i) in searchList.artists" tag="li">
          <img v-lazy="item.picUrl">
          <div class="halfBorder">{{item.name}}</div>
        </router-link>
      </ul>
    </div>

    <!--专辑-->
    <div v-if="searchVal!='' && searchType ==10" class="album" >
      <ul>
        <router-link to="" v-for="(item,i) in searchList.albums" tag="li">
          <img v-lazy="item.picUrl">
          <div class="common-style">
            <p>{{item.name}}</p>
            <span>{{item.artists[0].name}}</span>
          </div>
        </router-link>
      </ul>
    </div>

    <!--歌单-->
    <div v-if="searchVal!='' && searchType ==1000" class="song-list" >
      <ul>
        <router-link v-for="(item,i) in searchList.playlists" to="" tag="li" :key="i">
          <img v-lazy="item.coverImgUrl">
          <div class="common-style">
            <p>{{item.name}}</p>
            <span>{{item.trackCount}}首音乐 by {{item.creator.nickname}}, 播放{{item.playCount}}次</span>
          </div>
        </router-link>
      </ul>
    </div>

    <!--用户-->
    <div v-if="searchVal!='' && searchType ==1002" class="user-list" >
      <ul>
        <li v-for="(item,i) in searchList.userprofiles" :key="i">
          <img v-lazy="item.backgroundUrl">
          <div class="common-style">
            <p>{{item.nickname}}</p>
            <span>{{item.signature}}</span>
          </div>
        </li>
      </ul>
    </div>

  </div>
</template>


<script>
  import {mapState} from 'vuex'
  import {Tab,TabItem} from 'vux/src/components/tab';
  export default {
    name:'search',
    components:{
      Tab,
      TabItem
    },
    computed:{
      ...mapState({
        searchList: state => state.searchList
      })
    },
    data()
    {
      return {
        songSugguestsList:['My Lover', '童话镇', '谁明浪子心', '陈奕迅', '不浪漫罪名', '小幸运', '讲不出再见', '相依为命'],
        label:true,
        searchVal:"",
        searchType:1,
      }
    },
    methods:{
      //切换搜索类型
      switchType(index)
      {
        switch (index){
          case 0:
            this.searchType =1;
            break;
          case 1:
            this.searchType = 100;
            break;
          case 2:
            this.searchType =10;
            break;
          case 3:
            this.searchType =1000;
            break;
          case 4:
            this.searchType =1002;
            break;
        }
      },

      //开始搜索
      goSearch()
      {
        if(this.searchVal != "")
        {
          console.log(this.searchVal + "  " +this.searchType);
          let parms ={keywords: this.searchVal, type: this.searchType};
          this.$store.dispatch('get_searchList',parms);
        }
        else if(this.searchVal =="" || this.searchVal == " ")
        {
          this.$store.commit('set_searchList',[]);
        }
      }
    },
    watch:{
      searchVal()
      {
        if(this.searchVal != "")
        {
          this.goSearch();
        }
      },
      searchType()
      {
        this.goSearch();
      }
    }

  }
</script>


<style lang="less">
  @import "../../assets/style/mixin.less";
  #search{
    .mx_wh(100%,100%);
    position: relative;
    .searchHead{
      .backgroundRed;
      position: relative;
      .mx_whlh(100%,.48rem,.48rem);
      .mx_flex_mid;
      .icon-micro{
        .mx_fsc(.22rem,#fff);
        .mx_postl(0,5%);
      }
      .searchBox{
        display: inline-block;
        position: relative;
        .mx_flex_mid;
        .mx_wh(70%,70%);
        .mx_bdrs(.3rem);
        background: #fff;
        input{
          .mx_wh(100%,100%);
          .mx_bdrs(.2rem);
          text-indent: 5%;
        }
      }
      .cancel{
        .mx_fsc(.12rem,#fff);
        .mx_postl(0,90%);
      }
    }

    .content{
      position: relative;
      .mx_fsc(.12rem,#000);
      ul{
        .mx_wh(90%,auto);
        .mx_flex;
        .mx_flex_content;
        margin-left:5%;
        li{
          .mx_flex_item(0 0 20%);
          .mx_flex_mid;
          margin-top:.1rem;
          border:1px solid #d3d3d3;
          text-align: center;
          .mx_bdrs(.2rem);
        }
      }
    }
    .single-song{
      .mx_wh(100%,auto);
      ul{
        li{
          .mx_fsc(.15rem,#000);
          .mx_whlh(95%,.5rem,.5rem);
          margin-left:5%;
          p,span{
            .mx_whlh(100%,50%,.25rem);
            .mx_single_ellipsis;
            text-indent: 2%;
          }
          p{
            .mx_fsc(.14rem,#333);
          }
          span{
            display: block;
            .mx_fsc(.14rem,#666);
            border-bottom: 1px solid #666;
          }
        }

      }
    }
    .singer,
    .album,
    .song-list,
    .user-list {
      .mx_wh(100%,auto);
      li{
        .mx_whlh(100%,.5rem,.5rem);
        .mx_flex;
        img{
          .mx_flex_item(1 0 15%);
          display: inline-block;
          padding-left: .02rem;
          padding-bottom: .02rem;
        }
        div{
          .mx_flex_item(1 0 85%);
          text-align: left;
          .mx_fsc(.15rem,#333);
          padding-left:.02rem;
          border-bottom: 1px solid #d3d3d3;
          .mx_single_ellipsis;
        }
      }
    }

    .common-style{
      p{
        position: relative;
        .mx_whlh(100%,.3rem,.3rem);
        .mx_fsc(.15rem,#000);
      }
      span{
        display: block;
        .mx_whlh(100%,.2rem,.2rem);
        .mx_fsc(.1rem,#dcdcdc);
      }
    }
  }

</style>
