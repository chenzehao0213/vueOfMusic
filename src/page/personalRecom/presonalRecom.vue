<!--这是个性推荐页面-->

<template>
  <div class="personRecommend" id="personRecommend" @touchstart="getTouch" @touchend="touchEnd">
    <!--头部搜索框-->
    <header-nav></header-nav>

    <!--滚动框开始-->
    <swiper loop="true" auto="true" dotsPosition="center" aspectRatio="300/800">
      <swiper-item v-for="(item,i) in bannerList" :key="i">
        <img width="100%" height="100%" v-lazy="item.pic">
      </swiper-item>
    </swiper>
    <!--滚动框结束-->

    <div class="recomlist">
      <h>
        <b>推荐歌单</b>
        <i class="icon-font icon-right"></i>
      </h>
      <router-link to="{name:'songListDetails' , params:{id:item.id}" v-for="(item,i) in recommendList" :key="i" tag="li">
        <i class="icon-font icon-headset">{}</i>>
        <img v-lazy="item.picUrl">
        <p>{{item.name}}</p>
      </router-link>
    </div>

    <!--独家放送开始-->
    <div class="privateContext">
      <h>
        <b>独家放送</b>
        <i class="icon-font icon-right"></i>
      </h>
      <ul>
        <li v-for="item in privateContext" :key="i">
          <img v-lazy="item.pic">
          <p>{{item.name}}</p>
        </li>
      </ul>

    </div>
    <!--独家放送结束-->


    <!--推荐mv开始-->
    <div class="recommendMV">
      <h>
        <b>推荐MV</b>
        <i class="icon-font icon-right"></i>
      </h>
      <ul>
        <li v-for="item in recommendMV" tag="li" >
          <i class="iconfont icon-playMv">{{format.formatPlayCount(item.playCount)}}</i>
          <img v-lazy="item.pic">
          <p>{{}}</p>
        </li>
      </ul>
    </div>
    <!--推荐mv结束-->


    <!--主播电台开始-->
    <div class="radiostation">
      <h>
        <b>主播电台</b>
        <i class="icon-font icon-right"></i>
      </h>
      <ul>
        <li v-for="item in radioStations">
          <i class="icon-font icon-play"></i>
          <img v-lazy="item.pic">
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
  import {Swiper, SwiperItem} from 'vux'
  import mapState from 'vuex'

  export default {
    name: 'perosonrecom',
    components:{
      headerNav,
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



<style>

</style>
