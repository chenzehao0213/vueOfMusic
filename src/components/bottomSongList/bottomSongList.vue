//播放详情页中的——歌单列表
<template>
  <div v-if="songListStatus==true">
    //列表头部标题
    <div>
      歌单列表
    </div>

    //将要播放的歌曲列表
    <div>
      <ul>
        <li v-for="(item,i) in songDetailList" @click="switchSong">
          <i class="songIcon"></i>
          {{item.name}}
          <s>songSinger</s>
        </li>
      </ul>
    </div>

    //底部的关闭按钮
    <div @click="closeSongList" class="closeButton">
      关闭
    </div>
  </div>
</template>




<script>
export default {
  data()
  {
    return{}
  },
  name:'bottomSongList',
  computed:{

  }

}
</script>






<style>

</style>
