import Vue from 'vue'
import Router from 'vue-router'
import personalRecom from '../page/personalRecom/presonalRecom.vue'
Vue.use(Router)

const recommend = r => require.ensure([], () => r(require('../page/personalRecom/presonalRecom.vue')), ' recommend')

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/recommend'
    },
    {
      path:'/recommend',
      name:'personalRecom',
      component:personalRecom,
    }
    // {
    //   path:'/radioStation',
    //   name:'radioStation',
    //   component:radioStation,
    // },
    // {
    //   path:'/rankList',
    //   name:'rankList',
    //   component:rankList
    // },
    // {
    //   path:'/songDetails',
    //   name:'songDetails',
    //   component:songDetails
    // },
  ]
})
