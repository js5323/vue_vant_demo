module.exports = {
  lintOnSave: false,
  // assetsDir: 'static',
  productionSourceMap: false,
  pages: {
    index: {
      entry: 'src/pages/index/main.js',
      filename: 'index.html'
    }
  },
  chainWebpack: config => {
    // remove the Preload plugin
    config.plugins.delete('preload')
  },
  configureWebpack: {
    optimization: {
      runtimeChunk: 'single'
    }
  }
  // configureWebpack: {
  // optimization: {
  //   splitChunks: {
  //     chunks: 'all',
  //     cacheGroups: {
  //       libs: {
  //         name: 'vendors',
  //         test: /[\\/]node_modules[\\/]/,
  //         priority: 10,
  //         chunks: 'initial' // 只打包初始时依赖的第三方
  //       },
  //       // ui: {
  //       //   name: 'chunk-ui', // 单独将 ui 拆包
  //       //   priority: 20, // 权重要大于 libs 和 app 不然会被打包进 libs 或者 app
  //       //   test: /[\\/]node_modules[\\/]vant[\\/]/
  //       // },
  //       // commons: {
  //       //   name: 'chunk-commons',
  //       //   test: resolve('src/components'), // 可自定义拓展你的规则
  //       //   minChunks: 3, // 最小公用次数
  //       //   priority: 5,
  //       //   reuseExistingChunk: true
  //       // }
  //     }
  //   },
  //   runtimeChunk: 'single',
  // }
  // }
}
