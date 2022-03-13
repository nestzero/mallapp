module.exports = {
  pub
  configureWebpack: {
    resolve: {
      alias: {
        "assets": '@/assets',
        "common": '@/common',
        "components": '@/components',
        "filters": '@/filters',
        "views": '@/views',
        "network": '@/network',
        "api": '@/api',
        "effects": '@/effects',

      }
    }
  }
}