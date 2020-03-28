module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        // vue-cli3.0 起别名后 HTML中引入的文件不生效，就在前面添加~
        'assets': '@/assets',
        'components': '@/components',
        'network': '@/network',
        'views': '@/views',
        'common': '@/common'
      }
    }
  }
}
