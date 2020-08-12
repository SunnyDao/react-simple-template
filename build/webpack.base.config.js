'use strict'
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const utils = require('./utils')
const config = require('../config')

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

module.exports = {
  entry: {
    app: [
      'babel-polyfill',
      './src/main.js'
    ]
  },
  output: {
    path: path.resolve('dist'),
    filename: "[name].[hash:8].js",
    publicPath: '/',
    libraryTarget: 'umd',
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
        test: /\.jsx?$/,
        exclude: /node_modules/,  // 不编译某个目录下的文件
        include: resolve('src'),  // 只在include包含的目录下进行loader编译
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          // 不写fallback，file size 大于limit时，会自动调用file-loader，但是使用的是默认的[hash].[ext]无法指定路径名和文件名
          // 显示声明 fallback之后，就可以将name传至file-loader。
          // 因为使用了CopyWebpackPlugin，防止诸如[name][hash].[ext]和[name].[ext]文件同时存在
          // 特将文件名指定为[name].[ext]
          name: utils.assetsPath('img/[name].[hash:7].[ext]'),
          limit: 10000,
        }
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('media/[name].[hash:7].[ext]'),
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('fonts/[name].[hash:7].[ext]'),
        }
      }
    ]
  },
}