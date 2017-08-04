import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

const recommend = r => require.ensure([], () => r(require('../page/personalRecom/presonalRecom.vue')), ' recommend')
const rankList =r => require.ensure([],() =>r(require('../page/rankList/rankList.vue')),'rankList')
const songList =r =>require.ensure([], ()=>r(require('../page/songList/songList.vue')),'songList')

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
    // {
    //   path:'/radioStation',
    //   name:'radioStation',
    //   component:radioStation,
    // },
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
  ]
})
