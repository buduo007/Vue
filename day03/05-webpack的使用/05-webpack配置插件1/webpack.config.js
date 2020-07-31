const path = require("path");
const webpack = require('webpack')

module.exports = {
  // 入口
  entry: "./src/main.js",
  // 出口 需要动态获取绝对路径
  output: {
    // path.resolve 用来拼接路径
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    publicPath: "dist/",
  },
  // 配置css-loader(只负责)
  module: {
    rules: [
      {
        test: /\.css$/,
        // css-loader只负责将css文件进行加载
        // style-loader负责将样式添加到DOM中
        // 使用多个loader时, 是从右到左
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.less$/,
        use: [
          {
            loader: "style-loader", // creates style nodes from JS strings
          },
          {
            loader: "css-loader", // translates CSS into CommonJS
          },
          {
            loader: "less-loader", // compiles Less to CSS
          },
        ],
      },
      {
        test: /\.(png|jpg|gif|jpeg)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              // 当加载的图片, 小于limit时, 会将图片编译成base64字符串形式
              // 当加载的图片, 大于limit时, 需要使用file-loader模块进行加载
              limit: 8192,
              name: "img/[name].[hash:8].[ext]",
            },
          },
        ],
      },
      {
        test: /\.js$/,
        // exclude排除
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["es2015"],
          },
        },
      },
      {
        // 配置vue文件
        test: /\.vue$/,
        use: ["vue-loader"],
      },
    ],
  },
  resolve: {
    // 省略后缀名
    extensions: ['.js', '.css', '.vue'],
    // alias: 别名
    alias: {
      vue: "vue/dist/vue.esm.js",
    },
  },
  // 插件配置
  plugins: [
    // 配置版权
    new webpack.BannerPlugin('最终版权归buduo所有'),
  ]
};
