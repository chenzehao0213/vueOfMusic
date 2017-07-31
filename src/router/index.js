import Vue from 'vue'
import Router from 'vue-router'

const songDetails = r => require.ensure([], () => r(require('../page/songDetails/songDetails.vue')), 'songDetails')
const personalRecom = r => require.ensure([],()=>r(require('../page/personalRecom/presonalRecom.vue')),'personalRecom')
const radioStation = r => require.ensure([],()=>r(require('../page/radioStation/radioStation.vue')),'radioStation')
const rankList = r => require.ensure([],()=>r(require('../page/rankList/rankList.vue')),'rankList')
Vue.use(Router)

export default new Router({
  routes: [
    {
      //根目录
    },
    {
      path:'/personalRecom',
      name:'personalRecom',
      component:personalRecom,
    },
    {
      path:'/radioStation',
      name:'radioStation',
      component:radioStation,
    },
    {
      path:'/rankList',
      name:'rankList',
      component:rankList
    },
    {
      path:'/songDetails',
      name:'songDetails',
      component:songDetails
    },
  ]
})
