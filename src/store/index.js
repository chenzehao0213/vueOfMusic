import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import actions from './actions'
import getters from './getters'
import mutations from './mutations'
import recommend from './modules/recommend'
import playSongs from './modules/playSongs'

Vue.use(Vuex)
export default new Vuex.store({
  state,
  getters,
  actions,
  mutations,
   modules:{
    recommend,
     playSongs,
   }
})

