
<template>
  <div id="app">
    <music></music>
    <router-view></router-view>
  </div>
</template>

<script>
  import music from './components/music/music'
  import recommend from './page/personalRecom/presonalRecom.vue'
  export default {
    name: 'app',
    components: {
      music,
      recommend,
    }

  }
</script>

<style lang="less">
  @import "./assets/style/common";
</style>
