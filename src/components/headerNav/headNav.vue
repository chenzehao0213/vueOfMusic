<template>
	<div class="headerNavWrapper">
		<div class="headerNav">
			<!-- 搜索栏目 -->
			<div class="searchFrame">
				<!-- 麦的icon -->
				<i></i>
				<!-- 搜索框 -->
				<div class="searchBox">
				<label for><span>搜索音乐，歌词，电台</span></label>
				<input type="text"  id="searchBox" @click="goSearchSong">
				</div>
				<!-- 播放页和当前页icon切换 -->
				<i @click="goSongDetails"></i>
			</div>
			<!-- 选项框 -->
			<tab>
				<tab-item @on-item-click="skipPage">个性推荐</tab-item>
				<tab-item @on-item-click="skipPage">歌单</tab-item>
        <tab-item @on-item-click="skipPage">主播电台</tab-item>
				<tab-item @on-item-click="skipPage">排行榜</tab-item>
			</tab>
		</div>
	</div>
</template>
<script type="text/javascript">
	import {Tab,TabItem} from 'vux';
	export default {
		name:"headerNav",
    components:{Tab,TabItem},
    data()
    {
      return {};
    },
    props:['tabIndex'],
    methods: {
		  //跳转到播放界面
      goSongDetail()
      {
        if(this.curMusic != "")
        {
          this.$router.push({
            name:'songDetails',
            params:{id:this.curMusic}
          })
        }
      },

      //启动搜索框
      goSearchSong()
      {
        this.$router.push({
          name:'searchList'
        })
      },

      //页面跳转
      skipPage(index)
      {
        if(index ==0)
        {
          this.$router.push({name:'personalRecom'});
        }
        else if(index==1)
        {
          this.$router.push({name:'songList'});
        }
        else if(index == 2)
        {
          this.$router.push({name:'radioStation'});
        }
        else {
          this.$router.push({name:'rankList'});
        }





      }
    },
    computed:{
		  curMusic(){
		    return this.$store.state.playSongs.curMusic;
      }
    },


	}

</script>

<style type="text/css">

</style>
