<!--这是个性推荐页面-->

<template>
  <div  id="personRecommend" @touchstart="getTouch" @touchend="touchEnd" >
    <!--头部搜索框-->
    <header-nav index="0"></header-nav>

    <!--滚动框开始-->
      <swiper loop auto dots-position="center" :aspect-ratio="300/800" >
        <swiper-item v-for="(item,i) in bannerList" :key="i">
          <img width="100%" height="100%" v-lazy="item.pic">
        </swiper-item>
      </swiper>
    <!--滚动框结束-->

    <div class="recomlist">
      <h1 class="list-item">
        <b></b>推荐歌单
        <i class="iconfont icon-you"></i>
      </h1>
      <ul>
        <router-link :to="{name:'songListDetails',params:{id:item.id}}"  v-for="(item,i) in recommendList" :key="i" tag="li">
          <i class="iconfont icon-erji">{{item.playCount}}</i>
          <img v-lazy="item.picUrl">
          <p>{{item.name}}</p>
        </router-link>
      </ul>
    </div>

    <!--独家放送开始-->
    <div class="privateContext">
      <h1 class="list-item">
        <b></b>独家放送
        <i class="iconfont icon-you"></i>
      </h1>
      <ul>
        <li v-for="(item,i) in privateContext" :key="i">
          <img v-lazy="item.sPicUrl">
          <p>{{item.name}}</p>
        </li>
      </ul>

    </div>
    <!--独家放送结束-->


    <!--推荐mv开始-->
    <div class="recommendMV">
      <h1 class="list-item">
        <b></b>推荐MV
        <i class="iconfont icon-you"></i>
      </h1>
      <ul>
        <li v-for="item in recommendMV" tag="li" >
          <i class="iconfont icon-playMv">{{item.playCount}}</i>
          <img v-lazy="item.picUrl">
          <p id="artists">{{item.name}}</p>
          <p id="artistName">{{item.artistName}}</p>
        </li>
      </ul>
    </div>
    <!--推荐mv结束-->


    <!--主播电台开始-->
    <div class="radiostation">
      <h1 class="list-item">
        <b></b>主播电台
        <i class="iconfont icon-you"></i>
      </h1>
      <ul>
        <li v-for="item in radioStations">
          <i class="iconfont icon-play"></i>
          <img v-lazy="item.picUrl">
          <p>{{item.name}}</p>
          <span>{{item.program.radio.name}}</span>
        </li>
      </ul>
    </div>
    <!--主播电台结束-->
  </div>
</template>



<script>
  import headerNav from '../../components/headerNav/headNav.vue'
  import swiper from 'vux/src/components/swiper/swiper.vue'
  import swiperItem from 'vux/src/components/swiper/swiper-item.vue'
  import {mapState} from 'vuex'


  export default {
    name: 'recommend',
    components:{
      headerNav,
      swiper,
      swiperItem
    },
    data()
    {
      return {};
    },
    created()
    {
      this.$store.dispatch('initRecommendPage');
    },
    computed:{
      ...mapState({
        //获取滚动图集
        bannerList: state => state.recommend.bannerList,
        //获取推荐的歌单
        recommendList: state => state.recommend.recommendList,
        //获取独家放送
        privateContext: state => state.recommend.privateContext,
        //获取推荐mv
        recommendMV: state => state.recommend.recommendMV,
        //获取主播电台
        radioStations: state => state.recommend.radioStations
      })
    },
    methods:{
      getTouch(event)
      {
        let ev = evnet || window.event;
        let startNum = ev.touches[0].pageX;
        this.originNum = startNum;
      },
      touchEnd(event)
      {
        let ev = event || window.event;
        let endNum = ev.touches[0].pageX;
        let offset = endNum - this.originNum;
        if(offset>80)
        {
          this.$router.push({
            name:'songList'
          })
        }

      }

    }
  }
</script>



<style lang="less">
  @import "../../assets/style/mixin.less";
  #personRecommend {
    .list-item {
      position: relative;
      .mx_fsc(.2rem,#333);
      .mx_whlh(100%,.45rem,.45rem);
      font-weight:normal;
      b{
        .mx_hlh(.15rem,.45rem);
        .mx_bd(.01rem,#f33);
        margin-right: .05rem;
      }
      .icon-you{
        .mx_fsc(.15rem,#000);
      }
    }
    ul{
      .mx_flex;
      .mx_flex_content;
      li{
        position: relative;
        overflow: hidden;
        img{
          display: block;
          width: 100%;
        }
        p{
          .mx_hlh(.3rem,.15rem);
          //padding:.01rem  0;
          .mx_fsc(.12rem,#666);
          .mx_more_ellipsis;
        }
      }
    }
    //推荐歌单
    .recomlist,.radiostation{
      font-size: 0;
      li{
        .mx_flex_item(0 0 33%);
        p{
          .mx_more_ellipsis;
        }
      }
    }

    .recomlist{
      li{
        .icon-erji{
          .mx_postr(.03rem,.1rem);
          .mx_fsc(.12rem,#fff);
        }
      }
    }

    //独家放送
    .privateContext{
      li{
        .mx_flex_item(0 0 49.5%);
        p{
          .mx_more_ellipsis;
        }
      }
      li:nth-child(3)
      {
        .mx_flex_item(0 0 100%);
      }
    }

    //推荐mv
    .recommendMV{
      li{
        .mx_flex_item(0 0 49.5%);
        p{
          .mx_single_ellipsis;
          .mx_fsc(.12rem,#333);
          .mx_hlh(.2rem,.2rem);
        }
        i{
          .mx_postr(.03rem,.05rem);
          .mx_fsc(.12rem,#fff);
        }
      }

    }



  }
</style>
