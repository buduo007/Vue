// 压缩js文件
const uglifyjsWebpackPlugin = require("uglifyjs-webpack-plugin");
const webpackMerge = require("webpack-merge");
const baseConfig = require("./base.config");

module.exports = webpackMerge(baseConfig, {
  // 配置插件
  plugins: [
    // 配置压缩文件的插件
    new uglifyjsWebpackPlugin(),
  ],
});
