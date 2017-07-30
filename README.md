##模仿腾讯imweb社区一个vue实例http://www.imweb.io/topic/594a1fd004a49a4e596bcaf2
##入门练习




##文档结构模仿源码的结构
## 文件结构 (File structure)


```
├── build                       构建服务和webpack配置
├── config                      项目不同环境的配置
├── dist                        项目build目录
├── index.html                  项目入口文件
├── package.json                项目配置文件
├── static       	            静态资源
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
    |—— page                    页面组件
    |——|—— albumsListDetails    专辑内容组件 
    |——|—— recommend            个性推荐组件
    |——|—— searchList           搜索列表组件
    |——|—— singer               歌手组件
    |——|—— songDetails          歌曲详情组件
    |——|——|—— player            播放器组件
    |——|—— songList             歌单组件
    |——|—— songListDetails      歌单详情组件
    |——|—— topList              排行榜组件
    |—— router                  路由组件
    |—— store                   数据状态管理组件
    |—— util                    公用方法
```