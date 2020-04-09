module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        // vue-cli3.0 起别名后 HTML中引入的文件不生效，就在前面添加~
        assets: '@/assets',
        components: '@/components',
        network: '@/network',
        views: '@/views',
        common: '@/common'
      }
    }
  },
  lintOnSave: false, // 生产环境是否生成 SourceMap
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          require('postcss-pxtorem')({
            rootValue: 16, // 换算的基数
            selectorBlackList: [], // 忽略转换正则匹配项，指定不需要转换的类
            propList: ['*'], // proplist就是那些属性需要转换成rem，这里*是全部的意思
            minPixelValue: 2 // 最小转换单位，这是最小转换单位是2px的意思
          })
        ]
      }
    }
  }
}
