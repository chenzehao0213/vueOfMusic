<template>
  <div class="searchList">
    <!--搜索头部-->
    <div class="searchHead">
      <!-- 麦的icon -->
      <i class="iconfont icon-micro"></i>
      <!-- 搜索框 -->
      <div class="searchBox">
        <input  @blur="goSearch" v-model="searchVal"  playsplaceholder="搜索音乐，歌词，电台">
      </div>
      <!-- 播放页和当前页icon切换-->
      <router-link to="recommend" >取消</router-link>
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
    <div v-if="searchVal!='' && searchType ==1">
      <ul>
        <router-link to="" v-for="(item,i) in searchList.songs">
          <p>{{item.name}}</p>
          <span>{{item.artists[0].name}} - {{item.album.name}}</span>
        </router-link>
      </ul>
    </div>

    <!--歌手-->
    <div v-if="searchVal!='' && searchType ==100">
      <ul>
        <router-link to="" v-for="(item,i) in searchList.artists">
          <div><img v-lazy="item.picUrl"></div>
          <span class="halfBorder">{{item.name}}</span>
        </router-link>
      </ul>
    </div>

    <!--专辑-->
    <div v-if="searchVal!='' && searchType ==10">
      <ul>
        <router-link to="" v-for="(item,i) in searchList.albums">
          <p>{{item.name}}</p>
          <span>{{item.artists[0].name}}</span>
        </router-link>
      </ul>
    </div>

    <!--歌单-->
    <div v-if="searchVal!='' && searchType ==1000">
      <ul>
        <router-link v-for="(item,i) in searchList.playlists" to="" tag="li" :key="i">
          <div><img v-lazy="item.coverImgUrl"></div>
          <span>
            <p>{{item.name}}</p>
            <span>{{item.trackCount}}首音乐 by {{item.creator.nickname}}, 播放{{item.playCount}}次</span>
          </span>
        </router-link>
      </ul>
    </div>

    <!--用户-->
    <div v-if="searchVal!='' && searchType ==1002">
      <ul>
        <li v-for="(item,i) in searchList.userprofiles" :key="i">
          <div><img v-lazy="item.backgroundUrl"></div>
          <span class="halfBorder">
            <p>{{item.nickname}}</p>
            <span>{{item.signature}}</span>
          </span>
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


<style>


</style>
