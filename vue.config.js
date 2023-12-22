module.exports = {
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif|webp|woff2?|eot|ttf|otf)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {},
          },
        ],
      },
    ],
  },
  chainWebpack(config) {
    const svgRule = config.module.rule('svg')
    svgRule.uses.clear()
    svgRule
      .use('url-loader')
      .loader('url-loader')
      .tap(options => {
        // 修改url-loader的配置
        // options.limit = 8192 // 8kb以下的文件使用base64编码
        return options
      })
  }
};