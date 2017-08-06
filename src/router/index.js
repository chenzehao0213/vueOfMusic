import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

const recommend = r => require.ensure([], () => r(require('../page/personalRecom/presonalRecom.vue')), ' recommend')
const rankList =r => require.ensure([],() =>r(require('../page/rankList/rankList.vue')),'rankList')
const songList =r =>require.ensure([], ()=>r(require('../page/songList/songList.vue')),'songList')
const search = r => require.ensure([],() =>r(require('../page/search/search.vue')),'search')
const songListDetails = r => require.ensure([],()=> r(require('../page/songListDetails/songListDetails.vue')),'songListDetails')
const songDetail = r => require.ensure([],() => r(require('../page/songDetail/songDetail.vue')),'songDetail')

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/recommend'
    },
    {
      path:'/recommend',
      name:'recommend',
      component:recommend,
    },
    {
      path:'/search',
      name:'searchList',
      component:search,
    },
    {
      path:'/rankList',
      name:'rankList',
      component:rankList
    },
    {
      path:'/songList',
      name:'songList',
      component:songList
    },
    {
      path:'/songListDetails',
      name: 'songListDetails',
      component:songListDetails
    },
    {
      path:'/songDetail',
      name:'songDetail',
      component:songDetail
    }
  ]
})
