'use strict'
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

module.exports = {
  entry: {
    app: './src/main.js'
  },
  output: {
    path: path.resolve('dist'),
    filename: "[name].[hash:8].js",
    publicPath: '/'
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
    alias: {
      '@': resolve('src'),
    }
  },
  module: {
    noParse: function(content) {
      return /jquery|lodash/.test(content);
    },
    rules: [
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 1024 * 5, // 10000
          name: utils.assetsPath('img/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,  // 不编译某个目录下的文件
        include: resolve('src'),  // 只在include包含的目录下进行loader编译
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      hash: true,
    })
  ],
  devServer: {},
  mode: 'production'
}