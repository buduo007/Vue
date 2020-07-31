const webpackMerge = require("webpack-merge");
const baseConfig = require("./base.config");

module.exports = webpackMerge(baseConfig, {
  // 配置本地服务器
  devServer: {
    contentBase: "./dist",
    // 是否时时监听
    inline: true,
  },
});
