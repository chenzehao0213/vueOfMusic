<template>
	<div class="headerNavWrapper">
		<div class="headerNav">
			<!-- 搜索栏目 -->
			<div class="searchFrame">
				<!-- 麦的icon -->
        <i class="iconfont icon-micro"></i>
				<!-- 搜索框 -->
				<div class="searchBox">
				<label for="searchBox"><span>搜索音乐，歌词，电台</span></label>
				<input type="text"  id="searchBox" @click="goSearchList">
				</div>
				<!-- 播放页和当前页icon切换-->
        <i  @click="goSongDetails" class="iconfont icon-yinle"></i>
			</div>
			<!-- 选项框 -->
			<tab class="tabNaver" active-color="#ff3333" animate>
				<tab-item @on-item-click="skipPage" :selected="index==0">个性推荐</tab-item>
				<tab-item @on-item-click="skipPage" :selected="index==1">歌单</tab-item>
				<tab-item @on-item-click="skipPage" :selected="index==2">排行榜</tab-item>
			</tab>
		</div>
	</div>
</template>
<script type="text/javascript">
	import {Tab,TabItem} from 'vux/src/components/tab';
	export default {
		name:"headerNav",
    components:{Tab,TabItem},
    data()
    {
      return {};
    },
    props:['index'],
    methods: {
		  //跳转到播放界面
      goSongDetails()
      {
        if(this.curMusic != "")
        {
          this.$router.push({
            name:'songDetail',
            params:{id:this.curMusic}
          })
        }
      },

      //启动搜索框
      goSearchList()
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
          this.$router.push({name:'recommend'});
        }
        else if(index==1)
        {
          this.$router.push({name:'songList'});
        }
        else if(index == 2)
        {
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

<style lang="less">
  @import "../../assets/style/mixin";
  .headerNavWrapper{
    height: 0.88rem;
  }

  .headerNav{
    font-size: .12rem;
    position: fixed;
    top:0;
    left:0;
    z-index: 999;
    .mx_wh(100%,0.88rem);
    .searchFrame{
      position: relative;
      .mx_whlh(100%,.48rem,.48rem);
      .backgroundRed;
      text-align: center;
      .icon-micro{
        .mx_fsc(.22rem,#fff);
        .mx_postl(0,5%);
      }
      .icon-yinle{
        .mx_fsc(.22rem,#fff);
        .mx_postl(.03rem,90%);
      }
      .cancelSearch {
        .mx_fsc(.14rem, #fff);
        .mx_postl(0, 90%);
      }
      .searchBox{
        position: relative;
        display: inline-block;
        width: 70%;
        label{
          color: #dedede;
          .mx_hlh(.32rem, .34rem);
          .mx_fsc(.14rem, #dedede);
          .mx_postl(.08rem, 22%);
          span{
            font-size: .13rem;
          }
        }
        label:before{
          margin-right: .05rem;
        }
        input{
          .mx_whlh(100%,.32rem,.24rem);
          .mx_fsc(.12rem, #666);
          .mx_bdrs(.2rem);
          text-indent: 5%;
        }
      }
    }
    .tabNaver {
      .mx_flex;
      .mx_whlh(100%,.4rem,.4rem);
      background-color: #fff;
      .vux-tab-item {
        .mx_fsc(.14rem, #666);
        .mx_hlh(.4rem, .4rem);
      }
    }

  }
</style>
