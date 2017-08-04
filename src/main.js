// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './router'
import App from './App'
import store from './store'
import VueLazyload from 'vue-lazyload'

Vue.config.productionTip = false

Vue.use(VueLazyload)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<app></app>',
  components: { App }
})
