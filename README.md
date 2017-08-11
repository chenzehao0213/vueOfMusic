##在腾讯IMWeb社区看到一个网易云音乐，觉得这个项目不错，刚好最近也在学习vue，于是就拿这个项目来练习
##模仿网易云音乐，做一个简易版的网易云音乐webapp
##功能包括：
  |—— 主页面
     |—— 个性推荐
     |—— 歌单
     |—— 排行榜
  |—— 搜索界面
  |—— 歌单的详细曲目
  |—— 播放界面
     |—— 播放歌曲的目录
##本人是vue新手，如果你也是跟我一样是vue的入门新手，该项目可能适合参数，对大侠来说就见笑了／／／

##文档结构模仿源码的结构，有一定程度上的修改
## 文件结构 (File structure)


```
├── build                       构建服务和webpack配置
├── config                      项目不同环境的配置
├── dist                        项目build目录
|—— node_modules                项目依赖的模块
├── index.html                  项目入口文件
├── package.json                项目配置文件
├── static       	            静态资源
|—— test                        测试工具
├── src                         生产目录
    |—— api                     api列表和数据处理
    |——|—— apiList.js           api列表
    |——|—— getData.js           数据处理(封装一个axios请求)    
    |—— assets                  静态资源(img,less)
    |——|—— img                  静态图片
    |——|—— style                样式文件  
    |—— components              公用组件
    |——|—— bottomSongList       播放器播放列表组件  
    |——|—— headerNav            头部导航组件
    |——|—— music                音乐组件
    |——|—— playStrip.           播放界面的进度条和底部的工具栏
    |—— page                    页面组件
    |——|—— personalRecom        个性推荐组件
    |——|—— search               搜索列表组件
    |——|—— songList             个性推荐歌单
    |——|—— songDetails          歌曲详情组件
    |——|—— songListDetails      歌单详情组件
    |——|—— rankList             排行榜组件
    |—— router                  路由组件
    |—— store                   数据状态管理组件
    |—— util                    公用方法
```