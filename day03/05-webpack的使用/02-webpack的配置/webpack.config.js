const path = require('path')

module.exports = {
  // 入口
  entry: './src/main.js',
  // 出口 需要动态获取绝对路径
  output: {
    // path.resolve 用来拼接路径
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  }
}