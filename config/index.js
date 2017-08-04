// see http://vuejs-templates.github.io/webpack for documentation.
var path = require('path')

module.exports = {
  build: {
    env: require('./prod.env'),
    index: path.resolve(__dirname, '../dist/index.html'),
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    productionSourceMap: true,
    productionGzip: false,
    productionGzipExtensions: ['js', 'css'],
    bundleAnalyzerReport: process.env.npm_config_report
  },
  dev: {
    env: require('./dev.env'),
    port: 8099,
    autoOpenBrowser: true,
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    proxyTable: {
      //滑动栏
      '/banner': {
        target: 'http://127.0.0.1:3000',
        changeOrigin: true,
        pathRewrite: {
          '^/banner': '/banner'
        }
      },
      //个性推荐歌单
      '/personalized': {
        target: 'http://127.0.0.1:3000',
        changeOrigin: true,
        pathRewrite: {
          '^/personalized': '/personalized'
        }
      },

      //独家放送
      '/personalized/privatecontent':
        {
          target: 'http://127.0.0.1:3000',
          changeOrigin :true,
          pathRewrite :{
            '^/personalized/privatecontent': '/personalized/privatecontent'
          }
        },

      //推荐mv
      '/personalized/mv': {
        target: 'http://127.0.0.1:3000',
        changeOrigin: true,
        pathRewrite: {
          '^/personalized/mv': '/personalized/mv'
        }
      },

      //主播电台
      '/personalized/djprogram': {
        target: 'http://127.0.0.1:3000',
        changeOrigin: true,
        pathRewrite: {
          '^/personalized/djprogram': '/personalized/djprogram'
        }
      },

      //排行榜
      '/top/list': {
        target: 'http://127.0.0.1:3000',
        changeOrigin: true,
        pathRewrite: {
          '^/top/list': '/top/list'
        }
      },

      //精品歌单
      '/top/playlist/highquality': {
        target: 'http://127.0.0.1:3000',
        changeOrigin: true,
        pathRewrite: {
          '^/top/playlist/highquality': '/top/playlist/highquality'
        }
      },
    },
    cssSourceMap: false
  }
}

