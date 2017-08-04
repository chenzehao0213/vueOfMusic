import getData from '../../../api/getMusicData'
export default {

  //初始化个人推荐页面，接口都包含在这里
  async  initRecommendPage(context) {
    context.dispatch('get_recommend_Banner');
    context.dispatch('get_recommend_RecommendList');
    context.dispatch('get_recommend_recommendMV');
    context.dispatch('get_recommend_privateContext');
    context.dispatch('get_recommend_radioStations');
  },


  //获取banner
  async  get_recommend_Banner(context)
  {
    let res = await getData('queryBanner');
    context.commit('set_recommend_Banner',res.data.banners);
  },

  //获取推荐歌单
  async get_recommend_RecommendList(context)
  {
    let res = await getData('queryPrSongList');
    context.commit('set_recommend_recommendList',res.data.result);
  },

  //获取独家放送
  async get_recommend_privateContext(context)
  {
    let res=await getData('queryPrivateContxt');
    context.commit('set_recommend_privateContext',res.data.result);
  },
  //获取推荐mv
  async get_recommend_recommendMV(context){
    let res = await  getData('queryPrMv');
    context.commit('set_recommend_recommendMV',res.data.result);
  },

  //获取主播电台
  async get_recommend_radioStations(context)
  {
    let res= await getData('queryPrBCStation');
    context.commit('set_recommend_radioStations',res.data.result);
  },


}
