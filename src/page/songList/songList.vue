<template>
  <div id="songList" @touchstart="getOrigin" @touchend="compDistance">
  <header-nav tab-index="1"></header-nav>
  <div>
    <ul>
      <router-link to="" v-for="(item,i) in songList" :key="i" tag="li">
        <i class="iconfont icon-erji">{{item.playCount}}</i>
        <img v-lazy="item.coverImgUrl">
        <p>{{item.name}}</p>
      </router-link>
    </ul>
  </div>
  </div>
</template>




<script>
  import headerNav from '../../components/headerNav/headNav.vue'
  export default {
    name:'songList',
    created()
    {
      this.$store.dispatch('get_songList');
    },
    components:{
      headerNav,
    },
    computed:{
      songList()
      {
        return this.$store.state.songList;
      }
    },
    methods:
      {
        getOrigin(event)
        {
          let ev = event || window.event;
          this.origin = ev.touches[0].pageX;
        },
        compDistance(event)
        {
          let ev = event || window.event;
          let endPot = ev.touches[0].pageX;
          let offset = this.origin - endPot;
          //向左翻页
          if(offset<-80)
          {
            this.$router.push({
              name:'recommend'
            })
          }
          //向右翻页
          else if(offset >80)
          {
            this.router.push({
              name:'rankList'
            })
          }
        }
      }
  }
</script>




<style lang="less">
  @import "../../assets/style/mixin.less";
  #songList{
    ul{
      .mx_flex;
      .mx_flex_content;
      margin: 0.5%;
      li{
        .mx_flex_item(0 0 49.5%);
        position: relative;
        overflow: hidden;
        i{
          .mx_postr(.03rem,.1rem);
          .mx_fsc(.01rem,#fff);
        }
        img{
          display: block;
          width: 100%;
        }
        p{
          margin-right: 0.02rem;
          .mx_fsc(0.1rem,#333);
        }
      }
    }
  }
</style>
